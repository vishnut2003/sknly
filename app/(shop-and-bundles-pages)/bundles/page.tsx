'use client';

import ShopCustomLayout from "../custom-layout"
import FeaturedImage from "../shower-foams/assets/featured-image-new.png";
import bundlesGraphics from "./assets/bundles-graphics-2.png";
import { RiShoppingCart2Line } from "@remixicon/react";
import { useEffect, useState } from "react";
import DefaultSection from "@/layouts/default-section";
import Image from "next/image";
import ProductInFrame from "./assets/products-in-one-frame.jpg";
import { ProductCardInterface } from "@/types/product";
import ProductsCardPrimary from "@/components/ecommerce-elements/product-card-primary";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateBundleGiftBoxMessage, updateBundleSize } from "@/store/slices/cart";
import { productsList } from "@/app/(products-page)/products-data";
import { useRouter } from "next/navigation";
import { calculateBundleSavedAmount } from "@/hooks/calculate-purchase-summary";
import MobileFeaturedImage from "../shower-foams/assets/mobile-featured-image-new.jpg";

const BundlesPage = () => {

    const router = useRouter();

    const cartItemBundle = useAppSelector(s => s.cart.items.bundle);
    const productPrices: {
        regular: number,
        sale: number,
    } = useAppSelector(s => {
        if (!s.cart.items.bundle) {
            return ({
                regular: 0,
                sale: 0,
            });
        }

        const bundleSize = s.cart.items.bundle.size;
        if (bundleSize === 2) {
            return ({
                regular: 899,
                sale: 845,
            })
        } else if (bundleSize === 3) {
            return ({
                regular: 899,
                sale: 791,
            })
        } else if (bundleSize === 4) {
            return ({
                regular: 899,
                sale: 764,
            })
        } else {
            throw new Error("Bundle size is invalid.")
        }
    })
    const storeDispatch = useAppDispatch();

    const products: {
        product: ProductCardInterface,
        bgColor: string,
        fgColor: string,
    }[] = [
            // {
            //     product: {
            //         featuredImage: "/images/new-product-images/espresso.jpeg",
            //         productData: {
            //             category: "",
            //             name: "Espresso Mousse",
            //             price: productPrices.regular,
            //             salePrice: productPrices.sale,
            //         },
            //         productId: productsList[2].productId,
            //         slug: productsList[2].slug,
            //     },
            //     bgColor: "#FAF4E9",
            //     fgColor: "#A46E54",
            // },
            {
                product: {
                    featuredImage: "/images/new-product-images/strawberry.jpeg",
                    productData: {
                        category: "",
                        name: "Strawberry Whipcake",
                        price: productPrices.regular,
                        salePrice: productPrices.sale,
                    },
                    productId: productsList[0].productId,
                    slug: productsList[0].slug,
                },
                bgColor: "#FDEBEB",
                fgColor: "#f23543",
            },
            {
                product: {
                    featuredImage: "/images/new-product-images/vanilla.jpeg",
                    productData: {
                        category: "",
                        name: "Vanilla Melt",
                        price: productPrices.regular,
                        salePrice: productPrices.sale,
                    },
                    productId: productsList[1].productId,
                    slug: productsList[1].slug,
                },
                bgColor: "#F6EBD2",
                fgColor: "#AF7250",
            },
        ]

    return (
        <ShopCustomLayout
            featuredImage={FeaturedImage}
            mobileFeaturedImage={MobileFeaturedImage}
            heading="Bundles & Save"
            pageName="bundles"
        >
            <div
                className="w-full bg-cover my-5 bg-repeat-x bg-bottom pt-7 pb-25 space-y-4"
                style={{
                    backgroundImage: `url(${bundlesGraphics.src})`,
                }}
            >
                <DefaultSection
                    className="flex items-center justify-between max-w-300!"
                    outerClassName="hidden md:block"
                >
                    <div
                        className="text-[#BA131C] flex items-center gap-3"
                    >
                        <RiShoppingCart2Line
                            size={25}
                            className="shrink-0"
                        />
                        <p
                            className="font-semibold"
                        >{cartItemBundle?.size || 0} Items added in Bundle</p>
                    </div>
                    <div>
                        <button
                            className="py-3 px-5 bg-[#BA131C] rounded-md text-white cursor-pointer"
                            onClick={() => {
                                router.push("/cart")
                            }}
                        >Go to cart</button>
                    </div>
                </DefaultSection>

                <DefaultSection
                    className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-15 px-4 max-w-300!"
                >
                    <div
                        className="md:w-180 w-full aspect-square overflow-hidden rounded-3xl"
                    >
                        <Image
                            alt="All Products In One Frame"
                            src={ProductInFrame}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div
                        className="w-full"
                    >
                        <div
                            className="text-center space-y-10 max-w-180 mx-auto text-[#BA131C]"
                        >
                            <h2
                                className="text-5xl font-glamour"
                            >Pick ‘n’ mix <br />your faves!</h2>
                            <div
                                className="space-y-2"
                            >
                                <p>Bodycare is better when you don’t have to choose just one!</p>
                                <p>Build your own bundle by mixing and matching your favourite Whipped Shower Foams. Stock up on your tried and true, or try something new while you’re at it.</p>
                            </div>
                            <p
                                className="font-semibold"
                            >Build your bundle and enjoy up to 15% off.</p>
                        </div>
                    </div>
                </DefaultSection>
            </div>

            <DefaultSection
                outerClassName="bg-[#FCDFE2] py-6"
                className="space-y-3"
            >
                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <p
                        className="text-[#BA131C] font-medium"
                    ><b>Step 1</b>: Choose your bundle size:</p>
                    <div
                        className="flex items-center gap-3"
                    >
                        {
                            [2, 3, 4].map((count) => (
                                <button
                                    key={count}
                                    className={
                                        "py-1 px-4 border border-[#BA131C] block cursor-pointer rounded-md"
                                        + ` ${cartItemBundle?.size === count ? "bg-[#BA131C] text-white" : "text-[#BA131C]"}`
                                    }
                                    onClick={() => {
                                        storeDispatch(
                                            updateBundleSize({
                                                size: count,
                                            })
                                        )
                                    }}
                                >{count}</button>
                            ))
                        }
                    </div>
                </div>

                <p
                    className="text-2xl font-glamour text-center text-[#BA131C]"
                >Save 6%</p>
            </DefaultSection>

            <DefaultSection
                outerClassName="py-13"
                className="space-y-4"
            >
                <p
                    className="text-center text-[#BA131C] font-semibold"
                >Step 2:</p>
                <h2
                    className="text-center text-4xl font-glamour text-[#BA131C]"
                >Choose your favourites</h2>

                <div
                    className="grid grid-cols-2 md:flex items-center gap-5 md:gap-10 max-w-130 mx-auto pt-6"
                >
                    {products.map((product, index) => (
                        <ProductsCardPrimary
                            {...product}
                            key={index}
                            type="bundle"
                        />
                    ))}
                </div>

            </DefaultSection>

            {/* <DefaultSection
                className="space-y-5 pb-10"
            >
                <p
                    className="text-center text-[#BA131C] font-semibold"
                >Step 2:</p>
                <div
                    className="font-glamour text-center"
                >
                    <p>Yay! You just saved ₹&nbsp;
                        {cartItemBundle && (
                            <DisplayBundlesSavedAmount
                                products={cartItemBundle.items.map(p => ({
                                    qty: p.qty,
                                    regular: p.price.regular,
                                    sale: p.price.sale,
                                }))}
                            />
                        )}
                        &nbsp;on your order!<br />
                        Want to make it a gift?</p>
                </div>

                <div
                    className="max-w-56 mx-auto"
                >
                    <ProductsCardPrimary
                        product={{
                            featuredImage: GiftProductImage.src,
                            productData: {
                                category: "",
                                name: "Gift Box",
                                price: 30,
                            },
                            productId: "gift-product",
                            slug: "#",
                        }}
                        bgColor="#EFE0EB"
                        fgColor="#451F0F"
                        type="bundle"
                        giftProduct
                    />
                </div>
            </DefaultSection> */}

            <DefaultSection
                className="space-y-5 pb-10"
            >
                <div
                    className="font-glamour text-center"
                >
                    <p>Yay! You just saved ₹&nbsp;
                        {cartItemBundle && (
                            <DisplayBundlesSavedAmount
                                products={cartItemBundle.items.map(p => ({
                                    qty: p.qty,
                                    regular: p.price.regular,
                                    sale: p.price.sale,
                                }))}
                            />
                        )}
                        &nbsp;on your order!</p>
                </div>
            </DefaultSection>

            {
                cartItemBundle?.giftBox && (
                    <DefaultSection
                        className="pb-10"
                    >
                        <div
                            className="space-y-3 max-w-200 mx-auto"
                        >
                            <p
                                className="text-center text-sm md:text-base font-semibold text-[#BA131C]"
                            >Make it extra special with a handwritten note from you.</p>
                            <textarea
                                className="w-full h-50 border border-[#BA131C50] p-4 outline-none"
                                value={cartItemBundle.giftBox.message}
                                onChange={(event) => {
                                    console.log(cartItemBundle.giftBox)
                                    storeDispatch(
                                        updateBundleGiftBoxMessage({
                                            value: event.target.value,
                                        })
                                    )
                                }}
                            />
                        </div>
                    </DefaultSection>
                )
            }

        </ShopCustomLayout>
    )
}

export function DisplayBundlesSavedAmount({ products }: {
    products: {
        regular: number,
        sale: number,
        qty: number,
    }[]
}) {

    const [result, setResult] = useState<number>(0);

    useEffect(() => {

        (() => {
            const savedAmount = calculateBundleSavedAmount(products.map(p => ({
                regularPrice: p.regular,
                qty: p.qty,
                salePrice: p.sale,
            })));

            setResult(savedAmount)
        })();

    }, [products])

    return <>{result}</>
}

export default BundlesPage