import Image from 'next/image'
import SideImage from "./side-image.png";
import BundleMoreText from "./bundle-more-text.png";
import Link from 'next/link';

const BundleMoreSectionTwo = () => {
    return (
        <div
            className='flex flex-col md:flex-row items-stretch md:h-130 bg-[#FFFCF8] py-10'
        >
            <div
                className='w-full'
            >
                <Image
                    alt='Side Image'
                    src={SideImage}
                    className='w-full h-full object-contain'
                />
            </div>
            <div
                className='w-full flex flex-col justify-center gap-8'
            >
                <Image
                    alt='Bundle more text'
                    src={BundleMoreText}
                    className='w-80 mx-auto -rotate-3'
                />

                <div
                    className='text-center w-full max-w-130 mx-auto text-[#BA131C] space-y-3'
                >
                    <p>The best gifts are the ones you’d want for yourself. Sknly bundles are pure indulgence, beautifully packed in our signature box with a thoughtful note inside</p>
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

export default BundleMoreSectionTwo