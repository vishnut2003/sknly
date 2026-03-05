import InnerPagesLayout from "@/layouts/inner-pages-layout"
import MyAccountLayout from "@/layouts/my-account-layout"
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