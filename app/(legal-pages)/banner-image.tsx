'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { StaticImageData } from 'next/image'

const LegalPagesBannerImageSection = ({
    bgImage,
    heading,
    bgImageMobile,
}: {
    bgImage: StaticImageData,
    heading: string,
    bgImageMobile: StaticImageData,
}) => {

    const isMobile = useIsMobile();

    return (
        <div
            className='min-h-100 bg-cover bg-center bg-no-repeat flex items-center justify-center p-3'
            style={{
                backgroundImage: `url(${isMobile ? bgImageMobile.src : bgImage.src})`,
            }}
        >
            <h1
                className='text-4xl font-semibold text-white'
            >{heading}</h1>
        </div>
    )
}

export default LegalPagesBannerImageSection