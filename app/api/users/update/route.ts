import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { updateUser, UpdateUserRequestData } from "@/functions/users/update";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import UserModel, { UsersModelInterface } from "@/models/user";

export type UpdateUserApiRequestData = Omit<UpdateUserRequestData, "userId">;

export async function POST(request: NextResponse) {
    try {
        const body = await request.json() as UpdateUserApiRequestData;

        if (
            !body ||
            !body.email ||
            !body.name
        ) {
            throw new Error("Required fields are empty.")
        }

        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            throw new Error("UserId not found.")
        }

        const user = await UserModel.findById(session.user.id) as UsersModelInterface;

        if (user._id.toString() !== session.user.id) {
            throw new Error("User can update only their own information.");
        }

        await updateUser({
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