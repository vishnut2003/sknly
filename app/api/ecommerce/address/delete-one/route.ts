import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { deleteOneAddress } from "@/functions/ecommerce/address/delete-one";
import AddressModel, { AddressModelInterface } from "@/models/address";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as {
            addressId: string,
        }

        if (!body.addressId) {
            throw new Error("addressId is required.")
        }

        const existAddress = await AddressModel.findById(body.addressId) as AddressModelInterface;

        if (!existAddress) {
            throw new Error("Address not found.")
        }

        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("User is not authorized.")
        }

        if (existAddress.userId.toString() !== session.user.id) {
            throw new Error("User is not authorized.")
        }

        await deleteOneAddress(body.addressId);

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message)
        return response;
    }
}