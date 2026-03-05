'use client';

import DefaultSection from '../default-section'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'
import { useAppSelector } from '@/store/hooks';
import { Fragment } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import SearchBarHeader from './search-bar-header';
import { AnimatePresence } from 'framer-motion';
import MobileSidebar from './mobile-sidebar';
import CartIconBlack from "./assets/cart-icon-black.svg";
import SearchIconBlack from "./assets/search-icon-black.svg";
import CartIconWhite from "./assets/cart-icon-white.svg";
import SearchIconWhite from "./assets/search-icon-white.svg";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = ({
    bgColorClassName,
    isHome,
    customBgColor,
    customFgColor,
    hideSearchBar,
}: {
    bgColorClassName?: string,
    customBgColor?: string,
    customFgColor?: string,
    isHome: boolean,
    hideSearchBar?: boolean,
}) => {

    const router = useRouter();

    const cartItemLength = useAppSelector(s => {
        let count = s.cart.items.singleItems.length;
        if (s.cart.items.bundle) {
            count++;
        }

        return count;
    })

    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsSearchOpen(false);
            }
        }

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        }

    }, [wrapperRef])

    return (
        <div
            ref={wrapperRef}
        >
            <div
                className='relative hidden md:block'
            >
                <DefaultSection
                    style={{
                        backgroundColor: customBgColor,
                    }}
                    className={
                        'flex items-center gap-3'
                        + ` ${bgColorClassName}`
                    }
                    outerClassName={
                        'py-3 border-b border-white/40 top-0 left-0 w-full h-20 flex items-center z-50'
                        + ` ${isHome ? "absolute" : ""}`
                    }
                >
                    <div
                        className='w-full flex items-center gap-12 justify-start'
                    >
                        {
                            [
                                {
                                    label: "Shop",
                                    href: "/shower-foams",
                                },
                                {
                                    label: "Bundles & Save",
                                    href: "/bundles",
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
                                        className={
                                            'block text-lg line-clamp-1!'
                                            + ` ${isHome ? "text-white" : !customFgColor ? "text-[#451F0F]" : ""}`
                                        }
                                        style={{
                                            color: customFgColor,
                                        }}
                                    >{item.label}</Link>
                                ))
                        }
                    </div>
                    <div
                        className=' w-full max-w-25 shrink-0'
                    >
                        <Link
                            href={"/"}
                            className={
                                'font-glamour text-4xl font-extrabold cursor-pointer'
                                + ` ${isHome ? "text-white" : !customFgColor ? "text-[#BA131C]" : ""}`
                            }
                            style={{
                                color: customFgColor,
                            }}
                        >sknly.</Link>
                    </div>
                    <div
                        className='w-full flex items-center justify-end gap-12'
                    >
                        {
                            !hideSearchBar && (
                                <button
                                    className={
                                        'cursor-pointer'
                                        + ` ${isHome ? "text-white" : !customFgColor ? "text-[#451F0F]" : ''}`
                                    }
                                    style={{
                                        color: customFgColor,
                                    }}
                                    onClick={() => {
                                        setIsSearchOpen(prev => !prev);
                                    }}
                                >
                                    <RiSearchLine
                                        size={22}
                                    />
                                </button>
                            )
                        }
                        {
                            [
                                {
                                    label: "Blogs",
                                    href: "/blogs",
                                },
                                {
                                    label: "About",
                                    href: "/about",
                                },
                                {
                                    label: "Account",
                                    href: "/my-account",
                                },
                                {
                                    label: `Cart(${cartItemLength})`,
                                    href: "/cart",
                                }
                            ]
                                .map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={
                                            'block text-lg line-clamp-1'
                                            + ` ${isHome ? "text-white" : !customFgColor ? "text-[#451F0F]" : ""}`
                                        }
                                        style={{
                                            color: customFgColor,
                                        }}
                                    >{item.label}</Link>
                                ))
                        }
                    </div>
                </DefaultSection>

                <AnimatePresence>
                    {isSearchOpen && (
                        <SearchBarHeader />
                    )}
                </AnimatePresence>

            </div>

            {/* Mobile Header */}
            <div
                className='block md:hidden'
            >
                <DefaultSection
                    outerClassName={`z-20 ${isHome ? "absolute top-0 left-0" : ""}`}
                    className={'border-b border-white z-10 flex items-center py-5'}
                >
                    <MobileSidebar
                        fgColor={isHome ? "#ffffff" : customFgColor || "#451F0F"}
                    />

                    <div
                        className='w-full'
                    >
                        <Link
                            href={"/"}
                            className='text-4xl font-glamour block text-center'
                            style={{
                                color: isHome ? "#ffffff" : "#BA131C"
                            }}
                        >sknly</Link>
                    </div>

                    <div
                        className='w-full flex items-center justify-end gap-6'
                    >
                        {
                            [
                                {
                                    icon: {
                                        white: SearchIconWhite,
                                        black: SearchIconBlack,
                                    },
                                    onClick: () => {
                                        setIsSearchOpen(true);
                                        console.log("Clicked.")
                                    },
                                    className: `${hideSearchBar ? "hidden" : ""}`
                                },
                                {
                                    icon: {
                                        white: CartIconWhite,
                                        black: CartIconBlack,
                                    },
                                    onClick: () => {
                                        router.push("/cart")
                                    },
                                }
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={item.onClick}
                                    className={'block' + ` ${item.className}`}

                                >
                                    <Image
                                        alt='Icon'
                                        src={isHome ? item.icon.white : item.icon.black}
                                        className='w-6'
                                    />
                                </button>
                            ))
                        }
                    </div>

                </DefaultSection>

                <AnimatePresence>
                    {isSearchOpen && (
                        <SearchBarHeader/>
                    )}
                </AnimatePresence>

            </div>

        </div>
    )
}

export default Header