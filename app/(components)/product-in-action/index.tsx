'use client';

import DefaultSection from "@/layouts/default-section"
import BGImage from "./assets/bg-image.png";
import GridImage1 from "./assets/grip-product-images/product-1.png";
import GridImage2 from "./assets/grip-product-images/product-2.png";
import GridImage3 from "./assets/grip-product-images/product-3.png";
import GridImage4 from "./assets/grip-product-images/product-4.png";
import GridImage5 from "./assets/grip-product-images/product-5.png";
import Image from "next/image";
import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const ProductInActionSection = () => {

    const sliderParentRef = useRef<HTMLDivElement>(null);

    return (
        <div
            style={{
                backgroundImage: `url(${BGImage.src})`,
            }}
            className="bg-cover min-h-120 py-5 md:py-20"
        >
            <DefaultSection
                className="space-y-0 md:space-y-12"
                outerClassName="px-0!"
            >
                <h2
                    className="text-3xl md:text-5xl font-glamour text-center text-[#BA131C]"
                >Product in Action</h2>
                <div
                    className="overflow-hidden flex md:block justify-center"
                    ref={sliderParentRef}
                >
                    <motion.div
                        className="flex items-center gap-5 min-w-max px-5"
                        drag={"x"}
                        dragConstraints={sliderParentRef}
                    >
                        {
                            [
                                {
                                    image: GridImage1,
                                    label: "Vanilla Melt",
                                    description: "Whipped Body Wash",
                                },
                                {
                                    image: GridImage2,
                                    label: "Strawberry Whipcake",
                                    description: "Whipped Body Wash",
                                },
                                {
                                    image: GridImage3,
                                    label: "Espresso Mousse",
                                    description: "Whipped Body Wash",
                                },
                                {
                                    image: GridImage4,
                                    label: "Strawberry Whipcake",
                                    description: "Whipped Body Wash",
                                },
                                {
                                    image: GridImage5,
                                    label: "Strawberry Whipcake",
                                    description: "Whipped Body Wash",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="space-y-4"
                                    style={{
                                        width: index === 2 ? "120%" : "100%"
                                    }}
                                >
                                    <div
                                        style={{
                                            height: index === 2 ? 470 : 380,
                                            width: "100%"
                                        }}
                                        className="rounded-lg overflow-hidden relative aspect-3/5"
                                    >
                                        <Image
                                            alt={item.label}
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />

                                        <button
                                            className="w-10 h-10 border border-white absolute top-5 right-5 z-10 text-white flex items-center justify-center rounded-full hover:text-black hover:bg-white cursor-pointer"
                                        >
                                            <RiArrowRightUpLine
                                                size={20}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="text-center text-[#BA131C]"
                                    >
                                        <h3
                                            className="font-semibold"
                                        >{item.label}</h3>
                                        <p
                                            className="text-sm"
                                        >{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>
            </DefaultSection>
        </div>
    )
}

export default ProductInActionSection