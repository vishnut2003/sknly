import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export interface RazorpayCreateOrderApiRequestData {
    amount: number,
    orderNo: string,
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as RazorpayCreateOrderApiRequestData;

        if (!body.amount || !body.orderNo) {
            throw new Error('required field is missing.')
        }

        if (typeof body.amount !== "number") {
            throw new Error("Order amount should be number.")
        }

        const KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const KEY_SECRET = process.env.RAZORPAY_SECRET_KEY;

        if (!KEY_ID || !KEY_SECRET) {
            throw new Error("Razorpay KEY_ID and KEY_SECRET is missing.")
        }

        const razorpay = new Razorpay({
            key_id: KEY_ID,
            key_secret: KEY_SECRET,
        });

        const order = await razorpay.orders.create({
            amount: body.amount * 100,
            currency: "INR",
            receipt: `order_no_${body.orderNo}`,
        })

        if (order.status !== "created") {
            throw new Error("Creating order failed from razorpay.")
        }

        return NextResponse.json(order);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}