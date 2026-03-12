import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import OrdersModel, { IOrderPaymentStatus } from "@/models/order";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export interface AdminOrdersChangePaymentStatusApiRequestData {
    status: IOrderPaymentStatus,
    orderId: string,
}

export async function POST(request: NextResponse) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user.role || session.user.role !== "admin") {
            throw new Error("User is not authorized.")
        }

        const body = await request.json() as AdminOrdersChangePaymentStatusApiRequestData;

        if (!body.orderId || !body.status) {
            throw new Error("Field orderId and status is required.")
        }

        await OrdersModel.findByIdAndUpdate(
            body.orderId,
            {
                paymentStatus: body.status,
            }
        );

        return NextResponse.json({ ok: true })

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}