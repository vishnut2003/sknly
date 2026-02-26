import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { addUser } from "@/functions/users/add";
import { AuthTypes } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export interface SignupUserApiRequestData {
    name?: string,
    email?: string,
    phone?: string,
    password: string,
    authType: AuthTypes,
}

export async function POST(request: NextRequest) {
    try {

        const body = await request.json() as SignupUserApiRequestData;

        if (!body) {
            throw new Error("Required fields are empty.")
        }

        if (!body.email) {
            throw new Error("Email is required.");
        }

        if (!body.name) {
            throw new Error("Name is required.");
        }

        if (!body.authType) {
            throw new Error("AuthType is required.")
        }

        await addUser({
            name: body.name,
            authType: body.authType,
            email: body.email,
            password: body.password,
            phone: body.phone,
        })

        return NextResponse.json({ ok: true })

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}