'use client';

import { ProductsDataInterface } from '@/app/(products-page)/products-data'
import { RiAddLine, RiSubtractLine } from '@remixicon/react';
import { Fragment, useState } from 'react';

const ProductContentsTabs = ({
    product,
}: {
    product: ProductsDataInterface,
}) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <Fragment>
            <div
                className='space-y-6 hidden md:block'
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

            <div
                className='md:hidden'
            >
                {product.content.tabsContent.map((tab, index) => (
                    <Fragment
                        key={index}
                    >
                        {index !== 0 && (
                            <hr />
                        )}
                        <div
                        >
                            <button
                                className='w-full flex items-center justify-between py-3'
                                onClick={() => {
                                    setCurrentIndex(index)
                                }}
                            >
                                <p
                                    className='font-semibold'
                                >{tab.title}</p>
                                {
                                    currentIndex === index ? (
                                        <RiSubtractLine />
                                    ) : (
                                        <RiAddLine />
                                    )
                                }
                            </button>

                            {currentIndex === index && (
                                <div
                                    className='py-3 space-y-3'
                                >
                                    {tab.content}
                                </div>
                            )}

                        </div>
                    </Fragment>
                ))}
            </div>

        </Fragment>
    )
}

export default ProductContentsTabs