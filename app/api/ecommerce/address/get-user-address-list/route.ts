import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getUserAddressList } from "@/functions/ecommerce/address/get-user-address-list";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        
        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("User is not logged in.")
        }

        const addressList = await getUserAddressList(session.user.id);

        return NextResponse.json(addressList)

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}