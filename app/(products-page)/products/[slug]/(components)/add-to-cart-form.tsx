'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data';
import { RiAddLine, RiHeartLine, RiSubtractLine } from '@remixicon/react'
import { useState } from 'react'

const SingleProductAddToCartForm = ({ product }: {
    product: ProductsDataInterface,
}) => {

    const [count, setCount] = useState<number>(1);

    return (
        <div>
            <div
                className='flex items-stretch gap-3'
            >
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

                <button
                    className='py-3 px-5 w-60 font-semibold rounded-lg cursor-pointer'
                    style={{
                        backgroundColor: product.colorSchema.dark,
                        color: "white",
                    }}
                >
                    Add to Cart
                </button>

                <button
                    className='text-white px-4 rounded-lg'
                    style={{
                        backgroundColor: product.colorSchema.dark,
                    }}
                >
                    <RiHeartLine
                        size={20}
                    />
                </button>

            </div>
        </div>
    )
}

export default SingleProductAddToCartForm