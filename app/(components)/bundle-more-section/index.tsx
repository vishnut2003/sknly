import Image from 'next/image'
import SideImage from "./side-image-new.jpg";
import BundleMoreText from "./bundle-more-text.png";
import MobileSideImage from "./mobile-side-image.png";
import Link from 'next/link';

const BundleMoreSection = () => {
    return (
        <div
            className='flex flex-col md:flex-row items-stretch md:h-130 bg-[#E5CDE3] min-h-screen'
        >
            <div
                className='w-full'
            >
                <Image
                    alt='Side Image'
                    src={SideImage}
                    className='w-full h-full object-cover hidden md:block'
                />

                <div
                    className='md:hidden p-5'
                >
                    <div
                        className='aspect-6/4'
                    >
                        <Image
                            alt='Mobile Image'
                            src={MobileSideImage}
                            className='w-full h-full object-cover object-center rounded-lg'
                        />
                    </div>
                </div>

            </div>
            <div
                className='w-full flex flex-col justify-center gap-15 py-10 px-5'
            >
                <Image
                    alt='Bundle more text'
                    src={BundleMoreText}
                    className='w-120 mx-auto -rotate-3'
                />

                <div
                    className='text-center w-full max-w-160 mx-auto text-[#BA131C] space-y-7'
                >
                    <h2
                        className='text-xl md:text-5xl font-bold'
                    >Save up to 15%</h2>
                    <p
                        className='text-[22px] font-medium'
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