'use client';

import TicketGrapicsImage from "./assets/ticket-design-for-hero-section.png";
import InnerRightColImage from "./assets/hero-inner-right-image.png";
// Icons imports
import CoffeeIcon from "./assets/hero-section-icons/coffee-icon.png";
import ChoclateIcon from "./assets/hero-section-icons/choclate-icon.png";
import CaramelIcon from "./assets/hero-section-icons/caramel-icon.png";
import VanillaIcon from "./assets/hero-section-icons/vanilla-icon.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";
import InnerRightColImageMobile from "./assets/hero-inner-right-image-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";

const EspressoMoussePopup = () => {

    const [isOpen, setIsOpen] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (isOpen) {
                return;
            }

            setIsOpen(true);
        }, 30000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

    }, [isOpen])

    if (isOpen) {
        return (
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-100 bg-white/70 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    className="md:rounded-xl h-full md:h-max overflow-auto md:overflow-hidden relative shadow-2xl"
                    initial={{ y: `150%`, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <button
                        className="absolute top-3 right-3 z-10 text-white cursor-pointer"
                        onClick={() => {
                            if (intervalRef.current) {
                                clearInterval(intervalRef.current);
                            }
                            setIsOpen(false);
                        }}
                    >
                        <RiCloseCircleLine
                            size={26}
                        />
                    </button>
                    <Template />
                </motion.div>
            </motion.div>
        )
    }
}

function Template() {

    const isMobile = useIsMobile();

    return (
        <div
            className='bg-[#89614a] px-10 py-10 md:py-5 relative'
        >
            {/* Block graphics */}
            <div
                className='absolute top-0 left-0 w-full h-full flex gap-4 md:gap-10 z-0'
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
                        <div
                            key={index}
                            className='w-full bg-[#c69879]'
                        />
                    ))
                }
            </div>

            {/* Section Content */}
            <div
                className="z-10 relative h-max md:h-[90dvh] flex justify-center items-stat"
            >
                <div
                    className='z-10 relative bg-cover w-full max-w-220 mx-auto flex items-center flex-col'
                    style={{
                        backgroundImage: `url(${TicketGrapicsImage.src})`,
                    }}
                >
                    <div
                        className="flex flex-col-reverse md:flex-row items-center gap-7 px-5 py-10 md:p-10"
                    >
                        <div
                            className="text-[#89614a] text-center md:text-left w-full flex flex-col gap-5"
                        >
                            <h1
                                className="text-5xl md:text-6xl font-medium font-sloops"
                            >Espresso Mousse</h1>
                            <hr />
                            <p
                                className="font-semibold"
                            >Your shower, but make it slow-brewed.</p>
                            <p>Espresso Mous whips creamy espresso and vanilla cream into a soft, whipped cream lather that melts on skin like your favorite café dessert. It&apos;s indulgent. It&apos;s comforting. And it lingers like the perfect aftertaste</p>

                            <hr />

                            <p
                                className="font-bold text-sm"
                            >FRAGRANCE NOTES</p>

                            <div
                                className="flex items-center gap-1"
                            >
                                {
                                    [
                                        {
                                            label: "Coffee",
                                            icon: CoffeeIcon,
                                        },
                                        {
                                            label: "Dark Choclate",
                                            icon: ChoclateIcon,
                                        },
                                        {
                                            label: "Caramel",
                                            icon: CaramelIcon,
                                        },
                                        {
                                            label: "Vanilla",
                                            icon: VanillaIcon,
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <Image
                                                alt={item.label}
                                                src={item.icon}
                                                className="w-[70%]"
                                            />
                                            <p
                                                className="whitespace-nowrap text-[11px] md:text-xs text-center"
                                            >{item.label}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <hr />

                        </div>
                        <div
                            className="w-full md:w-[70%]"
                        >
                            <Image
                                alt="Hero Banner"
                                src={isMobile ? InnerRightColImageMobile : InnerRightColImage}
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                    <div
                        className="pb-10"
                    >
                        <Link
                            href={"/products/espresso-mousse"}
                            className="py-2 px-8 bg-[#89614a] text-white"
                        >Shop Now</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EspressoMoussePopup