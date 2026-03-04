import Image from "next/image";
import SectionBG from "./assets/bg-mountain.png";
import SportsImage from "./assets/sports-image.png";
import JoinClubForm from "@/components/ui-elements/join-club-form";
import DefaultSection from "@/layouts/default-section";

const JoinSknlySection = ({ hideBgImage, className }: {
    hideBgImage?: boolean,
    className?: string,
}) => {
    return (
        <div
            className={"pt-30" + ` ${className}`}
        >
            <div
                className="bg-size-[1500px] bg-top bg-repeat-x min-h-130"
                style={{ backgroundImage: hideBgImage ? undefined : `url(${SectionBG.src})` }}
            >
                <DefaultSection
                    className="flex items-center"
                >
                    <div
                        className="w-full"
                    >
                        <Image
                            alt="Sports"
                            src={SportsImage}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div
                        className="w-full flex flex-col justify-center items-stretch space-y-4"
                    >
                        <h2
                            className="font-glamour text-4xl text-[#BA131C]"
                        >Join the sknly. club!</h2>
                        <p
                            className="text-[#BA131C]"
                        >Enjoy free shipping on your first order and unlock more juicy perks inside 💕</p>

                        <JoinClubForm />
                    </div>
                </DefaultSection>
            </div>
        </div>
    )
}

export default JoinSknlySection