import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getOneUser } from "@/functions/users/get-one";

export interface GetOneUserApiRequestData {
    email?: string,
    phone?: string,
    userId?: string,
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as GetOneUserApiRequestData;
        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("UserId not found.")
        }

        const user = await getOneUser(body)

        if (user._id.toString() !== body.userId) {
            throw new Error("User can view only their own account details.");
        }

        return NextResponse.json(user);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}