import InnerPagesLayout from "@/layouts/inner-pages-layout";
import BannerImage from "./banner-image.png";
import LegalPagesBannerImageSection from "../banner-image";
import DefaultSection from "@/layouts/default-section";
import PageContentElement from "@/components/ui-elements/page-content-element";

const ShippingTrackingPage = () => {
    return (
        <InnerPagesLayout>
            <LegalPagesBannerImageSection
                bgImage={BannerImage}
                heading='Shipping & Tracking'
            />
            <DefaultSection
                outerClassName='py-15'
                className='text-[#451F0F] max-w-5xl!'
            >
                <PageContentElement
                items={
                    [
                        {
                            type: "p",
                            content: "We keep shipping simple, transparent, and stress-free so your Sknly favourites reach you smoothly and on time."
                        },
                        {
                            type: "h3",
                            content: "Where do you ship?"
                        },
                        {
                            type: "p",
                            content: (<>We currently ship<b>across India</b>, from major cities to cozy corners.</>),
                        },
                        {
                            type: "p",
                            content: "If your pin code is serviceable, we’ve got you covered.",
                        },
                        {
                            type: "h3",
                            content: "How much will shipping cost?"
                        },
                        {
                            type: "p",
                            content: "Shipping fees are calculated at checkout based on your delivery address",
                        },
                        {
                            type:  "p",
                            content: "For most metro and Tier 1/2 cities:",
                        },
                        {
                                type: "ul",
                                content: [
                                    (<><i><b>Standard Delivery:</b> ₹79 – ₹149</i></>),
                                    (<><i><b>Express Delivery:</b>  ₹149 – ₹299</i></>),
                                  
                                ]
                            },
                            {
                            type:  "p",
                            content: "Any applicable charges are shown clearly before you place your order. No hidden fees, ever.",
                        },
                        {
                            type: "h3",
                            content: "Is Cash on Delivery (COD) available?"
                        },
                         {
                            type: "p",
                            content: (<>Yes,<i><b>Cash on Delivery is available on select orders and locations.</b></i>  </>),
                        },
                        {
                            type:  "p",
                            content: "COD eligibility and any applicable fees will be shown clearly at checkout before you place your order.",
                        },
                        {
                            type: "h3",
                            content: "How long will my order take to arrive?"
                        },
                        {
                            type: "p",
                            content: (<>All orders are dispatched within <i><b>1–2 business days.</b></i>  </>),
                        },
                        {
                            type: "p",
                            content: "After dispatch:"
                        },
                        {
                                type: "ul",
                                content: [
                                    (<><i><b>Standard Delivery:</b>3–7 business days, depending on your location</i></>),
                                    (<><i><b>Express Delivery:</b> 1–3 business days (available in select areas)</i></>),
                                  
                                ]
                            },
                            {
                            type: "p",
                            content: "Orders shipping to remote or hard-to-reach locations may take slightly longer. We will keep you updated every step of the way."
                        },
                        {
                            type: "h3",
                            content: "How do I track my order?"
                        },
                        {
                            type: "p",
                            content: (<>Once your order ships, you’ll receive<i><b> a shipping confirmation via email and SMS</b></i> with a tracking link so you can follow your Sknly on its way  </>),
                        },
                        {
                            type: "p",
                            content: (<>Didn’t receive it? Check your spam or promotions folder first.  </>),
                        },
                        {
                            type: "p",
                            content: "Still can’t find it? Email us at hello@sknlybeauty.com, and we will resend it for you.",
                        },
                        {
                            type: "p",
                            content: <b>Do you process orders on weekends or public holidays?</b>,
                        },
                        {
                            type: "p",
                            content: (<>Our warehouse is closed on weekends and public holidays  </>),
                        },
                        {
                            type: "p",
                            content: (<>Orders placed during this time will be<i><b>processed on the next business day.</b></i>  </>),
                        },
                        {
                            type: "h3",
                            content: "Track your order",
                        },
                        {
                            type: "p",
                            content: (<>Enter your<i><b>Order ID or Tracking Number</b></i>  below to check the latest status of your delivery.Tracking details are also shared via email and SMS once your order ships.  </>),
                        },
                        {
                            type: "h3",
                            content: "Unforeseen delays",
                        },
                        {
                            type: "p",
                            content: "During peak sale periods, public holidays, or due to factors beyond our control, such as weather or courier disruptions, deliveries may take a little longer than usual. We truly appreciate your patience during these times.",
                        },
                         {
                            type: "p",
                            content: "If your order hasn’t reached you within the expected delivery window, feel free to reach out to us at hello@sknlybeauty.com, and we will be happy to help.",
                        },
                    ]
                }/>
            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default ShippingTrackingPage