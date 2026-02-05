import ImageCarousel from '@/components/ui-elements/image-carousel'
import Image1 from "./assets/carousel-images/image-1.png";
import Image2 from "./assets/carousel-images/image-2.png";

const CategoriezedCarousel = () => {
    return (
        <div
            className='relative z-30'
        >
            <div
                className='bg-[#BA131C]'
            >
                <div
                    className='max-w-150 mx-auto flex items-center justify-between py-2'
                >
                    {
                        [
                            "Brighteners",
                            "Hydrators",
                            "Gentle Exfoliator",
                            "Protector",
                        ].map((item, index) => (
                            <p
                                className='text-center text-sm text-white'
                                key={index}
                            >{item}</p>
                        ))
                    }
                </div>
            </div>

            <div
                className='py-10'
            >
                <ImageCarousel
                    images={
                        [
                            Image1,
                            Image2,
                        ]
                    }
                    slidePerShow={2}
                />
            </div>

        </div>
    )
}

export default CategoriezedCarousel