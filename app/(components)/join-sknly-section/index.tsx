import Image from "next/image";
import SectionBG from "./assets/bg-mountain.png";
import SportsImage from "./assets/sports-image-new.png";
import JoinClubForm from "@/components/ui-elements/join-club-form";
import DefaultSection from "@/layouts/default-section";
import LogoText from "./assets/logo-text.png";

const JoinSknlySection = ({ hideBgImage, className }: {
    hideBgImage?: boolean,
    className?: string,
}) => {
    return (
        <div
            className={"pt-30 border-b-17 border-[#BA131C]" + ` ${className}`}
        >
            <div
                className="bg-cover md:bg-size-[1500px] bg-top bg-repeat-x min-h-130"
                style={{ backgroundImage: hideBgImage ? undefined : `url(${SectionBG.src})` }}
            >
                <DefaultSection
                    className="flex items-center flex-col-reverse md:flex-row md:pt-30"
                    outerClassName="pl-0!"
                >
                    <div
                        className="w-[70%] md:h-160 flex items-end justify-between"
                    >
                        <Image
                            alt="Sports"
                            src={SportsImage}
                            className="w-1/2 md:w-full h-full object-cover object-top"
                        />

                        <div
                            className="md:hidden p-10"
                        >
                            <Image
                                alt="Logo"
                                src={LogoText}
                                className="w-40 mx-auto"
                            />
                        </div>

                    </div>
                    <div
                        className="w-full text-[#BA131C] flex flex-col justify-center items-stretch space-y-20"
                    >
                        <div
                            className="w-full flex justify-end"
                        >
                            <div
                                className="space-y-15 max-w-200 w-full"
                            >
                                <div
                                    className="space-y-4"
                                >
                                    <h2
                                        className="font-glamour text-[40px] text-[#BA131C]"
                                    >Join the sknly. club!</h2>
                                    <p
                                        className="text-[#BA131C] text-2xl max-w-170"
                                    >Enjoy free shipping on your first order and unlock more juicy perks inside 💕</p>
                                </div>

                                <JoinClubForm />
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