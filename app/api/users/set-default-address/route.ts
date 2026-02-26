import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { setUserDefaultAddress } from "@/functions/users/set-default-address";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as { addressId: string };

        if (!body || !body.addressId) {
            throw new Error("Required fields are missing.");
        }

        const session = await getServerSession(authOptions);

        if (!session || !session.user.id) {
            throw new Error("UserId not found.")
        }

        await setUserDefaultAddress({
            addressId: body.addressId,
            userId: session.user.id,
        });

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}