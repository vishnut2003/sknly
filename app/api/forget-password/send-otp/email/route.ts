import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { generateOTP } from "@/functions/generate-otp";
import { sendMail } from "@/functions/mail/send";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export interface ForgetPasswordSendMailApiRequestData {
    email: string,
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json() as ForgetPasswordSendMailApiRequestData;

        if (!body || !body.email) {
            throw new Error("Email is Required.")
        }

        const user = await UserModel.findOne({ email: body.email });

        if (!user) {
            throw new Error("User with this email does not exist.")
        }

        const otp = generateOTP();
        console.log(otp, "otp")

        await sendMail({
            to: body.email,
            subject: "Sknly - Reset Password OTP",
            element: `OTP for reset password is ${otp}`,
        })

        await UserModel.findOneAndUpdate(
            { email: body.email },
            { forgetPassword: { otp } },
        );

        return NextResponse.json({ ok: true });

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}