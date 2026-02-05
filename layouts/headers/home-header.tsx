import React from 'react'
import DefaultSection from '../default-section'
import Image from 'next/image'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'

const HomeHeader = () => {
    return (
        <DefaultSection
            className='text-white flex items-center gap-3'
            outerClassName='py-3 border-b border-white/40 absolute top-0 left-0 w-full h-20 flex items-center z-50'
        >
            <div
                className='w-full flex items-center gap-12 justify-start'
            >
                {
                    [
                        {
                            label: "Shop",
                            href: "#",
                        },
                        {
                            label: "Bundles & Save",
                            href: "#",
                        },
                        {
                            label: "The Sknly Club",
                            href: "#",
                        },
                    ]
                        .map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='block text-lg'
                            >{item.label}</Link>
                        ))
                }
            </div>
            <div
                className=' w-full max-w-25 shrink-0'
            >
                <p
                    className='font-glamour text-4xl font-extrabold'
                >Sknly.</p>
            </div>
            <div
                className='w-full flex items-center justify-end gap-12'
            >
                <button
                    className='cursor-pointer'
                >
                    <RiSearchLine
                        size={22}
                    />
                </button>
                {
                    [
                        {
                            label: "Blogs",
                            href: "#",
                        },
                        {
                            label: "About",
                            href: "#",
                        },
                        {
                            label: "Account",
                            href: "#",
                        },
                        {
                            label: "Cart",
                            href: "#",
                        }
                    ]
                        .map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='block text-lg'
                            >{item.label}</Link>
                        ))
                }
            </div>
        </DefaultSection>
    )
}

export default HomeHeader