'use client';

import InputElement from '@/components/ui-elements/input-element';
import CartCheckoutLayout from '@/layouts/cart-checkout-layout'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import { ChangeEvent, useEffect, useState } from 'react'
import ShippingOptionSection from './shipping-option';
import PaymentMethodSection from './payment-method';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeBundle } from '@/store/slices/cart';

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

    const storeDispatch = useAppDispatch();
    const cartItem = useAppSelector(s => s.cart.items);

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

    function handleCheckoutAction () {
        console.log("Checkingout")
    }

    useEffect(() => {
        if (cartItem.bundle) {
            if (cartItem.bundle.items.length !== cartItem.bundle.size) {
                storeDispatch(
                    removeBundle(),
                )
            }
        }
    }, [cartItem.bundle, storeDispatch])

    return (
        <InnerPagesLayout>
            <CartCheckoutLayout
                page='Shipping and Payment'
                afterFormText='Secure payments. Zero hidden fees. Always.'
                checkoutAction={handleCheckoutAction}
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
                                    <ShippingOptionSection/>
                                )
                            },
                            {
                                heading: "Payment Method",
                                content: (
                                    <PaymentMethodSection/>
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
            className={`${field.align ? "w-1/2" : "w-full"} ${field.align === "left" ? "pr-5" : ""}`}
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