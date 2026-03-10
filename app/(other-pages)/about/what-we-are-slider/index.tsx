'use client';

import Image, { StaticImageData } from "next/image";

// slidesImage
import slideImage1 from "./assets/PAPAYA-ENZYME.jpg";
import slideImage2 from "./assets/KAKADU-PLUM.jpg";
import slideImage3 from "./assets/POMEGRANATE.jpg";
import slideImage4 from "./assets/GREEN-TEA.jpg";
import slideImage5 from "./assets/VITAMIN-E.jpg";
import slideImage6 from "./assets/CICA.jpg";
import { Fragment, useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import SwipDiv from "@/components/ui-elements/swipe-div";

interface SliderDataInterface {
    image: StaticImageData,
    title: string,
    description: string,
    color: {
        light: string,
        dark: string,
        bg: string,
    },
}

const slidesData: SliderDataInterface[] = [
    {
        title: "PAPAYA ENZYME",
        description: "No more scrub-and-pray. This tropical fruit enzyme gently melts away dead skin with natural papain to smooth and soften skin, even out texture, and leave your body feeling fresh and glow-ready.",
        image: slideImage1,
        color: {
            light: "#FF9755",
            dark: "#D07339",
            bg: "#FFD6BD"
        },
    },
    {
        title: "KAKADU PLUM",
        description: "This Aussie superfruit is a natural Vitamin C powerhouse, bursting with glow-boosting antioxidants to brighten, refresh, and even out your skin tone, every single shower.",
        image: slideImage2,
        color: {
            light: "#5E6C4A",
            dark: "#5E6C4A",
            bg: "#D4E0C3"
        },
    },
    {
        title: "POMEGRANATE",
        description: "Powered by glow-boosting antioxidants, this juicy superfruit brightens dull skin, evens tone, and protects your glow from daily dullness, leaving you with smooth, radiant skin, shower after shower.",
        image: slideImage3,
        color: {
            light: "#BA131C",
            dark: "#BA131C",
            bg: "#FCDFE2",
        },
    },
    {
        title: "GREEN TEA",
        description: "Call it your skin’s daily detox. This calm-but-powerful extract helps defend against pollution and dullness while calming irritation and keeping your skin clear, calm, and glow-ready.",
        image: slideImage4,
        color: {
            light: "#5E6C4A",
            dark: "#5E6C4A",
            bg: "#D4E0C3",
        },
    },
    {
        title: "VITAMIN E",
        description: "The quiet achiever. Vitamin E hydrates, protects, and locks in moisture so your skin stays calm, smooth, and never stripped.",
        image: slideImage5,
        color: {
            light: "#DFB50A",
            dark: "#A28416",
            bg: "#F1E9C7",
        },
    },
    {
        title: "CICA",
        description: "Sensitive or reactive skin? Centella Asiatica helps calm irritation, rebuild your barrier, and bring things back to baseline. Your skin, but calm, restored, and finally feeling like itself again.",
        image: slideImage6,
        color: {
            light: "#5E6C4A",
            dark: "#5E6C4A",
            bg: "#D4E0C3",
        },
    },
]

const WhatWeAreSlider = () => {

    const [currentslide, setCurrentSlide] = useState<SliderDataInterface>(slidesData[0]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    useEffect(() => {
        setCurrentSlide(slidesData[currentSlideIndex])
    }, [currentSlideIndex])

    return (
        <Fragment>
            <div
                className="hidden md:flex items-stretch h-150"
            >
                <div
                    className="w-full flex items-center"
                    style={{
                        backgroundColor: currentslide.color.bg,
                    }}
                >

                    <div
                        className="py-10 px-15 w-full h-120 flex flex-col justify-between"
                    >
                        <div>
                            <p
                                style={{
                                    color: currentslide.color.light
                                }}
                                className="font-semibold"
                            >
                                {
                                    [
                                        {
                                            text: "It",
                                            type: "light",
                                        },
                                        {
                                            text: "brightens.",
                                            type: "dark",
                                        },
                                        {
                                            text: "It",
                                            type: "light",
                                        },
                                        {
                                            text: "hydrates.",
                                            type: "dark",
                                        },
                                        {
                                            text: "It",
                                            type: "light",
                                        },
                                        {
                                            text: "exfoliates.",
                                            type: "dark",
                                        },
                                        {
                                            text: "It",
                                            type: "light",
                                        },
                                        {
                                            text: "protects.",
                                            type: "dark",
                                        },
                                    ].map((item, index) => {

                                        if (item.type === "dark") {
                                            return (
                                                <span
                                                    key={index}
                                                    style={{
                                                        color: currentslide.color.dark,
                                                    }}
                                                >{item.text}&nbsp;</span>
                                            )
                                        } else {
                                            return (
                                                <Fragment
                                                    key={index}
                                                >{item.text}&nbsp;</Fragment>
                                            );
                                        }

                                    })
                                }
                            </p>
                            <p
                                style={{ color: currentslide.color.light }}
                                className="font-semibold"
                            >All without stripping or feeling clinical. Psst…that fragrance? Juicy AF.</p>
                        </div>

                        <div
                            className="flex items-center justify-between"
                        >
                            {
                                [
                                    {
                                        icon: RiArrowLeftLine,
                                        onClick: () => {
                                            let prevIndex = currentSlideIndex - 1;
                                            if (prevIndex < 0) {
                                                prevIndex = slidesData.length - 1;
                                            }

                                            setCurrentSlideIndex(prevIndex);
                                        },
                                        className: "order-1",
                                    },
                                    {
                                        icon: RiArrowRightLine,
                                        onClick: () => {
                                            const lastIndex = slidesData.length - 1;
                                            let nextIndex: number = currentSlideIndex + 1;

                                            if (nextIndex > lastIndex) {
                                                nextIndex = 0;
                                            }

                                            setCurrentSlideIndex(nextIndex);
                                        },
                                        className: "order-3",
                                    }
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className={
                                            "shrink-0 w-10 h-10 border border-white text-white shadow-xl rounded-full flex items-center justify-center cursor-pointer"
                                            + ` ${action.className}`
                                        }
                                        style={{
                                            backgroundColor: currentslide.color.dark
                                        }}
                                        onClick={action.onClick}
                                    >
                                        <action.icon
                                            size={20}
                                        />
                                    </button>
                                ))
                            }

                            <div
                                className="order-2"
                            >
                                <p
                                    className="text-xl font-glamour py-4 px-6 border-3 rounded-2xl"
                                    style={{
                                        borderColor: currentslide.color.dark,
                                        color: currentslide.color.dark,
                                    }}
                                >{currentslide.title}</p>
                            </div>
                        </div>

                        <div
                            className="h-20"
                        >
                            <p
                                style={{ color: currentslide.color.light }}
                            >{currentslide.description}</p>
                        </div>

                    </div>

                </div>
                <div
                    className="w-[80%]"
                >
                    <Image
                        alt="Slide Image"
                        src={currentslide.image}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <WhatWeAreSlideMobile />

        </Fragment>
    )
}

function WhatWeAreSlideMobile() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<{
        prev: number | null,
        current: number,
    }>({
        prev: null,
        current: 0,
    });

    return (
        <div
            className="md:hidden space-y-4"
        >
            <div
                className="overflow-hidden space-y-3"
            >
                <SwipDiv
                    className="min-w-max min-h-125 flex items-stretch gap-4"
                    onSwipeLeft={() => {
                        const nextindex = currentSlideIndex.current + 1;
                        const lastIndex = slidesData.length - 1;

                        if (nextindex > lastIndex) {
                            return;
                        }

                        setCurrentSlideIndex(prev => ({
                            current: nextindex,
                            prev: prev.current,
                        }))

                    }}
                    onSwipeRight={() => {
                        const prevIndex = currentSlideIndex.current - 1;
                        if (prevIndex < 0) {
                            return;
                        }

                        setCurrentSlideIndex(prev => ({
                            current: prevIndex,
                            prev: prev.current,
                        }))
                    }}
                >
                    <AnimatePresence>
                        {slidesData.map((slide, index) => (
                            index === currentSlideIndex.current && (
                                <motion.div
                                    className="max-w-[90dvw] w-full py-5 px-7 space-y-5 rounded-2xl"
                                    key={index}
                                    style={{
                                        backgroundColor: slide.color.bg,
                                        color: slide.color.dark,
                                    }}
                                    initial={{
                                        x: (currentSlideIndex.prev || 0) < currentSlideIndex.current ? "110%" : "-110%",
                                        opacity: 0
                                    }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0,
                                    }}
                                >
                                    <Image
                                        alt={slide.title}
                                        src={slide.image}
                                        className="w-full aspect-4/3 rounded-2xl"
                                    />

                                    <h3
                                        className="max-w-max border-2 py-2 px-5 rounded-lg mx-auto"
                                    >{slide.title}</h3>

                                    <p
                                        className="text-center"
                                    >{slide.description}</p>

                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </SwipDiv>

                <div
                    className='col-span-2'
                >
                    <div
                        className="flex items-center gap-2 justify-center"
                    >
                        {slidesData.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: currentSlideIndex.current === index ? "#BA131C" : "#D9D9D9",
                                }}
                            />
                        ))}
                    </div>
                </div>

            </div>
            <div
                className="text-[#BA131C] text-sm font-semibold space-y-3 text-center"
            >
                <p>It brightens. It hydrates. It exfoliates. It protects.</p>
                <p>All without stripping or feeling clinical. Psst…that fragrance? Juicy AF.</p>
            </div>
        </div>
    )
}

export default WhatWeAreSlider