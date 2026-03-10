import DefaultSection from '@/layouts/default-section'
import BGImage from "./bg-image-new.jpg";
import { Fragment } from 'react/jsx-runtime';
import MobileBgImage from "./mobile-bg-image.jpg";

const WeKnowSection = () => {
    return (
        <Fragment>
            <DefaultSection
                outerClassName='bg-[#E5CDE3] hidden md:block'
                className='flex items-stretch min-h-screen'
            >
                {
                    [
                        [
                            "Fruit-Powered",
                            "Vegan & Cruelty Free",
                            "Gentle but Effective",
                            "Suitable for Sensitive Skin"
                        ],
                        [
                            "Soap & Sulfate Free",
                            "Alcohol & Paraben Free",
                            "Dermat Tested & pH Balanced",
                            "Safe for Everyday Use"
                        ],
                    ].map((points, index) => (
                        <div
                            key={index}
                            className={'w-full flex items-center justify-center' + ` ${index === 0 ? "order-1" : "order-3"}`}
                        >
                            <div
                                className='border border-[#BA131C] max-w-80 text-center py-10 px-6 space-y-12'
                            >
                                {points.map((point, idx) => (
                                    <p
                                        key={idx}
                                        className='text-2xl font-light font-glamour text-[#BA131C]'
                                    >{point}</p>
                                ))}
                            </div>
                        </div>
                    ))
                }

                <div
                    className='flex flex-col justify-between w-full min-w-max order-2 text-center py-7 text-2xl font-semibold text-white bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${BGImage.src})`
                    }}
                >
                    <p>BECAUSE WE KNOW</p>
                    <p>WHAT’S BEST FOR YOU</p>
                </div>
            </DefaultSection>

            <DefaultSection
                style={{
                    backgroundImage: `url(${MobileBgImage.src})`
                }}
                outerClassName='bg-center bg-cover py-10 md:hidden'
                className='space-y-10'
            >
                <div
                    className='flex flex-col justify-between w-full min-w-max order-2 text-center text-2xl font-semibold text-white'
                >
                    <p>BECAUSE WE KNOW</p>
                    <p>WHAT’S BEST FOR YOU</p>
                </div>

                <div
                    className='p-10 text-white border max-w-xs mx-auto backdrop-blur-md bg-white/20 rounded-3xl space-y-4'
                >
                    {
                        [
                            "Fruit-Powered",
                            "Vegan & Cruelty Free",
                            "Gentle but Effective",
                            "Suitable for Sensitive Skin",
                            "Soap & Sulfate Free",
                            "Alcohol & Paraben Free",
                            "Dermat Tested & pH Balanced",
                            "Safe for Everyday Use"
                        ].map((text, index) => (
                            <p
                                key={index}
                                className='text-lg text-center font-light font-glamour'
                            >{text}</p>
                        ))
                    }
                </div>

            </DefaultSection>

        </Fragment>
    )
}

export default WeKnowSection