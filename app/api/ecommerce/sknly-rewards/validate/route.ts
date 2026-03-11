import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { dbConnect } from "@/config/database";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { getDeliveryFee } from "@/functions/eCommerce-store";
import OrdersModel, { IOrderSknlyRewards } from "@/models/order";
import { CartItems } from "@/store/slices/cart";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export interface SknlyRewardsValidateApiRequestData {
    deliveryType?: CartItems["shippingOption"],
}

export interface SknlyRewardsValidateApiResponseData {
    description: IOrderSknlyRewards,
    type: "discount" | "the-sknly-tote",
    discount?: {
        flat?: number,
        percent?: number,
    },
}

export async function POST(request: NextRequest) {
    try {

        await dbConnect();

        const body = await request.json() as SknlyRewardsValidateApiRequestData;
        const session = await getServerSession(authOptions);

        if (!session?.user.id) {
            return NextResponse.json(null);
        }

        const ordersCount = await OrdersModel.countDocuments({
            userId: session.user.id,
            orderStatus: "delivered",
        });

        const FREE_SHIPPING_POS = 0;
        const FLAT100OFF_POS = 2;
        const SKNLY_TOTE_POS = 5;
        const PERCENT25OFF_POS = 7;

        let response: SknlyRewardsValidateApiResponseData | null = null;

        if (FREE_SHIPPING_POS === ordersCount) {

            if (!body.deliveryType) {
                const result = null;
                return NextResponse.json(result);
            }

            if (body.deliveryType === "express") {
                return NextResponse.json(null);
            }

            response = {
                type: "discount",
                discount: { flat: getDeliveryFee({ type: "standard" }) },
                description: "Free shipping",
            };
        } else if (FLAT100OFF_POS === ordersCount) {
            response = {
                type: "discount",
                discount: { flat: 100 },
                description: "₹ 100 off",
            };
        } else if (SKNLY_TOTE_POS === ordersCount) {
            response = {
                type: "the-sknly-tote",
                description: "The Sknly Tote"
            };
        } else if (PERCENT25OFF_POS === ordersCount) {
            response = {
                type: "discount",
                discount: { percent: 20 },
                description: "20% Off",
            };
        }

        return NextResponse.json(response);

    } catch (err) {
        console.log(err);
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}