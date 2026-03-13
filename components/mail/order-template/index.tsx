import { OrdersModelInterface } from '@/models/order'
import { getStoreCurrency } from '@/functions/eCommerce-store';
import { Html, Body, Container, Text, Tailwind, Row, Column, Link } from "@react-email/components";

const OrderNotificationTemplate = ({
    order,
    primaryText,
    secondaryText,
    action,
}: {
    order: OrdersModelInterface,
    primaryText: string,
    secondaryText?: string,
    action?: {
        text: string,
        href: string,
    },
}) => {

    const haveBundle = order.orderItems.bundle?.size || null;

    return (
        <div>
            <OrderDetails
                order={order}
                haveBundle={haveBundle}
                primaryText={primaryText}
                secondaryText={secondaryText}
                action={action}
            />
        </div>
    )
}


const OrderDetails = ({
    order,
    haveBundle,
    primaryText,
    secondaryText,
    action,
}: {
    order: OrdersModelInterface,
    haveBundle: number | null,
    primaryText: string,
    secondaryText?: string,
    action?: {
        text: string,
        href: string,
    }
}) => {

    const currency = getStoreCurrency();

    return (
        <Html>
            <Tailwind>
                <Body>
                    <Container
                        className='space-y-4'
                    >

                        <Text
                            className='text-xl text-center'
                        >{primaryText}</Text>

                        {action && (
                            <Container
                                className='w-full text-center'
                            >
                                <Link
                                    href={action.href}
                                    className='mx-auto block text-xl py-3 px-5 bg-[#BA131C] text-white rounded-lg'
                                >{action.text}</Link>
                            </Container>
                        )}

                        <Text
                            className='text-3xl font-semibold text-center'
                        >Order Details</Text>

                        <Container
                            className='border-t border-l border-r'
                        >
                            {
                                [
                                    {
                                        label: "Order No:",
                                        value: "#" + order.orderNo,
                                    },
                                    {
                                        label: "Payment Method:",
                                        value: order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod,
                                    },
                                    {
                                        label: "Order Status",
                                        value: order.orderStatus === "processing" ? "Being Prepared" : order.orderStatus,
                                    },
                                    {
                                        label: "Name",
                                        value: order.contactInfo.name,
                                    },
                                    {
                                        label: "Email",
                                        value: order.contactInfo.email,
                                    },
                                    {
                                        label: "Phone",
                                        value: order.contactInfo.phone,
                                    },
                                    {
                                        label: "Address",
                                        value: `${order.shippingAddress.line1}, ${order.shippingAddress.city}, ${order.shippingAddress.pincode}, ${order.shippingAddress.state}`
                                    }
                                ].map((row, index) => (
                                    <Row
                                        key={index}
                                        className='text-left text-lg font-semibold capitalize py-3 px-4 text-[#BA131C] bg-[#fdebeb] border-b'
                                    >
                                        <Column
                                            className='w-full'
                                        >
                                            <Text
                                                className='w-full'
                                            >{row.label}</Text>
                                        </Column>
                                        <Column
                                            className='w-full'
                                        >
                                            <Text
                                                className='w-full'
                                            >{row.value}</Text>
                                        </Column>
                                    </Row>
                                ))
                            }
                        </Container>

                        <Container
                            className='border bg-[#BA131C] text-white text-lg'
                        >
                            {haveBundle && (
                                <Row
                                    className='border-b'
                                >
                                    <Column
                                        className='w-full py-3 px-4'
                                    >Bundle Of {haveBundle}</Column>
                                    <Column
                                        className='w-full py-3 px-4'
                                    >Qty: 1</Column>
                                </Row>
                            )}

                            {order.orderItems.singleItems.map((product, index) => (
                                <Row
                                    className='border-b'
                                    key={index}
                                >
                                    <Column
                                        className='w-full py-3 px-4'
                                    >{product.name}</Column>
                                    <Column
                                        className='w-full py-3 px-4'
                                    >{product.quantity} x {currency}{product.price}</Column>
                                </Row>
                            ))}

                            <Row>
                                <Column
                                    className='w-full py-3 px-4'
                                >Total</Column>
                                <Column
                                    className='w-full py-3 px-4'
                                >{currency}{order.total}</Column>
                            </Row>

                        </Container>

                        <Container>
                            <Text
                                className='text-center text-lg'
                            >{secondaryText}</Text>
                            <Text
                                className='text-center text-lg'
                            >Your shower is about to get delicious.</Text>
                            <Text
                                className='text-center text-lg'
                            >- Sknly.</Text>
                        </Container>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default OrderNotificationTemplate