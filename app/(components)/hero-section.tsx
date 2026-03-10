'use client';

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import MobileBgImage from "./assets/backgounds/mobile-bg-image.jpg";
import DesktopBgImage from "./assets/backgounds/desktop-bg-image.jpg";
import { HlsVideo } from "@ashetian/next-hls-lite";

const HomePageHeroSection = () => {

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
    <div>
      <div
        className="md:hidden max-h-dvh min-h-dvh bg-red-300 bg-cover bg-center overflow-hidden"
      // style={{ backgroundImage: `url(${MobileBgImage.src})` }}
      >
        <HlsVideo
          src="/images/hero-video/hero.mp4"
          poster="https://example.com/poster.jpg"
          muted
          autoPlay
          playsInline
          loop
          fit="cover"
        />
      </div>

      <div
        className="hidden md:block min-h-[95dvh] bg-cover bg-center"
        style={{ backgroundImage: `url(${DesktopBgImage.src})` }}
      ></div>

      <div
        className='bg-[#BA131C] text-white py-2 h-10 overflow-hidden text-center text-sm'
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
    </div>
  )
}

export default HomePageHeroSection