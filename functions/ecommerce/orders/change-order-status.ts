import { dbConnect } from "@/config/database";
import OrdersModel, { IOrderStatus } from "@/models/order";

export async function changeOrderStatus({ orderId, status }: {
    orderId: string,
    status: IOrderStatus,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            await OrdersModel.findByIdAndUpdate(
                orderId,
                {
                    orderStatus: status,
                }
            );
            
            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}