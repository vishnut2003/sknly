'use client';

import { IFAQsData } from "@/app/(other-pages)/faqs/faqs-data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

const FaqSingleItem = ({
    faq,
}: {
    faq: IFAQsData['content'][0],
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className="border-b text-[#451F0F]"
        >
            <button
                className="py-5 w-full text-left text-lg font-semibold flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <p>{faq.question}</p>
                {isOpen ? (
                    <RiSubtractLine/>
                ): (
                    <RiAddLine/>
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="pb-5"
                    >
                        <div
                            className="space-y-3"
                        >{faq.answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FaqSingleItem