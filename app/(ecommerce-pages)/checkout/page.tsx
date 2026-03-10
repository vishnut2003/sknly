'use client';

import InputElement from '@/components/ui-elements/input-element';
import CartCheckoutLayout from '@/layouts/cart-checkout-layout'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import { ChangeEvent, useEffect, useState } from 'react'
import ShippingOptionSection from './shipping-option';
import PaymentMethodSection from './payment-method';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeBundle } from '@/store/slices/cart';
import Script from 'next/script';
import { handleCatchBlock } from '@/functions/common';
import { ErrorType } from '@/types/error';
import { CreateOrderApiRequestData } from '@/app/api/ecommerce/orders/create/route';
import { usePurchaseSummary } from '@/hooks/calculate-purchase-summary';
import { IOrderSingleItem, IOrderStatus, OrdersModelInterface } from '@/models/order';
import axios from 'axios';
import { RazorpayCreateOrderApiRequestData } from '@/app/api/razorpay/create-order/route';
import { Orders } from 'razorpay/dist/types/orders';
import { RazorpayOptions, RazorpayPaymentFailedResponse } from '@/types/razorpay';
import { RazorpaySuccessApiRequestData } from '@/app/api/ecommerce/orders/razorpay-success/route';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import { GetOneUserApiRequestData } from '@/app/api/users/get-one/route';
import { UsersModelInterface } from '@/models/user';
import { GetOneAddressApiRequestData } from '@/app/api/ecommerce/address/get-one/route';
import { AddressModelInterface } from '@/models/address';
import { BackendApiAxio } from '@/config/axios';

export interface CheckoutFormDataInterface {
    name: string,
    address: {
        line1: string,
        line2: string,
        pincode: string,
        city: string,
        state: string,
    },
    phone: string,
    email: string,
}

interface FormFieldInterface {
    label: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    align?: "left" | "right",
}

