import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import OrdersModel, { IOrderStatus } from "@/models/order";
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

        return NextResponse.json({ ok: true })

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}