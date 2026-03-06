'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

const ProductsImagesSection = ({
    product,
}: {
    product: ProductsDataInterface,
}) => {

    const [textTicker, setTextTicker] = useState<number>(0);

    const [currentImageIndex] = useState<number>(0);
    const imagesList = [
        product.images.featuredImage,
        product.images.footerImage,
        ...product.images.gallery,
    ]

    useEffect(() => {
        const intervelId = setInterval(() => {
            setTextTicker(prev => prev === 0 ? 1 : 0);
        }, 3000)

        return () => {
            clearInterval(intervelId);
        }

    }, [])

    return (
        <Fragment>
            <div
                className='space-y-3 hidden md:block'
            >
                <div
                    className='w-full aspect-5/6 rounded-xl overflow-hidden'
                >
                    <Image
                        alt={product.productData.title}
                        src={product.images.featuredImage}
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div
                    className='grid grid-cols-2 gap-3'
                >
                    {product.images.gallery.map((image, index) => (
                        <div
                            key={index}
                            className='aspect-square w-full rounded-xl overflow-hidden'
                        >
                            <Image
                                alt='Gallery'
                                src={image}
                                width={100}
                                height={100}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>

                <div
                    className='aspect-square w-full rounded-xl overflow-hidden'
                >
                    <Image
                        alt='Gallery Image footer'
                        src={product.images.footerImage}
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                </div>

            </div>

            <div
                className='md:hidden'
            >
                <div>
                    <Image
                        alt={product.productData.title}
                        src={typeof imagesList[currentImageIndex] === "string" ? imagesList[currentImageIndex] : imagesList[currentImageIndex].src}
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center'
                    />
                </div>
            </div>

            <div
                className='text-white py-2 h-10 overflow-hidden text-center text-sm md:hidden'
                style={{
                    backgroundColor: product.colorSchema.dark,
                }}
            >

                <AnimatePresence>
                    {textTicker === 0 && (
                        <motion.p
                            key={"text-1"}
                            initial={{ y: `-100%`, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                            exit={{ y: `200%` }}
                        >Free shipping on your 1st order with The Sknly Club</motion.p>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {textTicker === 1 && (
                        <motion.p
                            key={"text-2"}
                            initial={{ y: `-100%`, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                            exit={{ y: `200%` }}
                        >Save up to 15% on bundles</motion.p>
                    )}
                </AnimatePresence>
            </div>

        </Fragment>
    )
}

export default ProductsImagesSection