import DefaultSection from '@/layouts/default-section'
import BGImage from "./bg-image-new.jpg";
import { Fragment } from 'react/jsx-runtime';

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
                            <>Dermat Tested & <br />pH Balanced</>,
                            "Safe for Everyday Use"
                        ],
                    ].map((points, index) => (
                        <div
                            key={index}
                            className={'w-full flex items-center justify-center' + ` ${index === 0 ? "order-1" : "order-3"}`}
                        >
                            <div
                                className='border border-[#BA131C] rounded-4xl max-w-100 min-h-125 flex flex-col justify-center text-center py-10 px-6 space-y-12'
                            >
                                {points.map((point, idx) => (
                                    <p
                                        key={idx}
                                        className='text-[32px] font-glamour text-[#BA131C]'
                                    >{point}</p>
                                ))}
                            </div>
                        </div>
                    ))
                }

                <div
                    className='flex flex-col justify-between w-full min-w-max order-2 text-center py-7 px-4 text-[43px] font-semibold text-white bg-cover bg-center'
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
                    backgroundImage: `url(${BGImage.src})`
                }}
                outerClassName='bg-center bg-cover py-10 md:hidden'
                className='space-y-10'
            >
                <div
                    className='flex flex-col justify-between w-full min-w-max order-2 text-center text-[32px] md:text-2xl font-semibold text-white'
                >
                    <p>BECAUSE WE KNOW</p>
                    <p>WHAT’S BEST FOR YOU</p>
                </div>

                <div
                    className='p-5 text-white border max-w-xs mx-auto backdrop-blur-md bg-white/20 rounded-3xl space-y-4'
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
                                className='text-[24px] md:text-lg text-center font-light font-glamour'
                            >{text}</p>
                        ))
                    }
                </div>

            </DefaultSection>

        </Fragment>
    )
}

export default WeKnowSection