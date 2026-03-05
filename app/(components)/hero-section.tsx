'use client';

import Image from "next/image";
import TicketGrapicsImage from "./assets/ticket-design-for-hero-section.png";
import InnerRightColImage from "./assets/hero-inner-right-image.png";

// Icons imports
import CoffeeIcon from "./assets/hero-section-icons/coffee-icon.png";
import ChoclateIcon from "./assets/hero-section-icons/choclate-icon.png";
import CaramelIcon from "./assets/hero-section-icons/caramel-icon.png";
import VanillaIcon from "./assets/hero-section-icons/vanilla-icon.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        className='bg-[#89614a] min-h-screen pt-20 relative hidden md:block'
      >
        {/* Block graphics */}
        <div
          className='absolute top-0 left-0 w-full h-full flex gap-16 z-0'
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
          className="z-10 relative h-[90dvh] flex justify-center items-center"
        >
          <div
            className='z-10 relative min-h-120 bg-contain w-full max-w-220 mx-auto flex items-center flex-col'
            style={{
              backgroundImage: `url(${TicketGrapicsImage.src})`,
            }}
          >
            <div
              className="flex items-center gap-7 p-10"
            >
              <div
                className="text-[#89614a] w-full flex flex-col gap-5"
              >
                <h1
                  className="text-6xl font-semibold font-sloops"
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
                  className="flex items-center gap-2"
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
                          className="text-xs text-center"
                        >{item.label}</p>
                      </div>
                    ))
                  }
                </div>

              </div>
              <div
                className="w-[70%]"
              >
                <Image
                  alt="Hero Banner"
                  src={InnerRightColImage}
                  className="w-full"
                />
              </div>
            </div>

            <div
              className="pb-10"
            >
              <button
                className="py-2 px-8 bg-[#89614a] text-white"
              >Shop Now</button>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile Element */}
      <div
        className="min-h-100 bg-red-300 md:hidden"
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