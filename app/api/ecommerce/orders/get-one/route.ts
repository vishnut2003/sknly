import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export interface GetOneUserOrderApiRequestData {
    orderId: string,
}

export async function POSt (request: NextRequest) {
    try {
        const body = await request.json() as GetOneUserOrderApiRequestData;
        
        if (!body.orderId) {
            throw new Error("Order Id is required.")
        }

        const order = await getOneOrder(body.orderId);

        if (!order) {
            throw new Error("Order not found.")
        }

        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("User is not logged in.")
        }

        if (session.user.id !== order.userId?.toString()) {
            throw new Error("User can only access their own orders.")
        }

        return NextResponse.json(order);
        
    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}