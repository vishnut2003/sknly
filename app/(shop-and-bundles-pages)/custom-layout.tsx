import DefaultSection from '@/layouts/default-section'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren, ReactNode } from 'react'

const ShopCustomLayout = ({
  featuredImage,
  heading,
  subContent,
  pageName,
  children,
}: PropsWithChildren<{
  heading: string,
  subContent?: ReactNode,
  featuredImage: StaticImageData,
  pageName: "bundles" | "shower-foams",
}>) => {
  return (
    <InnerPagesLayout>
      <div
        className='w-full h-80 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center'
        style={{
          backgroundImage: `url(${featuredImage.src})`
        }}
      >
        <DefaultSection>
          <div
            className='px-10 text-white max-w-180 space-y-4'
          >
            <h1
              className='text-3xl font-semibold font-glamour'
            >{heading}</h1>
            {subContent && (
              <div>
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
                href: "#",
              },
              {
                label: "Bundles",
                name: "bundles",
                href: "#",
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

      <div>
        {children}
      </div>

    </InnerPagesLayout>
  )
}

export default ShopCustomLayout