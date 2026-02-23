'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data'
import { useState } from 'react';

const ProductContentsTabs = ({
    product,
}: {
    product: ProductsDataInterface,
}) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <div
            className='space-y-6'
        >
            <div
                className='flex items-stretch gap-3'
            >
                {product.content.tabsContent.map((tab, index) => (
                    <button
                        key={index}
                        className={
                            `${currentIndex === index ? "font-extrabold" : ""}`
                            + ' cursor-pointer'
                        }
                        onClick={() => {
                            setCurrentIndex(index)
                        }}
                    >{tab.title}</button>
                ))}
            </div>
            <div
                className='space-y-2'
            >
                {product.content.tabsContent[currentIndex].content}
            </div>
        </div>
    )
}

export default ProductContentsTabs