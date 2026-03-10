'use client';

import DefaultSection from '../default-section'
import { RiInstagramFill, RiPinterestFill, RiSpotifyFill } from '@remixicon/react'
import InputElement from '@/components/ui-elements/input-element';
import Image from 'next/image';
import Link from 'next/link';
import IndiaFlag from "./assets/india-flag.png";
import SpotifyIcon from "./assets/spotify-icon.png";

import LogoImage from "./assets/logo.png";
import { Fragment } from 'react/jsx-runtime';

const Footer = () => {
  return (
    <DefaultSection
      outerClassName='bg-[#FCDFE2] text-[#BA131C] py-6 px-8'
    >
      <div
        className='space-y-7'
      >
        <div
          className='flex items-center justify-between flex-col md:flex-row gap-3'
        >
          <p
            className='font-glamour text-lg md:text-2xl'
          >Follow us on Instagram for all things Sknly!</p>
          <div
            className='flex items-center gap-5'
          >
            <p
              className='text-lg md:text-2xl font-glamour'
            >@sknly.in</p>
            <div
              className='flex items-center gap-3'
            >
              {
                [
                  {
                    icon: RiInstagramFill,
                    href: "https://www.instagram.com/sknly.in/",
                  },
                  {
                    icon: RiSpotifyFill,
                    href: "https://open.spotify.com/playlist/2FnaZgCVJ2WMHEDyJIVQHi?si=ncqVjNQxRxiDuehmKbrlcA&pi=LOtZQbSbQUinF&nd=1&dlsi=cee1f6f65b414635",
                  },
                  {
                    icon: RiPinterestFill,
                    href: "https://in.pinterest.com/05yziwfdboys2orgqh5uduu3khnnrr/",
                  },
                ].map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className='p-2 bg-white rounded-full'
                  >
                    <item.icon
                      size={20}
                    />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        <hr
          className='border-[#BA131C] block'
        />

        {/* Footer widget */}
        <div
          className='flex flex-col md:flex-row gap-5 items-start justify-between'
        >
          {/* Footer menu widget */}
          <div
            className='grid grid-cols-2 md:flex items-start min-w-max gap-10 w-full'
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
                      element: (
                        <Link
                          href={"/sknly-music"}
                          className='flex items-center gap-2'
                        >
                          <p>Sknly Music</p>
                          <Image
                            alt='Spotify'
                            src={SpotifyIcon}
                            className='w-6'
                          />
                        </Link>
                      )
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
                      element: (
                        <div
                          key={"currency-switcher"}
                          className='flex items-center gap-2'
                        >
                          <Image
                            alt='Flag'
                            src={IndiaFlag}
                            className='w-6'
                          />
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
                      } else if ("element" in menuItem) {
                        return (
                          <Fragment
                            key={idx}
                          >
                            {menuItem.element}
                          </Fragment>
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
              className='space-y-6'
            >
              <div
                className='text-center md:text-left space-y-1'
              >
                <h2
                  className='text-3xl font-bold font-glamour'
                >Join the sknly. club!</h2>
                <p>Enjoy free shipping on your first order and unlock more juicy perks inside 💕</p>
              </div>

              <div
                className='flex flex-col md:flex-row items-center md:items-end gap-4'
              >
                <InputElement
                  label='Name:'
                  name='name'
                  onChange={() => { }}
                  value=''
                />
                <InputElement
                  label='Email:'
                  name='email'
                  onChange={() => { }}
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
          className='flex flex-col-reverse gap-6 md:flex-row items-end justify-between pb-6'
        >
          <div
            className='flex items-center gap-4 flex-col md:flex-row w-full'
          >
            <p>2026 © House of Sknly. All rights reserved</p>

            <div
              className='w-px h-4 bg-[#BA131C] hidden md:block opacity-40'
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

          <div
            className='w-full md:w-max flex md:block justify-center'
          >
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