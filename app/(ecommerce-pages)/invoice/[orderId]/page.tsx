import { Metadata } from "next"
import OrderInvoicePDFClient from "./client"
import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
    title: "Order Invoice",
    robots: {
        index: false,
    }
}

type Props = {
    params: Promise<{
        orderId: string,
    }>,
}

const OrderInvoicePDF = async ({
    params,
}: Props) => {

    const orderId = (await params).orderId;

    const order = await getOneOrder(orderId);

    if (!order) {
        notFound();
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen"
        >
            <OrderInvoicePDFClient
                order={JSON.parse(JSON.stringify(order))}
            />
        </div>
    )
}

export default OrderInvoicePDF