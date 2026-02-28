import { dbConnect } from "@/config/database";
import OrdersModel, { OrdersModelInterface } from "@/models/order";

export async function getOneOrder (orderId: string) {
    return new Promise<OrdersModelInterface>(async (resolve, reject) => {
        try {
            await dbConnect();
            const order = await OrdersModel.findById(orderId);

            if (!order) {
                throw new Error("Order not found.")
            }

            return resolve(order);
        } catch (err) {
            return reject(err);
        }
    })
}