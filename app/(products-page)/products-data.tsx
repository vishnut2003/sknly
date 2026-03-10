import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import StrawberryBanner from "./assets/banners/strawberry-whipcake.png";
import VannillaMeltBanner from "./assets/banners/vannilla-melt.png";

// Strawberry Whipcake Images
import StrawberryFeaturedImage from "./assets/product-images/strawberry-whipcake/main.png";
import StrawberryGallery1 from "./assets/product-images/strawberry-whipcake/gallery-1.png";
import StrawberryGallery2 from "./assets/product-images/strawberry-whipcake/gallery-2.png";
import StrawberryGallery3 from "./assets/product-images/strawberry-whipcake/gallery-3.png";
import StrawberryGallery4 from "./assets/product-images/strawberry-whipcake/gallery-4.png";
import StrawberryGallery5 from "./assets/product-images/strawberry-whipcake/gallery-5.png";
import StrawberryGallery6 from "./assets/product-images/strawberry-whipcake/gallery-6.png";
import StrawberryGalleryFooter from "./assets/product-images/strawberry-whipcake/gallery-footer.png";
import Strawberryicon1 from "./assets/product-images/strawberry-whipcake/icons/cup-cake.png";
import Strawberryicon2 from "./assets/product-images/strawberry-whipcake/icons/tag-icon.png";

// Vanilla Melt Images
import VanillaFeaturedImage from "./assets/product-images/vanilla-melt/main.png";
import VanillaGallery1 from "./assets/product-images/vanilla-melt/gallery-1.png";
import VanillaGallery2 from "./assets/product-images/vanilla-melt/gallery-2.png";
import VanillaGallery3 from "./assets/product-images/vanilla-melt/gallery-3.png";
import VanillaGallery4 from "./assets/product-images/vanilla-melt/gallery-4.png";
import VanillaGallery5 from "./assets/product-images/vanilla-melt/gallery-5.png";
import VanillaGallery6 from "./assets/product-images/vanilla-melt/gallery-6.png";
import VanillaGalleryFooter from "./assets/product-images/vanilla-melt/gallery-footer.png";
import VanillaIcon1 from "./assets/product-images/vanilla-melt/icons/cone.png";
import VanillaIcon2 from "./assets/product-images/vanilla-melt/icons/tag-icon.png";

// Espress Mousse Images 
// import EspressoFeaturedImage from "./assets/product-images/espresso-mousse/main.png";
// import EspressoGallery1 from "./assets/product-images/espresso-mousse/gallery-1.png";
// import EspressoGallery2 from "./assets/product-images/espresso-mousse/gallery-2.png";
// import EspressoGallery3 from "./assets/product-images/espresso-mousse/gallery-3.png";
// import EspressoGallery4 from "./assets/product-images/espresso-mousse/gallery-4.png";
// import EspressoGallery5 from "./assets/product-images/espresso-mousse/gallery-5.png";
// import EspressoGallery6 from "./assets/product-images/espresso-mousse/gallery-6.png";
// import EspressoGalleryFooter from "./assets/product-images/espresso-mousse/gallery-footer.png";
// import EspressoIcon1 from "./assets/product-images/espresso-mousse/icons/cup-icon.png";
// import EspressoIcon2 from "./assets/product-images/espresso-mousse/icons/tag-icon.png";

// Tabs Images
import TabSFIcon1 from "./assets/tabs-images/strawberry/fragrance/icon-1.png";
import TabSFIcon2 from "./assets/tabs-images/strawberry/fragrance/icon-2.png";
import TabSFIcon3 from "./assets/tabs-images/strawberry/fragrance/icon-3.png";

import TabSWIcon1 from "./assets/tabs-images/strawberry/we-care/icon-1.png";
import TabSWIcon2 from "./assets/tabs-images/strawberry/we-care/icon-2.png";
import TabSWIcon3 from "./assets/tabs-images/strawberry/we-care/icon-3.png";
import TabSWIcon4 from "./assets/tabs-images/strawberry/we-care/icon-4.png";
import TabSWIcon5 from "./assets/tabs-images/strawberry/we-care/icon-5.png";
import TabSWIcon6 from "./assets/tabs-images/strawberry/we-care/icon-6.png";
import TabSWIcon7 from "./assets/tabs-images/strawberry/we-care/icon-7.png";
import TabSWIcon8 from "./assets/tabs-images/strawberry/we-care/icon-8.png";

