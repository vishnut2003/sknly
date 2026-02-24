import YouMightAlsoLikeSection from "@/app/(products-page)/products/[slug]/(components)/you-might-also-like"
import CartCheckoutLayout from "@/layouts/cart-checkout-layout"
import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout"
import { RiShoppingCart2Line } from "@remixicon/react"

const CartPage = () => {
    return (
        <InnerPagesLayout>

            <CartCheckoutLayout
                page="Cart"
            >
                <div
                    className="flex items-center gap-2 text-3xl font-semibold"
                >
                    <h1>My Cart</h1>
                    <RiShoppingCart2Line
                        size={30}
                    />
                </div>
            </CartCheckoutLayout>

            <DefaultSection
                outerClassName="py-10"
            >
                <YouMightAlsoLikeSection />
            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default CartPage