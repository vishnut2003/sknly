'use client';

import DefaultSection from "@/layouts/default-section";
import SectionBG from "./assets/fruit-section-bg.png";
import SectionBG2 from "./assets/fruit-section-bg-2-new.jpg";
import ImageMarquee from "@/components/ui-elements/image-marquee";
import slide1 from "./assets/gallery-images/image-1.jpg"
import slide2 from "./assets/gallery-images/image-2.jpeg"
import slide3 from "./assets/gallery-images/image-3.jpg"
import slide4 from "./assets/gallery-images/image-4.jpg"
import slide5 from "./assets/gallery-images/image-5.jpeg";
import CategoriezedCarousel from "./categoriezed-carousel";
import RabbitIcon from "./assets/icons/rabbit.svg";
import HeartIcon from "./assets/icons/heart.svg";
import PlantIcon from "./assets/icons/plant.svg";
import DropIcon from "./assets/icons/drop.svg";
import PH55Icon from "./assets/icons/ph-55.png";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { useIsMobile } from "@/hooks/use-mobile";

const FruitPoweredSection = () => {

    const isMobile = useIsMobile();

    return (
        <div>
            <div
                className="min-h-80 bg-cover md:bg-contain bg-repeat flex flex-col justify-center pb-20 z-20 relative"
                style={{
                    backgroundImage: `url(${SectionBG.src})`,
                }}
            >
                <DefaultSection
                    className="text-center text-[#BA131C]"
                    outerClassName="py-10"
                >
                    <div
                        className="max-w-290 mx-auto space-y-4"
                    >
                        <h2
                            className="text-[48px] font-medium font-glamour"
                        >Meet Your New Favourite Part of the Day!</h2>
                        <p
                            className="text-[20px]"
                        >Say goodbye to boring routines and hello to whipped fun. Sknly turns bodycare into a mood-lifting, skin-loving experience with whipped textures, dessert-inspired fragrances, and fruit-powered formulas that make every shower feel like a treat.</p>
                        <p
                            className="font-bold text-[24px]"
                        >Whipped. Juicy. Clean.</p>
                    </div>
                </DefaultSection>

                <div>
                    <ImageMarquee
                        images={
                            [
                                slide1,
                                slide2,
                                slide3,
                                slide4,
                                slide5,
                            ]
                        }
                    />
                </div>
            </div>

            <div
                className="min-h-130 bg-cover bg-fixed bg-center -mt-20 z-10 relative flex flex-col items-stretch gap-10 pt-30"
                style={{
                    backgroundImage: `url(${SectionBG2.src})`,
                }}
            >
                <div
                    className="text-center w-full text-white max-w-260 mx-auto space-y-6"
                >
                    <h2
                        className="font-glamour text-[90px] leading-20"
                    >Fruit-Powered</h2>
                    <p
                        className="text-4xl font-semibold"
                    >skin loving care</p>
                    <p
                        className="font-semibold text-lg"
                    >Inspired by nature and whipped into your bodycare. Our formulas blend fruit-powered actives with calming botanicals to gently cleanse, comfort skin, and support your barrier, leaving it soft, balanced, and glowing every day.</p>
                </div>
                <CategoriezedCarousel />

                <DefaultSection
                    className="flex flex-col md:flex-row items-center justify-between gap-10 md:px-10"
                    outerClassName="pb-15"
                >
                    <div
                        className="min-w-65 shrink-0"
                    >
                        <p
                            className="text-2xl text-center! md:text-left md:text-6xl font-semibold text-[#FDEBEB]"
                        >
                            {
                                [
                                    "we are",
                                    "proud",
                                    "to be:",
                                ].map((text, index) => (
                                    <Fragment
                                        key={index}
                                    >
                                        {index !== 0 && isMobile && (
                                            <>&nbsp;</>
                                        )}
                                        <span
                                            className="md:block"
                                            style={{
                                                textAlign: index === 1 ? "left" : "right",
                                            }}
                                        >{text}</span>
                                    </Fragment>
                                ))
                            }
                        </p>
                    </div>
                    <div
                        className="w-full md:w-[80%]"
                    >
                        <div
                            className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-start md:gap-2"
                        >
                            {
                                [
                                    {
                                        icon: RabbitIcon,
                                        label: "Cruelty Free",
                                    },
                                    {
                                        icon: HeartIcon,
                                        label: "Vegan",
                                    },
                                    {
                                        icon: PlantIcon,
                                        label: "Toxin Free",
                                    },
                                    {
                                        icon: DropIcon,
                                        label: "Dermatologically Tested",
                                    },
                                    {
                                        icon: PH55Icon,
                                        label: "pH Balanced",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-1/3 md:w-full space-y-6 p-1"
                                    >
                                        <Image
                                            alt={item.label}
                                            src={item.icon}
                                            className="w-35 mx-auto"
                                        />

                                        <h3
                                            className="text-center text-sm md:text-lg text-white font-bold"
                                        >{item.label}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </DefaultSection>

            </div>

        </div>
    )
}

export default FruitPoweredSection