import DefaultSection from '@/layouts/default-section'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import Image from 'next/image'
import AboutBannerImage from "./assets/banner-image-new.png";
import WhatWeAreSlider from './what-we-are-slider';
import WhyYouWillLoveUsMobileBgImage from "./assets/bg-images/mobile-bg-image.jpg";

// Gallery Image
import gallery1 from "./assets/what-we-are-not/image-1.jpg";
import gallery2 from "./assets/what-we-are-not/image-2.jpg";
import gallery3 from "./assets/what-we-are-not/image-3.jpg";
import gallery4 from "./assets/what-we-are-not/image-4.jpg";
import gallery5 from "./assets/what-we-are-not/image-5.png";
import gallery6 from "./assets/what-we-are-not/image-6.png";
import gallery7 from "./assets/what-we-are-not/image-7.png";
import gallery8 from "./assets/what-we-are-not/image-8.png";
import gallery9 from "./assets/what-we-are-not/image-9.png";
import gallery10 from "./assets/what-we-are-not/image-10.png";
import gallery11 from "./assets/what-we-are-not/image-11.jpeg";

// Love Us section Images
import LoveUsImage1 from "./assets/love-us-image-1.jpg";
import LoveUsImage2 from "./assets/love-us-image-2.jpg";

// Founder Image
import FounderImage from "./assets/our-founded-image.jpg";
import SignatureImage from "./assets/signature.png";

