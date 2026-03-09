'use client';

import { OrderTrackingApiRequestData } from "@/app/api/ecommerce/orders/tracking/route";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { handleCatchBlock } from "@/functions/common";
import { ErrorType } from "@/types/error";
import { RiLoaderLine } from "@remixicon/react";
import axios from "axios";
import { SubmitEvent, useState } from "react";

const TrackOrderForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [orderNo, setOrderNo] = useState<string>('');
    const [orderStatus, setOrderStatus] = useState<string | null>(null);

    async function onFormSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            if (!orderNo) {
                throw new Error("Order No. is required.")
            }

            const requestData: OrderTrackingApiRequestData = {
                orderNo,
            }

            const {
                data,
            } = await axios.post<string>(
                "/api/ecommerce/orders/tracking",
                requestData,
            )

            const orderStatus = data.split("-").join(" ");
            setOrderStatus(orderStatus);

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <form
            className="text-center bg-[#FDEBEB] py-10 px-7 space-y-7 text-[#BA131C] rounded-xl"
            onSubmit={onFormSubmit}
        >
            <div
                className="space-y-3"
            >
                <h2
                    className="text-2xl font-semibold"
                >TRACK YOUR ORDER</h2>
                <p>Order ID/ Tracking No.</p>
            </div>

            <input
                type="text"
                required
                className="block w-full py-3 px-5 outline-none border rounded-lg"
                value={orderNo}
                onChange={(event) => {
                    setOrderNo(event.target.value);
                }}
            />

            <div
                className="flex justify-center"
            >
                <button
                    className="py-3 px-7 bg-[#BA131C] rounded-xl text-white flex items-center gap-3"
                >
                    {isLoading && (
                        <RiLoaderLine
                            size={20}
                            className="animate-spin"
                        />
                    )}
                    Track Order
                </button>
            </div>

            {orderStatus && (
                <div>
                    <p>{orderStatus}</p>
                </div>
            )}

            {error && (
                <ErrorMessageElement
                    text={error}
                />
            )}

        </form>
    )
}

export default TrackOrderForm