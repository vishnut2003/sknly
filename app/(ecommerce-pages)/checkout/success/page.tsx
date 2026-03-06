'use client';

import { GetOneUserOrderApiRequestData } from "@/app/api/ecommerce/orders/get-one/route";
import LoadingElement from "@/components/ui-elements/loading-element";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { handleCatchBlock } from "@/functions/common";
import InnerPagesLayout from "@/layouts/inner-pages-layout";
import { OrdersModelInterface } from "@/models/order";
import { ErrorType } from "@/types/error";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DefaultSection from "@/layouts/default-section";
import { RiCheckboxCircleFill } from "@remixicon/react";
import OrderDetails from "@/components/ecommerce-elements/order-details";
import { useAppDispatch } from "@/store/hooks";
import { resetCart } from "@/store/slices/cart";

const OrderConfirmationPage = () => {

    const searchParams = useSearchParams();
    const storeDispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [order, setOrder] = useState<OrdersModelInterface | null>(null);

    useEffect(() => {

        storeDispatch(
            resetCart()
        )

        const orderId = searchParams.get("orderId");

        if (!orderId) {
            return;
        }

        (async () => {
            setIsLoading(true)
            setError(null);
            try {

                const requestData: GetOneUserOrderApiRequestData = {
                    orderId,
                }

                const {
                    data: order,
                } = await axios.post<OrdersModelInterface>(
                    "/api/ecommerce/orders/get-one",
                    requestData,
                );

                setOrder(order);

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
        })();
    }, [searchParams, storeDispatch])

    if (error) {
        return (
            <InnerPagesLayout>
                <div
                    className="p-10"
                >
                    <ErrorMessageElement
                        text={error}
                    />
                </div>
            </InnerPagesLayout>
        )
    }

    if (isLoading) {
        return (
            <LoadingElement />
        )
    }

    return (
        <InnerPagesLayout>

            <div
                className="relative"
            >
                {/* Background */}
                <div
                    className="absolute top-0 left-0 w-full h-full z-0 flex items-stretch"
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                            <div
                                key={i}
                                className={`w-full rounded-b-full ${i % 2 === 0 ? "bg-[#FDEBEB]" : "bg-[#FFC7C8]"}`}
                            />
                        ))
                    }
                </div>

                <div
                    className="z-10 relative flex items-center justify-center flex-col min-h-60 md:min-h-100"
                >
                    <div
                        className="text-[#BA131C] flex flex-col items-center gap-3"
                    >
                        <RiCheckboxCircleFill
                            size={50}
                        />
                        <h1
                            className="text-3xl md:text-4xl font-semibold"
                        >Order Confirmed</h1>
                    </div>
                </div>

            </div>

            <DefaultSection
                outerClassName="py-6 md:py-15"
                className="space-y-4 text-center text-[#BA131C]"
            >
                <h2
                    className="text-3xl md:text-4xl font-glamour"
                >Your Sknly order is being whipped with love!</h2>
                <div
                    className="text-sm md:text-lg max-w-200 mx-auto"
                >
                    <p>Simone, thank you for shopping with Sknly.</p>
                    <p>We have received your order, you’ll receive a tracking link as soon as your goodies are shipped. You can find your order details below:</p>
                </div>
            </DefaultSection>

            {
                order && (
                    <OrderDetails
                        order={order}
                    />
                )
            }

        </InnerPagesLayout>
    )
}

export default OrderConfirmationPage