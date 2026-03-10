import { StaticImageData } from "next/image"
import KakaduPlumImage from "./assets/Kakadu-Plum.jpg";
import PomegranateImage from "./assets/Pomegranate.jpg";
import CentellaImage from "./assets/Centella.jpg";
import VitaminEImage from "./assets/Vitamin-E.jpg";
import PapayaImage from "./assets/Papaya.jpg";
import GreenTeaImage from "./assets/Green-Tea.jpg";

export interface ProductIngrediantSlideInterface {
    category: "Brighteners" | "Hydrators" | "Gentle Exfoliator" | "Protector",
    heading: string,
    content: string,
    points: string[],
    image: StaticImageData,
}

export const ProductIngrediantSliderData: ProductIngrediantSlideInterface[] = [
    {
        category: "Brighteners",
        heading: "Kakadu Plum",
        content: "The Vitamin C Powerhouse. This Aussie superfruit delivers up to 100x more Vitamin C than oranges to brighten skin, even out tone, and reveal fresh, radiant, glow-ready skin",
        points: [
            "Boosts glow",
            "Brightens skin",
            "Evens out skin tone",
        ],
        image: KakaduPlumImage,
    },
    {
        category: "Brighteners",
        heading: "Pomegranate",
        content: "Bursting with glow-boosting antioxidants, this juicy superfruit brightens dull skin, evens out tone, and protects  your glow from daily damage",
        points: [
            "Brightens & Refreshes",
            "Protects from damage",
        ],
        image: PomegranateImage,
    },
    {
        category: "Hydrators",
        heading: "Centella",
        content: "The Calm-Your-Skin Hero. Inspired by Korean skincare, Cica soothes irritation, strengthens your barrier, and restores balance so your skin feels soft, steady, and refreshed.",
        points: [
            "Calms & Soothes",
            "Strengthens skin barrier",
        ],
        image: CentellaImage,
    },
    {
        category: "Hydrators",
        heading: "Vitamin E",
        content: "The Moisture Lock-In. Vitamin E hydrates, protects, and locks in moisture, keeping your skin soft, smooth, and never stripped",
        points: [
            "Deeply Hydrates",
            "Long-lasting softness",
        ],
        image: VitaminEImage,
    },
    {
        category: "Gentle Exfoliator",
        heading: "Papaya",
        content: "The Glow-Getter. This tropical fruit enzyme with natural papain gently melts away dull, dead skin cells for smoother, softer skin that feels refreshed, radiant, and glow-ready",
        points: [
            "Gentle exfoliation",
            "Smooth, radiant skin",
        ],
        image: PapayaImage,
    },
    {
        category: "Protector",
        heading: "Green Tea",
        content: "A calm-but-powerful detoxifying antioxidant that defends against pollution and daily stress while soothing irritation, so your skin stays calm, clear, and balanced",
        points: [
            "Calms & Protects",
            "Defends from free radicals",
        ],
        image: GreenTeaImage,
    }
]