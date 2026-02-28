import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { changeOrderStatus } from "@/functions/ecommerce/orders/change-order-status";
import { changeOrderPaymentStatus } from "@/functions/ecommerce/orders/change-payment-status";
import { NextRequest, NextResponse } from "next/server";

export interface RazorpaySuccessApiRequestData {
    orderId: string,
}

export async function POST(request: NextRequest) {
    try {

        const body = await request.json() as RazorpaySuccessApiRequestData;

        if (!body.orderId) {
            throw new Error("Order ID not found.")
        }

        await changeOrderStatus({
            orderId: body.orderId,
            status: "processing",
        });

        await changeOrderPaymentStatus({
            orderId: body.orderId,
            status: "paid",
        });

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}