import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import OrdersModel, { OrdersModelInterface } from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export interface OrderTrackingApiRequestData {
    orderNo: string,
}

export async function POST(request: NextRequest) {
    try {

        const body = await request.json() as OrderTrackingApiRequestData;

        if (!body || !body.orderNo) {
            throw new Error("Order No. is required.");
        }

        const order = await OrdersModel.findOne({
            orderNo: body.orderNo,
        }) as OrdersModelInterface | null;

        if (!order?.orderStatus) {
            throw new Error("Order with this order no. not exist.")
        }

        return NextResponse.json(order.orderStatus);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}