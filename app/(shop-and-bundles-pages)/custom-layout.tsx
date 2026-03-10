'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import DefaultSection from '@/layouts/default-section'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import MobileSubContentBgImage from "./bundles/assets/bundles-graphics-2.png";

const ShopCustomLayout = ({
  featuredImage,
  heading,
  subContent,
  pageName,
  children,
  mobileFeaturedImage,
  mobileSubContent,
}: PropsWithChildren<{
  heading: string,
  subContent?: ReactNode,
  featuredImage: StaticImageData,
  pageName: "bundles" | "shower-foams",
  mobileFeaturedImage: StaticImageData,
  mobileSubContent?: boolean,
}>) => {

  const isMobile = useIsMobile();

  return (
    <InnerPagesLayout>
      <div
        className='w-full h-80 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center'
        style={{
          backgroundImage: `url(${isMobile ? mobileFeaturedImage.src : featuredImage.src})`
        }}
      >
        <DefaultSection>
          <div
            className='px-10 text-white max-w-180 space-y-4'
          >
            <h1
              className='text-2xl text-center md:text-left font-semibold font-glamour'
            >{heading}</h1>
            {subContent && (
              <div
                className='hidden md:block'
              >
                {subContent}
              </div>
            )}
          </div>
        </DefaultSection>
      </div>

      <div
        className='bg-[#FCDFE2] py-3'
      >
        <div
          className='flex items-center gap-10 justify-center'
        >
          {
            [
              {
                label: "Whipped Shower Foam",
                name: "shower-foams",
                href: "/shower-foams",
              },
              {
                label: "Bundles",
                name: "bundles",
                href: "/bundles",
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={
                  'block text-lg text-[#BA131C]'
                  + ` ${item.name === pageName ? "font-black" : ""}`
                }
              >{item.label}</Link>
            ))
          }
        </div>
      </div>

      {mobileSubContent && subContent ? (
        <div
          className='min-h-60 md:hidden bg-cover px-6 py-10 text-[#BA131C] text-center'
          style={{ backgroundImage: `url(${MobileSubContentBgImage.src})` }}
        >
          <div>
            {subContent}
          </div>
        </div>
      ) : ""}

      <div>
        {children}
      </div>

    </InnerPagesLayout>
  )
}

export default ShopCustomLayout