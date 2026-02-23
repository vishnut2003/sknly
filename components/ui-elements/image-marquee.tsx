'use client';

import { motion } from "framer-motion"
import { StaticImageData } from "next/image";
import { useRef } from "react";

const ImageMarquee = ({
    images,
}: {
    images: (string | StaticImageData)[],
}) => {

    const sliderWrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <div
                ref={sliderWrapperRef}
                className="max-w-full overflow-hidden"
            >
                <motion.div
                    className="flex items-center min-w-max gap-3"
                    initial={{ x: 0 }}
                    animate={{
                        x: ["0%", "-40%"]
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...images, ...images, ...images].map((image, index) => (
                        <div
                            key={index}
                            className="h-40 w-40 bg-cover"
                            style={{
                                backgroundImage: `url(${typeof image === "string" ? image : image.src})`
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default ImageMarquee