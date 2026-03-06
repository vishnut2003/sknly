'use client';

import { RiAccountCircleFill, RiArchiveStackFill, RiArchiveStackLine, RiBarChartHorizontalLine, RiCloseLine, RiPokerHeartsFill, RiPokerHeartsLine, RiUser3Line } from '@remixicon/react'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";

const MyAccountSidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className='relative'
        >
            <button
                className='cursor-pointer'
                onClick={() => {
                    setIsOpen(prev => !prev)
                }}
            >
                {isOpen ? (
                    <RiCloseLine
                        size={25}
                    />
                ) : (
                    <RiBarChartHorizontalLine
                        size={25}
                    />
                )}
            </button>

            {isOpen && (
                <motion.div
                    className='absolute top-10 left-0 bg-[#EFE0EB] rounded-lg shadow-lg border py-1 px-3'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                >
                    <div
                        className='space-y-1'
                    >
                        {
                            [
                                {
                                    icon: RiAccountCircleFill,
                                    label: "Personal Information",
                                    href: "/my-account",
                                },
                                {
                                    icon: RiArchiveStackFill,
                                    label: "My Orders",
                                    href: "/my-account/orders",
                                },
                                {
                                    icon: RiPokerHeartsFill,
                                    label: "Wishlist",
                                    href: "/my-account/wishlist",
                                },
                            ].map((item, index) => (
                                <Fragment
                                    key={index}
                                >
                                    {index !== 0 && (
                                        <hr 
                                            className='opacity-30'
                                        />
                                    )}
                                    <Link
                                        href={item.href}
                                        className='w-full flex items-center justify-start gap-3 py-2'
                                    >
                                        <item.icon
                                            size={20}
                                        />
                                        <p>{item.label}</p>
                                    </Link>
                                </Fragment>
                            ))
                        }
                    </div>
                </motion.div>
            )}

        </div>
    )
}

export default MyAccountSidebar