import TabVFIcon1 from "./assets/tabs-images/vanilla/fragrance/icon-1.png";
import TabVFIcon2 from "./assets/tabs-images/vanilla/fragrance/icon-2.png";
import TabVFIcon3 from "./assets/tabs-images/vanilla/fragrance/icon-3.png";

import TabVWIcon1 from "./assets/tabs-images/vanilla/we-care/icon-1.png";
import TabVWIcon2 from "./assets/tabs-images/vanilla/we-care/icon-2.png";
import TabVWIcon3 from "./assets/tabs-images/vanilla/we-care/icon-3.png";
import TabVWIcon4 from "./assets/tabs-images/vanilla/we-care/icon-4.png";
import TabVWIcon5 from "./assets/tabs-images/vanilla/we-care/icon-5.png";
import TabVWIcon6 from "./assets/tabs-images/vanilla/we-care/icon-6.png";
import TabVWIcon7 from "./assets/tabs-images/vanilla/we-care/icon-7.png";
import TabVWIcon8 from "./assets/tabs-images/vanilla/we-care/icon-8.png";

// import TabEFIcon1 from "./assets/tabs-images/espresso/fragrance/icon-1.png";
// import TabEFIcon2 from "./assets/tabs-images/espresso/fragrance/icon-2.png";
// import TabEFIcon3 from "./assets/tabs-images/espresso/fragrance/icon-3.png";
// import TabEFIcon4 from "./assets/tabs-images/espresso/fragrance/icon-4.png";

// import TabEWIcon1 from "./assets/tabs-images/espresso/we-care/icon-1.png";
// import TabEWIcon2 from "./assets/tabs-images/espresso/we-care/icon-2.png";
// import TabEWIcon3 from "./assets/tabs-images/espresso/we-care/icon-3.png";
// import TabEWIcon4 from "./assets/tabs-images/espresso/we-care/icon-4.png";
// import TabEWIcon5 from "./assets/tabs-images/espresso/we-care/icon-5.png";
// import TabEWIcon6 from "./assets/tabs-images/espresso/we-care/icon-6.png";
// import TabEWIcon7 from "./assets/tabs-images/espresso/we-care/icon-7.png";
// import TabEWIcon8 from "./assets/tabs-images/espresso/we-care/icon-8.png";

export interface ProductsDataInterface {
    slug: string,
    bannerImage: string | StaticImageData,
    limitedEdition?: boolean,
    productData: {
        title: string,
        category: string,
        weight: string,
        price: {
            sale?: number,
            regular: number,
        },
        moreDetails: {
            genericName: string,
            netQuantity: string,
            shelfLife: string,
            manufacturedBy: ReactNode | string,
            marketDistributedBy: ReactNode | string,
            countryOfOrgin: string,
        }
    },
    content: {
        tags: string[],
        description: string | ReactNode,
        tabsContent: {
            title: string,
            content: string | ReactNode,
        }[],
        tagPoints: {
            image: StaticImageData,
            text: string,
        }[]
    },
    productId: string,
    colorSchema: {
        light: string,
        dark: string,
    },
    images: {
        featuredImage: string | StaticImageData,
        gallery: (string | StaticImageData)[],
        footerImage: string | StaticImageData,
    }
}