const CheckoutPage = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorType>(null);

    const storeDispatch = useAppDispatch();
    const cartItem = useAppSelector(s => s.cart.items);
    const purchaseSummary = usePurchaseSummary();

    const [formData, setFormData] = useState<CheckoutFormDataInterface>({
        name: "",
        address: {
            line1: "",
            line2: "",
            city: "",
            pincode: "",
            state: "",
        },
        email: "",
        phone: "",
    });

    const formFields: FormFieldInterface[] = [
        {
            label: "Name:",
            name: "name",
            onChange: handleInputChange,
            value: formData.name,
        },
        {
            label: "Address Line 1:",
            name: "address.line1",
            onChange: handleInputChange,
            value: formData.address.line1,
        },
        {
            label: "Address Line 2:",
            name: "address.line2",
            onChange: handleInputChange,
            value: formData.address.line2,
        },
        {
            label: "Pincode:",
            name: "address.pincode",
            onChange: handleInputChange,
            value: formData.address.pincode,
            align: "left",
        },
        {
            label: "City:",
            name: "address.city",
            onChange: handleInputChange,
            value: formData.address.city,
            align: "right",
        },
        {
            label: "State",
            name: "address.state",
            onChange: handleInputChange,
            value: formData.address.state,
            align: "left",
        },
    ];

    const formFields2: FormFieldInterface[] = [
        {
            label: "Phone Number:",
            name: "phone",
            onChange: handleInputChange,
            value: formData.phone,
            align: "left",
        },
        {
            label: "Email Address:",
            name: "email",
            onChange: handleInputChange,
            value: formData.email,
            align: "right",
        },
    ]

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const names = event.target.name.split(".");
        const nested = names.length === 2;

        if (nested) {
            setFormData(prev => ({
                ...prev,
                [names[0]]: {
                    // eslint-disable-next-line
                    ...(prev[names[0] as keyof typeof prev] as Record<string, any>),
                    [names[1]]: event.target.value,
                }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [event.target.name]: event.target.value,
            }))
        }

    }

    async function handleCheckoutAction() {
        setIsLoading(true);
        setError(null);
        try {

            const COD_FEE = purchaseSummary.codFee;
            const DELIVERY_FEE = purchaseSummary.deliveryFee;
            const DISCOUNT = purchaseSummary.discount;
            const SAVED_AMOUNT = purchaseSummary.save;
            const ORDER_STATUS: IOrderStatus = cartItem.codFee ? "processing" : "payment-pending";
            const ORDER_SUB_TOTAL = purchaseSummary.orderValue;

            const SINGLE_ORDER_ITEMS: IOrderSingleItem[] =
                cartItem.singleItems.map(p => ({
                    image: p.image,
                    name: p.name,
                    price: p.price,
                    productId: p.id,
                    quantity: p.qty,
                }))

            const BUNDLE_ORDER_ITEMS: IOrderSingleItem[] =
                cartItem.bundle?.items.map(p => ({
                    image: p.image,
                    name: p.name,
                    price: p.price.sale,
                    productId: p.id,
                    quantity: p.qty,
                })) || [];

            // Create eCommerce Order
            const orderRequestData: CreateOrderApiRequestData = {
                codFee: COD_FEE,
                contactInfo: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                },
                deliveryFee: DELIVERY_FEE,
                discount: DISCOUNT,
                orderItems: {
                    singleItems: SINGLE_ORDER_ITEMS,
                    bundle: cartItem.bundle ? ({
                        saved: SAVED_AMOUNT,
                        size: cartItem.bundle.size,
                        items: BUNDLE_ORDER_ITEMS,
                        giftBox: cartItem.bundle.giftBox ? {
                            enable: true,
                            message: cartItem.bundle.giftBox.message,
                        } : undefined,
                    }) : undefined,
                },
                orderStatus: ORDER_STATUS,
                paymentMethod: ORDER_STATUS === "processing" ? "cod" : "razorpay",
                paymentStatus: "pending",
                shippingAddress: formData.address,
                subTotal: ORDER_SUB_TOTAL,
                sknlyReward: purchaseSummary.sknlyReward || undefined,
            }

            const {
                data: order,
            } = await BackendApiAxio.post<OrdersModelInterface>(
                "/api/ecommerce/orders/create",
                orderRequestData,
            );

            if (!order.orderNo) {
                throw new Error("Order no. not found.");
            }

            const ORDER_CONFIRM_URL = `/checkout/success?orderId=${order._id.toString()}`;

            if (order.paymentMethod === "cod") {
                router.push(ORDER_CONFIRM_URL);
                return;
            }

            // Create Razorpay Order
            const razorpayRequestData: RazorpayCreateOrderApiRequestData = {
                amount: order.total,
                orderNo: order.orderNo,
            };

            const {
                data: razorpayOrder,
            } = await BackendApiAxio.post<Orders.RazorpayOrder>(
                "/api/razorpay/create-order",
                razorpayRequestData,
            );

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.total * 100,
                currency: razorpayOrder.currency,
                name: "Sknly",
                description: "Meet Your New Favourite Part of the Day!",
                order_id: razorpayOrder.id,
                handler: async () => {

                    try {

                        const requestData: RazorpaySuccessApiRequestData = {
                            orderId: order._id.toString(),
                        }

                        await axios.post(
                            "/api/ecommerce/orders/razorpay-success",
                            requestData,
                        )

                        router.push(ORDER_CONFIRM_URL);
                    } catch (err) {
                        if (typeof err === "string") {
                            setError(err);
                        } else {
                            setError("Something went wrong!");
                        }
                    }
                },
                modal: {
                    ondismiss: () => {
                        setIsLoading(false);
                        setError("Payment Cancelled.")
                    }
                },
                prefill: {
                    name: order.contactInfo.name || "No name",
                    email: order.contactInfo.email,
                    contact: order.contactInfo.phone,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            if (!window.Razorpay) {
                throw new Error("Razorpay client script did not loaded properly.")
            }

            const razorpay = new window.Razorpay(options);

            razorpay.on('payment.failed', function (response: RazorpayPaymentFailedResponse) {
                throw new Error(`Payment failed: ${response.description || response.code || "Something went wrong!"}`);
            });

            razorpay.open();

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (cartItem.bundle) {
            let totalProductCount = 0;
            for (const product of cartItem.bundle?.items || []) {
                totalProductCount += product.qty;
            }

            if (cartItem.bundle?.size !== totalProductCount) {
                storeDispatch(
                    removeBundle()
                )
            }
        }

        getSession().then(async (session) => {
            if (!session?.user.id) {
                return;
            }

            try {
                const getUserRequestData: GetOneUserApiRequestData = {
                    userId: session.user.id,
                }

                const {
                    data: user,
                } = await axios.post<UsersModelInterface | null>(
                    "/api/users/get-one",
                    getUserRequestData,
                );

                if (!user) {
                    throw new Error("User not found.")
                }

                setFormData(prev => ({
                    ...prev,
                    name: user.name,
                    phone: user.phone || "",
                    email: user.email,
                }))

                const defaultAddressId = user.defaultAddress;

                if (!defaultAddressId || typeof defaultAddressId !== "string") {
                    return;
                }

                const getAddressRequestData: GetOneAddressApiRequestData = {
                    addressId: defaultAddressId,
                }

                const {
                    data: address,
                } = await axios.post<AddressModelInterface>(
                    "/api/ecommerce/address/get-one",
                    getAddressRequestData,
                );

                if (!address) {
                    throw new Error("Default address not found.")
                }

                setFormData(prev => ({
                    ...prev,
                    address: {
                        city: address.city,
                        line1: address.line1,
                        line2: address.line2 || "",
                        pincode: address.pincode,
                        state: address.state,
                    },
                }))

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
        })

    }, [cartItem.bundle, storeDispatch])

    return (
        <InnerPagesLayout>

            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <CartCheckoutLayout
                page='Shipping and Payment'
                afterFormText='Secure payments. Zero hidden fees. Always.'
                checkoutAction={handleCheckoutAction}
                error={error}
                isLoading={isLoading}
            >
                <h1
                    className='text-4xl font-semibold'
                >Shipping Address</h1>

                <div
                    className='space-y-10'
                >
                    {[formFields, formFields2].map((section, index) => (
                        <div
                            key={index}
                            className='flex flex-wrap gap-y-10'
                        >
                            {section.map(field => (
                                <SingleField
                                    field={field}
                                    key={field.name}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    className='space-y-10'
                >
                    {
                        [
                            {
                                heading: "Shipping Option",
                                content: (
                                    <ShippingOptionSection />
                                )
                            },
                            {
                                heading: "Payment Method",
                                content: (
                                    <PaymentMethodSection />
                                )
                            }
                        ].map((section, index) => (
                            <div
                                key={index}
                                className='space-y-5'
                            >
                                <h2
                                    className='text-3xl font-semibold'
                                >{section.heading}</h2>
                                <div>{section.content}</div>
                            </div>
                        ))
                    }
                </div>

            </CartCheckoutLayout>
        </InnerPagesLayout>
    )
}

function SingleField({ field }: {
    field: FormFieldInterface,
}) {
    return (
        <div
            className={`${field.align ? "w-full md:w-1/2" : "w-full"} ${field.align === "left" ? "pr-5" : ""}`}
        >
            <InputElement
                label={field.label}
                name={field.name}
                onChangeWithEvent={field.onChange}
                value={field.value}
            />
        </div>
    )
}

export default CheckoutPage