const AboutPage = () => {
    return (
        <InnerPagesLayout>
            <DefaultSection
                className='flex flex-col md:flex-row items-stretch md:gap-8'
                outerClassName='px-0! md:px-5'
            >
                <div
                    className='w-full bg-[#FDEBEB] flex items-center px-10 py-10 md:px-20'
                >
                    <div
                        className='w-full md:h-100 flex flex-col justify-between text-[#BA131C]'
                    >
                        <p
                            className='text-sm font-semibold hidden md:block'
                        >ABOUT</p>
                        <div
                            className='space-y-5 md:space-y-8'
                        >
                            <p
                                className='text-2xl text-center md:text-left md:text-4xl md:font-semibold font-glamour'
                            >Somehow, bodywash became the most boring thing in our routine.</p>
                            <p
                                className='text-2xl text-center md:text-left md:text-4xl md:font-semibold font-glamour'
                            >So, we made something better!</p>
                        </div>
                        <p
                            className='hidden md:block'
                        >Whipped Foam. Fruit-Powered Actives. Glowing Skin.</p>
                    </div>
                </div>
                <div
                    className='w-full md:w-[70%]'
                >
                    <Image
                        alt='About Image'
                        src={AboutBannerImage}
                        className='w-full'
                    />
                </div>
            </DefaultSection>

            <div
                className='md:hidden bg-[#FDEBEB] text-[#BA131C] text-xl font-semibold text-center py-4 px-6'
            >
                <p>Whipped Foam. Fruit-Powered Actives. Glowing Skin.</p>
            </div>

            <DefaultSection
                outerClassName='py-13'
                className='space-y-6'
            >
                <h2
                    className='text-4xl md:text-5xl font-semibold text-center text-[#BA131C]'
                >WHAT WE ARE NOT</h2>
                <div
                    className='hidden md:grid grid-cols-2 md:grid-cols-5 max-w-300 mx-auto gap-5'
                >
                    {
                        [
                            gallery9,
                            gallery1,
                            gallery5,
                            gallery2,
                            gallery6,
                            gallery3,
                            gallery7,
                            gallery10,
                            gallery8,
                            gallery4,
                        ].map((image, index) => (
                            <Image
                                key={index}
                                alt={`Image-${index + 1}`}
                                src={image}
                                className='w-full h-full object-cover rounded-3xl'
                            />
                        ))
                    }
                </div>

                {/* Mobile Version */}
                <div
                    className='md:hidden space-y-3'
                >
                    <div
                        className='grid grid-cols-2 gap-3'
                    >
                        {
                            [
                                gallery9,
                                gallery1,
                                gallery2,
                                gallery5,
                                gallery6,
                                gallery11,
                                gallery3,
                                gallery7,
                                gallery8,
                                gallery4,
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className='w-full aspect-3/4'
                                >
                                    <Image
                                        alt='Gallery Item'
                                        src={item}
                                        className='w-full h-full object-cover rounded-3xl'
                                    />
                                </div>
                            ))
                        }

                    </div>

                    <div
                        className='bg-[#BA131C] text-center p-10 space-y-10 text-white rounded-xl'
                    >
                        <div
                            className='space-y-3 text-2xl font-medium'
                        >
                            <p>We’re not pretending to be skincare,</p>
                            <p>we ARE skincare.</p>
                        </div>
                        <p
                            className='text-3xl font-semibold'
                        >WHIPPED. JUICY. CLEAN.</p>
                    </div>

                </div>

            </DefaultSection>

            <DefaultSection
                outerClassName='py-13'
                className='space-y-6'
            >
                <h2
                    className='text-4xl md:text-5xl font-semibold text-center text-[#BA131C]'
                >WHAT WE ARE</h2>
                <div
                    className='text-center text-[#BA131C]'
                >
                    <p
                        className='text-lg font-bold'
                    >Skincare, but whipped for your body.</p>
                    <p>We spun real, fruit-powered actives into the fluffiest whipped foam so indulgent it feels like dessert for your skin.</p>
                </div>
                <div>
                    <WhatWeAreSlider />
                </div>
            </DefaultSection>

            <div
                className='space-y-7'
            >

                <h2
                    className='text-5xl font-semibold text-center text-[#BA131C] hidden md:block'
                >WHY YOU WILL LOVE US</h2>

                <div
                    className='hidden md:flex min-h-100 items-stretch bg-[#EFE0EB]'
                >
                    {
                        [
                            {
                                type: "image",
                                content: LoveUsImage1,
                            },
                            {
                                type: "content",
                                content: (
                                    <div>Content</div>
                                ),
                            },
                            {
                                type: "image",
                                content: LoveUsImage2,
                            }
                        ].map((section, index) => {

                            if (section.type === "image" && "src" in section.content) {
                                return (
                                    <div
                                        key={index}
                                        className='w-full'
                                    >
                                        <Image
                                            alt='Love Us'
                                            src={section.content}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                )
                            }

                            if (section.type === "content") {
                                return (
                                    <div
                                        className='w-full flex items-center justify-center p-3'
                                        key={index}
                                    >
                                        <div
                                            className='w-full max-w-80 border border-[#796296] h-130 text-center p-5 flex flex-col justify-center gap-6'
                                        >
                                            {
                                                [
                                                    "Whipped Bodycare",
                                                    "Fruit-Powered Formulas",
                                                    "Smells Like a Mood",
                                                    "Main Character Showers",
                                                    "No Nasties. All Glow.",
                                                    "Two-in-One",
                                                ].map((text, idx) => (
                                                    <p
                                                        key={idx}
                                                        className='text-2xl font-glamour text-[#796296]'
                                                    >{text}</p>
                                                ))
                                            }
                                            <p
                                                className='text-sm text-[#796296]'
                                            >(Shower + Shave)</p>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>

                {/* Mobile Version */}
                <div
                    className='md:hidden flex items-center min-h-100 bg-cover bg-center p-7'
                    style={{ backgroundImage: `url(${WhyYouWillLoveUsMobileBgImage.src})` }}
                >
                    <div
                        className='w-full text-center space-y-6 border text-white border-white/30 bg-white/5 px-6 py-10 rounded-xl backdrop-blur-md'
                    >
                        {
                            [
                                "Whipped Bodycare",
                                "Fruit-Powered Formulas",
                                "Smells Like a Mood",
                                "Main Character Showers",
                                "No Nasties. All Glow.",
                                "Two-in-One",
                            ].map((text, index) => (
                                <p
                                    key={index}
                                    className='font-glamour font-light text-xl'
                                >{text}</p>
                            ))
                        }
                        <p
                            className={"text-sm"}
                        >(Shower + Shave)</p>
                    </div>
                </div>

            </div>

            <DefaultSection
                outerClassName='pt-20 pb-25'
                className='space-y-10'
            >
                <h2
                    className='text-4xl md:text-5xl font-semibold text-center text-[#BA131C]'
                >MEET OUR FOUNDER</h2>

                <div
                    className='flex flex-col md:flex-row items-stretch min-h-160 gap-5'
                >
                    <div
                        className='w-full md:w-[70%] rounded-xl overflow-hidden'
                    >
                        <Image
                            alt='Founded-image'
                            src={FounderImage}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div
                        className='w-full bg-[#FFC7C8] rounded-xl flex items-center justify-center p-6'
                    >
                        <div
                            className='max-w-xl text-[#BA131C] space-y-10 text-center md:text-left'
                        >
                            <h2
                                className='text-xl md:text-2xl italic font-semibold'
                            >“Glow hits different when it’s fruit-powered, fun, and made with care”</h2>

                            <div
                                className='space-y-3'
                            >
                                <p>Sknly began with a simple thought: what if caring for your skin could feel joyful again? What if every shower felt like a little escape instead of just another step in your routine?</p>

                                <p>I wanted to bring back that little spark, the joy of textures that feel soft, scents that lift your mood, and moments that remind you to slow down.
                                    With clean, fruit-powered formulas and whipped textures, Sknly is made to turn everyday bodycare into something your skin and senses actually look forward to.</p>

                                <div>
                                    <p>Because for us, glow isn’t just how your skin looks—</p>
                                    <p
                                        className='font-bold'
                                    >it’s how you feel in it.</p>
                                </div>
                            </div>

                            <div>
                                <Image
                                    alt='sign Image'
                                    src={SignatureImage}
                                    className='w-30 mx-auto'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultSection>

        </InnerPagesLayout>
    )
}

export default AboutPage