export const productsList: ProductsDataInterface[] = [
    {
        slug: "strawberry-whipcake",
        bannerImage: StrawberryBanner,
        productData: {
            title: "Strawberry Whipcake",
            category: "Whipped Body Wash",
            weight: "225 ml",
            price: {
                regular: 899,
            },
            moreDetails: {
                genericName: "Whipped Shower Foam",
                netQuantity: "225 ml",
                shelfLife: "18 months",
                manufacturedBy: "Stanvac Prime Pvt. Ltd., Plot No. B-100, Mayapuri Industrial Area, Phase I, New Delhi – 110064, India",
                marketDistributedBy: "House of Sknly, 308, Vardhaman Plaza, D.B. Gupta Road, Paharganj, New Delhi – 110055, India",
                countryOfOrgin: "India",
            },
        },
        content: {
            tags: [
                "Brightens",
                "Hydrates",
                "Exfoliates",
                "Fruit-Powered",
            ],
            description: (
                <>
                    <p
                        className="font-semibold"
                    >Craving a sweet swirl? Strawberry Whipcake serves the slice.</p>
                    <p>This whipped berry‑cake foam lathers like air, layering ripe strawberry notes over soft vanilla sponge and a whisper of sugar glaze. It’s light, it’s lush, and it turns your shower into dessert‑o’clock, without the crumbs.</p>
                </>
            ),
            tabsContent: [
                {
                    title: "Why you’ll love it",
                    content: (
                        <>
                            <p>More than just a body wash, Sknly turns your everyday shower into a moment you actually look forward to.</p>
                            <p>The whipped texture feels instantly indulgent, light and satisfying, melting into your skin without feeling heavy or greasy. One swirl, and your shower already feels better. The fragrance is where the mood sets in. Dessert-inspired, soft, and comforting, it lingers gently on your skin, subtle, cozy, and addictive in the best way.</p>
                            <p>What you’ll love most is how your skin feels after. Clean, calm, and hydrated, never tight or stripped. The fruit-powered formula with calming botanicals gently exfoliates and boosts brightness, while staying balanced enough for everyday use.</p>
                        </>
                    ),
                },
                {
                    title: "Fragrance Notes",
                    content: (
                        <TabFragreance
                            gridItems={[
                                {
                                    icon: TabSFIcon1,
                                    text: "Strawberry",
                                },
                                {
                                    icon: TabSFIcon2,
                                    text: "Whipped Cream",
                                },
                                {
                                    icon: TabSFIcon3,
                                    text: "Vanilla Sugar",
                                },
                            ]}
                        />
                    ),
                },
                {
                    title: "Ingredients",
                    content: (
                        <>
                            <p>Purified Water, Stearic Acid, Sodium Cocoyl Isethionate, Decyl Glucoside, Caprylyl/Capryl Glucoside, Glycerin, Kakadu Plum Extract, Papaya Extract, Pomegranate Extract, Green Tea Extract, Centella Asiatica Extract, Tocopherol (Vitamin E), Parfum (Fragrance), Sodium Benzoate, Potassium Sorbate, Isobutane, Butane, Propane</p>
                        </>
                    ),
                },
                {
                    title: "We Care",
                    content: (
                        <TabWeCare
                            gridItems={[
                                {
                                    icon: TabSWIcon1,
                                    text: "Suitable for Sensitive Skin",
                                },
                                {
                                    icon: TabSWIcon2,
                                    text: "Gentle & Moisturizing",
                                },
                                {
                                    icon: TabSWIcon3,
                                    text: "Dermat Tested & pH Balanced",
                                },
                                {
                                    icon: TabSWIcon4,
                                    text: "Soap & Sulfate Free",
                                },
                                {
                                    icon: TabSWIcon5,
                                    text: "Alcohol & Paraben Free",
                                },
                                {
                                    icon: TabSWIcon6,
                                    text: "Fruit & Plant Powered",
                                },
                                {
                                    icon: TabSWIcon7,
                                    text: "Long-lasting Fragrance",
                                },
                                {
                                    icon: TabSWIcon8,
                                    text: "Vegan & Cruelty Free",
                                },
                            ]}
                        />
                    ),
                },
            ],
            tagPoints: [
                {
                    image: Strawberryicon1,
                    text: "Your shower is about to get delicious!"
                },
                {
                    image: Strawberryicon2,
                    text: "Unlock free shipping on your first order with The Sknly Club!",
                }
            ],
        },
        productId: "strawberry-whipcake",
        colorSchema: {
            dark: "#F6A1A7",
            light: "#FFF1F1",
        },
        images: {
            featuredImage: StrawberryFeaturedImage,
            footerImage: StrawberryGalleryFooter,
            gallery: [
                StrawberryGallery1,
                StrawberryGallery2,
                StrawberryGallery3,
                StrawberryGallery4,
                StrawberryGallery5,
                StrawberryGallery6,
            ]
        }
    },
    {
        slug: "vanilla-melt",
        bannerImage: VannillaMeltBanner,
        productData: {
            title: "Vanilla Melt",
            category: "Whipped Body Wash",
            weight: "225 ml",
            price: {
                regular: 899,
            },
            moreDetails: {
                genericName: "Whipped Shower Foam",
                netQuantity: "225 ml",
                shelfLife: "18 months",
                manufacturedBy: "Stanvac Prime Pvt. Ltd., Plot No. B-100, Mayapuri Industrial Area, Phase I, New Delhi – 110064, India",
                marketDistributedBy: "House of Sknly, 308, Vardhaman Plaza, D.B. Gupta Road, Paharganj, New Delhi – 110055, India",
                countryOfOrgin: "India",
            }
        },
        content: {
            tags: [
                "Brightens",
                "Hydrates",
                "Exfoliates",
                "Fruit-Powered",
            ],
            description: (
                <>
                    <p
                        className="font-semibold"
                    >Melt away your mood, not your standards.</p>
                    <p>

                        Vanilla Melt wraps your skin in a swirl of warm vanilla, soft sugar, and skin-hugging musk, melting into a whipped lather that smooths, soothes, and stays close. It’s indulgent, skin-deep comfort and never just vanilla.</p>
                </>
            ),
            tabsContent: [
                {
                    title: "Why you’ll love it",
                    content: (
                        <>
                            <p>More than just a body wash, Sknly turns your everyday shower into a moment you actually look forward to.</p>
                            <p>The whipped texture feels instantly indulgent, light and satisfying, melting into your skin without feeling heavy or greasy. One swirl, and your shower already feels better. The fragrance is where the mood sets in. Dessert-inspired, soft, and comforting, it lingers gently on your skin, subtle, cozy, and addictive in the best way.</p>
                            <p>What you’ll love most is how your skin feels after. Clean, calm, and hydrated, never tight or stripped. The fruit-powered formula with calming botanicals gently exfoliates and boosts brightness, while staying balanced enough for everyday use.</p>
                        </>
                    ),
                },
                {
                    title: "Fragrance Notes",
                    content: (
                        <TabFragreance
                            gridItems={[
                                {
                                    icon: TabVFIcon1,
                                    text: "Vanilla",
                                },
                                {
                                    icon: TabVFIcon2,
                                    text: "Tonka Bean",
                                },
                                {
                                    icon: TabVFIcon3,
                                    text: "Soft Musk",
                                },
                            ]}
                        />
                    ),
                },
                {
                    title: "Ingredients",
                    content: (
                        <>
                            <p>Purified Water, Stearic Acid, Sodium Cocoyl Isethionate, Decyl Glucoside, Caprylyl/Capryl Glucoside, Glycerin, Kakadu Plum Extract, Papaya Extract, Green Tea Extract, Centella Asiatica Extract, Tocopherol (Vitamin E), Parfum (Fragrance), Sodium Benzoate, Potassium Sorbate, Isobutane, Butane, Propane</p>
                        </>
                    ),
                },
                {
                    title: "We Care",
                    content: (
                        <TabWeCare
                            gridItems={[
                                {
                                    icon: TabVWIcon1,
                                    text: "Suitable for Sensitive Skin"
                                },
                                {
                                    icon: TabVWIcon2,
                                    text: "Gentle & Moisturizing"
                                },
                                {
                                    icon: TabVWIcon3,
                                    text: "Dermat Tested & pH Balanced"
                                },
                                {
                                    icon: TabVWIcon4,
                                    text: "Soap & Sulfate Free"
                                },
                                {
                                    icon: TabVWIcon5,
                                    text: "Alcohol & Paraben Free"
                                },
                                {
                                    icon: TabVWIcon6,
                                    text: "Fruit & Plant Powered"
                                },
                                {
                                    icon: TabVWIcon7,
                                    text: "Long-lasting Fragrance"
                                },
                                {
                                    icon: TabVWIcon8,
                                    text: "Vegan & Cruelty Free"
                                },
                            ]}
                        />
                    ),
                },
            ],
            tagPoints: [
                {
                    image: VanillaIcon1,
                    text: "Your shower is about to get delicious!"
                },
                {
                    image: VanillaIcon2,
                    text: "Unlock free shipping on your first order with The Sknly Club!",
                }
            ],
        },
        productId: "vanilla-melt",
        colorSchema: {
            dark: "#AF7250",
            light: "#F6EBD2"
        },
        images: {
            featuredImage: VanillaFeaturedImage,
            footerImage: VanillaGalleryFooter,
            gallery: [
                VanillaGallery1,
                VanillaGallery2,
                VanillaGallery3,
                VanillaGallery4,
                VanillaGallery5,
                VanillaGallery6,
            ],
        }
    },
    // {
    //     slug: "espresso-mousse",
    //     bannerImage: EspressoMousseBanner,
    //     limitedEdition: true,
    //     productData: {
    //         title: "Espresso Mousse",
    //         category: "Whipped Body Wash",
    //         weight: "225 ml",
    //         price: {
    //             regular: 899,
    //         },
    //         moreDetails: {
    //             genericName: "Whipped Shower Foam",
    //             netQuantity: "225 ml",
    //             shelfLife: "18 months",
    //             manufacturedBy: "Stanvac Prime Pvt. Ltd., Plot No. B-100, Mayapuri Industrial Area, Phase I, New Delhi – 110064, India",
    //             marketDistributedBy: "House of Sknly, 308, Vardhaman Plaza, D.B. Gupta Road, Paharganj, New Delhi – 110055, India",
    //             countryOfOrgin: "India",
    //         }
    //     },
    //     content: {
    //         tags: [
    //             "Brightens",
    //             "Hydrates",
    //             "Exfoliates",
    //             "Fruit-Powered",
    //         ],
    //         description: (
    //             <>
    //                 <p
    //                     className="font-semibold"
    //                 >Your shower, but make it slow-brewed.</p>
    //                 <p>Espresso Mousse whips creamy espresso and vanilla cream into a soft, whipped-cream lather that melts on skin like your favorite café dessert. It’s indulgent. It’s comforting. And it lingers like the perfect aftertaste.</p>
    //             </>
    //         ),
    //         tabsContent: [
    //             {
    //                 title: "Why you’ll love it",
    //                 content: (
    //                     <>
    //                         <p>More than just a body wash, Sknly turns your everyday shower into a moment you actually look forward to.</p>
    //                         <p>The whipped texture feels instantly indulgent, light and satisfying, melting into your skin without feeling heavy or greasy. One swirl, and your shower already feels better. The fragrance is where the mood sets in. Dessert-inspired, soft, and comforting, it lingers gently on your skin, subtle, cozy, and addictive in the best way.</p>
    //                         <p>What you’ll love most is how your skin feels after. Clean, calm, and hydrated, never tight or stripped. The fruit-powered formula with calming botanicals gently exfoliates and boosts brightness, while staying balanced enough for everyday use.</p>
    //                     </>
    //                 ),
    //             },
    //             {
    //                 title: "Fragrance Notes",
    //                 content: (
    //                     <TabFragreance
    //                         gridItems={[
    //                             {
    //                                 icon: TabEFIcon1,
    //                                 text: "Coffee",
    //                                 className: "w-25"
    //                             },
    //                             {
    //                                 icon: TabEFIcon2,
    //                                 text: "Dark Chocolate",
    //                                 className: "w-28"
    //                             },
    //                             {
    //                                 icon: TabEFIcon3,
    //                                 text: "Caramel",
    //                                 className: "w-19"
    //                             },
    //                             {
    //                                 icon: TabEFIcon4,
    //                                 text: "Vanilla",
    //                                 className: "w-22"
    //                             },
    //                         ]}
    //                     />
    //                 ),
    //             },
    //             {
    //                 title: "Ingredients",
    //                 content: (
    //                     <>
    //                         <p>Purified Water, Stearic Acid, Sodium Cocoyl Isethionate, Decyl Glucoside, Caprylyl/Capryl Glucoside, Glycerin, Kakadu Plum Extract, Papaya Extract, Pomegranate Extract, Green Tea Extract, Centella Asiatica Extract, Tocopherol (Vitamin E), Parfum (Fragrance), Sodium Benzoate, Potassium Sorbate, Isobutane, Butane, Propane</p>
    //                     </>
    //                 ),
    //             },
    //             {
    //                 title: "We Care",
    //                 content: (
    //                     <TabWeCare
    //                         gridItems={[
    //                             {
    //                                 icon: TabEWIcon1,
    //                                 text: "Suitable for Sensitive Skin"
    //                             },
    //                             {
    //                                 icon: TabEWIcon2,
    //                                 text: "Gentle & Moisturizing"
    //                             },
    //                             {
    //                                 icon: TabEWIcon3,
    //                                 text: "Dermat Tested & pH Balanced"
    //                             },
    //                             {
    //                                 icon: TabEWIcon4,
    //                                 text: "Soap & Sulfate Free"
    //                             },
    //                             {
    //                                 icon: TabEWIcon5,
    //                                 text: "Alcohol & Paraben Free"
    //                             },
    //                             {
    //                                 icon: TabEWIcon6,
    //                                 text: "Fruit & Plant Powered"
    //                             },
    //                             {
    //                                 icon: TabEWIcon7,
    //                                 text: "Long-lasting Fragrance"
    //                             },
    //                             {
    //                                 icon: TabEWIcon8,
    //                                 text: "Vegan & Cruelty Free"
    //                             },
    //                         ]}
    //                     />
    //                 ),
    //             },
    //         ],
    //         tagPoints: [
    //             {
    //                 image: EspressoIcon1,
    //                 text: "Your shower is about to get delicious!"
    //             },
    //             {
    //                 image: EspressoIcon2,
    //                 text: "Unlock free shipping on your first order with The Sknly Club!",
    //             }
    //         ]
    //     },
    //     productId: "espresso-mousse",
    //     colorSchema: {
    //         dark: "#A46E54",
    //         light: "#FAF4E9",
    //     },
    //     images: {
    //         featuredImage: EspressoFeaturedImage,
    //         footerImage: EspressoGalleryFooter,
    //         gallery: [
    //             EspressoGallery1,
    //             EspressoGallery2,
    //             EspressoGallery3,
    //             EspressoGallery4,
    //             EspressoGallery5,
    //             EspressoGallery6,
    //         ],
    //     }
    // },
]

function TabFragreance({
    gridItems,
}: {
    gridItems: {
        icon: StaticImageData,
        text: string,
        className?: string,
    }[],
}) {
    return (
        <div>
            <div
                className="flex gap-5 flex-wrap"
            >
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.className} space-y-3`}
                    >
                        <Image
                            alt={item.text}
                            src={item.icon}
                            className={`w-16 h-16 object-contain mx-auto`}
                        />
                        <p
                            className="text-sm text-center font-semibold"
                        >{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function TabWeCare({
    gridItems,
}: {
    gridItems: {
        icon: StaticImageData,
        text: string,
    }[]
}) {
    return (
        <div>
            <div
                className="flex flex-wrap gap-7"
            >
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`space-y-3 w-[45%] md:w-28`}
                    >
                        <Image
                            alt={item.text}
                            src={item.icon}
                            className={`w-17 h-17 object-contain mx-auto`}
                        />
                        <p
                            className="text-sm text-center font-semibold"
                        >{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}