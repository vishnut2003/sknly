'use client';

import { getStoreCurrency } from '@/functions/eCommerce-store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSingleItem, removeSingleItem, setSingleItemQty } from '@/store/slices/cart';
import { ProductCardInterface } from '@/types/product'
import { RiAddLine, RiSubtractLine } from '@remixicon/react';
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

                {!currentProductExist && (
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
                        Add to Cart
                    </button>
                )}

                {currentProductExist && (
                    <div
                        className='flex items-center justify-between'
                    >
                        {
                            [
                                {
                                    icon: RiSubtractLine,
                                    onClick: () => {

                                        if (currentProductExist.qty === 1) {
                                            storeDispatch(
                                                removeSingleItem({ id: product.productId })
                                            )
                                        }

                                        storeDispatch(
                                            setSingleItemQty({
                                                id: product.productId,
                                                qty: currentProductExist.qty - 1,
                                            })
                                        )
                                    },
                                },
                                currentProductExist.qty,
                                {
                                    icon: RiAddLine,
                                    onClick: () => {
                                        storeDispatch(
                                            addSingleItem({
                                                id: product.productId,
                                                image: product.featuredImage,
                                                name: product.productData.name,
                                                price: product.productData.price,
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
                                            className='py-3 px-6 text-white bg-[#451F0F] rounded-lg cursor-pointer mt-3'
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

export default ProductCardSecondary