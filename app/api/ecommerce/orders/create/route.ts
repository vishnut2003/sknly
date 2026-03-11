import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { createOrder, CreateOrderRequestData } from "@/functions/ecommerce/orders/create-order";
import { sendMail } from "@/functions/mail/send";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export type CreateOrderApiRequestData = Omit<CreateOrderRequestData, "userId">;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as CreateOrderApiRequestData;
        if (!body) {
            throw new Error("Required fields are empty.")
        }

        const session = await getServerSession(authOptions);

        const userId = session?.user.id;

        const savedOrder = await createOrder({
            ...body,
            userId,
        })

        try {
            const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
            if (!ADMIN_EMAIL) {
                throw new Error('Please provide ADMIN_EMAIL in .env.')
            }
            const sendTemplate = `Order ID: ${savedOrder.orderNo}, Customer Name: ${savedOrder.contactInfo.name}, Customer Email: ${savedOrder.contactInfo.email}`
            await sendMail({
                subject: "New Order On Sknly",
                to: ADMIN_EMAIL,
                template: sendTemplate,
            });
        } catch (err) {
            console.log(err);
            console.log("sending mail failed.")
        }

        return NextResponse.json(savedOrder);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}