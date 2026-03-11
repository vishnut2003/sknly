import InnerPagesLayout from '@/layouts/inner-pages-layout'
import LegalPagesBannerImageSection from '../banner-image'
import BannerImage from "./banner-image.jpg";
import BannerImageMobile from "./banner-image-mobile.jpg";
import DefaultSection from '@/layouts/default-section';
import PageContentElement from '@/components/ui-elements/page-content-element';

const ReturnPolicyPage = () => {
    return (
        <InnerPagesLayout>
            <LegalPagesBannerImageSection
                bgImage={BannerImage}
                heading='Returns & Exchanges'
                bgImageMobile={BannerImageMobile}
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
                                content: "We’re big believers in good skin and good service, so while we don’t offer traditional returns, we’re always here if something’s gone wrong.Our goal? To make sure you’re happy with your Sknly experience, every single time.",
                            },
                            {
                                type: "h2",
                                content: "Returns & Exchanges",
                            },
                            {
                                type: "p",
                                content: "Due to hygiene and safety standards, we don’t accept returns or exchanges on any of our products, even if unopened or unused. This ensures every item we send out is fresh, sealed, and 100% safe for use",
                            },
                            {
                                type: "p",
                                content: "We can’t accept returns for opened products, unless there’s a verified issue with the product itself (like a damaged can, faulty pump, or missing item)",
                            },
                            {
                                type: "p",
                                content: "We encourage you to review all product details and ingredient lists carefully before placing your order.",
                            },
                            {
                                type: "h2",
                                content: "Damaged, Broken, or Incorrect Items"
                            },
                            {
                                type: "p",
                                content: "We’ve got your back.",
                            },
                            {
                                type: "p",
                                content: "If your order arrives damaged, defective, incomplete, or incorrect, just let us know within 48 hours of delivery, and we’ll make it right with a replacement or store credit, whichever you prefer.",
                            },
                            {
                                type: "p",
                                content: "To make things quick and easy, email us at hello@sknlybeauty.com with:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<>Your full name and order number</>),
                                    (<>A short description of the issue</>),
                                    (<>Clear photos of:</>),
                                    (<>The product(s)</>),
                                    (<>The packaging</>),
                                    (<>The shipping label</>),
                                   
                                ]
                            },
                            {
                                type: "p",
                                content: <i><b>If the issue is on our end, we’ll cover return shipping or send a replacement at no extra cost</b></i>,
                            },
                            {
                                type: "p",
                                content: "Once verified, we’ll sort it out.",
                            },
                            {
                                type: "h2",
                                content: "Store Credit & Refunds",
                            },
                            {
                                type: "p",
                                content: "We don’t offer returns or refunds after delivery.",
                            },
                            {
                                type: "p",
                                content: "However, in special cases like if your order was cancelled before shipping, or if an item is out of stock and can’t be replaced, you may be eligible for a full refund or store credit, depending on the situation.",
                            },
                             {
                                type: "ul",
                                content: [
                                    (<><b>Store credit</b> will be issued as a digital coupon, valid for 12 months on any future order at sknly.in</>),
                                    (<><b>Refunds</b> will be processed to your original payment method within<b> 5–7 business days</b></>),
                                    (<>	You’ll receive an email once your refund or store credit has been issued</>),
                                   
                                   
                                ]
                            },
                            {
                                type: "p",
                                content: "Note: Store credit is non-transferable and cannot be exchanged for cash.",
                            },
                            {
                                type: "p",
                                content: <i><b>Refunds cannot be issued for used products, fragrance preference, or general dissatisfaction after delivery.</b></i>,
                            },
                            {
                                type: "h2",
                                content: "Order Cancellations",
                            },
                            {
                                type: "p",
                                content: "Changed your mind?"
                            },
                            {
                                type: "p",
                                content: "You can cancel your order only if it hasn’t been packed or shipped yet.",
                            },
                            {
                                type: "p",
                                content: "Email us at hello@sknlybeauty.com as soon as possible. If it hasn’t left our warehouse, we’ll cancel it and issue a full refund.",
                            },
                            {
                                type: "h2",
                                content: " Final Notes",
                            },
                             {
                                type: "ul",
                                content: [
                                    (<>We cannot offer returns for reasons like fragrance preference or change of mind after delivery</>),
                                    (<>Shipping charges (if any) are non-refundable once your order has shipped</>),
                                    (<>Sknly reserves the right to deny any request that falls outside this policy</>),
                                   
                                   
                                ]
                            },
                            {
                                type: "h2",
                                content: "Still need help?",
                            },
                            {
                                type: "p",
                                content: "Email us at hello@sknlybeauty.com, and we’ll get back to you as soon as possible",
                            },

                        ]
                    }
                />
            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default ReturnPolicyPage