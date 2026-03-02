import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order";
import { NextRequest, NextResponse } from "next/server";

export interface GetOneUserOrderApiRequestData {
    orderId: string,
}

export async function POST (request: NextRequest) {
    try {
        const body = await request.json() as GetOneUserOrderApiRequestData;
        
        if (!body.orderId) {
            throw new Error("Order Id is required.")
        }

        const order = await getOneOrder(body.orderId);

        if (!order) {
            throw new Error("Order not found.")
        }

        return NextResponse.json(order);
        
    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}