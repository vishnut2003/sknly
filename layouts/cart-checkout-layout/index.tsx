'use client';

import { Fragment, PropsWithChildren } from "react"
import DefaultSection from "../default-section"
import { RiArrowRightSLine, RiLoaderLine } from "@remixicon/react"
import { useAppSelector } from "@/store/hooks";
import EmptyCartItemTemplate from "./empty-cart-item-template";
import { usePurchaseSummary } from "@/hooks/calculate-purchase-summary";
import { getStoreCurrency } from "@/functions/eCommerce-store";
import CouponApplyForm from "./coupon-form";
import { useRouter } from "next/navigation";
import { ErrorType } from "@/types/error";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";

const CartCheckoutLayout = ({
    children,
    page,
    afterFormText,
    checkoutAction,
    isLoading,
    error,
}: PropsWithChildren<{
    page: "Cart" | "Shipping and Payment",
    afterFormText: string,
    checkoutAction?: () => void,
    isLoading?: boolean,
    error?: ErrorType,
}>) => {

    const router = useRouter();

    const cartItems = useAppSelector(s => s.cart.items);
    const purchaseSummary = usePurchaseSummary();
    const currency = getStoreCurrency();

    if (!cartItems.bundle && cartItems.singleItems.length === 0) {
        return (
            <EmptyCartItemTemplate />
        )
    }

    return (
        <DefaultSection
            outerClassName="pt-10 text-[#BA131C]"
            className="flex items-stretch gap-20"
        >
            <div
                className="w-full space-y-15 pb-10"
            >
                {children}
            </div>
            <div
                className="w-full max-w-110"
            >
                <div
                    className="space-y-5"
                >
                    <div
                        className="flex items-center justify-between w-full"
                    >
                        <h2
                            className="font-bold text-lg"
                        >Order Summary</h2>
                        <div>
                            <p
                                className="min-w-max text-sm flex items-center"
                            >
                                {
                                    [
                                        "Cart",
                                        "Shipping and Payment",
                                        "Preview"
                                    ].map((text, i) => (
                                        <Fragment
                                            key={i}
                                        >
                                            {i !== 0 && (
                                                <RiArrowRightSLine
                                                    size={15}
                                                />
                                            )}
                                            <span
                                                className={
                                                    `${page === text && "font-semibold"}`
                                                }
                                            >{text}</span>
                                        </Fragment>
                                    ))
                                }
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full min-h-100 bg-[#FDEBEB] text-[#BA131C] rounded-2xl p-10 space-y-9"
                    >
                        <div
                            className="space-y-6"
                        >
                            {
                                [
                                    {
                                        label: "Products",
                                        value: purchaseSummary.productCount,
                                    },
                                    {
                                        label: "Order Value",
                                        value: currency + purchaseSummary.orderValue
                                    },
                                    "coupon",
                                    {
                                        label: "Delivery Fee",
                                        value: currency + purchaseSummary.deliveryFee,
                                    },
                                    {
                                        label: "COD Fee",
                                        value: currency + purchaseSummary.codFee,
                                    }
                                ].map((item, index) => {

                                    if (typeof item === "string") {
                                        return (
                                            <CouponApplyForm
                                                key={index}
                                            />
                                        )
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className="w-full flex items-center justify-between text-lg font-medium"
                                        >
                                            <div
                                                className="w-full"
                                            >
                                                <p>{item.label}</p>
                                            </div>
                                            <div
                                                className="w-full"
                                            >
                                                <p
                                                    className="text-right"
                                                >{item.value}</p>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div>

                        <hr />

                        <div
                            className="flex items-center text-lg font-bold"
                        >
                            <div
                                className="w-full"
                            >Total</div>
                            <div
                                className="w-full text-right"
                            >{currency + purchaseSummary.total}</div>
                        </div>

                        {
                            error && (
                                <ErrorMessageElement
                                    text={error}
                                />
                            )
                        }

                        <div
                            className="flex justify-center"
                        >
                            <button
                                className="border py-4 px-12 rounded-lg font-semibold hover:bg-[#BA131C] hover:text-white cursor-pointer flex items-center gap-3"
                                onClick={() => {
                                    if (page === "Cart") {
                                        router.push("/checkout");
                                    } else if (page === "Shipping and Payment") {
                                        if (checkoutAction) {
                                            checkoutAction();
                                        }
                                    }
                                }}
                            >
                                {
                                    isLoading && (
                                        <RiLoaderLine
                                            size={20}
                                            className="animate-spin"
                                        />
                                    )
                                }

                                {
                                    page === "Cart" && "Checkout"
                                }

                                {
                                    page === "Shipping and Payment" && "Pay Now"
                                }
                            </button>
                        </div>

                    </div>

                    <p
                        className="text-center font-semibold pb-10"
                    >{afterFormText}</p>

                </div>
            </div>
        </DefaultSection>
    )
}

export default CartCheckoutLayout