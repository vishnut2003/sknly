import InnerPagesLayout from '@/layouts/inner-pages-layout'
import BannerImage from "./banner-image.jpg";
import BannerImageMobile from"./banner-image-mobile.jpg";
import DefaultSection from '@/layouts/default-section';
import PageContentElement from '@/components/ui-elements/page-content-element';
import LegalPagesBannerImageSection from '../banner-image';

const PrivacyPolicyPage = () => {
    return (
        <InnerPagesLayout>
            <LegalPagesBannerImageSection
                bgImage={BannerImage}
                heading='Privacy Policy'
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
                                content: "This Privacy Policy (“Policy”) describes how House of Sknly (“Sknly”, “we”, “us”, or “our”) collects, uses, stores, shares, and protects personal information when you visit or make a purchase from www.sknly.in (the “Website”), including access via mobile or other devices, interact with us, or use any of our services, including participation in the Sknly Club.",
                            },
                            {
                                type: "p",
                                content: "We respect your privacy and are committed to protecting your personal information. This Policy is intended to help you understand what information we collect, why we collect it, how it is used, and the choices available to you. We apply the same care and responsibility to protecting your personal information as we do to building our products.",
                            },
                            {
                                type: "p",
                                content: "By accessing or using our Website, creating an account, placing an order, or otherwise interacting with Sknly, you acknowledge that you have read, understood, and agreed to the collection and use of your information in accordance with this Policy. If you do not agree with any part of this Policy, please discontinue use of the Website immediately.",
                            },
                            {
                                type: "p",
                                content: "This Privacy Policy forms an integral part of and should be read together with our Terms & Conditions.",
                            },
                            {
                                type: "p",
                                content: <b>Definitions</b>
                            },
                            {
                                type: "p",
                                content: "For the purposes of this Privacy Policy:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<><b>“Personal Information”</b> means any information that identifies or can reasonably be linked to an individual, such as name, contact details, address, or order-related information.</>),
                                    (<><b>“Processing”</b> means any operation performed on personal information, including collection, use, storage, disclosure, or deletion.</>),
                                    (<><b>“User”, “you”, or “your”</b> refers to any individual who accesses or uses the Website or our services.</>),
                                    (<><b>“Sknly”, “we”, “us”, or “our”</b> refers to House of Sknly, the owner and operator of the Website.</>)
                                ]
                            },
                            {
                                type: "h2",
                                content: "1. Information We Collect",
                            },
                            {
                                type: "p",
                                content: "We collect information that is necessary to provide you with a smooth, secure, and personalised shopping experience, fulfil orders, communicate with you, and comply with applicable laws. You may browse our Website without providing personal information; however, certain features such as placing an order or participating in the Sknly Club require you to provide personal information. The information we collect falls into the following categories:"
                            },
                            {
                                type: "h3",
                                content: "1.1 Information You Provide to Us Directly",
                            },
                            {
                                type: "p",
                                content: "We may collect personal information that you provide to us when you:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "visit or use our Website,",
                                    "create an account (if applicable),",
                                    "place an order,",
                                    "participate in the Sknly Club,",
                                    "contact our customer support team,",
                                    "submit reviews, feedback, or queries, or",
                                    "participate in promotions, surveys, or campaigns run by us.",
                                ],
                            },
                            {
                                type: "p",
                                content: "This information may include, but is not limited to:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "full name,",
                                    "email address,",
                                    "mobile number,",
                                    "billing and shipping address,",
                                    "order details and purchase history,",
                                    "account login details (if applicable), and",
                                    "any information you choose to share with us while communicating with us.",
                                ],
                            },
                            {
                                type: "p",
                                content: "You are responsible for ensuring that the information you provide is accurate, complete, and up to date.",
                            },
                            {
                                type: "h3",
                                content: "1.2 Payment Information",
                            },
                            {
                                type: "p",
                                content: "When you place an order on the Website, payments are processed securely through authorised third-party payment gateways. Sknly does not store, process, or have access to your debit card, credit card, UPI, bank account details, or other payment instrument information. We may retain limited transaction-related information such as order numbers, payment status, and transaction references for record-keeping, accounting, and customer support purposes.",
                            },
                            {
                                type: "h3",
                                content: "1.3 Information Collected Automatically",
                            },
                            {
                                type: "p",
                                content: "When you visit or interact with our Website, certain information is collected automatically, including:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "IP address,",
                                    "browser type and version,",
                                    "device information,",
                                    "operating system,",
                                    "pages viewed, time spent on the Website, and navigation patterns, and",
                                    "referring or exit pages.",
                                ],
                            },
                            {
                                type: "p",
                                content: "This information helps us understand how users interact with our Website and allows us to improve functionality, performance, and user experience. Some of this information may be collected using cookies and similar tracking technologies, as described in Section 7 of this Privacy Policy.",
                            },
                            {
                                type: "h3",
                                content: "1.4 Cookies and Similar Technologies",
                            },
                            {
                                type: "p",
                                content: "We use cookies and similar tracking technologies as described in Section 7 of this Privacy Policy to:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "enable essential website functionality,",
                                    "analyse website traffic and usage patterns, and",
                                    "support marketing and advertising efforts.",
                                ],
                            },
                            {
                                type: "p",
                                content: "Cookies are small data files stored on your device. You may choose to disable cookies through your browser settings; however, doing so may affect certain features or functionality of the Website. Continued use of the Website indicates your acceptance of our use of cookies in accordance with this Policy, subject to your browser and cookie preference settings.",
                            },
                            {
                                type: "h3",
                                content: "1.5 Information from Third-Party Services",
                            },
                            {
                                type: "p",
                                content: "We may receive limited information from third-party service providers such as payment gateways, logistics partners, marketing platforms, analytics providers, or social media platforms, strictly to the extent necessary to provide our services, process orders, deliver products, or improve customer experience on our Website and services. Such information is processed in accordance with this Privacy Policy and applicable data protection laws.",
                            },
                            {
                                type: "h2",
                                content: "2. How We Use Your Information",
                            },
                            {
                                type: "p",
                                content: "We use the information we collect for legitimate business purposes, to provide and improve our services, and to comply with applicable legal obligations. The specific purposes for which your information may be used include the following:",
                            },
                            {
                                type: "h3",
                                content: "2.1 Order Processing and Fulfilment",
                            },
                            {
                                type: "p",
                                content: "To:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "process and confirm your orders,",
                                    "arrange shipping and delivery of products,",
                                    "process returns, exchanges, and refunds, and",
                                    "communicate with you regarding order status, delivery updates, returns, refunds, or issues relating to your purchase.",
                                ],
                            },
                            {
                                type: "h3",
                                content: "2.2 Account Management and Customer Support",
                            },
                            {
                                type: "p",
                                content: "To:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "create and manage your account (if applicable),",
                                    "verify your identity where necessary,",
                                    "respond to your queries, requests, or complaints, and",
                                    "provide customer support and after-sales assistance.",
                                ],
                            },
                            {
                                type: "h3",
                                content: "2.3 Transactional Communications",
                            },
                            {
                                type: "p",
                                content: "To send you service-related and transactional communications, including:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "order confirmations,",
                                    "payment confirmations or failures,",
                                    "shipping and delivery updates,",
                                    "return or refund notifications, and",
                                    "important service-related announcements.",
                                ],
                            },
                            {
                                type: "p",
                                content: "Transactional communications are essential to the provision of our services and may be sent regardless of your marketing communication preferences.",
                            },
                            {
                                type: "h3",
                                content: "2.4 Marketing and Promotional Communications",
                            },
                            {
                                type: "p",
                                content: "Subject to your consent and applicable laws, we may use your contact information to send you marketing and promotional communications, including via email, SMS, messaging platforms, or other permitted channels, to:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "send you promotional emails, messages, or notifications,",
                                    "inform you about new product launches, offers, discounts, or campaigns, and",
                                    "share updates related to the Sknly Club or other brand initiatives.",
                                ],
                            },
                            {
                                type: "p",
                                content: "You may opt out of receiving promotional communications at any time by using the unsubscribe link provided in such communications or by contacting us using the details provided in this Policy.",
                            },
                            {
                                type: "h3",
                                content: "2.5 Personalisation and Website Improvement",
                            },
                            {
                                type: "p",
                                content: "To:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "understand user preferences and shopping behaviour,",
                                    "personalise your experience on the Website,",
                                    "recommend products or content that may be of interest to you, and",
                                    "improve our Website design, functionality, and offerings.",
                                ],
                            },
                            {
                                type: "h3",
                                content: "2.6 Analytics, Research, and Business Operations",
                            },
                            {
                                type: "p",
                                content: "To:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "analyse Website usage and performance,",
                                    "conduct internal research and operational analysis,",
                                    "evaluate the effectiveness of marketing campaigns, and",
                                    "improve our products, services, and overall customer experience.",
                                ],
                            },
                            {
                                type: "h3",
                                content: "2.7 Fraud Prevention, Security, and Compliance",
                            },
                            {
                                type: "p",
                                content: "To:",
                            },
                            {
                                type: "ul",
                                content: [
                                    "prevent, detect, and investigate fraudulent or unauthorised activities,",
                                    "protect the security and integrity of our Website and systems,",
                                    "enforce our Terms & Conditions and other policies, and",
                                    "comply with applicable laws, regulations, court orders, or lawful requests from authorities.",
                                ],
                            },
                            {
                                type: "h2",
                                content: "3. Sharing of Your Information"
                            },
                        ]

                    }
                />
            </DefaultSection>

        </InnerPagesLayout>

    )
}

export default PrivacyPolicyPage;