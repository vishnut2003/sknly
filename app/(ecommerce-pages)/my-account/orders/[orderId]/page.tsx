import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import MyAccountLayout from "@/layouts/my-account-layout"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{
        orderId: string,
    }>
}

const SingleOrderDetailsPage = async ({ params }: Props) => {

    const orderId = (await params).orderId;

    const order = await getOneOrder(orderId);

    if (!order) {
        notFound();
    }

    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page="my-orders"
            >
            </MyAccountLayout>
        </InnerPagesLayout>
    )
}

export default SingleOrderDetailsPage