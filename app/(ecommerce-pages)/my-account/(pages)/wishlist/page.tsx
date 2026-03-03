import InnerPagesLayout from "@/layouts/inner-pages-layout"
import WishlistPageClient from "./client"
import MyAccountLayout from "@/layouts/my-account-layout"

const WishlistPage = async () => {
    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page="wishlist"
            >
                <WishlistPageClient />
            </MyAccountLayout>
        </InnerPagesLayout>
    )
}

export default WishlistPage