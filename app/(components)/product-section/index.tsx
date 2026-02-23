'use client';

import DefaultSection from '@/layouts/default-section'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

// ProductsImage 
import EspressoImageIdle from "./assets/EspressoMousse/image.png";
import EspressoImageHover from "./assets/EspressoMousse/hover.png";
import StrawberryImageIdle from "./assets/StrawberryWhipcake/image.png";
import StrawberryImageHover from "./assets/StrawberryWhipcake/hover.png";
import VanillaImageIdle from "./assets/VanillaMelt/image.png";
import VanillaImageHover from "./assets/VanillaMelt/hover.png";
import { useState } from 'react';

interface ProductsDataInterface {
    title: string;
    description: string;
    price: string;
    href: string;
    image: {
        idle: StaticImageData;
        hover: StaticImageData;
    },
    colorSchem: {
        dark: string,
    }
}

const HomePageproductSection = () => {

    const products: ProductsDataInterface[] = [
        {
            title: "Espresso Mousse",
            description: "Whipped Body Wash",
            price: "799",
            href: "/products/espresso-mousse",
            image: {
                idle: EspressoImageIdle,
                hover: EspressoImageHover,
            },
            colorSchem: { dark: "#AF7250" },
        },
        {
            title: "Strawberry Whipcake",
            description: "Whipped Body Wash",
            price: "799",
            href: "/products/strawberry-whipcake",
            image: {
                idle: StrawberryImageIdle,
                hover: StrawberryImageHover,
            },
            colorSchem: { dark: "#F6A1A7" },
        },
        {
            title: "Vanilla Melt",
            description: "Whipped Body Wash",
            price: "799",
            href: "/products/vanilla-melt",
            image: {
                idle: VanillaImageIdle,
                hover: VanillaImageHover,
            },
            colorSchem: { dark: "#A46E54" }
        }
    ]

    return (
        <DefaultSection
            outerClassName='py-15'
            className='space-y-20'
        >
            <h2
                className='text-center text-[#BA131C] text-4xl font-bold font-glamour'
            >Whipped Shower Foams</h2>
            <div
                className='flex items-center justify-between w-full max-w-5xl mx-auto'
            >
                {
                    products.map((product, index) => (
                        <SingleProductItem
                            product={product}
                            key={index}
                        />
                    ))
                }
            </div>

            <div
                className='flex items-center justify-center'
            >
                <button
                    className='outline-button'
                >
                    Shop All
                </button>
            </div>
        </DefaultSection>
    )
}

function SingleProductItem({ product }: {
    product: ProductsDataInterface,
}) {

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <div
            className='w-full space-y-6'
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
            style={{
                color: !isHover ? "#451F0F" : product.colorSchem.dark,
            }}
        >
            <Link
                className='block'
                href={product.href}
            >
                <div
                    className='min-h-85 w-full flex items-center'
                >
                    {
                        !isHover && (
                            <Image
                                alt={product.title}
                                src={product.image.idle}
                                width={100}
                                height={130}
                                className='w-30 mx-auto transition-all'
                            />
                        )
                    }
                    {
                        isHover && (
                            <motion.div
                                className='w-full h-full'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Image
                                    alt='Hove Product Image'
                                    src={product.image.hover}
                                    className='w-full h-full object-cover rounded-xl'
                                />
                            </motion.div>
                        )
                    }
                </div>
            </Link>
            <div>
                <div
                    className='flex items-center gap-3 justify-between max-w-80 mx-auto'
                >
                    <div>
                        <Link
                            className='block'
                            href={product.href}
                        >
                            <h3
                                className='text-base font-bold'
                            >{product.title}</h3>
                        </Link>
                        <p
                            className='text-sm'
                        >{product.description}</p>
                    </div>
                    <div>
                        <p
                            className='text-lg font-bold'
                        >{product.price} &#8377;</p>
                    </div>
                </div>
                <button
                    className='w-full text-center p-3 mt-3 text-white rounded-lg cursor-pointer'
                    style={{
                        backgroundColor: isHover ? product.colorSchem.dark : undefined,
                        opacity: isHover ? 1 : 0,
                    }}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default HomePageproductSection