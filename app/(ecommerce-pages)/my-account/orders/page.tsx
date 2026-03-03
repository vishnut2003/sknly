import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getStoreCurrency } from "@/functions/eCommerce-store"
import { getUsersOrders } from "@/functions/ecommerce/orders/get-user-orders"
import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import { IOrderSingleItem, OrdersModelInterface } from "@/models/order"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const MyAccoutOrdersPage = async () => {

    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
        notFound();
    }

    const orders = await getUsersOrders(session.user.id);
    const currency = getStoreCurrency();

    return (
        <InnerPagesLayout>
            <div
                className="text-[#BA131C]"
            >
                <DefaultSection
                    outerClassName="py-10"
                >
                    <h2
                        className="text-center text-2xl font-semibold"
                    >Two orders to go, the Sknly Tote Bag is almost yours ✨</h2>
                </DefaultSection>

                <DefaultSection
                    outerClassName="pb-20"
                >
                    <table
                        className="w-full text-left"
                    >
                        <thead>
                            <tr
                                className="bg-[#fdebeb]"
                            >
                                {
                                    [
                                        "Product",
                                        "Order ID",
                                        "Order Date",
                                        "Order Value",
                                        ""
                                    ].map((text, index) => (
                                        <th
                                            className={`py-2 px-5 ${index === 0 ? "w-full" : "min-w-40"}`}
                                        >
                                            {text}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="border-b"
                                >
                                    {
                                        [
                                            (
                                                <div
                                                    className="space-y-5"
                                                >
                                                    <p
                                                        className="text-lg font-semibold capitalize"
                                                    >{order.orderStatus.split("-").join(" ")}</p>
                                                    {order.orderItems.bundle && (
                                                        order.orderItems.bundle.items.length > 0 && (
                                                            <div
                                                                className="space-y-2"
                                                            >
                                                                <p
                                                                    className="text-sm font-semibold"
                                                                >Bundle of {order.orderItems.bundle.size}</p>
                                                                <div
                                                                    className="space-y-2"
                                                                >
                                                                    {order.orderItems.bundle.items.map((p, i) => (
                                                                        <ProductRow
                                                                            product={p}
                                                                            key={i}
                                                                            isBundle={{
                                                                                size: order.orderItems.bundle?.size || 0,
                                                                            }}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}

                                                    {order.orderItems.bundle && (
                                                        order.orderItems.bundle.items.length > 0 && (
                                                            order.orderItems.singleItems.length > 0 && (
                                                                <p>Single Items</p>
                                                            )
                                                        )
                                                    )}

                                                    {order.orderItems.singleItems.length > 0 && (
                                                        <div
                                                            className="space-y-2"
                                                        >
                                                            {order.orderItems.singleItems.map((p, i) => (
                                                                <ProductRow
                                                                    product={p}
                                                                    key={i}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}

                                                </div>
                                            ),
                                            "#" + order.orderNo,
                                            order.createdAt instanceof Date ? order.createdAt.toISOString().split("T")[0].split("-").join("/") : "",
                                            currency + order.total,
                                            (
                                                <Link
                                                    href={`/my-account/orders/${order._id}`}
                                                    className="block underline"
                                                >View Order</Link>
                                            )
                                        ].map((col, index) => (
                                            <td
                                                key={index}
                                                className="py-6 px-5 font-semibold"
                                            >{col}</td>
                                        ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DefaultSection>

            </div>
        </InnerPagesLayout>
    )
}

function ProductRow({
    product,
    isBundle,
}: {
    product: IOrderSingleItem,
    isBundle?: {
        size: number,
    },
}) {
    return (
        <div
            className="flex items-center gap-4"
        >
            <div
                className="w-25 aspect-square"
            >
                <Image
                    alt="Product Image"
                    src={product.image}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            <div>
                <p
                    className="font-semibold"
                >{product.name} {isBundle && `(included in Bundle of ${isBundle.size})`}</p>
            </div>
        </div>
    )
}

export default MyAccoutOrdersPage