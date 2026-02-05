import DefaultSection from '@/layouts/default-section'
import BGImage from "./bg-image.png";

const WeKnowSection = () => {
    return (
        <DefaultSection
            outerClassName='bg-[#E5CDE3]'
            className='flex items-stretch min-h-100'
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
                            className='border border-[#BA131C] max-w-80 text-center p-6 space-y-7'
                        >
                            {points.map((point, idx) => (
                                <p
                                    key={idx}
                                    className='text-lg font-light font-glamour text-[#BA131C]'
                                >{point}</p>
                            ))}
                        </div>
                    </div>
                ))
            }

            <div
                className='flex flex-col justify-between w-full min-w-max order-2 text-center py-7 text-2xl font-semibold text-white'
                style={{
                    backgroundImage: `url(${BGImage.src})`
                }}
            >
                <p>BECAUSE WE KNOW</p>
                <p>WHAT’S BEST FOR YOU</p>
            </div>
        </DefaultSection>
    )
}

export default WeKnowSection