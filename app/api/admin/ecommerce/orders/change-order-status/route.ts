import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import OrderNotificationTemplate from "@/components/mail/order-template";
import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { sendMail } from "@/functions/mail/send";
import OrdersModel, { IOrderStatus, OrdersModelInterface } from "@/models/order";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export interface AdminOrdersChangeOrderStatusApiRequestData {
    status: IOrderStatus,
    orderId: string,
}

export async function POST(request: NextRequest) {
    try {

        const session = await getServerSession(authOptions);

        if (!session?.user.role || session.user.role !== "admin") {
            throw new Error("User is not authorized.")
        }

        const body = await request.json() as AdminOrdersChangeOrderStatusApiRequestData;

        if (!body.status) {
            throw new Error("Field status is required.")
        }

        if (!body.orderId) {
            throw new Error("Field orderId is required.")
        }

        await dbConnect();

        await OrdersModel.findByIdAndUpdate(
            body.orderId,
            {
                orderStatus: body.status,
            }
        );

        const order = await OrdersModel.findById(body.orderId) as OrdersModelInterface | null;
        if (!order) {
            throw new Error("Order not found.")
        }

        let messageText;

        if (body.status === "payment-pending") {
            messageText = `Hi ${order.contactInfo.name}, looks like your payment didn’t go through, but your Sknly order is still right here. Continue your checkout below.`;
        } else if (body.status === "processing") {
            messageText = `Hi ${order.contactInfo.name}, your Sknly order is officially getting whipped. Your showers are about to get a lot more fun!`
        } else if (body.status === "shipped") {
            messageText = `Hi ${order.contactInfo.name}, your Sknly whipped shower upgrade is officially on its way to you. Our delivery partner, Delhivery, will keep you updated as your package gets closer.`
        } else if (body.status === "delivered") {
            messageText = `Hi ${order.contactInfo.name}, your Sknly order has officially arrived! Shower time just became dessert time 🍓🍦`;
        } else if (body.status === "cancelled") {
            messageText = `Hi ${order.contactInfo.name}, your Sknly order has been cancelled. If you decide to come back for better showers, we’d love to have you.`
        } else {
            messageText = `Hi ${order.contactInfo.name}, Your order status has been updated. Please check details below.`;
        }

        let actionButton: { text: string, href: string } | null = null;

        const BASE_URL = process.env.BASE_URL;

        if (!BASE_URL) {
            throw new Error("Please provide BASE_URL in .env");
        }

        if (body.status === "payment-pending") {
            actionButton = {
                text: "Complete My Order",
                href: BASE_URL + "/cart",
            }
        } else if (body.status === "delivered" || body.status === "cancelled") {
            actionButton = {
                text: "Shop Again",
                href: BASE_URL + "/shower-foams",
            }
        }

        await sendMail({
            to: order.contactInfo.email,
            subject: `Order - #${order.orderNo} is ${body.status.split("-").join(" ").toUpperCase()}`,
            element: OrderNotificationTemplate({
                order: order,
                primaryText: messageText,
                action: actionButton ? actionButton : undefined,
            })
        })

        return NextResponse.json({ ok: true })

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}