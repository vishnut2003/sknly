'use client';

import Image from 'next/image'
import SideImage from "./side-image-new.jpg";
import BundleMoreText from "./bundle-more-text.png";
import MobileSideImage from "./mobile-side-image.jpg";
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

const BundleMoreSection = () => {

    const isMobile = useIsMobile();

    return (
        <div
            className='flex flex-col md:flex-row items-stretch md:h-130 bg-[#E5CDE3] min-h-screen'
        >
            <div
                className='w-full pt-8 px-8 md:p-0'
            >
                <Image
                    alt='Side Image'
                    src={isMobile ? MobileSideImage : SideImage}
                    className='w-full h-full object-cover rounded-xl md:rounded-none'
                />

            </div>
            <div
                className='w-full flex flex-col justify-center gap-15 py-10 px-5'
            >
                <Image
                    alt='Bundle more text'
                    src={BundleMoreText}
                    className='w-80 md:w-120 mx-auto -rotate-3'
                />

                <div
                    className='text-center w-full max-w-160 mx-auto text-[#BA131C] space-y-7'
                >
                    <h2
                        className='text-[24px] md:text-5xl font-bold'
                    >Save up to 15%</h2>
                    <p
                        className='text-[18px] md:text-[22px] font-medium px-5 md:px-0'
                    >Build your own bundle. Mix, match, and layer your favorite Sknly fragrances for more care, more glow, more you.</p>
                </div>

                <div
                    className='flex justify-center'
                >
                    <Link
                        href={"/bundles"}
                        className='outline-button'
                    >Shop Bundles</Link>
                </div>

            </div>
        </div>
    )
}

export default BundleMoreSection