import { dbConnect } from "@/config/database";
import OrdersModel, { IOrderPaymentStatus } from "@/models/order";

export async function changeOrderPaymentStatus({
    orderId,
    status,
}: {
    orderId: string,
    status: IOrderPaymentStatus,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            await OrdersModel.findByIdAndUpdate(
                orderId,
                {
                    paymentStatus: status,
                }
            )

            return resolve();
        } catch (err) {
            return reject(err);
        }
    })
}