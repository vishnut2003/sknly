import InnerPagesLayout from '@/layouts/inner-pages-layout'
import LegalPagesBannerImageSection from '../banner-image'
import BannerImage from "./banner-image.png";
import DefaultSection from '@/layouts/default-section';

const ReturnPolicyPage = () => {
    return (
        <InnerPagesLayout>
            <LegalPagesBannerImageSection
                bgImage={BannerImage}
                heading='Returns & Exchanges'
            />
            <DefaultSection
                outerClassName='py-15'
                className='text-[#451F0F] max-w-5xl!'
            >Content</DefaultSection>
        </InnerPagesLayout>
    )
}

export default ReturnPolicyPage