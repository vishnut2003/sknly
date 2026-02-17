import DefaultSection from '../default-section'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'

const Header = ({
    bgColorClassName,
    isHome,
}: {
    bgColorClassName?: string,
    isHome: boolean,
}) => {
    return (
        <DefaultSection
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
                                className={
                                    'block text-lg'
                                    + ` ${isHome ? "text-white" : "text-[#451F0F]"}`
                                }
                            >{item.label}</Link>
                        ))
                }
            </div>
            <div
                className=' w-full max-w-25 shrink-0'
            >
                <p
                    className={
                        'font-glamour text-4xl font-extrabold'
                        + ` ${isHome ? "text-white" : "text-[#BA131C]"}`
                    }
                >Sknly.</p>
            </div>
            <div
                className='w-full flex items-center justify-end gap-12'
            >
                <button
                    className={
                        'cursor-pointer'
                        + ` ${isHome ? "text-white" : "text-[#451F0F]"}`
                    }
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
                                className={
                                    'block text-lg'
                                    + ` ${isHome ? "text-white" : "text-[#451F0F]"}`
                                }
                            >{item.label}</Link>
                        ))
                }
            </div>
        </DefaultSection>
    )
}

export default Header