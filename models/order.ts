import mongoose, { Types } from "mongoose";
import Counter from "./counter";
import { AddAddressRequestData } from "@/functions/ecommerce/address/add";

export interface IOrderSingleItem {
    productId: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
}

export interface IOrderBundleItem {
    items: IOrderSingleItem[],
    size: number,
    saved: number,
    giftBox?: {
        enable: boolean,
        message: string,
    },
}

export type IOrderShippingAddress = Omit<AddAddressRequestData, "userId">
export type IOrderPaymentMethods = "razorpay" | "cod";
export type IOrderPaymentStatus = "pending" | "paid" | "failed";
export type IOrderStatus = "payment-pending" | "processing" | "shipped" | "delivered" | "cancelled";
export type IOrderSknlyRewards = "Free shipping" | "₹ 100 off" | "The Sknly Tote" | "20% Off";

export interface OrdersModelInterface extends mongoose.Document {
    userId?: Types.ObjectId,
    orderNo?: string,
    orderItems: {
        singleItems: IOrderSingleItem[],
        bundle?: IOrderBundleItem,
    },
    sknlyReward?: IOrderSknlyRewards,
    shippingAddress: IOrderShippingAddress,
    contactInfo: {
        name: string,
        phone: string,
        email: string,
    }
    paymentMethod: IOrderPaymentMethods,
    paymentStatus: IOrderPaymentStatus,
    orderStatus: IOrderStatus,
    subTotal: number,
    deliveryFee: number,
    codFee: number,
    discount: number,
    total: number,
    deliveredAt?: Date | string,
    createdAt: string | Date,
}

const singleProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
})

const orderSchema = new mongoose.Schema<OrdersModelInterface>({
    userId: {
        type: Types.ObjectId,
        ref: "Users",
    },
    orderNo: {
        type: String,
        required: true,
        unique: true,
    },
    orderItems: {
        singleItems: [singleProductSchema],
        bundle: {
            items: [singleProductSchema],
            size: { type: Number },
            saved: { type: Number },
            giftBox: {
                enable: { type: Boolean },
                message: { type: String },
            },
        },
    },
    shippingAddress: {
        line1: { type: String, required: true },
        line2: { type: String },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        state: { type: String, required: true },
    },
    contactInfo: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        enum: ["razorpay", "cod"],
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        required: true,
    },
    orderStatus: {
        type: String,
        enum: ["payment-pending", "processing", "shipped", "delivered", "cancelled"],
        required: true,
    },
    subTotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true, default: 0 },
    codFee: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true },
    deliveredAt: {
        type: Date,
    },
    sknlyReward: {
        type: String,
        enum: ["Free shipping", "₹ 100 off", "The Sknly Tote", "20% Off"],
    }
}, { timestamps: true })

orderSchema.pre("validate", async function () {
    if (!this.isNew) return;

    if (this.orderNo) return;

    const counter = await Counter.findOneAndUpdate(
        { name: "orderNumber" },
        { $inc: { sequence: 1 } },
        { new: true, upsert: true }
    );

    this.orderNo = String(counter.sequence).padStart(11, "0");
});

const OrdersModel = mongoose.models.Orders || mongoose.model("Orders", orderSchema);
export default OrdersModel;