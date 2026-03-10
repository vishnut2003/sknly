import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import OrdersModel from "@/models/order";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST () {
    try {
        const session = await getServerSession(authOptions);
        await dbConnect();

        if (!session?.user.id) {
            throw new Error("User is not logged in.")
        }

        const completeOrderCount = await OrdersModel.countDocuments({
            userId: session.user.id,
            orderStatus: "delivered",
        });

        return NextResponse.json(completeOrderCount);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}