'use client';

import { AdminOrdersSendInvoiceApiRequestData } from "@/app/api/admin/ecommerce/orders/send-invoice/route";
import { handleCatchBlock } from "@/functions/common";
import { RiCheckLine, RiLoaderLine } from "@remixicon/react";
import axios from "axios";
import { useState } from "react"

export default function SendInvoiceButton({
    orderId,
}: {
    orderId: string,
}) {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    async function hanldeOnSubmit() {
        setIsLoading(true);
        try {

            const requestData: AdminOrdersSendInvoiceApiRequestData = {
                orderId,
            }

            await axios.post(
                "/api/admin/ecommerce/orders/send-invoice",
                requestData,
            );

            setSuccess(true);

            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);

        } catch (err) {
            const message = handleCatchBlock(err);
            window.alert(message);
        }
        setIsLoading(false);
    }

    return (
        <button
            className="py-2 px-4 bg-black text-white cursor-pointer rounded-lg flex items-center gap-2"
            type="button"
            onClick={hanldeOnSubmit}
            disabled={isLoading || success}
        >
            {isLoading && (
                <RiLoaderLine
                    size={20}
                    className="animate-spin"
                />
            )}

            {success && (
                <RiCheckLine
                    size={20}
                />
            )}

            Send Invoice
        </button>
    )
}