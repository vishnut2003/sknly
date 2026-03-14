import OrderNotificationTemplate from "@/components/mail/order-template";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order";
import { sendMail } from "@/functions/mail/send";
import { NextRequest, NextResponse } from "next/server";

export interface AdminOrdersSendInvoiceApiRequestData {
    orderId: string,
}

export async function POST(request: NextRequest) {
    try {

        const body = await request.json() as AdminOrdersSendInvoiceApiRequestData;

        if (!body.orderId) {
            throw new Error("Order ID is required.")
        }

        const order = await getOneOrder(body.orderId);

        if (!order) {
            throw new Error("Order not found.")
        }

        const BASE_URL = process.env.BASE_URL;

        if (!BASE_URL) {
            throw new Error("Please provide BASE_URL in .env");
        }

        await sendMail({
            to: order.contactInfo.email,
            subject: "Order Invoice",
            element: OrderNotificationTemplate({
                order,
                primaryText: "Thanks for shopping with us! Open your order invoice here:",
                action: {
                    text: "Order Invoice",
                    href: BASE_URL + "/invoice/" + order._id.toString(),
                }
            })
        })

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}