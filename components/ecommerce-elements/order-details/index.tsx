'use client';

import DefaultSection from '@/layouts/default-section'
import { IOrderSingleItem, OrdersModelInterface } from '@/models/order'
import Image from 'next/image'
import GiftBoxImage from "./assets/gift-box-image.png";
import { getGiftBoxPrice, getStoreCurrency } from '@/functions/eCommerce-store';
import { useRouter } from 'next/navigation';

const OrderDetails = ({
    order,
}: {
    order: OrdersModelInterface,
}) => {

    const router = useRouter();

    const currency = getStoreCurrency();

    return (
        <DefaultSection
            className="max-w-260! space-y-10"
            outerClassName="py-10 text-[#BA131C]"
        >
            <h2
                className="text-center text-3xl font-semibold"
            >Order Details</h2>
            <div
                className="grid grid-cols-2 md:grid-cols-5 gap-5"
            >
                {
                    [
                        {
                            title: "Order ID:",
                            content: (
                                <>
                                    <p>#{order?.orderNo}</p>
                                </>
                            ),
                        },
                        {
                            title: "Placed on:",
                            content: (
                                <>
                                    <p>{(typeof order?.createdAt === "string" ? order?.createdAt : "").split("T")[0].split("-").join("/")}</p>
                                </>
                            )
                        },
                        {
                            title: "Estimated Delivery:",
                            content: (
                                <>
                                    <p>N/A</p>
                                </>
                            ),
                        },
                        {
                            title: "Payment Method:",
                            content: (
                                <>
                                    <p>{order?.paymentMethod === "cod" ? "Cash on Delivery" : "Razorpay"}</p>
                                </>
                            )
                        },
                        {
                            title: "Shipping Address:",
                            content: (
                                <>
                                    <p>{order?.shippingAddress.line1}, {order?.shippingAddress.city}, {order?.shippingAddress.pincode}, {order?.shippingAddress.state}</p>
                                </>
                            ),
                            className: "col-span-2 md:col-span-1"
                        },
                    ].map((col, index) => (
                        <div
                            key={index}
                            className={`${col.className}`}
                        >
                            <p
                                className="text-base md:text-lg font-semibold"
                            >{col.title}</p>
                            <div>
                                {col.content}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                className='bg-[#FDEBEB] p-5 md:p-10 rounded-xl space-y-6'
            >
                {
                    order?.orderItems.bundle && (
                        <div
                            className='space-y-5'
                        >
                            {order.orderItems.bundle.size && (
                                <p
                                    className='font-semibold'
                                >Bundle of {order.orderItems.bundle.size}</p>
                            )}

                            <div
                                className='space-y-6'
                            >
                                {order.orderItems.bundle.items.map((product, index) => (
                                    <div
                                        key={index}
                                    >
                                        <ProductRow
                                            product={product}
                                            description='Whipped Shower Foam'
                                        />
                                    </div>
                                ))}

                                {order.orderItems.bundle.giftBox && (
                                    <div>
                                        <ProductRow
                                            product={{
                                                image: GiftBoxImage.src,
                                                name: "Gift Box",
                                                price: getGiftBoxPrice(),
                                                productId: "gift-box",
                                                quantity: 1,
                                            }}
                                        />
                                    </div>
                                )}

                            </div>

                        </div>
                    )
                }

                {
                    order.orderItems.singleItems.length > 0 && (
                        <div
                            className={'space-y-6' + ` ${order.orderItems.bundle && order.orderItems.bundle.items.length > 0 ? "border-t pt-7 mt-7" : ""}`}
                        >
                            {order.orderItems.singleItems.map((product, index) => (
                                <div
                                    key={index}
                                >
                                    <ProductRow
                                        product={product}
                                        description='Whipped Shower Foam'
                                    />
                                </div>
                            ))}
                        </div>
                    )
                }

                <hr />

                <div
                    className='space-y-3'
                >
                    {
                        [
                            {
                                label: "Order Value:",
                                value: currency + order.subTotal,
                            },
                            {
                                label: "You saved:",
                                value: currency + (order.orderItems.bundle?.saved || 0),
                            },
                            {
                                label: "Delivery:",
                                value: currency + order.deliveryFee,
                            },
                            {
                                label: "Total:",
                                value: currency + order.total,
                            },
                        ].map((row, index, rows) => (
                            <div
                                key={index}
                                className={
                                    'flex items-center justify-between'
                                    + ` ${(rows.length - 1) === index ? "font-bold" : ""}`
                                }
                            >
                                <div
                                    className='w-full'
                                >
                                    <p>{row.label}</p>
                                </div>
                                <div
                                    className='w-full text-right'
                                >
                                    <p>{row.value}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div
                className='flex justify-center'
            >
                <button
                    className='outline-button'
                    onClick={() => {
                        router.push("/shower-foams")
                    }}
                >
                    Continue Shopping
                </button>
            </div>

        </DefaultSection>
    )
}

function ProductRow({
    product,
    description
}: {
    product: IOrderSingleItem,
    description?: string,
}) {

    const currency = getStoreCurrency();

    return (
        <div
            className='flex items-center gap-6'
        >
            <div
                className='shrink-0 aspect-square w-20 md:w-35'
            >
                <Image
                    alt={product.name}
                    src={product.image}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover rounded-xl bg-white'
                />
            </div>

            <div
                className='flex items-center justify-between gap-2 w-full'
            >
                <div
                    className='md:space-y-2'
                >
                    <p
                        className='font-semibold line-clamp-1'
                    >{product.name}</p>
                    {
                        description && (
                            <p
                                className='line-clamp-1'
                            >{description}</p>
                        )
                    }
                    <p
                        className='font-semibold'
                    >Qty: {product.quantity}</p>
                </div>
                <div>
                    <p
                        className='font-semibold'
                    >{currency + product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails