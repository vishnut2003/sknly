import { dbConnect } from "@/config/database";
import AdminDashboardLayout from "@/layouts/admin-dashboard";
import OrdersModel, { OrdersModelInterface } from "@/models/order";
import { notFound } from "next/navigation";
import ChangeOrderStatusElement from "./(components)/change-order-status";
import ChangePaymentStatusElement from "./(components)/change-payment-status";
import OrderDetails from "@/components/ecommerce-elements/order-details";

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{
        orderId: string,
    }>,
}

export default async function SingleOrdersDetailsForAdmin({
    params,
}: Props) {

    const orderId = (await params).orderId;
    await dbConnect();
    const order = await OrdersModel.findById(orderId) as OrdersModelInterface | null;

    if (!order) {
        notFound();
    }

    return (
        <AdminDashboardLayout>
            <div>
                <div
                    className="bg-white p-5 max-w-120 w-full space-y-4 rounded-lg"
                >
                    <ChangeOrderStatusElement
                        defaultStatus={order.orderStatus}
                        orderId={order._id.toString()}
                    />
                    <ChangePaymentStatusElement
                        defaultStatus={order.paymentStatus}
                        orderId={order._id.toString()}
                    />
                </div>

                <OrderDetails
                    order={JSON.parse(JSON.stringify(order))}
                    hideShopButton
                />

            </div>
        </AdminDashboardLayout>
    )

}