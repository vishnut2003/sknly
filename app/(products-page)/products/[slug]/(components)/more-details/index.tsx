'use client';

import { ProductsDataInterface } from "@/app/(products-page)/products-data";
import { RiCloseCircleLine } from "@remixicon/react";
import { Fragment, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

const ProductPageMoreDetailsPopup = ({
    data,
    color,
}: {
    data: ProductsDataInterface["productData"]["moreDetails"],
    color: {
        dark: string,
        light: string,
    }
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>

            <button
                className="font-semibold underline mb-10 cursor-pointer"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                More Product Information +
            </button>

            <AnimatePresence>
                {isOpen && (
                    <Template
                        onClose={() => {
                            setIsOpen(false);
                        }}
                        data={data}
                        color={color}
                    />
                )}
            </AnimatePresence>
        </Fragment>
    )

}

function Template({
    onClose,
    color,
    data,
}: {
    onClose: () => void,
    color: {
        dark: string,
        light: string,
    },
    data: ProductsDataInterface["productData"]["moreDetails"],
}) {
    return (
        <motion.div
            className="fixed z-100 top-0 left-0 w-full h-full p-5 flex items-center justify-center bg-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="max-w-140 py-8 md:py-10 px-8 md:px-13 flex flex-col gap-3 border rounded-3xl relative"
                style={{
                    backgroundColor: color.light,
                }}
                initial={{ y: '150%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: `150%`, opacity: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0,
                }}
            >

                <button>
                    <RiCloseCircleLine
                        size={30}
                        className="text-[#451F0F] absolute top-5 right-5 cursor-pointer"
                        onClick={() => {
                            onClose();
                        }}
                    />
                </button>

                {
                    [
                        {
                            label: "Generic Name",
                            value: data.genericName,
                        },
                        {
                            label: "Net Quantity",
                            value: data.netQuantity,
                        },
                        {
                            label: "Shelf Life",
                            value: data.shelfLife,
                        },
                        {
                            label: "Manufactured By",
                            value: data.manufacturedBy,
                        },
                        {
                            label: "Marketed & Distributed By",
                            value: data.marketDistributedBy,
                        },
                        {
                            label: "Country of Origin",
                            value: data.countryOfOrgin,
                        }
                    ].map((point, index) => (
                        <p
                            key={index}
                        ><b>{point.label}:</b> {point.value}</p>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default ProductPageMoreDetailsPopup