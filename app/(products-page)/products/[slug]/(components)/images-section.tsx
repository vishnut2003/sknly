'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data'
import Image from 'next/image'

const ProductsImagesSection = ({
    product,
}: {
    product: ProductsDataInterface,
}) => {
    return (
        <div
            className='space-y-3'
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
    )
}

export default ProductsImagesSection