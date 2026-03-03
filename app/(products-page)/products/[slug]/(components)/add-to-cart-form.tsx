'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSingleItem } from '@/store/slices/cart';
import { RiAddLine, RiHeartLine, RiSubtractLine } from '@remixicon/react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import WishlistButton from './wishlist-button';

const SingleProductAddToCartForm = ({ product }: {
    product: ProductsDataInterface,
}) => {

    const router = useRouter();

    const [count, setCount] = useState<number>(1);

    const storeDispatch = useAppDispatch();
    const currentProductFromCart = useAppSelector(s => {
        const currentProductExist = s.cart.items.singleItems.find(p => p.id === product.productId);
        return currentProductExist;
    });

    return (
        <div>
            <div
                className='flex items-stretch gap-3'
            >
                {
                    !currentProductFromCart && (
                        <div
                            className='flex items-center border rounded-lg gap-3'
                        >
                            {
                                [
                                    {
                                        icon: RiSubtractLine,
                                        onClick: () => {
                                            setCount(prev => (
                                                (prev - 1) <= 0 ? prev : --prev
                                            ))
                                        },
                                    },
                                    {
                                        icon: RiAddLine,
                                        onClick: () => {
                                            setCount(prev => ++prev)
                                        },
                                    },
                                ].map((action, idx) => (
                                    <button
                                        key={idx}
                                        className={
                                            `${idx === 0 ? "order-1" : "order-3"}`
                                            + ' py-3 px-4 cursor-pointer'
                                        }
                                        onClick={action.onClick}
                                    >
                                        <action.icon
                                            size={20}
                                        />
                                    </button>
                                ))
                            }
                            <p
                                className='order-2'
                            >{count}</p>
                        </div>
                    )
                }

                {
                    !currentProductFromCart && (
                        <button
                            className='py-3 px-5 w-60 font-semibold rounded-lg cursor-pointer'
                            style={{
                                backgroundColor: product.colorSchema.dark,
                                color: "white",
                            }}
                            onClick={() => {

                                const productImage =
                                    typeof product.images.featuredImage === "string" ?
                                        product.images.featuredImage : product.images.featuredImage.src

                                storeDispatch(
                                    addSingleItem({
                                        id: product.productId,
                                        image: productImage,
                                        name: product.productData.title,
                                        price: product.productData.price.sale || product.productData.price.regular,
                                        qty: count,
                                    })
                                )
                            }}
                        >
                            Add to Cart
                        </button>
                    )
                }

                {
                    currentProductFromCart && (
                        <button
                            className='py-3 px-5 w-60 font-semibold rounded-lg cursor-pointer'
                            style={{
                                backgroundColor: product.colorSchema.dark,
                                color: "white",
                            }}
                            onClick={() => {
                                router.push("/cart")
                            }}
                        >
                            Go to Cart
                        </button>
                    )
                }

                <WishlistButton
                    productId={product.productId}
                    className='text-white px-4 rounded-lg'
                    style={{
                        backgroundColor: product.colorSchema.dark,
                    }}
                />

            </div>
        </div>
    )
}

export default SingleProductAddToCartForm