import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import GeneralTabImage from "./assets/general-tab.png";
import OtherTabsImage from "./assets/other-tabs.png";
import Link from "next/link";

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
                answer: (
                    <>
                        <p><b>Sknly is fruit-powered bodycare that feels like dessert. It’s clean, vegan, and cruelty-free.</b></p>
                        <p>Powered by fruits and skin-loving botanicals, our Whipped Shower Foams are crafted with care in India and infused with natural actives that help brighten, hydrate, gently exfoliate, and soothe, all while supporting your skin barrier and delivering an airy, antioxidant-rich cleanse in one fluffy swirl.</p>
                        <p>It’s bodycare that turns your daily routine into a sensorial, feel-good moment, one that smells incredible, feels refreshing, and leaves your skin soft, glowy, and happy.</p>
                    </>
                ),
            },
            {
                question: "What is Sknly’s privacy policy?",
                answer: (<>You can view our full <i><b>Privacy Policy [here]</b></i> . We respect your data and your inbox, no spam, just what you signed up for.</>)
            },
            {
                question: "Where should I send press or media enquiries?",
                answer: (
                    <>
                        <p>We’d love to chat. For all press, PR, and media </p>
                        <p>enquiries,<i><b>drop us an email at</b></i> </p>
                        <p><i><b>hello@sknlybeauty.com</b></i> and we’ll get back to you soon.</p>

                    </>),
            },
            {
                question: "Where else can I buy Sknly?",
                answer: (<>Sknly is <b>available exclusively at www.sknly.in</b>, delivering across India.</>)
            },
            {
                question: "What products are in your range?",
                answer: (
                    <>
                        <p>We’re starting strong with what we do best, Whipped Shower Foams.  </p>
                        <p>Our debut range features three indulgent, fruit-powered scents:</p>
                        <ul
                            className="pl-5 list-disc"
                        >
                            {
                                [
                                    {
                                        label: "Vanilla Melt",
                                        href: "/products/vanilla-melt"
                                    },
                                    {
                                        label: "Strawberry Whipcake",
                                        href: "/products/strawberry-whipcake"
                                    },
                                    {
                                        label: "Espresso Mousse (Limited Edition)",
                                        href: "/products/espresso-mousse"
                                    }
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block w-full"
                                        >{item.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <p>You’re gonna want all three. And yes, this is just the beginning.</p>
                    </>),
            },
        ]
    },
    {
        tab: "Sustainability",
        image: OtherTabsImage,
        content: [
            {
                question: "Is the Sknly can recyclable?",
                answer: "Yes! Our Whipped Shower Foam cans are made of aluminium, a widely recyclable material. Just be sure the can is completely empty before recycling, and check with your local guidelines for any aerosol-specific rules.",
            },
            {
                question: "Do you use clean, conscious ingredients?",
                answer: (<>Absolutely. We’re mindful of everything that goes into our formulas. Our fruit and plant-derived extracts are cruelty-free and carefully sourced with skin safety and sustainability in mind.<i><b>No harsh stuff. No shortcuts. Just the good stuff, crafted with care.</b></i></>)
            },
            {
                question: "Where is Sknly made and why?",
                answer: (
                <>
                <p>Sknly is proudly <i><b>made in India</b></i>, thoughtfully crafted for skin that lives through our climate, pollution, and everyday environmental stress.</p>
                <p>We formulate, manufacture, and ship locally to keep things fresh, intentional, and better for the planet</p>
                
                </>)
            },
        ],
    },




    {
        tab: "Using Sknly",
        image: OtherTabsImage,
        content: [
            {
                question: "Is Sknly designed for everyday use?",
                answer: (
                <>
                <p>Yes, 100%. Sknly is designed for everyday use, even on sensitive skin. </p>
                <p>Our whipped formula is <i><b>soap-free, pH-balanced, and powered by fruit and plant-based extracts</b></i>. No harsh chemicals, no over-exfoliation. It cleanses while it brightens, hydrates, gently exfoliates, soothes, and supports your skin barrier, all in one ultra-light, skin-loving foam. </p>
                <p>Think of it as your daily body wash, just lighter, cleaner, and way more fun to use. And absolutely<i><b>no nasties, no parabens, sulfates</b></i>,or anything your skin doesn’t need.</p>
                </>)
            },
            {
                question: "Can I use Sknly as a shaving cream too?",
                answer: "Totally. Sknly’s Whipped Shower Foam works beautifully as a shaving cream too. It creates a light, whipped layer that helps your razor glide smoothly while keeping your skin soft, hydrated, and smooth after. No extra steps, just clean, multitasking bodycare that works."
            },
            {
                question: "How do I get the most out of my Sknly and how long does it last?",
                answer: (
                <>
                <p>You’ll find a full how-to on the back of your bottle, follow it for the best results and a little everyday joy. A light swirl is all you need to lather up, let the formula work its magic, and rinse off glowing. </p>
                <p>Each bottle lasts around 40–60 uses, depending on how generous you get with your swirl.<i><b>(And yes, it’s very easy to get carried away.)</b></i> </p>
                </>)
            },
            {
                question: "How should I store my Sknly?",
                answer: "Just store it upright, keep the cap on when you’re done, and avoid leaving it in direct sunlight or under running water. That’s it, no fuss, just fresh foam when you need it."
            }
        ],
    },
    {
        tab: "Products",
        image: OtherTabsImage,
        content: [
            {
                question: "What is a Whipped Shower Foam and how is it different from a regular body wash?",
                answer: (
                <>
                <p> Think whipped cream, but for your skin. </p>
                <p>Sknly’s Whipped Shower Foam is our take on body wash, just lighter, cleaner, and way more fun to use. It swirls out like whipped cream, light, airy, and smooth on the skin. It lathers in seconds and rinses off clean, no harsh scrubbing, no stripping.</p>
                <p>We skip the harsh surfactants found in regular body washes, so it’s gentle on your skin, not just cute in your shower. Each swirl is powered by fruit and plant-based ingredients that brighten, hydrate, exfoliate, and support your skin barrier, all while being dermatologist tested and safe for all skin types (yes, even the sensitive ones).</p>
               <p>Basically, it’s skincare for your body, whipped into a foam that’s as fun as it is functional.</p>
                </>)
            },
            {
                question: "What does “fruit-powered” actually mean?",
                answer: (
                <>
                <p>Fruit-powered means we infuse our formulas with<i><b>real fruit and plant-based ingredients</b></i> , not just for scent, but for real skin-loving results.</p>
                <p><i><b>Kakadu plum</b></i> and<i><b>Pomegranate</b></i>  help brighten,<i><b>Papaya enzymes</b></i>  gently exfoliate,<i><b>Green tea</b></i>  brings antioxidant protection, and soothing botanicals like<i><b>Centella</b></i>  keep your skin calm, soft, and balanced.</p>
                <p>It’s skincare your body actually deserves, made clean, made juicy, and made to feel as good as it looks.</p>
                </>
                )
            },
            {
                question: "What’s the Sknly Clean Promise?",
                answer: (
                <>
                <p><b>No nasties, no nonsense.</b></p>
                <p>We’re proudly vegan, cruelty-free, toxin-free, pH-balanced, and dermatologist tested. Our formulas are soap-free, microbiome-friendly, and non-comedogenic, made without SLS, SLES, silicones, alcohol, PEGs, GMOs, PPGs, or CAPB.</p>
                <p>No common allergens, no heavy oils, and absolutely no barrier-stripping surfactants. Just skin-loving, naturally derived ingredients, gentle enough for everyday use and made for all skin types.</p>
                <p>If your skin doesn’t love it, we don’t use it.</p>
                </>
                )
            },
            {
                question: "Is Sknly soap-free?",
                answer: "Yes! All our Whipped Shower Foams are completely soap-free. We use gentle, non-stripping surfactants that cleanse without drying or irritating your skin, so your skin feels soft, never squeaky.",

            },
            {
                question: "Is Sknly vegan and cruelty-free?",
                answer: "Yes! Sknly is 100% vegan and cruelty-free. We never test on animals or use animal-derived ingredients, because kindness is part of the formula."
            },
            {
                question: "Is Sknly safe for all skin types, even sensitive or acne-prone?",
                answer: (
                <>
                <p>Yes, Sknly is<i><b>made for all skin types</b></i> , even sensitive and acne-prone.</p>
                <p>Our formulas are dermatologist tested, pH-balanced to support your skin barrier, and free from common allergens. Non-comedogenic, gentle, and full of skin-loving ingredients, so your skin gets everything it needs, and nothing it doesn’t.</p>
                
                </>
                )
            },
            {
                question: "What is the shelf life of Sknly Products?",
                answer: "All Sknly Whipped Shower Foams have a shelf life of 18 months from the date of manufacture.For best results, store in a cool, dry place and refer to the expiry details printed on the packaging."
            },
            {
                question: "Can I use Sknly if I’m pregnant or breastfeeding?",
                answer: "Always consult your doctor first, but our formulas are clean, gentle, and free from ingredients commonly flagged during pregnancy, like retinoids, AHAs/BHAs, and essential oils."
            },
            {
                question: "Who can use Sknly?",
                answer: "Anyone who loves good skin and even better showers. All ages, all skin types, all routines."
            }
        ],
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