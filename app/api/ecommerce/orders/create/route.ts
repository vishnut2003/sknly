import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { createOrder, CreateOrderRequestData } from "@/functions/ecommerce/orders/create-order";
import { OrderNotifyAdmin } from "@/functions/ecommerce/orders/order-notify-admin";
import { orderNotifyUser } from "@/functions/ecommerce/orders/order-notify-user";
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

            if (savedOrder.paymentMethod === "cod") {
                await OrderNotifyAdmin({ order: savedOrder });
                await orderNotifyUser({ order: savedOrder })
            }

        } catch (err) {
            console.log(err);
        }

        return NextResponse.json(savedOrder);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}