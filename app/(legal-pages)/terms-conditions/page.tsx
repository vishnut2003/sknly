import InnerPagesLayout from "@/layouts/inner-pages-layout";
import BannerImage from "./banner-image.png";
import LegalPagesBannerImageSection from "../banner-image";
import DefaultSection from "@/layouts/default-section";
import PageContentElement from "@/components/ui-elements/page-content-element";

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
            >
                <PageContentElement
                    items={
                        [
                            {
                                type: "p",
                                content: <b> Last updated: January 14, 2026</b>,
                            },
                            {
                                type: "p",
                                content: "Welcome to Sknly (“Sknly”, “we”, “us”, “our”).",
                            },
                            {
                                type: "p",
                                content: "This Website is operated by House of Sknly..",
                            },
                            {
                                type: "p",
                                content: "These Terms & Conditions (“Terms”) govern your access to and use of www.sknly.in (“Website”), including all information, tools, and services available on the Website, as well as your purchase and use of Sknly products and participation in the Sknly Club.",
                            },
                            {
                                type: "p",
                                content: "By accessing the Website, using any of our services, or placing an order, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with any additional policies referenced herein or available by hyperlink, including our Privacy Policy and Returns Policy.",
                            },
                            {
                                type: "p",
                                content: "If you do not agree to these Terms, you must discontinue use of the Website immediately and may not access or use any of our services.",
                            },
                            {
                                type: "h2",
                                content: "A. Legal & Regulatory Essentials",
                            },
                            {
                                type: "p",
                                content: <b>1. Governing Law & Jurisdiction.</b>,
                            },
                            {
                                type: "p",
                                content: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.",
                            },
                            {
                                type: "p",
                                content: <b>2. Eligibility & Age Requirement</b>,
                            },
                            {
                                type: "p",
                                content: "By accessing or using the Website and placing an order, you confirm that you are at least 18 years of age and legally capable of entering into a binding contract under applicable law. You further confirm that all information provided by you is accurate, current, and complete.",
                            },
                            {
                                type: "p",
                                content: <b>3. GST, Pricing & Taxes</b>,
                            },
                            {
                                type: "p",
                                content: "All prices displayed on the Website are listed in Indian Rupees (INR) and are inclusive of applicable taxes, including Goods and Services Tax (GST), unless stated otherwise. Any additional taxes, duties, or charges, where applicable under Indian law, will be clearly disclosed at checkout. GST details will be reflected on the final invoice issued upon successful payment.",
                            },
                            {
                                type: "p",
                                content: <b>4. Privacy & Data Protection</b>,
                            },
                            {
                                type: "p",
                                content: "Your use of the Website is also governed by our Privacy Policy, which explains how your personal information is collected, stored, and used. By accessing or using the Website, you consent to the collection and processing of your data in accordance with our Privacy Policy.",
                            },
                            {
                                type: "p",
                                content: <b>5. Third-Party Services</b>,
                            },
                            {
                                type: "p",
                                content: "We may engage authorized third-party service providers, including payment gateways, logistics partners, analytics tools, and communication platforms, to facilitate the operation of the Website and delivery of our services.",
                            },
                            {
                                type: "p",
                                content: "By using the Website, you acknowledge and agree that such third-party providers may process your information in accordance with their respective privacy policies. Sknly is not responsible for the practices, policies, or actions of any third-party service providers.",
                            },
                            {
                                type: "p",
                                content: <b>6. Force Majeure</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly shall not be held liable for any delay, interruption, or failure to perform its obligations due to events beyond its reasonable control, including but not limited to natural disasters or calamities, pandemics, strikes, lockdowns, transport or logistical disruptions, governmental actions, system failures, or other unforeseeable circumstances.",
                            },
                            {
                                type: "p",
                                content: <b>7. Accuracy of Information</b>,
                            },
                            {
                                type: "p",
                                content: "We make every reasonable effort to ensure that product details, images, ingredient information, pricing, and availability displayed on the Website are accurate and up to date. However, minor variations may occur due to natural ingredient differences, manufacturing batches, formulation updates, or screen display settings.",
                            },
                            {
                                type: "p",
                                content: "Sknly reserves the right to correct any errors, inaccuracies, or omissions, and to update information on the Website at any time without prior notice.",
                            },
                            {
                                type: "p",
                                content: <b>8. Product Representation & Visual Disclaimer</b>,
                            },
                            {
                                type: "p",
                                content: "Product images, visuals, and creative representations displayed on the Website are for illustrative purposes only. Actual product color, texture, appearance, or packaging may vary slightly due to lighting, screen settings, manufacturing batches, ingredient sourcing, or formulation updates. Such variations do not affect product safety or performance",
                            },
                            {
                                type: "p",
                                content: <b>9. Limitation of Liability</b>,
                            },
                            {
                                type: "p",
                                content: "To the fullest extent permitted under applicable law, Sknly shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website or purchase or use of our products.",
                            },
                            {
                                type: "p",
                                content: "Sknly’s total liability, if any, for any claim arising from the use of the Website or our products shall be limited to the amount paid by you for the product giving rise to such claim.",
                            },
                            {
                                type: "p",
                                content: <b>10. Indemnification</b>,
                            },
                            {
                                type: "p",
                                content: "You agree to indemnify, defend, and hold harmless Sknly, its founders, employees, affiliates, and partners from and against any claims, damages, losses, liabilities, costs, or expenses (including reasonable legal fees) arising out of or in connection with:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<>your access to or use of the Website or products;</>),
                                    (<>your breach of these Terms; or</>),
                                    (<> your violation of any applicable law or the rights of any third party.</>),

                                ]
                            },
                            {
                                type: "h2",
                                content: "B. E-commerce & Website Use",
                            },
                            {
                                type: "p",
                                content: <b>11. Order Acceptance & Cancellation</b>,
                            },
                            {
                                type: "p",
                                content: "Placing an order on the Website does not constitute acceptance of such order. An order shall be deemed accepted only after successful payment and confirmation by Sknly, including dispatch of the product.",
                            },
                            {
                                type: "p",
                                content: "Sknly reserves the right to cancel or refuse any order, in whole or in part, at its sole discretion, including but not limited to cases of:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<>pricing, listing, or stock errors;</>),
                                    (<>suspected fraudulent or unauthorized activity;</>),
                                    (<>invalid, incomplete, or incorrect shipping details;</>),
                                    (<>payment failure or verification issues; or</>),
                                    (<>imisuse of discount codes, promotions, or loyalty benefits.</>),

                                ]
                            },
                            {
                                type: "p",
                                content: <b>12. Payment Terms</b>,
                            },
                            {
                                type: "p",
                                content: "All payments for orders placed on the Website must be made through authorized payment methods and gateways made available by Sknly. By completing a transaction, you confirm that all billing and payment information provided is accurate, current, and complete, and that you are authorized to use the selected payment method.",
                            },
                            {
                                type: "p",
                                content: "Sknly does not store or have access to your card, UPI, or other payment credentials. Any attempted false chargebacks, payment disputes raised fraudulently, or misuse of payment methods may result in order cancellation, account suspension, or further action as permitted under applicable law.",
                            },
                            {
                                type: "p",
                                content: <b>13. Shipping, Delivery & Delays</b>,
                            },
                            {
                                type: "p",
                                content: "Delivery timelines displayed on the Website or at checkout are estimates only and may vary due to courier operations, weather conditions, local restrictions, or other logistical factors beyond our control. Once an order is handed over to the courier partner, Sknly shall not be responsible for delays, disruptions, or delivery failures caused by third-party logistics providers or incorrect shipping details provided by the customer.",
                            },
                            {
                                type: "p",
                                content: <b>14. Shipping Address Accuracy</b>,
                            },
                            {
                                type: "p",
                                content: "Customers are responsible for providing complete and accurate shipping address and contact details at the time of placing an order. Sknly shall not be liable for delivery failures, delays, or losses resulting from incorrect, incomplete, or inaccurate information provided by the customer. Orders delivered to such addresses will not be eligible for refunds, replacements, or reshipment.",
                            },
                            {
                                type: "p",
                                content: <b>15. Website Information & Corrections</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly reserves the right to update, correct, or remove any errors, inaccuracies, or omissions on the Website at any time, including those related to pricing, product descriptions, availability, or promotions, without prior notice. We also reserve the right to modify, suspend, or discontinue any part of the Website or its content at any time without notice.",
                            },
                            {
                                type: "p",
                                content: <b>16. Prohibited Activities</b>,
                            },
                            {
                                type: "p",
                                content: "You agree not to engage in any activity that may harm, disrupt, or misuse the Website or Sknly’s services, including but not limited to:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<>scraping, copying, extracting, or reproducing data, content, or materials from the Website without authorization;</>),
                                    (<>using bots, scripts, automated tools, or similar means to access the Website or place orders;</>),
                                    (<> reselling, distributing, or commercially exploiting Sknly products without prior written approval;</>),
                                    (<> misusing promotional offers, discount codes, loyalty benefits, or creating multiple accounts for such purposes;</>),
                                    (<> interfering with the Website’s functionality, security, or technical infrastructure; or</>),
                                    (<>posting or transmitting any unlawful, harmful, misleading, defamatory, or inappropriate content.</>),

                                ]
                            },
                            {
                                type: "p",
                                content: "Any violation of this clause may result in suspension or termination of access, cancellation of orders, and/or legal action as permitted under applicable law.",
                            },
                            {
                                type: "p",
                                content: <b>17. Account Suspension & Termination</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly reserves the right to suspend or terminate any user account, with or without prior notice, if we reasonably believe the account has been involved in fraudulent activity, misuse or abuse of promotions or loyalty benefits, abusive or harmful behaviour, chargeback misuse, or any violation of these Terms.",
                            },
                            {
                                type: "p",
                                content: "Such action may include cancellation of orders, restriction of access to services, and forfeiture of any associated benefits or rewards.",
                            },
                            {
                                type: "p",
                                content: <b>18. User-Generated Content</b>,
                            },
                            {
                                type: "p",
                                content: "By submitting or sharing any reviews, images, comments, testimonials, or other user-generated content (“UGC”) on or in connection with the Website, you grant Sknly a worldwide, royalty-free, perpetual, irrevocable, and non-exclusive right to use, reproduce, modify, adapt, publish, display, distribute, and share such content for marketing, promotional, or operational purposes.",
                            },
                            {
                                type: "p",
                                content: "You represent and warrant that any content submitted by you is original, does not infringe upon the rights of any third party, and complies with applicable laws. Sknly reserves the right, but not the obligation, to moderate, edit, or remove any user-generated content that it deems inappropriate, misleading, or in violation of these Terms.",
                            },
                            {
                                type: "p",
                                content: <b>19. Marketing Communication</b>,
                            },
                            {
                                type: "p",
                                content: "By signing up on the Website, placing an order, or joining The Sknly Club, you consent to receive transactional notifications, updates, offers, and promotional communications from Sknly via email, SMS, WhatsApp, or other electronic communication channels. You may opt out of promotional communications at any time by following the unsubscribe instructions provided or by contacting us directly. Transactional communications related to your orders may continue as required.",
                            },
                            {
                                type: "h2",
                                content: "C. Beauty & Skincare-Specific Disclaimers",
                            },
                            {
                                type: "p",
                                content: <b>20. Health, Allergy & Sensitivity Disclaimer</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly products are formulated using cosmetic-grade ingredients and are dermatologically tested and formulated to be suitable for all skin types, including sensitive skin. However, individual skin responses may vary. If you have sensitive skin, known allergies, or any existing skin or medical conditions, we recommend consulting a qualified dermatologist or healthcare professional before use.",
                            },
                            {
                                type: "p",
                                content: <b>21. Natural Ingredient & Formula Variations</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly’s fruit-powered formulations may exhibit slight variations in color, texture, viscosity, or fragrance due to the natural characteristics of ingredients and manufacturing batches. Such variations are normal and do not affect product safety or performance. Sknly reserves the right to update or modify formulations, ingredients, packaging, or product specifications from time to time in compliance with applicable regulatory standards and quality requirements.",
                            },
                            {
                                type: "p",
                                content: <b>22. Patch Test Recommendation</b>,
                            },
                            {
                                type: "p",
                                content: "We strongly recommend performing a patch test before first use or full-body application, especially if you have sensitive or reactive skin. If irritation, redness, or discomfort occurs, discontinue use immediately and consult a healthcare professional if necessary.",
                            },
                            {
                                type: "p",
                                content: <b>23. Results May Vary</b>,
                            },
                            {
                                type: "p",
                                content: "Individual results may vary based on skin type, sensitivity, usage frequency, environmental factors, and personal care routines. Sknly does not guarantee any specific results, outcomes, or benefits from the use of its products.",
                            },
                            {
                                type: "p",
                                content: <b>24. No Medical or Dermatological Advice</b>,
                            },
                            {
                                type: "p",
                                content: "All content provided on the Sknly Website, including product descriptions, ingredient information, usage guidance, and educational material, is for general informational purposes only and is not intended to replace professional medical or dermatological advice, diagnosis, or treatment.",
                            },
                            {
                                type: "p",
                                content: "Sknly products are cosmetic in nature and are not intended to diagnose, treat, cure, or prevent any medical or skin condition. Always consult a qualified healthcare professional for medical or health-related concerns.",
                            },
                            {
                                type: "p",
                                content: <b>25. Shelf-Life, Formulation & Packaging</b>,
                            },
                            {
                                type: "p",
                                content: "To maintain quality and continuously improve performance, Sknly may update product formulations, packaging designs, labels, icons, ingredient listings, or claims from time to time without prior notice, in compliance with applicable regulations. Customers are advised to refer to the product packaging for information regarding shelf life, expiry dates, batch details, and storage instructions.",
                            },
                            {
                                type: "p",
                                content: <b>26. External Use Only</b>,
                            },
                            {
                                type: "p",
                                content: "All Sknly products are intended for external use only. Avoid contact with eyes. In case of contact, rinse thoroughly with water. Keep out of reach of children and pets. Discontinue use immediately if irritation or discomfort occurs.",
                            },
                            {
                                type: "h2",
                                content: "D. Sknly-Specific Policies",
                            },
                            {
                                type: "p",
                                content: <b>27. Non-Edible & Inhalation Disclaimer</b>,
                            },
                            {
                                type: "p",
                                content: "Sknly Whipped Shower Foam is a cosmetic cleansing product intended solely for topical use and is not edible. Sknly shall not be responsible for any harm, illness, or injury resulting from ingestion, inhalation, or misuse of the product. Keep out of reach of children and pets.",
                            },
                            {
                                type: "p",
                                content: <b>28. Promotions, Discount Codes & Sknly Club</b>,
                            },
                            {
                                type: "p",
                                content: "All discounts, offers, promotional campaigns, and Sknly Club benefits are subject to specific terms, are time-bound, and may be modified, suspended, or withdrawn at Sknly’s discretion without prior notice. Unless expressly stated otherwise, promotions and discount codes cannot be combined.",
                            },
                            {
                                type: "p",
                                content: "Sknly Club benefits, including stamps or rewards, apply only to successfully delivered and completed orders. Any misuse, manipulation, or attempted abuse of promotional offers, discount codes, loyalty benefits, or creation of multiple accounts may result in cancellation of benefits, suspension or termination of accounts, and/or cancellation of orders.",
                            },
                            {
                                type: "p",
                                content: <b>29. Returns, Replacements & Exchanges (Hygiene Policy)</b>,
                            },
                            {
                                type: "p",
                                content: (<>Due to hygiene and safety reasons, <b>opened or used products are not eligible for return or exchange.</b></>),
                            },
                             {
                                type: "p",
                                content: "A return, replacement, or exchange may be considered only in the following limited circumstances:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<>incorrect product delivered;</>),
                                    (<>product damaged during transit (supported by valid unboxing proof); or</>),
                                    (<>delivery of an expired or defective product.</>),
                                    

                                ]
                            },
                              {
                                type: "p",
                                content: (<>All claims must be raised within <b>48 hours of delivery</b> along with clear unboxing images or videos as proof. Eligibility for returns, replacements, or exchanges shall be determined at <b>Sknly’s sole discretion.</b></>),
                            },
                            {
                                type: "p",
                                content: (<>For detailed conditions and procedures, please refer to our<b> Returns Policy</b>, which forms an integral part of these Terms.</>),
                            },
                            {
                                type: "p",
                                content: <b>30. Inventory, Availability & Discontinuation</b>,
                            },
                            {
                                type: "p",
                                content: "All products, including certain fragrances, limited editions, or seasonal variants, are subject to availability and may be offered in limited quantities. Sknly reserves the right to limit quantities, pause sales, modify, or discontinue any product, variant, or collection at any time, with or without prior notice.",
                            },
                            {
                                type: "p",
                                content: <b>31. Intellectual Property</b>,
                            },
                            {
                                type: "p",
                                content:"All content available on the Website, including but not limited to designs, packaging, icons, doodles, illustrations, product names, graphics, logos, images, branding elements, and copy, is the exclusive intellectual property of House of Sknly and is protected under applicable intellectual property laws. You may not copy, reproduce, modify, distribute, display, transmit, or commercially exploit any part of the Website or its content without prior written consent from Sknly.",
                            },
                            {
                                type: "p",
                                content: <b>32. Loyalty Program Misuse</b>,
                            },
                            {
                                type: "p",
                                content: "Any attempt to manipulate, abuse, or misuse The Sknly Club, including but not limited to creating multiple accounts, placing fraudulent orders, or attempting to unfairly accumulate rewards or benefits, may result in cancellation of Sknly Club membership, forfeiture of rewards, suspension of associated accounts, and/or cancellation of orders, at Sknly’s discretion.",
                            },
                             {
                                type: "p",
                                content: <b>33. Shipping Timelines</b>,
                            },
                            {
                                type: "p",
                                content: (<>Orders are typically dispatched within<b> 1–3 business days</b> from the date of order confirmation, unless stated otherwise. Shipping timelines may vary based on location, courier partner operations, seasonal demand, public holidays, or local conditions beyond our control.</>),
                            },
                             {
                                type: "p",
                                content: <b>34. Hygiene Clause: No Returns After Opening</b>,
                            },
                            {
                                type: "p",
                                content: (<>Once a product has been opened, used, or tested (including a single use), it is<b> not eligible for return, replacement, or exchange</b> due to hygiene and safety standards applicable to personal care products.</>),
                            },
                             {
                                type: "h2",
                                content:"E. Severability & Updates",
                            },
                            {
                                type: "p",
                                content: <b>35. Severability & Updates</b>,
                            },
                            {
                                type: "p",
                                content: "If any provision of these Terms is held to be invalid, illegal, or unenforceable under applicable law, the remaining provisions shall continue to remain in full force and effect. Sknly reserves the right to revise, update, or modify these Terms & Conditions at any time without prior notice. Continued access to or use of the Website after such changes constitutes acceptance of the updated Terms",
                            },
                             {
                                type: "h2",
                                content:"F. Contact Information",
                            },
                            {
                                type: "p",
                                content: <b>36. Contact Information</b>,
                            },
                            {
                                type: "p",
                                content: "If you have any questions, concerns, or queries regarding these Terms & Conditions, please contact us at:",
                            },
                            {
                                type: "ul",
                                content: [
                                    (<><b>Email:</b> hello@sknlybeauty.com</>),
                                    (<><b>Instagram:</b> @sknly.in</>),
                                    (<><b>Business Address:</b></>),
                                    (<>House of Sknly</>),
                                    (<>308, Vardhaman Plaza</>),
                                    (<>D.B. Gupta Road, Paharganj</>),
                                    (<>New Delhi – 110055, India</>),
                                    

                                ]
                            },


                        ]
                    }
                />

            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default TermsConditionsPage