'use client';

import { getStoreCurrency } from '@/functions/eCommerce-store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSingleItem } from '@/store/slices/cart';
import { ProductCardInterface } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link';

const ProductCardSecondary = ({
    product,
}: {
    product: ProductCardInterface,
}) => {

    const currentProductExist = useAppSelector(s => s.cart.items.singleItems.find(p => p.id === product.productId));
    const storeDispatch = useAppDispatch();

    return (
        <div>
            <div
                className='space-y-4'
            >
                <Link
                    href={`/products/${product.slug}`}
                    className='block'
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
                </Link>

                <div
                    className='flex items-start justify-between text-sm'
                >
                    <div>
                        <p
                            className='font-semibold line-clamp-1'
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
                    className='w-full p-2 text-sm rounded-sm bg-[#451F0F] text-white cursor-pointer'
                    type='button'
                    onClick={() => {
                        if (currentProductExist) {
                            return;
                        }

                        storeDispatch(
                            addSingleItem({
                                id: product.productId,
                                image: product.featuredImage,
                                name: product.productData.name,
                                price: product.productData.price,
                                qty: 1,
                            })
                        )

                    }}
                >
                    {currentProductExist ? "Added to Cart" : "Add to Cart"}
                </button>

            </div>
        </div>
    )
}

export default ProductCardSecondary