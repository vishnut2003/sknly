import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { updateAddress, UpdateAddressRequestData } from "@/functions/ecommerce/address/update";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export type UpdateAddressApiRequestData = Omit<UpdateAddressRequestData, "userId">;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as UpdateAddressApiRequestData;
        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("UserId is not found.");
        }

        await updateAddress({
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