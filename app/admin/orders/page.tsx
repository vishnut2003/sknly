import AdminDashboardLayout from "@/layouts/admin-dashboard"
import SearchOrdersOption from "./(components)/search"
import Link from "next/link";
import OrdersModel, { OrdersModelInterface } from "@/models/order";
import { dbConnect } from "@/config/database";
import { Fragment } from "react/jsx-runtime";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { FormateDateObject } from "@/functions/formatte-date";

export const dynamic = 'force-dynamic';

type Props = {
    searchParams: Promise<{
        page?: string,
        search?: string,
    }>
}

export default async function OrdersPage({
    searchParams,
}: Props) {

    const page = Number((await searchParams).page) || 1;
    const searchText = (await searchParams).search || "";

    const limit = 10;
    const skip = (page - 1) * limit;

    const findQueries: {
        // eslint-disable-next-line
        [key: string]: any,
    } = {};

    if (searchText) {
        findQueries["orderNo"] = searchText;
    }

    await dbConnect();
    const orders = await OrdersModel.find(findQueries, null, { limit, skip }) as OrdersModelInterface[];

    return (
        <AdminDashboardLayout>

            <div
                className="space-y-5"
            >

                <div
                    className="bg-white p-3 rounded-lg"
                >
                    <div
                        className="max-w-md"
                    >
                        <SearchOrdersOption />
                    </div>
                </div>

                <div
                    className="bg-white min-h-70 rounded-lg overflow-hidden"
                >
                    <div
                        className="max-w-full overflow-auto"
                    >
                        <table
                            className="min-w-max md:w-full text-left"
                        >
                            <thead>
                                <tr
                                    className="text-white bg-[#BA131C]"
                                >
                                    {
                                        [
                                            "Order No.",
                                            "Created At",
                                            "Customer Name",
                                            "Payment Method",
                                            "Order Status",
                                            "Actions",
                                        ].map((item, index) => (
                                            <th
                                                key={index}
                                                className="py-3 px-5"
                                            >{item}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-100 hover:bg-gray-100"
                                    >
                                        {
                                            [
                                                `#${order.orderNo}`,
                                                order.createdAt instanceof Date ? FormateDateObject({ timeStamp: order.createdAt.getTime() }) : "Invalid Date",
                                                order.contactInfo.name,
                                                order.paymentMethod === "razorpay" ? "Razorpay" : "Cash on Delivery",
                                                order.orderStatus,
                                                (
                                                    <Fragment
                                                        key={index + "Action"}
                                                    >
                                                        <Link
                                                            href={`/admin/orders/${order._id.toString()}`}
                                                            className="font-semibold text-[#BA131C]"
                                                        >View Order</Link>
                                                    </Fragment>
                                                )
                                            ].map((col, index) => (
                                                <td
                                                    key={index}
                                                    className="py-3 px-5"
                                                >
                                                    <p
                                                        className="min-w-max"
                                                    >{col}</p>
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {orders.length === 0 && (
                        <div
                            className="p-4"
                        >
                            <ErrorMessageElement
                                text="Orders not found."
                            />
                        </div>
                    )}

                </div>

                <div
                    className="flex items-center justify-between"
                >
                    <div
                        className="flex items-center gap-3"
                    >
                        {
                            [
                                {
                                    label: "Prev",
                                    href: `/admin/orders?search=${searchText}&page=${page - 1}`,
                                    disable: page === 1,
                                },
                                {
                                    label: "Next",
                                    href: `/admin/orders?search=${searchText}&page=${page + 1}`,
                                    disable: orders.length === 0,
                                }
                            ].map((action, index) => {
                                if (!action.disable) {
                                    return (
                                        <Link
                                            href={action.href}
                                            key={index}
                                            className="py-2 px-4 bg-[#BA131C] text-white rounded-lg cursor-pointer"
                                        >{action.label}</Link>
                                    )
                                }
                            })
                        }
                    </div>

                    <div>
                        <p
                            className="font-semibold"
                        >Page: {page}</p>
                    </div>

                </div>

            </div>

        </AdminDashboardLayout>
    )

}