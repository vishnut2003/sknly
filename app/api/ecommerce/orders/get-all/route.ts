import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common"
import { getUsersOrders } from "@/functions/ecommerce/orders/get-user-orders";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST () {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user.id) {
            throw new Error("User is not logged in.")
        }

        const orders = await getUsersOrders(session.user.id);

        return NextResponse.json(orders);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}