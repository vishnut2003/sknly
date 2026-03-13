import { dbConnect } from "@/config/database";
import AdminDashboardLayout from "@/layouts/admin-dashboard";
import OrdersModel, { OrdersModelInterface } from "@/models/order";
import { notFound } from "next/navigation";
import ChangeOrderStatusElement from "./(components)/change-order-status";
import ChangePaymentStatusElement from "./(components)/change-payment-status";
import OrderDetails from "@/components/ecommerce-elements/order-details";
import CopyTextElement from "@/components/ui-elements/copy-text-element";
import Link from "next/link";

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
            <div
                className="space-y-6"
            >
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

                <p>Order Invoice: <Link href={`/invoice/${order._id.toString()}`} target="_blank" className="font-semibold underline text-[#BA131C]">View Invoice</Link></p>

                <div
                    className="space-y-3"
                >
                    <h2
                        className="text-lg font-bold underline"
                    >Customer Details</h2>
                    <table
                        className="text-left bg-white text-sm rounded-lg"
                    >
                        <tbody>
                            {
                                [
                                    {
                                        label: "Customer Name",
                                        value: order.contactInfo.name,
                                    },
                                    {
                                        label: "Email Address",
                                        value: order.contactInfo.email,
                                    },
                                    {
                                        label: "Contact Number",
                                        value: order.contactInfo.phone,
                                    }
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-50"
                                    >
                                        <th
                                            className="py-3 px-5"
                                        >{item.label}</th>
                                        <td
                                            className="py-3 px-5"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                            >
                                                <p>{item.value}</p>
                                                <CopyTextElement
                                                    text={item.value}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div
                    className="space-y-3"
                >
                    <h2
                        className="text-lg font-bold underline"
                    >Sknly Rewards</h2>
                    <table
                        className="text-left bg-white text-sm rounded-lg"
                    >
                        <tbody>
                            {
                                [
                                    {
                                        label: "Sknly Rewards Applied?",
                                        value: order.sknlyReward ? "Yes" : "No",
                                    },
                                    {
                                        label: "Reward",
                                        value: order.sknlyReward || "No Rewards"
                                    }
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-50"
                                    >
                                        <th
                                            className="py-3 px-5"
                                        >{item.label}</th>
                                        <td
                                            className="py-3 px-5"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                            >
                                                <p>{item.value}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <OrderDetails
                    order={JSON.parse(JSON.stringify(order))}
                    hideShopButton
                />

            </div>
        </AdminDashboardLayout>
    )

}