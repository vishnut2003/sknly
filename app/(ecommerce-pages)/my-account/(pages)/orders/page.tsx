import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getStoreCurrency } from "@/functions/eCommerce-store"
import { getUsersOrders } from "@/functions/ecommerce/orders/get-user-orders"
import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import MyAccountLayout from "@/layouts/my-account-layout"
import { IOrderSingleItem } from "@/models/order"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProductImage1 from "./assets/product-image-1.png";
import ProductImage2 from "./assets/product-image-2.png";
import ProductImage3 from "./assets/product-image-3.png";

const MyAccoutOrdersPage = async () => {

    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
        notFound();
    }

    const orders = await getUsersOrders(session.user.id);
    const currency = getStoreCurrency();

    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page="my-orders"
            >
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
                            className="w-full text-left hidden md:table"
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
                                                key={index}
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
                                                        key={index + `table-col-1`}
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
                                                        key={index + "col-last"}
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

                        <div
                            className="md:hidden"
                        >
                            <div
                                className="space-y-10"
                            >
                                {orders.map((order, index) => (
                                    <div
                                        key={index}
                                        className="space-y-2"
                                    >
                                        <div
                                            className="flex items-center justify-between"
                                        >
                                            <p
                                                className="capitalize font-semibold"
                                            >{order.orderStatus.split("-").join(" ")}</p>
                                            <p
                                                className="text-sm"
                                            >{order.createdAt instanceof Date ? order.createdAt.toISOString().split("T")[0].split("-").join("/") : ""}</p>
                                        </div>
                                        <div
                                            className="space-y-5"
                                        >
                                            {order.orderItems.bundle && (
                                                order.orderItems.bundle.items.length > 0 && (
                                                    <div
                                                        className="flex gap-10 pb-4"
                                                    >
                                                        <div
                                                            className="aspect-square w-30 relative"
                                                        >
                                                            {
                                                                [
                                                                    {
                                                                        image: ProductImage1,
                                                                        className: ""
                                                                    },
                                                                    {
                                                                        image: ProductImage2,
                                                                        className: "absolute top-2 left-2",
                                                                    },
                                                                    {
                                                                        image: ProductImage3,
                                                                        className: "absolute top-4 left-4",
                                                                    }
                                                                ].map((item, index) => (
                                                                    <Image
                                                                        key={index}
                                                                        alt="Bundles"
                                                                        src={item.image}
                                                                        className={`w-full h-full object-cover shadow-lg rounded-lg ${item.className}`}
                                                                    />
                                                                ))
                                                            }
                                                        </div>

                                                        <div
                                                            className="w-full flex items-stretch"
                                                        >
                                                            <div
                                                                className="flex flex-col items-start justify-between"
                                                            >
                                                                <div>
                                                                    <p
                                                                        className="text-base font-semibold"
                                                                    >Bundle of {order.orderItems.bundle.size}</p>
                                                                    <p
                                                                        className="text-sm"
                                                                    >{order.orderItems.bundle.size} Product</p>
                                                                </div>

                                                                <p>Qty: 1</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}

                                            {order.orderItems.singleItems.length > 0 && (
                                                <div>
                                                    {order.orderItems.singleItems.map((product, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex gap-10 pb-4"
                                                        >
                                                            <div
                                                                className="aspect-square w-30 relative"
                                                            >
                                                                <Image
                                                                    key={index}
                                                                    alt="Bundles"
                                                                    src={product.image}
                                                                    className={`w-full h-full object-cover shadow-lg rounded-lg`}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </div>

                                                            <div
                                                                className="w-full flex items-stretch"
                                                            >
                                                                <div
                                                                    className="flex flex-col items-start justify-between"
                                                                >
                                                                    <div>
                                                                        <p
                                                                            className="text-base font-semibold"
                                                                        >{product.name}</p>
                                                                        <p
                                                                            className="text-sm"
                                                                        >Whipped Body Wash</p>
                                                                    </div>
                                                                    <p>Qty: 1</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <Link
                                                className="block underline text-center"
                                                href={`/my-account/orders/${order._id.toString()}`}
                                            >View Order</Link>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </DefaultSection>

                </div>
            </MyAccountLayout>
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