import DefaultSection from '@/layouts/default-section'
import { IOrderSingleItem, OrdersModelInterface } from '@/models/order'
import GiftBoxImage from "./assets/gift-box-image.png";
import { getGiftBoxPrice, getStoreCurrency } from '@/functions/eCommerce-store';
import { Html, Body, Container, Text, Tailwind, Row, Column } from "@react-email/components";

const OrderNotificationTemplate = ({
    order,
    primaryText,
}: {
    order: OrdersModelInterface,
    primaryText: string,
}) => {

    const haveBundle = order.orderItems.bundle?.size || null;

    return (
        <div>
            <OrderDetails
                order={order}
                haveBundle={haveBundle}
                primaryText={primaryText}
            />
        </div>
    )
}


const OrderDetails = ({
    order,
    haveBundle,
    primaryText,
}: {
    order: OrdersModelInterface,
    haveBundle: number | null,
    primaryText: string,
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
                                        value: order.paymentMethod,
                                    },
                                    {
                                        label: "Order Status",
                                        value: order.orderStatus.split("-").join(" "),
                                    },
                                ].map((row, index) => (
                                    <Row
                                        key={index}
                                        className='text-left text-lg font-semibold capitalize py-3 px-4 text-[#BA131C] bg-[#fdebeb] border-b'
                                    >
                                        <Column
                                            className='w-full'
                                        >{row.label}</Column>
                                        <Column
                                            className='w-full'
                                        >{row.value}</Column>
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
                                >
                                    <Column
                                        className='w-full py-3 px-4'
                                    >{product.name}</Column>
                                    <Column
                                        className='w-full py-3 px-4'
                                    >{product.quantity} x {product.price}</Column>
                                </Row>
                            ))}
                            
                            <Row>
                                <Column
                                    className='w-full py-3 px-4'
                                >Total</Column>
                                <Column
                                    className='w-full py-3 px-4'
                                >{order.total}</Column>
                            </Row>

                        </Container>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default OrderNotificationTemplate