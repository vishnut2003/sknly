'use client';

import { getStoreCurrency } from '@/functions/eCommerce-store';
import { ProductCardInterface } from '@/types/product'
import Image from 'next/image'

const ProductCardSecondary = ({
    product,
}: {
    product: ProductCardInterface,
}) => {

    return (
        <div>
            <div
                className='space-y-4'
            >
                <div
                    className='w-full h-80 rounded-xl overflow-hidden'
                >
                    <Image
                        alt={product.productData.name}
                        src={product.featuredImage}
                        width={200}
                        height={300}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div
                    className='flex items-start justify-between text-sm'
                >
                    <div>
                        <p
                            className='font-semibold'
                        >{product.productData.name}</p>
                        <p>{product.productData.category}</p>
                    </div>
                    <div>
                        <p
                            className='font-semibold'
                        >{getStoreCurrency()}{product.productData.price}</p>
                    </div>
                </div>

                <button
                    className='w-full p-2 text-sm rounded-sm bg-[#451F0F] text-white'
                >Add to Cart</button>

            </div>
        </div>
    )
}

export default ProductCardSecondary