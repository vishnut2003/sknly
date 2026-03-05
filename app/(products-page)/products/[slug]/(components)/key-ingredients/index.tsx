'use client';

import { useEffect, useState } from "react";
import { ProductIngrediantSlideInterface, ProductIngrediantSliderData } from "./slides-data";
import DefaultSection from "@/layouts/default-section";
import { RiArrowLeftLine, RiArrowRightLine, RiCheckboxCircleFill } from "@remixicon/react";

const KeyIngredientsSection = () => {

  const [currentCategory, setCurrentCategory] = useState<ProductIngrediantSlideInterface["category"]>("Brighteners");

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [slides, setSlides] = useState<ProductIngrediantSlideInterface[]>([]);

  useEffect(() => {
    (() => {
      const slides = ProductIngrediantSliderData.filter((s) => s.category === currentCategory);
      setSlides(slides);
      setCurrentSlideIndex(0);
    })();
  }, [currentCategory]);

  if (!slides[currentSlideIndex]) {
    return "";
  }

  return (
    <div
      style={{
        backgroundImage: `url(${slides[currentSlideIndex].image.src})`,
      }}
      className="bg-cover bg-center relative"
    >
      <div
        className="bg-black/30 absolute top-0 left-0 w-full h-full z-0"
      />
      <DefaultSection
        outerClassName="py-10 z-10 relative"
        className="space-y-10"
      >
        <div
          className="flex flex-col md:flex-row gap-5 justify-center items-center"
        >
          <p
            className="shrink-0 text-lg font-semibold text-white"
          >Key Ingredients:</p>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {
              [
                "Brighteners",
                "Hydrators",
                "Gentle Exfoliator",
                "Protector",
              ].map((c, idx) => (
                <button
                  key={idx}
                  className={
                    "py-2 px-3 border border-white cursor-pointer rounded-lg"
                    + ` ${currentCategory === c ? "bg-white text-[#451F0F]" : "text-white"}`
                  }
                  onClick={() => {
                    setCurrentCategory(c as ProductIngrediantSlideInterface["category"]);
                  }}
                >{c}</button>
              ))
            }
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-10"
        >
          {
            [
              {
                icon: RiArrowLeftLine,
                onClick: () => {
                  setCurrentSlideIndex(prev => --prev);
                },
                className: "order-1 absolute md:static bottom-50 z-50 left-5",
                disable: currentSlideIndex <= 0,
              },
              {
                icon: RiArrowRightLine,
                onClick: () => {
                  setCurrentSlideIndex(prev => ++prev);
                },
                className: "order-3 absolute md:static bottom-50 z-50 right-5",
                disable: currentSlideIndex === slides.length - 1
              }
            ].map((action, idx) => (
              <div
                key={idx}
                className={
                  "min-w-max shrink-0"
                  + ` ${action.className}`
                }
              >
                <button
                  className="w-8 md:w-12 h-8 md:h-12 border flex items-center justify-center rounded-full text-white cursor-pointer disabled:opacity-30"
                  onClick={action.onClick}
                  disabled={action.disable}
                >
                  <action.icon
                    size={25}
                  />
                </button>
              </div>
            ))
          }

          <div
            className="text-white order-2 w-full max-w-3xl text-center space-y-5 backdrop-blur-md p-10 bg-white/10 rounded-lg"
          >
            <h2
              className="text-2xl font-semibold"
            >{slides[currentSlideIndex].heading}</h2>
            <p>{slides[currentSlideIndex].content}</p>
            <div
              className="flex flex-col md:flex-row items-center gap-3 justify-center"
            >
              <p
                className="font-semibold"
              >Good for:</p>
              <div
                className="grid grid-cols-2 md:flex items-center gap-3 justify-center"
              >
                {
                  slides[currentSlideIndex].points.map((point, index) => (
                    <div
                      className="flex items-center gap-3"
                      key={index}
                    >
                      <RiCheckboxCircleFill
                        size={20}
                        className="shrink-0"
                      />
                      <p
                        className="text-xs md:text-sm"
                      >{point}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>

      </DefaultSection>
    </div>
  )
}

export default KeyIngredientsSection