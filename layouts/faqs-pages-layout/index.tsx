import { FAQsDataList, IFAQsData } from "@/app/(other-pages)/faqs/faqs-data"
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react"
import DefaultSection from "../default-section";
import Link from "next/link";
import FaqSingleItem from "./faq-single-item";

const FaqsPagesLayout = ({
    tab,
}: PropsWithChildren<{
    tab: IFAQsData["tab"],
}>) => {

    const faqData = FAQsDataList.find(faq => faq.tab === tab);

    if (!faqData) {
        notFound();
    }

    const faqPagesList: {
        label: string,
        href: string,
    }[] = [
            {
                label: "General",
                href: "/faqs",
            },
            {
                label: "Sustainability",
                href: "/faqs/sustainability",
            },
            {
                label: "Using Sknly",
                href: "/faqs/using-sknly",
            },
            {
                label: "Products",
                href: "/faqs/products",
            },
            {
                label: "Your Order",
                href: "/faqs/your-order",
            },
            {
                label: "Shipping & Returns",
                href: "shipping-returns",
            },
            {
                label: "Get in Touch",
                href: "get-in-touch",
            },
        ]

    return (
        <div>
            <DefaultSection
                outerClassName='py-10'
            >
                <h1
                    className='max-w-xl mx-auto font-semibold text-[45px] md:text-6xl leading-16 text-[#BA131C]'
                >
                    <span
                        className='block w-full text-left'
                    >You asked,</span>
                    <span
                        className='block w-full text-right'
                    >we answered!</span>
                </h1>
            </DefaultSection>

            <DefaultSection
                style={{ backgroundImage: `url(${faqData.image.src})` }}
                outerClassName="bg-cover bg-center"
                className="min-h-100 flex items-center justify-center"
            >
                <h2
                    className="text-white text-4xl font-semibold text-center"
                >FAQ</h2>
            </DefaultSection>

            <DefaultSection
                outerClassName="py-10 px-0! md:px-5"
                className="space-y-5 max-w-5xl! mx-auto"
            >

                <div
                    className="overflow-auto"
                >
                    <div
                        className="flex items-center justify-between gap-6 min-w-max"
                    >
                        {faqPagesList.map(page => (
                            <Link
                                href={page.href}
                                key={page.label}
                                className={"block py-4 px-4" + ` ${page.label === faqData.tab ? "font-bold" : ""}`}
                            >{page.label}</Link>
                        ))}
                    </div>
                </div>

                <div
                    className="px-3 md:px-0"
                >
                    {faqData.content.map((faq, index) => (
                        <FaqSingleItem
                            faq={faq}
                            key={index}
                        />
                    ))}
                </div>

            </DefaultSection>

            <DefaultSection
                className="text-center py-30 text-[#451F0F] space-y-3"
            >
                <p
                    className="text-2xl font-semibold"
                >Can&apos;t find what your are looking for?</p>
                <Link
                    href={"/contact"}
                    className="block underline"
                >Contact Us</Link>
            </DefaultSection>

        </div>
    )
}

export default FaqsPagesLayout