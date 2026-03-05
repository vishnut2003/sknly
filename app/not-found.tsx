import InnerPagesLayout from "@/layouts/inner-pages-layout"
import ErrorTextImage from "./404-page-assets/error-text.png";
import SadFaceImage from "./404-page-assets/sad-face.png";
import GraphicImage from "./404-page-assets/graphics.png";
import DefaultSection from "@/layouts/default-section";
import Image from "next/image";

const NotFound = () => {
  return (
    <InnerPagesLayout>
        <DefaultSection
            outerClassName="py-10 bg-[#FCDFE2]"
            className="flex flex-col gap-3 items-center justify-center min-h-100"
        >
            <div
                className="flex items-center justify-center gap-5"
            >
                <Image
                    alt="Error Text"
                    src={ErrorTextImage}
                    className="w-110"
                />
                <Image
                    alt="Sad Face"
                    src={SadFaceImage}
                    className="w-18"
                />
            </div>

            <p
                className="text-center text-lg text-[#BA131C]"
            >Oops! This page melted. Let&apos;s get you glowing again in some time✨</p>
        </DefaultSection>

        <div
            className="pb-10"
        >
            <Image
                alt="Graphics Image"
                src={GraphicImage}
                className="w-full"
            />
        </div>

    </InnerPagesLayout>
  )
}

export default NotFound