import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { generateVerifyCode } from "@/functions/generate-verify-code";
import { getOneUser } from "@/functions/users/get-one";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export interface ForgetPasswordVerifyOtpApiRequestData {
    otp: string,
    email?: string,
    phone?: string,
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json() as ForgetPasswordVerifyOtpApiRequestData;

        if (!body || !body.otp) {
            throw new Error("OTP is required.")
        }

        if (!body.email && !body.phone) {
            throw new Error("Please provide Phone or Email to verify.")
        }

        const user = await getOneUser({
            email: body.email,
            phone: body.phone,
        });

        if (!user._id.toString()) {
            throw new Error("User with this email or phone does not exist.")
        }

        if (user.forgetPassword?.otp?.trim() !== body.otp.trim()) {
            throw new Error("Invalid OTP")
        }

        const verifyCode = generateVerifyCode(20);

        await UserModel.findOneAndUpdate({
            $or: [
                { email: body.email },
                { phone: body.phone },
            ],
        }, {
            $set: {
                forgetPassword: { verifyCode },
            }
        });

        return NextResponse.json({ verifyCode });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}