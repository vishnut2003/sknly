import { dbConnect } from "@/config/database";
import OrdersModel, { OrdersModelInterface } from "@/models/order";

export async function getUsersOrders(userId: string) {
    return new Promise<OrdersModelInterface[]>(async (resolve, reject) => {
        try {
            await dbConnect();
            const orders = await OrdersModel.find({
                userId,
            }, null, {
                sort: {
                    createdAt: -1,
                }
            });

            return resolve(orders);

        } catch (err) {
            return reject(err);
        }
    })
}