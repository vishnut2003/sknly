'use client';

import { RiArrowRightSLine } from '@remixicon/react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { RemixiconComponentType } from "@remixicon/react"

export type DashboardSubmenuItem = {
    label: string,
    href: string,
}

export type DashboardSidebarMenuItems = {
    label: string,
    icon: RemixiconComponentType,
    href?: string,
    submenu?: DashboardSubmenuItem[],
}

const AdminDashboardSidebarMenuItems = ({
    menuItem,
}: {
    menuItem: DashboardSidebarMenuItems,
}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        (() => {
            if (menuItem.submenu) {
                const submenuActive = menuItem.submenu.find((item) => item.href === pathname);
                if (submenuActive) {
                    setIsDropdownOpen(true);
                    setIsButtonActive(true)
                } else {
                    setIsDropdownOpen(false)
                    setIsButtonActive(false)
                }
            }
        })();
    }, [pathname, menuItem.submenu])

    if (menuItem.href) {
        return (
            <div>
                <Link
                    href={menuItem.href}
                    className={
                        'py-2.5 w-full px-5 flex items-center gap-3 text-sm border-l-2 rounded-r-3xl'
                        + ` ${pathname === menuItem.href ? "bg-[#BA131C] border-[#BA131C] text-white shadow-md shadow-[#BA131C]/20" : "hover:bg-[#FCDFE2] border-white hover:text-[#BA131C] hover:border-[#BA131C]"}`
                    }
                >
                    <menuItem.icon
                        size={18}
                    />
                    <p>{menuItem.label}</p>
                </Link>
            </div>
        )
    }

    if (menuItem.submenu) {
        return (
            <div
                className='space-y-2'
            >
                <button
                    className={
                        'py-2.5 w-full cursor-pointer px-5 flex items-center justify-between gap-3 text-sm border-l-2 rounded-r-3xl'
                        + ` ${isButtonActive ? "bg-[#BA131C] border-[#BA131C] text-white shadow-md shadow-[#BA131C]/20" : "hover:bg-[#FCDFE2] border-white hover:text-[#BA131C] hover:border-[#BA131C]"}`
                    }
                    onClick={() => {
                        setIsDropdownOpen(prev => !prev);
                    }}
                >
                    <div
                        className='flex items-center gap-3'
                    >
                        <menuItem.icon
                            size={18}
                        />
                        <p>{menuItem.label}</p>
                    </div>
                    <RiArrowRightSLine
                        size={18}
                        className={`transition-all ${isDropdownOpen ? "rotate-90" : ""}`}
                    />
                </button>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <div
                            className='text-sm px-5'
                        >
                            <div
                                className='border-l border-stroke-light pl-2 text-foreground/70 space-y-1'
                            >
                                {menuItem.submenu && (
                                    menuItem.submenu.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className={
                                                'w-full flex py-2 px-3 rounded-lg hover:bg-gray-100'
                                                + ` ${item.href === pathname ? "bg-background-2 text-foreground font-semibold" : ""}`
                                            }
                                        >{item.label}</Link>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

}

export default AdminDashboardSidebarMenuItems