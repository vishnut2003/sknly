import { dbConnect } from "@/config/database";
import { generateHash } from "@/functions/bcrypt";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export interface ForgetPasswordChangePasswordApiRequestData {
    verifyCode: string,
    password: string,
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json() as ForgetPasswordChangePasswordApiRequestData;

        if (!body || !body.verifyCode) {
            throw new Error("verify Code is required.")
        }

        if (!body.password) {
            throw new Error("password is required.")
        }

        const user = await UserModel.findOne({
            "forgetPassword.verifyCode": body.verifyCode,
        });

        if (!user) {
            throw new Error("User not found.");
        }

        const hashPassword = await generateHash(body.password);

        await UserModel.findOneAndUpdate({
            "forgetPassword.verifyCode": body.verifyCode,
        }, {
            $set: { password: hashPassword },
            $unset: { forgetPassword: "" }
        });

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}