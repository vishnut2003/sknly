'use client';

import { AdminOrdersChangePaymentStatusApiRequestData } from "@/app/api/admin/ecommerce/orders/change-payment-status/route";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { BackendApiAxio } from "@/config/axios";
import { handleCatchBlock } from "@/functions/common";
import { IOrderPaymentStatus } from "@/models/order";
import { ErrorType } from "@/types/error";
import { RiCheckLine, RiLoaderLine } from "@remixicon/react";
import { useState } from "react";

export default function ChangePaymentStatusElement({
    defaultStatus,
    orderId,
}: {
    orderId: string,
    defaultStatus: IOrderPaymentStatus,
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const [status, setStatus] = useState<string>(defaultStatus);

    async function handleSubmit() {
        setIsLoading(true);
        setError(null);
        try {
            const requestData: AdminOrdersChangePaymentStatusApiRequestData = {
                orderId,
                status: status as IOrderPaymentStatus,
            }

            await BackendApiAxio.post(
                "/api/admin/ecommerce/orders/change-payment-status",
                requestData,
            );

            setSuccess(true);

            setTimeout(() => {
                setSuccess(false)
            }, 5000);

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <div
            className="space-y-2"
        >
            <p
                className="font-semibold"
            >Change Payment Status:</p>
            <div
                className="flex items-center gap-3"
            >
                <select
                    className="w-full py-3 px-5 bg-gray-200 rounded-lg"
                    value={status}
                    onChange={(event) => {
                        setStatus(event.target.value);
                    }}
                >
                    {
                        [
                            {
                                label: "Pending",
                                value: "pending",
                            },
                            {
                                label: "Paid",
                                value: "paid",
                            },
                            {
                                label: "Failed",
                                value: "failed",
                            }
                        ].map((item, index) => (
                            <option
                                value={item.value}
                                key={index}
                            >{item.label}</option>
                        ))
                    }
                </select>

                <button
                    className="flex items-center gap-2 bg-[#BA131C] text-white py-3 px-5 rounded-lg cursor-pointer"
                    onClick={handleSubmit}
                >
                    {success && (
                        <RiCheckLine
                            size={20}
                        />
                    )}
                    {isLoading && (
                        <RiLoaderLine
                            size={20}
                            className="animate-spin"
                        />
                    )}
                    <p>{isLoading ? "Updating..." : "Update"}</p>
                </button>

            </div>

            {error && (
                <ErrorMessageElement
                    text={error}
                />
            )}

        </div>
    )
}