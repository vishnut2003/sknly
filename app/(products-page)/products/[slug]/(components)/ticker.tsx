'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductPageTicker({
    color,
}: {
    color: {
        dark: string,
        light: string,
    }
}) {

    const [textTicker, setTextTicker] = useState<0 | 1>(0);

    useEffect(() => {
        const intervelId = setInterval(() => {
            setTextTicker(prev => prev === 0 ? 1 : 0);
        }, 3000)

        return () => {
            clearInterval(intervelId);
        }

    }, [])

    return (
        <div
            className='py-2 h-10 overflow-hidden text-center text-sm'
            style={{
                backgroundColor: color.dark,
                color: color.light,
            }}
        >

            <AnimatePresence>
                {textTicker === 0 && (
                    <motion.p
                        key={"text-1"}
                        initial={{ y: `-100%`, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                        exit={{ y: `200%` }}
                    >Free shipping on your 1st order with The Sknly Club</motion.p>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {textTicker === 1 && (
                    <motion.p
                        key={"text-2"}
                        initial={{ y: `-100%`, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                        exit={{ y: `200%` }}
                    >Save up to 15% on bundles</motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}