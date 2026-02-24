'use client';

import { Fragment, PropsWithChildren } from "react"
import DefaultSection from "../default-section"
import { RiArrowRightSLine } from "@remixicon/react"
import { useAppSelector } from "@/store/hooks";
import EmptyCartItemTemplate from "./empty-cart-item-template";

const CartCheckoutLayout = ({
    children,
    page,
}: PropsWithChildren<{
    page: "Cart" | "Shipping and Payment",
}>) => {

    const cartItems = useAppSelector(s => s.cart.items);

    if (!cartItems.bundle && cartItems.singleItems.length === 0) {
        return (
            <EmptyCartItemTemplate/>
        )
    }

    return (
        <DefaultSection
            outerClassName="pt-10 text-[#BA131C]"
            className="flex items-stretch gap-10"
        >
            <div
                className="w-full space-y-5"
            >
                {children}
            </div>
            <div
                className="w-full max-w-120"
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
                        className="w-full min-h-100 bg-[#FDEBEB] text-[#BA131C] rounded-2xl"
                    >
                        <div>
                            {

                            }
                        </div>
                    </div>

                </div>
            </div>
        </DefaultSection>
    )
}

export default CartCheckoutLayout