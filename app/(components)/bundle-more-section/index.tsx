import Image from 'next/image'
import SideImage from "./side-image.jpg";
import BundleMoreText from "./bundle-more-text.png";
import MobileSideImage from "./mobile-side-image.png";

const BundleMoreSection = () => {
    return (
        <div
            className='flex flex-col md:flex-row items-stretch md:h-130 bg-[#E5CDE3]'
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
                className='w-full flex flex-col justify-center gap-8 py-10 px-5'
            >
                <Image
                    alt='Bundle more text'
                    src={BundleMoreText}
                    className='w-80 mx-auto -rotate-3'
                />

                <div
                    className='text-center w-full max-w-130 mx-auto text-[#BA131C] space-y-3'
                >
                    <h2
                        className='text-xl md:text-4xl font-bold'
                    >Save up to 15%</h2>
                    <p>Build your own bundle. Mix, match, and layer your favorite Sknly fragrances for more care, more glow, more you.</p>
                </div>

                <div
                    className='flex justify-center'
                >
                    <button
                        className='outline-button'
                    >Shop Bundles</button>
                </div>

            </div>
        </div>
    )
}

export default BundleMoreSection