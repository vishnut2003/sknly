import DefaultSection from "@/layouts/default-section";
import SectionBG from "./assets/fruit-section-bg.png";
import SectionBG2 from "./assets/fruit-section-bg-2.jpg";
import ImageMarquee from "@/components/ui-elements/image-marquee";
import slide1 from "./assets/gallery-images/image-1.png"
import slide2 from "./assets/gallery-images/image-2.png"
import slide3 from "./assets/gallery-images/image-3.png"
import slide4 from "./assets/gallery-images/image-4.png"
import slide5 from "./assets/gallery-images/image-5.png"
import CategoriezedCarousel from "./categoriezed-carousel";
import RabbitIcon from "./assets/icons/rabbit.png";
import HeartIcon from "./assets/icons/heart.png";
import PlantIcon from "./assets/icons/plant.png";
import DropIcon from "./assets/icons/drop.png";
import PH55Icon from "./assets/icons/ph-55.png";
import Image from "next/image";

const FruitPoweredSection = () => {
    return (
        <div>
            <div
                className="min-h-80 bg-contain bg-repeat flex flex-col justify-center pb-20 z-20 relative"
                style={{
                    backgroundImage: `url(${SectionBG.src})`,
                }}
            >
                <DefaultSection
                    className="text-center text-[#BA131C]"
                    outerClassName="py-10"
                >
                    <div
                        className="max-w-260 mx-auto space-y-4"
                    >
                        <h2
                            className="text-3xl font-bold font-glamour"
                        >Meet Your New Favourite Part of the Day!</h2>
                        <p>Say goodbye to boring routines and hello to whipped fun. Sknly turns bodycare into a mood-lifting, skin-loving experience with whipped textures, dessert-inspired fragrances, and fruit-powered formulas that make every shower feel like a treat.</p>
                        <p
                            className="font-bold"
                        >Whipped. Juicy. Clean.</p>
                    </div>
                </DefaultSection>

                <div>
                    <ImageMarquee
                        images={
                            [
                                slide1,
                                slide2,
                                slide3,
                                slide4,
                                slide5,
                            ]
                        }
                    />
                </div>
            </div>

            <div
                className="min-h-130 bg-cover bg-fixed bg-center -mt-20 z-10 relative flex flex-col items-stretch gap-10 pt-30"
                style={{
                    backgroundImage: `url(${SectionBG2.src})`,
                }}
            >
                <div
                    className="text-center w-full text-white max-w-230 mx-auto space-y-2"
                >
                    <h2
                        className="font-glamour text-5xl"
                    >Fruit-Powered</h2>
                    <p
                        className="text-2xl"
                    >skin loving care</p>
                    <p>Inspired by nature and whipped into your bodycare. Our formulas blend fruit-powered actives with calming botanicals to gently cleanse, comfort skin, and support your barrier, leaving it soft, balanced, and glowing every day.</p>
                </div>
                <CategoriezedCarousel />

                <DefaultSection
                    className="flex items-center justify-between gap-10 px-10 max-w-320!"
                    outerClassName="pb-15"
                >
                    <div
                        className="min-w-50 shrink-0"
                    >
                        <p
                            className="text-5xl font-semibold text-white"
                        >
                            {
                                [
                                    "we are",
                                    "proud",
                                    "to be",
                                ].map((text, index) => (
                                    <span
                                        key={index}
                                        className="block"
                                        style={{
                                            textAlign: index === 1 ? "left" : "right",
                                        }}
                                    >{text}</span>
                                ))
                            }
                        </p>
                    </div>
                    <div
                        className="w-[70%]"
                    >
                        <div
                            className="flex items-start gap-2"
                        >
                            {
                                [
                                    {
                                        icon: RabbitIcon,
                                        label: "Cruelty Free",
                                    },
                                    {
                                        icon: HeartIcon,
                                        label: "Vegan",
                                    },
                                    {
                                        icon: PlantIcon,
                                        label: "Toxin Free",
                                    },
                                    {
                                        icon: DropIcon,
                                        label: "Dermatologically Tested",
                                    },
                                    {
                                        icon: PH55Icon,
                                        label: "pH Balanced",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full space-y-2"
                                    >
                                        <Image
                                            alt={item.label}
                                            src={item.icon}
                                            className="w-30 mx-auto"
                                        />

                                        <h3
                                            className="text-center text-white font-bold"
                                        >{item.label}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </DefaultSection>

            </div>

        </div>
    )
}

export default FruitPoweredSection