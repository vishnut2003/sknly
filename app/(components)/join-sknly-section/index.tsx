'use client';

import Image from "next/image";
import SectionBG from "./assets/bg-mountain.png";
import SectionBGMobile from "./assets/bg-mountain-mobile.png";
import SportsImage from "./assets/sports-image-new.png";
import JoinClubForm from "@/components/ui-elements/join-club-form";
import DefaultSection from "@/layouts/default-section";
import LogoText from "./assets/sknly-club-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

const JoinSknlySection = ({ hideBgImage, className }: {
    hideBgImage?: boolean,
    className?: string,
}) => {

    const isMobile = useIsMobile();

    return (
        <div
            className={"pt-15 md:pt-30 border-b-17 border-[#BA131C]" + ` ${className}`}
        >
            <div
                className="bg-cover md:bg-size-[1500px] bg-top bg-repeat-x min-h-130 pt-20 md:pt-0"
                style={{ backgroundImage: hideBgImage ? undefined : `url(${isMobile ? SectionBGMobile.src : SectionBG.src})` }}
            >
                <DefaultSection
                    className="flex items-center flex-col-reverse md:flex-row md:pt-30"
                    outerClassName="pl-0!"
                >
                    <div
                        className="md:w-[70%] overflow-hidden flex items-end justify-between"
                    >
                        <div
                            className="h-80 md:h-160 w-full"
                        >
                            <Image
                                alt="Sports"
                                src={SportsImage}
                                className="md:w-full h-full object-cover object-top-right shrink"
                            />
                        </div>

                        <div
                            className="md:hidden md:p-10 shrink py-10"
                        >
                            <Image
                                alt="Logo"
                                src={LogoText}
                                className="w-60 mx-auto"
                            />
                        </div>

                    </div>
                    <div
                        className="w-full text-[#BA131C] flex flex-col justify-center items-stretch space-y-10 md:space-y-20"
                    >
                        <div
                            className="w-full flex justify-end"
                        >
                            <div
                                className="space-y-10 md:space-y-15 max-w-200 w-full px-6"
                            >
                                <div
                                    className="space-y-2 md:space-y-4 text-center md:text-left"
                                >
                                    <h2
                                        className="font-glamour text-[32px] md:text-[40px] text-[#BA131C]"
                                    >Join the sknly. club!</h2>
                                    <p
                                        className="text-[#BA131C] text-[15px] md:text-2xl max-w-170"
                                    >Enjoy free shipping on your first order and unlock more juicy perks inside 💕</p>
                                </div>

                                <div
                                    className="px-5"
                                >
                                    <JoinClubForm />
                                </div>
                            </div>
                        </div>

                        <div
                            className="hidden md:block"
                        >
                            <Image
                                alt="Logo"
                                src={LogoText}
                                className="w-75 mx-auto"
                            />
                        </div>

                    </div>
                </DefaultSection>
            </div>
        </div>
    )
}

export default JoinSknlySection