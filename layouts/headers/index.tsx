import DefaultSection from '../default-section'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'

const Header = ({
    bgColorClassName,
    isHome,
    customBgColor,
    customFgColor,
}: {
    bgColorClassName?: string,
    customBgColor?: string,
    customFgColor?: string,
    isHome: boolean,
}) => {
    return (
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
                                    'block text-lg'
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
                >Sknly.</Link>
            </div>
            <div
                className='w-full flex items-center justify-end gap-12'
            >
                <button
                    className={
                        'cursor-pointer'
                        + ` ${isHome ? "text-white" : !customFgColor ? "text-[#451F0F]" : ''}`
                    }
                    style={{
                        color: customFgColor,
                    }}
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
                            href: "/about",
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
                                className={
                                    'block text-lg'
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
    )
}

export default Header