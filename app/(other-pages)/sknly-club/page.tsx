import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout";
import FeaturedImage from "./assets/featured-image.jpg";
import SknlyClubLogo from "./assets/sknly-club-logo.png";
import Image from "next/image";
import Link from "next/link";
import CurveImage1 from "./assets/grid-images/image-1.png";
import CurveImage2 from "./assets/grid-images/image-2.png";
import CurveImage3 from "./assets/grid-images/image-3.png";
import HowItWorksImage from "./assets/how-it-works.png";
import CardImage from "./assets/card-image.png";

const SknlyClugPage = () => {
    return (
        <InnerPagesLayout>

            <div
                style={{ backgroundImage: `url(${FeaturedImage.src})` }}
                className="bg-fixed bg-center bg-cover"
            >
                <DefaultSection
                    outerClassName="bg-cover bg-center pt-10 pb-15"
                >
                    <div
                        className="flex flex-col items-center gap-7 text-white"
                    >
                        <div>
                            <p
                                className="text-center text-lg"
                            >Welcome to the</p>
                            <Image
                                alt="Sknly Club"
                                src={SknlyClubLogo}
                                className="w-70"
                            />
                        </div>

                        <p
                            className="max-w-147.5 text-center"
                        >Early access, loyalty rewards, and surprise drops that glow up with every order. Consider it your backstage pass to all things Sknly.</p>

                        <div
                            className="flex items-center justify-center gap-10"
                        >
                            {
                                [
                                    {
                                        label: "Log In",
                                        href: "#",
                                    },
                                    {
                                        label: "Join Now",
                                        href: "#",
                                    }
                                ].map((action, index) => (
                                    <Link
                                        key={index}
                                        href={action.href}
                                        className="block py-3 px-4 w-40 text-center rounded-lg border font-semibold border-white text-white hover:bg-white hover:text-[#BA131C]"
                                    >{action.label}</Link>
                                ))
                            }
                        </div>
                    </div>
                </DefaultSection>

                <DefaultSection
                    outerClassName="text-[#BA131C] py-10"
                    className="max-w-7xl! rounded-2xl overflow-hidden"
                >
                    <div
                        className="space-y-10 bg-[#FDEBEB] px-10 py-20"
                    >
                        <h2
                            className="text-center text-4xl md:text-6xl font-glamour"
                        >What’s in it for you?</h2>
                        <div
                            className="flex flex-col md:grid grid-cols-3 gap-10 max-w-5xl mx-auto"
                        >
                            {
                                [
                                    {
                                        image: CurveImage1,
                                        heading: "Early Access",
                                        desc: "Be the first to shop our newest drops and exclusive launches",
                                        imageClass: "w-58",
                                    },
                                    {
                                        image: CurveImage2,
                                        heading: "Loyalty Rewards",
                                        desc: "Rewards unlock as you keep coming back for more",
                                        imageClass: "w-50",
                                    },
                                    {
                                        image: CurveImage3,
                                        heading: "Surprise Drops",
                                        desc: "We won't say when, but when it drops… you'll want to be in",
                                        imageClass: "w-50"
                                    },
                                ].map((col, index) => (
                                    <div
                                        key={index}
                                        className="text-center space-y-5"
                                    >
                                        <div
                                            className="w-full"
                                        >
                                            <Image
                                                alt={col.heading}
                                                src={col.image}
                                                className={`mx-auto ${col.imageClass}`}
                                            />
                                        </div>

                                        <div
                                            className="space-y-3"
                                        >
                                            <h3
                                                className="font-glamour text-xl md:text-3xl"
                                            >{col.heading}</h3>
                                            <p>{col.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className="bg-[#EFE0EB] flex flex-col md:flex-row items-stretch"
                    >
                        <div
                            className="w-full py-5 md:py-10 pl-5 md:pl-10 pr-5 md:pr-0 flex flex-col justify-between gap-5"
                        >
                            <h2
                                className="text-4xl pl-20 text-center md:text-left md:text-5xl font-glamour"
                            >How it works?</h2>

                            <div
                                className="space-y-15 pl-20"
                            >
                                {
                                    [
                                        {
                                            textIcon: "01.",
                                            content: "Create your Sknly account to join the club",
                                        },
                                        {
                                            textIcon: "02.",
                                            content: "Shop your faves, we’ll quietly track your glow-up behind the scenes",
                                        },
                                        {
                                            textIcon: "03.",
                                            content: "Reward codes land in your inbox: early access, loyalty rewards, and surprise drops you don’t want to miss",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col md:flex-row items-center gap-4"
                                        >
                                            <div>
                                                <p
                                                    className="text-7xl font-glamour"
                                                >{item.textIcon}</p>
                                            </div>
                                            <div>
                                                <p
                                                    className="text-center md:text-left"
                                                >{item.content}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <p
                                className="text-sm text-center md:text-left italic font-bold"
                            >The longer you stay, the juicier it gets!</p>

                        </div>
                        <div
                            className="w-full md:w-[70%]"
                        >
                            <Image
                                alt="How it Works"
                                src={HowItWorksImage}
                                className="w-full h-full object-cover object-bottom-right"
                            />
                        </div>
                    </div>
                </DefaultSection>

                <DefaultSection
                    className="max-w-6xl! space-y-5"
                    outerClassName="py-15"
                >
                    <div
                        className="flex flex-col md:flex-row items-start gap-5"
                    >
                        <div
                            className="w-full"
                        >
                            <Image
                                alt="Cards image"
                                src={CardImage}
                                className="w-full h-full object-contain bg-center -rotate-6"
                            />
                        </div>
                        <div
                            className="w-full md:w-[80%] text-white space-y-3"
                        >
                            <h2
                                className="text-4xl md:text-3xl text-center md:text-left font-glamour"
                            >Loyalty Rewards</h2>

                            <div
                                className="space-y-3 text-lg"
                            >
                                <p>Every order gets you closer to something juicy ✨</p>
                                <ul
                                    className="pl-5 list-disc"
                                >
                                    {
                                        [
                                            "1st order: Free Shipping",
                                            "3rd order: ₹ 100 Off when you pick any 2 Whipped Foams",
                                            "6th order: The Sknly Tote",
                                            "8th order: 20% Off on orders above ₹ 999",
                                        ].map((text, idx) => (
                                            <li
                                                key={idx}
                                            >{text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p
                        className="text-sm text-white"
                    >*Only valid on full-price items. Bundles and discounted products are excluded — but don’t worry, if your perk lands on a bundle order, we’ll roll it over to your next eligible one.</p>
                </DefaultSection>

                <DefaultSection
                    outerClassName="py-0 relative"
                    className="pb-30 pt-15 flex items-stretch"
                >
                    <div
                        className="flex items-stretch absolute top-0 left-0 w-full h-full z-0"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
                            <div
                                key={i}
                                className="w-full bg-[#FDEBEB] h-full rounded-b-full"
                            />
                        ))}
                    </div>

                    <div
                        className="relative z-10 w-full flex flex-col items-center justify-center text-center text-[#BA131C] gap-3"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-glamour"
                        >Ready to join the sknly. club?</h2>
                        <p>Create your account and jump right in!</p>
                    </div>

                </DefaultSection>

                <DefaultSection
                    className="text-white pt-10 pb-30 flex items-center justify-center gap-10"
                >
                    {
                        [
                            {
                                label: "Log In",
                                href: "/auth/login",
                            },
                            {
                                label: "Join Now",
                                href: "/auth/sign-up",
                            }
                        ].map((action, index) => (
                            <Link
                                href={action.href}
                                key={index}
                                className="block py-3 px-4 w-40 text-center rounded-lg border hover:bg-white hover:text-[#BA131C] font-semibold hover:border-white"
                            >{action.label}</Link>
                        ))
                    }
                </DefaultSection>

            </div>

        </InnerPagesLayout>
    )
}

export default SknlyClugPage