'use client';

import { GetOneUserOrderApiRequestData } from "@/app/api/ecommerce/orders/get-one/route";
import OrderDetails from "@/components/ecommerce-elements/order-details";
import { BackendApiAxio } from "@/config/axios";
import { handleCatchBlock } from "@/functions/common";
import { OrdersModelInterface } from "@/models/order";
import { ErrorType } from "@/types/error";
import { useEffect, useState } from "react"

const SingleOrderDetailsPageClient = ({
    orderId,
}: {
    orderId: string,
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [order, setOrder] = useState<OrdersModelInterface | null>(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setError(null);
            try {
                const requestData: GetOneUserOrderApiRequestData = {
                    orderId,
                }

                const {
                    data: order,
                } = await BackendApiAxio.post<OrdersModelInterface | null>(
                    "/api/ecommerce/orders/get-one",
                    requestData,
                )

                if (!order) {
                    throw new Error("Order not found.")
                }

                setOrder(order);

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
        })();
    }, [])

    return (
        <div>
            {order && (
                <OrderDetails
                    order={order}
                />
            )}
        </div>
    )
}

export default SingleOrderDetailsPageClient