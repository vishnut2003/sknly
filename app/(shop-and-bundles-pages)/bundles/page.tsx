'use client';

import ShopCustomLayout from "../custom-layout"
import FeaturedImage from "./assets/featured-image.png";
import bundlesGraphics from "./assets/bundles-graphics-2.png";
import { RiShoppingCart2Line } from "@remixicon/react";
import { useState } from "react";
import DefaultSection from "@/layouts/default-section";
import Image from "next/image";
import ProductInFrame from "./assets/products-in-one-frame.png";
import { ProductCardInterface } from "@/types/product";
import ProductsCardPrimary from "@/components/ecommerce-elements/product-card-primary";
import GiftProductImage from "./assets/gift-product-image.png";

const BundlesPage = () => {

    const [bundleProductsCound] = useState<number>(3);
    const [bundleSize, setBundleSize] = useState<number | null>(null)

    const products: {
        product: ProductCardInterface,
        bgColor: string,
        fgColor: string,
    }[] = [
            {
                product: {
                    featuredImage: "/images/dummy-products-images/product-1.png",
                    productData: {
                        category: "",
                        name: "Espresso Mousse",
                        price: 849,
                        salePrice: 764,
                    },
                    productid: "product-1",
                },
                bgColor: "#FAF4E9",
                fgColor: "#A46E54",
            },
            {
                product: {
                    featuredImage: "/images/dummy-products-images/product-2.png",
                    productData: {
                        category: "",
                        name: "Strawberry Whipcake",
                        price: 849,
                        salePrice: 764,
                    },
                    productid: "product-2",
                },
                bgColor: "#FDEBEB",
                fgColor: "#f23543",
            },
            {
                product: {
                    featuredImage: "/images/dummy-products-images/product-3.png",
                    productData: {
                        category: "",
                        name: "Vanilla Melt",
                        price: 849,
                        salePrice: 764,
                    },
                    productid: "product-3",
                },
                bgColor: "#F6EBD2",
                fgColor: "#AF7250",
            },
        ]

    return (
        <ShopCustomLayout
            featuredImage={FeaturedImage}
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
                    className="flex items-center justify-between"
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
                        >{bundleProductsCound} Items added in Bundle</p>
                    </div>
                    <div>
                        <button
                            className="py-3 px-5 bg-[#BA131C] rounded-md text-white"
                        >Go to cart</button>
                    </div>
                </DefaultSection>

                <DefaultSection
                    className="flex items-center gap-4 px-4"
                >
                    <div
                        className="w-180 aspect-square"
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
                    className="flex items-center justify-center gap-4"
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
                                        + ` ${bundleSize === count ? "bg-[#BA131C] text-white" : "text-[#BA131C]"}`
                                    }
                                    onClick={() => {
                                        setBundleSize(count);
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
                    className="flex items-center gap-10 max-w-200 mx-auto pt-6"
                >
                    {products.map((product, index) => (
                        <ProductsCardPrimary
                            {...product}
                            key={index}
                        />
                    ))}
                </div>

            </DefaultSection>

            <DefaultSection
                className="space-y-5 pb-10"
            >
                <p
                    className="text-center text-[#BA131C] font-semibold"
                >Step 2:</p>
                <div
                    className="font-glamour text-center"
                >
                    <p>Yay! You just saved ₹ XX on your order!<br />
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
                            productid: "gift-product",
                        }}
                        bgColor="#EFE0EB"
                        fgColor="#451F0F"
                    />
                </div>
            </DefaultSection>

            <DefaultSection
                className="pb-10"
            >
                <div
                    className="space-y-3 max-w-200 mx-auto"
                >
                    <p
                        className="text-center font-semibold text-[#BA131C]"
                    >Make it extra special with a handwritten note from you.</p>
                    <textarea
                        className="w-full h-50 border border-[#BA131C50] p-4 outline-none"
                    />
                </div>
            </DefaultSection>

        </ShopCustomLayout>
    )
}

export default BundlesPage