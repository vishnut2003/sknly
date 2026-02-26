import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { addAddress, AddAddressRequestData } from "@/functions/ecommerce/address/add";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export type AddAddressApiRequestData = Omit<AddAddressRequestData, "userId">;

export async function POST(request: NextRequest) {
    try {

        const body = await request.json() as AddAddressApiRequestData;

        const session = await getServerSession(authOptions);

        if (!session || !session.user.id) {
            throw new Error("UserId not found.")
        }

        await addAddress({
            ...body,
            userId: session.user.id,
        });

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}