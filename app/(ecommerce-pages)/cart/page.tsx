import YouMightAlsoLikeSection from "@/app/(products-page)/products/[slug]/(components)/you-might-also-like"
import CartCheckoutLayout from "@/layouts/cart-checkout-layout"
import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import { RiShoppingCart2Line } from "@remixicon/react"
import CartProductTable from "./cart-table"

const CartPage = () => {
    return (
        <InnerPagesLayout>

            <CartCheckoutLayout
                page="Cart"
                afterFormText="Your shower upgrade is only a checkout away!"
            >
                <div
                    className="flex items-center gap-2 text-4xl font-semibold"
                >
                    <h1>My Cart</h1>
                    <RiShoppingCart2Line
                        size={35}
                    />
                </div>

                <CartProductTable/>

            </CartCheckoutLayout>

            <DefaultSection
                outerClassName="pb-10 pt-25"
            >
                <YouMightAlsoLikeSection />
            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default CartPage