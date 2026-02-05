import DefaultSection from '@/layouts/default-section'
import Image from 'next/image'
import React from 'react'

const HomePageproductSection = () => {
    return (
        <DefaultSection
            outerClassName='py-15'
            className='space-y-20'
        >
            <h2
                className='text-center text-[#BA131C] text-4xl font-bold font-glamour'
            >Whipped Shower Foams</h2>
            <div
                className='flex items-center justify-between'
            >
                {
                    [
                        {
                            image: "/images/product-images/product-1.png",
                            title: "Espresso Mousse",
                            description: "Whipped Body Wash",
                            price: "799",
                        },
                        {
                            image: "/images/product-images/product-2.png",
                            title: "Strawberry Whipcake",
                            description: "Whipped Body Wash",
                            price: "799",
                        },
                        {
                            image: "/images/product-images/product-3.png",
                            title: "Vanilla Melt",
                            description: "Whipped Body Wash",
                            price: "799",
                        }
                    ].map((product, index) => (
                        <div
                            key={index}
                            className='w-full space-y-6'
                        >
                            <Image
                                alt={product.title}
                                src={product.image}
                                width={100}
                                height={130}
                                className='w-30 mx-auto'
                            />
                            <div>
                                <div
                                    className='flex items-center gap-3 justify-between max-w-80 mx-auto'
                                >
                                    <div>
                                        <h3
                                            className='text-base font-bold'
                                        >{product.title}</h3>
                                        <p
                                            className='text-sm'
                                        >{product.description}</p>
                                    </div>
                                    <div>
                                        <p
                                            className='text-lg font-bold'
                                        >{product.price} &#8377;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                className='flex items-center justify-center'
            >
                <button
                    className='outline-button'
                >
                    Shop All
                </button>
            </div>
        </DefaultSection>
    )
}

export default HomePageproductSection