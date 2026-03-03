import { getOneOrder } from "@/functions/ecommerce/orders/get-one-order"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import MyAccountLayout from "@/layouts/my-account-layout"
import { notFound } from "next/navigation"
import SingleOrderDetailsPageClient from "./client"

type Props = {
    params: Promise<{
        orderId: string,
    }>
}

const SingleOrderDetailsPage = async ({ params }: Props) => {

    const orderId = (await params).orderId;

    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page="my-orders"
            >
                <SingleOrderDetailsPageClient
                    orderId={orderId}
                />
            </MyAccountLayout>
        </InnerPagesLayout>
    )
}

export default SingleOrderDetailsPage