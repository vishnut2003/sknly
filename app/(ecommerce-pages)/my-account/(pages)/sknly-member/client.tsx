'use client';

import DefaultSection from "@/layouts/default-section";
import InnerPagesLayout from "@/layouts/inner-pages-layout";
import MyAccountLayout from "@/layouts/my-account-layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import GiftCup from "./assets/gift-cup.png";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import axios from "axios";
import LoadingElement from "@/components/ui-elements/loading-element";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import CardImage from "./assets/card-image.png";

const SknlyMemberPageClient = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [currentStatusIndex, setCurrentStatusIndex] = useState<number>(1);

    useEffect(() => {
        (async () => {
            setError(null)
            setIsLoading(true);
            try {
                const {
                    data,
                } = await axios.post<number>(
                    "/api/ecommerce/sknly-rewards/status",
                );

                if (typeof data !== "number") {
                    throw new Error("Order status is not a number.")
                }

                setCurrentStatusIndex(data);

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
        })();
    }, [])

    if (error) {
        return (
            <ErrorMessageElement
                text={error}
            />
        )
    }

    if (isLoading) {
        return (
            <LoadingElement />
        )
    }

    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page="sknly-member"
            >
                <DefaultSection
                    className="max-w-6xl! py-10"
                >
                    <div
                        className="space-y-20"
                    >
                        <h1
                            className="text-3xl text-center font-glamour"
                        >Sknly Rewards, {currentStatusIndex < 1 ? "Free Shipping" : currentStatusIndex < 3 ? "₹ 100 off" : currentStatusIndex < 6 ? "The Sknly Tote" : currentStatusIndex < 8 ? "25% Off" : ""} is almost yours ✨</h1>

                        <div>
                            <div
                                className="w-full flex items-start"
                            >
                                {
                                    [
                                        {
                                            isGift: true,
                                            text: "Free shipping",
                                        },
                                        {
                                            isGift: false,
                                        },
                                        {
                                            isGift: true,
                                            text: "₹ 100 off",
                                        },
                                        {
                                            isGift: false,
                                        },
                                        {
                                            isGift: false,
                                        },
                                        {
                                            isGift: true,
                                            text: "The Sknly Tote",
                                        },
                                        {
                                            isGift: false,
                                        },
                                        {
                                            isGift: true,
                                            text: "25% Off",
                                        },
                                    ].map((item, index, items) => {

                                        const isActive = (index + 1) <= currentStatusIndex;

                                        return (
                                            <div
                                                key={index}
                                                className={"w-full flex flex-col gap-7"}
                                            >
                                                <div
                                                    className="relative"
                                                >
                                                    <div
                                                        className={"h-1 md:h-2.5" + ` ${index === 0 ? "rounded-l-2xl" : (items.length - 1) === index ? "rounded-r-2xl" : ""}`}
                                                        style={{
                                                            backgroundColor: isActive ? "#BA131C" : "#D9D9D9",
                                                        }}
                                                    ></div>
                                                    <div
                                                        className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#BA131C] absolute top-1/2 left-1/2 -translate-1/2"
                                                    />

                                                    {item.isGift && (
                                                        <Image
                                                            src={GiftCup}
                                                            alt="Gift Cup"
                                                            className="w-6 md:w-9 absolute top-1/2 left-1/2 -translate-1/2"
                                                        />
                                                    )}

                                                </div>
                                                <div
                                                    className="relative"
                                                >
                                                    {item.text && (
                                                        <p
                                                            className={"text-center text-sm font-medium" + ` ${(item.text === "₹ 100 off" || item.text === "25% Off") ? "absolute -top-20 whitespace-nowrap md:static" : "absolute -left-1/2 translate-x-2 md:static whitespace-nowrap"}`}
                                                        >{item.text}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </DefaultSection>

                <DefaultSection
                    className="max-w-6xl! space-y-5"
                    outerClassName="py-15"
                >
                    <div
                        className="flex flex-col md:flex-row items-center gap-5 bg-[#EFE0EB] py-10 text-[#BA131C] rounded-xl"
                    >
                        <div
                            className="w-full"
                        >
                            <Image
                                alt="Cards image"
                                src={CardImage}
                                className="w-[70%] h-full object-contain bg-center mx-auto"
                            />
                        </div>
                        <div
                            className="w-full md:w-[80%] space-y-2 p-5"
                        >
                            <h2
                                className="text-4xl md:text-4xl text-center md:text-left font-glamour"
                            >Loyalty Rewards</h2>

                            <div
                                className="space-y-3"
                            >
                                <p>Every order gets you closer to something juicy ✨</p>
                                <ul
                                    className="pl-5 list-disc space-y-2"
                                >
                                    {
                                        [
                                            "1st order: Free Shipping",
                                            "3rd order: ₹ 100 Off when you pick any 2 Whipped Foams",
                                            "6th order: The Sknly Tote",
                                            "8th order: 20% Off on orders above ₹ 999",
                                        ].map((text, idx) => (
                                            <li
                                                key={idx}
                                            >{text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p
                        className="text-sm text-[#BA131C] hidden md:block"
                    >*Only valid on full-price items. Bundles and discounted products are excluded — but don’t worry, if your perk lands on a bundle order, we’ll roll it over to your next eligible one.</p>
                </DefaultSection>

            </MyAccountLayout>
        </InnerPagesLayout>
    )
}

export default SknlyMemberPageClient