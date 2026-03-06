'use client';

import { useEffect, useRef, useState } from "react";
import BrightenersImage1 from "./assets/carousel-images/image-1.png";
import BrightenersImage2 from "./assets/carousel-images/image-2.png";
import HydratorsImage1 from "./assets/carousel-images/image-3.png";
import HydratorsImage2 from "./assets/carousel-images/image-4.png";
import GentleExfoliatorimage1 from "./assets/carousel-images/image-5.png";
import ProtectorImage1 from "./assets/carousel-images/image-6.png";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ITabsData {
    type: "Brighteners" | "Hydrators" | "Gentle Exfoliator" | "Protector",
    image: StaticImageData,
    heading: string,
    subHeading: string,
    paragraph: string,
    points: string[],
}

const tabsData: ITabsData[] = [
    {
        type: "Brighteners",
        heading: "KAKADU PLUM",
        subHeading: "The Vitamin C Powerhouse.",
        paragraph: "This Aussie superfruit delivers up to 100x more Vitamin C than oranges to brighten, even out tone, and reveal fresh, radiant, glow-ready skin",
        image: BrightenersImage1,
        points: [
            "Boosts glow",
            "Brightens skin",
            "Evens out skin tone",
        ],
    },
    {
        type: "Brighteners",
        heading: "POMEGRANATE",
        subHeading: "The Brightening Hero",
        image: BrightenersImage2,
        paragraph: "Bursting with glow-boosting antioxidants, this juicy superfruit brightens dull skin, evens out tone, and protects  your glow from daily damage",
        points: [
            "Brightens & Refreshes",
            "Protects from damage",
        ],
    },
    {
        type: "Hydrators",
        heading: "CENTELLA",
        subHeading: "The Calm-Your-Skin Hero",
        paragraph: "Inspired by Korean skincare, Cica soothes irritation, strengthens your barrier, and restores balance so your skin feels soft, calm, and refreshed",
        image: HydratorsImage1,
        points: [
            "Calms & Soothes",
            "Strengthens skin barrier",
        ],
    },
    {
        type: "Hydrators",
        heading: "VITAMIN E",
        subHeading: "The Moisture Lock-In",
        paragraph: "Vitamin E hydrates, protects, and locks in moisture, keeping your skin soft, smooth, and never stripped",
        image: HydratorsImage2,
        points: [
            "Deeply hydrates",
            "Long-lasting softness",
        ],
    },
    {
        type: "Gentle Exfoliator",
        heading: "PAPAYA",
        subHeading: "The Glow-Getter",
        paragraph: "This tropical fruit enzyme with natural papain gently melts away dull, dead skin cells for smoother, softer skin that feels refreshed, radiant, and glow-ready",
        image: GentleExfoliatorimage1,
        points: [
            "Gentle exfoliation",
            "Smooth, radiant skin",
        ],
    },
    {
        type: "Protector",
        heading: "GREEN TEA",
        subHeading: "Your Skin's Chill Pill",
        paragraph: "A calm-but-powerful detoxifying antioxidant that defends against pollution and daily stress while soothing irritation, so your skin stays calm, clear, and balanced",
        image: ProtectorImage1,
        points: [
            "Calms & Protects",
            "Defends from free radicals",
        ],
    }
]

const CategoriezedCarousel = () => {

    const [currentTab, setCurrentTab] = useState<ITabsData["type"]>("Brighteners");
    const [currentTabContent, setCurrentTabContent] = useState<ITabsData[]>([]);

    const ingredientSliderParentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        (() => {
            const dataList = tabsData.filter(t => t.type === currentTab);
            setCurrentTabContent(dataList);
        })();

    }, [currentTab])

    return (
        <div
            className='relative z-30'
        >
            <div
                className='bg-[#BA131C]'
            >
                <div
                    className='max-w-150 mx-auto flex items-center justify-between py-2 px-3'
                >
                    {
                        [
                            "Brighteners",
                            "Hydrators",
                            "Gentle Exfoliator",
                            "Protector",
                        ].map((item, index) => (
                            <p
                                className={'text-center text-sm text-white cursor-pointer' + ` ${currentTab === item ? "font-bold" : ""}`}
                                key={index}
                                onClick={() => {
                                    setCurrentTab(item as ITabsData["type"]);
                                }}
                            >{item}</p>
                        ))
                    }
                </div>
            </div>

            <div
                className='py-10'
            >
                <div
                    ref={ingredientSliderParentRef}
                    className="overflow-hidden"
                >
                    <motion.div
                        className="flex items-center md:justify-center gap-5 min-w-max px-10 overflow-hidden"
                        drag={"x"}
                        dragConstraints={ingredientSliderParentRef}
                    >
                        {currentTabContent.map((content, index) => (
                            <SingleSlideItemsElement
                                content={content}
                                key={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

function SingleSlideItemsElement({ content }: {
    content: ITabsData,
}) {

    const [isHover, setIsHover] = useState<boolean>(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        (() => setIsHover(isMobile))();
    }, [isMobile])

    return (
        <div
            className="aspect-3/4 md:aspect-4/3 w-[80dvw] md:max-w-md md:w-full rounded-2xl overflow-hidden relative"
            onMouseEnter={() => {
                if (isMobile) {
                    return;
                }
                setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isMobile) {
                    return;
                }
                setIsHover(false);
            }}
        >
            <Image
                alt={content.heading}
                src={content.image}
                className="w-full h-full object-cover object-center relative z-0"
                onDrag={(event) => {
                    event.preventDefault();
                }}
                draggable={false}
            />

            {/* Overlay text */}
            <AnimatePresence>
                {isHover && (
                    <motion.div
                        className="bg-[#FFFFFF30] text-white backdrop-blur-md p-5 z-20 absolute bottom-0 left-0 w-full"
                        initial={{ y: `100%` }}
                        animate={{ y: 0 }}
                        exit={{ y: `100%` }}
                        transition={{
                            type: "spring",
                            bounce: 0,
                        }}
                    >
                        <div
                            className="space-y-4"
                        >
                            <div
                                className="text-center"
                            >
                                <h3
                                    className="text-lg font-semibold"
                                >{content.heading}</h3>
                                <p>{content.subHeading}</p>
                            </div>
                            <div>
                                <p
                                    className="font-light text-sm"
                                >{content.paragraph}</p>
                            </div>

                            <div
                                className="space-y-2"
                            >
                                <p
                                    className="text-sm"
                                >Good for:</p>
                                <div
                                    className="grid grid-cols-2 md:flex items-center gap-3"
                                >
                                    {content.points.map((point, index) => (
                                        <div
                                            className="flex items-center gap-2"
                                            key={index}
                                        >
                                            <RiCheckboxCircleFill
                                                size={15}
                                                className="shrink-0"
                                            />
                                            <p
                                                className="text-sm"
                                            >{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default CategoriezedCarousel