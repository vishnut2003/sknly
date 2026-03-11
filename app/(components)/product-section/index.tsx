'use client';

import DefaultSection from '@/layouts/default-section'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

// ProductsImage 
import StrawberryImageIdle from "./assets/StrawberryWhipcake/image-new.jpeg";
import StrawberryImageHover from "./assets/StrawberryWhipcake/hover-new.jpg";
import VanillaImageIdle from "./assets/VanillaMelt/image-new.jpeg";
import VanillaImageHover from "./assets/VanillaMelt/hover-new.jpg";
import { useEffect, useState } from 'react';
import { productsList } from '@/app/(products-page)/products-data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSingleItem, setSingleItemQty } from '@/store/slices/cart';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRouter } from 'next/navigation';
import { getStoreCurrency } from '@/functions/eCommerce-store';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

interface ProductsDataInterface {
    title: string;
    description: string;
    price: number;
    href: string;
    image: {
        idle: StaticImageData;
        hover: StaticImageData;
    },
    colorSchem: {
        dark: string,
    },
    id: string,
}

const HomePageproductSection = () => {

    const router = useRouter();

    const products: ProductsDataInterface[] = [
        {
            title: "Strawberry Whipcake",
            description: "Whipped Body Wash",
            price: 899,
            href: "/products/strawberry-whipcake",
            image: {
                idle: StrawberryImageIdle,
                hover: StrawberryImageHover,
            },
            colorSchem: { dark: "#F6A1A7" },
            id: productsList[0].productId,
        },
        {
            title: "Vanilla Melt",
            description: "Whipped Body Wash",
            price: 899,
            href: "/products/vanilla-melt",
            image: {
                idle: VanillaImageIdle,
                hover: VanillaImageHover,
            },
            colorSchem: { dark: "#A46E54" },
            id: productsList[1].productId,
        }
    ]

    return (
        <DefaultSection
            outerClassName='py-15'
            className='space-y-20'
        >
            <h2
                className='text-center text-[#BA131C] text-3xl md:text-[64px] font-medium font-glamour'
            >Whipped Shower Foams</h2>
            <div
                className='grid grid-cols-2 md:flex md:items-center md:justify-between gap-10 md:gap-25 w-full max-w-2xl! mx-auto'
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
                    className='outline-button py-3! px-15!'
                    onClick={() => {
                        router.push("/shower-foams")
                    }}
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

    const isMobile = useIsMobile();
    const currency = getStoreCurrency();

    const [isHover, setIsHover] = useState<boolean>(false);

    const currentProductAdded = useAppSelector(s => s.cart.items.singleItems.find(p => p.id === product.id));
    const storeDispatch = useAppDispatch();

    useEffect(() => {
        setIsHover(isMobile);
    }, [isMobile])

    return (
        <div
            className='w-full space-y-6'
            onMouseEnter={() => {
                if (isMobile) return;
                setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isMobile) return;
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
                    className='aspect-4/6 w-full flex items-center'
                >
                    {
                        !isHover && (
                            <Image
                                alt={product.title}
                                src={product.image.idle}
                                width={1000}
                                height={1000}
                                className='w-full h-full object-cover mx-auto transition-all rounded-xl'
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
                                    className='w-full h-full object-cover object-left rounded-xl'
                                />
                            </motion.div>
                        )
                    }
                </div>
            </Link>
            <div>
                <div
                    className='flex items-start gap-3 justify-between max-w-80 mx-auto'
                >
                    <div>
                        <Link
                            className='block'
                            href={product.href}
                        >
                            <h3
                                className='text-sm line-clamp-1 md:text-base font-bold'
                            >{product.title}</h3>
                        </Link>
                        <p
                            className='text-xs md:text-sm'
                        >{product.description}</p>
                    </div>
                    <div>
                        <p
                            className='text-xs md:text-lg font-bold min-w-max'
                        >{currency}{product.price}</p>
                    </div>
                </div>
                {!currentProductAdded && (
                    <button
                        className='w-full text-center p-3 mt-3 text-white rounded-lg cursor-pointer'
                        type='button'
                        style={{
                            backgroundColor: isHover ? product.colorSchem.dark : undefined,
                            opacity: isHover ? 1 : 0,
                        }}
                        onClick={() => {

                            if (currentProductAdded) {
                                return;
                            }

                            storeDispatch(
                                addSingleItem({
                                    id: product.id,
                                    image: product.image.idle.src,
                                    name: product.title,
                                    price: product.price,
                                    qty: 1,
                                })
                            )

                        }}
                    >
                        Add to Cart
                    </button>
                )}

                {currentProductAdded && (
                    <div
                        className='flex items-center justify-between'
                        style={{ opacity: isHover ? 1 : 0 }}
                    >
                        {
                            [
                                {
                                    icon: RiSubtractLine,
                                    onClick: () => {
                                        storeDispatch(
                                            setSingleItemQty({
                                                id: product.id,
                                                qty: currentProductAdded.qty - 1,
                                            })
                                        )
                                    },
                                },
                                currentProductAdded.qty,
                                {
                                    icon: RiAddLine,
                                    onClick: () => {
                                        storeDispatch(
                                            addSingleItem({
                                                id: product.id,
                                                image: product.image.idle.src,
                                                name: product.title,
                                                price: product.price,
                                                qty: 1,
                                            })
                                        )
                                    }
                                },
                            ].map((item, index) => {

                                if (typeof item === "string" || typeof item === "number") {
                                    return (
                                        <p
                                            key={index}
                                            className='text-lg font-semibold text-black'
                                        >{item}</p>
                                    )
                                } else if (item?.icon) {
                                    return (
                                        <button
                                            key={index}
                                            className='py-3 px-6 text-white rounded-lg cursor-pointer mt-3'
                                            style={{
                                                backgroundColor: product.colorSchem.dark,
                                            }}
                                            onClick={item.onClick}
                                        >
                                            <item.icon
                                                size={15}
                                            />
                                        </button>
                                    )
                                }

                            })
                        }
                    </div>
                )}

            </div>
        </div>
    )
}

export default HomePageproductSection