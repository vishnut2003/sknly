import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import GeneralTabImage from "./assets/general-tab.png";
import OtherTabsImage from "./assets/other-tabs.png";

export interface IFAQsData {
    tab: "General" | "Sustainability" | "Using Sknly" | "Products" | "Your Order" | "Shipping & Returns" | "Get in Touch",
    image: StaticImageData,
    content: {
        question: string,
        answer: string | ReactNode,
    }[],
};

export const FAQsDataList: IFAQsData[] = [
    {
        tab: "General",
        image: GeneralTabImage,
        content: [
            {
                question: "What is Sknly?",
                answer: "Test Content",
            },
            {
                question: "What is Sknly’s privacy policy?",
                answer: "Test"
            },
            {
                question: "Where should I send press or media enquiries?",
                answer: "Test",
            },
            {
                question: "Where else can I buy Sknly?",
                answer: (<>Sknly is <b>available exclusively at www.sknly.in</b>, delivering across India.</>)
            },
            {
                question: "What products are in your range?",
                answer: "Test",
            },
        ]
    },
    {
        tab: "Sustainability",
        image: OtherTabsImage,
        content: [],
    },
    {
        tab: "Using Sknly",
        image: OtherTabsImage,
        content: [],
    },
    {
        tab: "Products",
        image: OtherTabsImage,
        content: [],
    },
    {
        tab: "Your Order",
        image: OtherTabsImage,
        content: [],
    },
    {
        tab: "Shipping & Returns",
        image: OtherTabsImage,
        content: [],
    },
    {
        tab: "Get in Touch",
        image: OtherTabsImage,
        content: [],
    },
]