import { dbConnect } from "@/config/database";
import OrdersModel, { IOrderPaymentMethods, IOrderPaymentStatus, IOrderShippingAddress, IOrderStatus, OrdersModelInterface } from "@/models/order";

export interface CreateOrderRequestData {
    userId?: string,
    orderNo: string,
    orderItems: OrdersModelInterface["orderItems"],
    shippingAddress: IOrderShippingAddress,
    contactInfo: OrdersModelInterface["contactInfo"],
    paymentMethod: IOrderPaymentMethods,
    paymentStatus: IOrderPaymentStatus,
    orderStatus: IOrderStatus,
    subTotal: number,
    deliveryFee: number,
    codFee: number,
    discount: number,
}

export async function createOrder(order: CreateOrderRequestData) {
    return new Promise<string>(async (resolve, reject) => {
        try {
            await dbConnect();
            
            if (order.orderItems.singleItems.length === 0) {
                if (!order.orderItems.bundle) {
                    throw new Error("Order items is required.")
                }
            }

            if (
                order.orderStatus !== "payment-pending" &&
                order.orderStatus !== "processing"
            ) {
                throw new Error("Invalid Order Status.")
            }

            if (order.paymentMethod === "cod") {
                if (order.orderStatus !== "processing") {
                    throw new Error("Order status should be processing for COD.");
                }
            } else if (order.paymentMethod === "razorpay") {
                if (order.orderStatus !== "payment-pending") {
                    throw new Error("Order status should be pending-payment for RAZORPAY.");
                }
            } else {
                throw new Error("Invalid payment method.")
            }

            if (
                !order.orderNo ||
                !order.orderStatus ||
                !order.paymentStatus ||
                !order.shippingAddress ||
                !order.subTotal ||
                !order.userId
            ) {
                throw new Error("Required fields is missing.")
            }

            const newOrder = new OrdersModel(order) as OrdersModelInterface;

            await newOrder.save();

            const orderId = newOrder._id.toString();

            if (!orderId) {
                throw new Error("Order ID not found.")
            }

            return resolve(orderId);

        } catch (err) {
            return reject(err);
        }
    })
}