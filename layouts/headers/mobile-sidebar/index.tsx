'use client';

import Image from "next/image";
import { useState } from "react";
import MenuTriggerWhiteIcon from "./assets/menu-trigger-white.svg";
import MenuTriggerBlackIcon from "./assets/menu-trigger-black.svg";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseLine } from "@remixicon/react";
import Link from "next/link";

const MobileSidebar = ({
    fgColor,
}: {
    fgColor: string,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className="w-full"
        >
            <div
                className="flex"
            >
                <button
                    className="w-full space-y-2 cursor-pointer"
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    <Image
                        alt="Menu Trigger"
                        src={fgColor === "#ffffff" ? MenuTriggerWhiteIcon : MenuTriggerBlackIcon}
                        className="w-6"
                    />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-[#FFFCF8] text-[#451F0F] py-10 px-5"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            type: "spring",
                            bounce: 0,
                        }}
                    >
                        <div
                            className="flex items-center justify-end"
                        >
                            <button
                                className="cursor-pointer block"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <RiCloseLine
                                    size={25}
                                />
                            </button>
                        </div>
                        <div>
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
                                        href: "/sknly-club",
                                    },
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
                                        label: "Wishlist",
                                        href: "/my-account/wishlist",
                                    },
                                ].map((menu, index) => (
                                    <Link
                                        href={menu.href}
                                        className="block w-full text-lg font-semibold py-3 border-b"
                                        key={index}
                                    >{menu.label}</Link>
                                ))
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default MobileSidebar