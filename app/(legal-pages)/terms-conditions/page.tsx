import InnerPagesLayout from "@/layouts/inner-pages-layout";
import BannerImage from "./banner-image.png";
import LegalPagesBannerImageSection from "../banner-image";
import DefaultSection from "@/layouts/default-section";

const TermsConditionsPage = () => {
    return (
        <InnerPagesLayout>
            <LegalPagesBannerImageSection
                bgImage={BannerImage}
                heading='Terms & Conditions'
            />
            <DefaultSection
                outerClassName='py-15'
                className='text-[#451F0F] max-w-5xl!'
            >Content</DefaultSection>
        </InnerPagesLayout>
    )
}

export default TermsConditionsPage