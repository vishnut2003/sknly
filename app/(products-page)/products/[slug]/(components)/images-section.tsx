'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data'
import SwipDiv from '@/components/ui-elements/swipe-div';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from "react-modal-image"

const ProductsImagesSection = ({
    product,
}: {
    product: ProductsDataInterface,
}) => {

    const [textTicker, setTextTicker] = useState<number>(0);

    const [LightboxPopup, setLightboxPopup] = useState<{
        featurePopup: boolean,
        gallery: {
            [key: number]: boolean,
        }
    }>({
        featurePopup: false,
        gallery: {},
    });

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const imagesList = [
        product.images.featuredImage,
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
                        className='w-full h-full object-cover cursor-pointer'
                        onClick={() => {
                            setLightboxPopup(prev => ({
                                ...prev,
                                featurePopup: true,
                            }))
                        }}
                    />

                    {LightboxPopup.featurePopup && (
                        <Lightbox
                            alt='FeaturedImage'
                            large={typeof product.images.featuredImage === "string" ? product.images.featuredImage : product.images.featuredImage.src}
                            onClose={() => {
                                setLightboxPopup(prev => ({
                                    ...prev,
                                    featurePopup: false,
                                }))
                            }}
                        />
                    )}

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
                                className='w-full h-full object-cover cursor-pointer'
                                onClick={() => {
                                    setLightboxPopup({
                                        featurePopup: false,
                                        gallery: {
                                            [index]: true,
                                        }
                                    })
                                }}
                            />

                            {LightboxPopup.gallery[index] && (
                                <Lightbox
                                    alt={"gallery" + index}
                                    large={typeof image === "string" ? image : image.src}
                                    onClose={() => {
                                        setLightboxPopup({
                                            featurePopup: false,
                                            gallery: {},
                                        })
                                    }}
                                />
                            )}
                            
                        </div>
                    ))}
                </div>

            </div>

            <div
                className='md:hidden'
            >
                <div
                    className='relative'
                >
                    <SwipDiv
                        onSwipeLeft={() => {
                            let nextIndex = currentImageIndex + 1;
                            const lastIndex = imagesList.length - 1;

                            if (nextIndex > lastIndex) {
                                nextIndex = 0;
                            }

                            setCurrentImageIndex(nextIndex);
                        }}
                        onSwipeRight={() => {
                            let prevIndex = currentImageIndex - 1;
                            const lastIndex = imagesList.length - 1;

                            if (prevIndex < 0) {
                                prevIndex = lastIndex;
                            }

                            setCurrentImageIndex(prevIndex)
                        }}
                    >
                        {imagesList.map((item, index) => (
                            index === currentImageIndex && (
                                <div
                                    key={index}
                                    className='aspect-3/4.5'
                                >
                                    <Image
                                        alt='Gallery'
                                        src={item}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            )
                        ))}
                    </SwipDiv>

                    <div
                        className='absolute bottom-0 left-0 w-full p-3 flex items-center justify-center gap-2'
                    >
                        {imagesList.map((_, i) => (
                            <div
                                className='w-2 h-2 rounded-full'
                                style={{
                                    backgroundColor: i === currentImageIndex ? "#ffffff" : "#CEBFBF",
                                }}
                            />
                        ))}
                    </div>

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