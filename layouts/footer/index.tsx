'use client';

import DefaultSection from '../default-section'
import { RiInstagramFill, RiPinterestFill, RiSpotifyFill } from '@remixicon/react'
import InputElement from '@/components/ui-elements/input-element';
import Image from 'next/image';
import Link from 'next/link';

// Images
import GalleryImage1 from "./assets/gallery-images/image-1.png";
import GalleryImage2 from "./assets/gallery-images/image-2.png";
import GalleryImage3 from "./assets/gallery-images/image-3.png";
import GalleryImage4 from "./assets/gallery-images/image-4.png";

import LogoImage from "./assets/logo.png";

const Footer = () => {
  return (
    <DefaultSection
      outerClassName='bg-[#FCDFE2] text-[#BA131C] py-6 px-8'
    >
      <div
        className='space-y-7'
      >
        <div
          className='flex items-center justify-between'
        >
          <p
            className='font-glamour text-2xl'
          >Follow us on Instagram for all things Sknly!</p>
          <div
            className='flex items-center gap-5'
          >
            <p
              className='text-2xl font-glamour'
            >@sknly.in</p>
            <div
              className='flex items-center gap-3'
            >
              {
                [
                  {
                    icon: RiInstagramFill,
                    href: "#",
                  },
                  {
                    icon: RiSpotifyFill,
                    href: "#",
                  },
                  {
                    icon: RiPinterestFill,
                    href: "#",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='p-2 bg-white rounded-full'
                  >
                    <item.icon
                      size={20}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div
          className='flex items-center gap-2'
        >
          {
            [GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4]
              .map((image, index) => (
                <div
                  key={index}
                  className='w-full'
                >
                  <Image
                    alt='Gallery Image'
                    src={image}
                    className='aspect-square w-full object-cover shrink'
                  />
                </div>
              ))
          }
        </div>

        <hr
          className='border-[#BA131C] block'
        />

        {/* Footer widget */}
        <div
          className='flex items-start justify-between'
        >
          {/* Footer menu widget */}
          <div
            className='flex items-start min-w-max gap-10 w-full'
          >
            {
              [
                {
                  heading: "SKNLY.",
                  items: [
                    { text: "About", href: "/about" },
                    { text: "Contact", href: "/contact" },
                    { text: "FAQ", href: "/faqs" },
                    { text: "Blogs", href: "/blogs" },
                    { text: "The Sknly Club", href: "/sknly-club" },
                    {
                      text: "Sknly Music",
                      icon: {
                        align: "left",
                        icon: RiSpotifyFill,
                      },
                      href: "/sknly-music",
                    }
                  ]
                },
                {
                  heading: "SHOP",
                  items: [
                    { text: "Shower Foam", href: "/shower-foams" },
                    { text: "Bundles & Save", href: "/bundles" },
                  ],
                },
                {
                  heading: "ACCOUNT",
                  items: [
                    { text: "My Account", href: "/my-account" },
                    { text: "My Orders", href: "/my-account/orders" },
                    { text: "My Cart", href: "/cart" },
                    { text: "Shipping & Tracking", href: "/shipping-tracking" },
                    { text: "Returns & Exchanges", href: "/return-policy" },
                    {
                      currencySwitcher: (
                        <div
                          key={"currency-switcher"}
                        >
                          <p>INR</p>
                        </div>
                      )
                    }
                  ]
                }
              ].map((col, index) => (
                <div
                  key={index}
                  className='space-y-3'
                >
                  <h2
                    className='font-semibold'
                  >{col.heading}</h2>
                  <div
                    className='space-y-3'
                  >
                    {col.items.map((menuItem, idx) => {

                      if (menuItem.text && menuItem.href) {
                        return (
                          <div
                            key={idx}
                          >
                            <Link
                              href={menuItem.href}
                              className='block'
                            >{menuItem.text}</Link>
                          </div>
                        )
                      } else if ("currencySwitcher" in menuItem) {
                        return (
                          menuItem.currencySwitcher
                        )
                      }

                    })}
                  </div>
                </div>
              ))
            }
          </div>

          {/* footer join form */}
          <div
            className='w-full'
          >
            <div
              className='space-y-3'
            >
              <div>
                <h2
                  className='text-3xl font-bold font-glamour'
                >Join the sknly. club!</h2>
                <p>Enjoy free shipping on your first order and unlock more juicy perks inside 💕</p>
              </div>

              <div
                className='flex items-end gap-4'
              >
                <InputElement
                  label='Name:'
                  name='name'
                  onChange={() => {}}
                  value=''
                />
                <InputElement
                  label='Email:'
                  name='email'
                  onChange={() => {}}
                  value=''
                />

                <button
                  className='outline-button'
                >Join</button>
              </div>

            </div>
          </div>
        </div>

        <div
          className='flex items-end justify-between pb-6'
        >
          <div
            className='flex items-center gap-4'
          >
            <p>2026 © House of Sknly. All rights reserved</p>

            <div
              className='w-0.5 h-4 bg-[#BA131C]'
            />

            <div
              className='flex items-center gap-3'
            >
              {
                [
                  {
                    label: "Terms & Conditions",
                    href: "/terms-conditions",
                  },
                  {
                    label: "Privacy Policy",
                    href: "/privacy-policy",
                  }
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className='block'
                  >{item.label}</Link>
                ))
              }
            </div>
          </div>

          <div>
            <Image
              alt='logo'
              src={LogoImage}
              className='w-55'
            />
          </div>

        </div>

      </div>
    </DefaultSection>
  )
}

export default Footer