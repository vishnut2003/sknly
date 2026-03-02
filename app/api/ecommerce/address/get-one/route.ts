import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getOneUserAddress } from "@/functions/ecommerce/address/get-one";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export interface GetOneAddressApiRequestData {
    addressId: string,
}

export async function POST (request: NextRequest) {
    try {
        const body = await request.json() as GetOneAddressApiRequestData;
        if (!body.addressId) {
            throw new Error("Addres Id is required.")
        }

        if (typeof body.addressId !== "string") {
            throw new Error("Address Id should be string.")
        }

        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("User is not authorized.")
        }

        const address = await getOneUserAddress(body.addressId);

        if (!address) {
            throw new Error("Address with this id not found.")
        }

        if (address.userId.toString() !== session.user.id) {
            throw new Error("User can access their own address.")
        }

        return NextResponse.json(address);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}