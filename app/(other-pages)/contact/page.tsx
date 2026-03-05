import DefaultSection from "@/layouts/default-section"
import InnerPagesLayout from "@/layouts/inner-pages-layout";
import FeaturedImage from "./assets/featured-image.png";
import JoinSknlySection from "@/app/(components)/join-sknly-section";
import Link from "next/link";
import ContactForm from "./contact-form";

const ContactPage = () => {
  return (
    <InnerPagesLayout>
      <div
        className="text-[#B5383C]"
      >
        <DefaultSection
          outerClassName='py-10'
        >
          <h1
            className='max-w-lg mx-auto font-semibold text-5xl leading-16'
          >
            <span
              className='block w-full text-left'
            >We’d love to</span>
            <span
              className='block w-full text-right'
            >hear from you!</span>
          </h1>
        </DefaultSection>

        <div
          className="bg-cover bg-center min-h-100 flex items-center justify-center"
          style={{
            backgroundImage: `url(${FeaturedImage.src})`,
          }}
        >
          <h2
            className="text-4xl font-bold text-white"
          >Contact Us</h2>
        </div>

        <DefaultSection
          outerClassName="py-10"
        >
          <div
            className="space-y-2 text-center"
          >
            <p>You can DM us on Instagram, reach us via the form below or email us at <Link href={"mailto:hello@sknlybeauty.com"} className="underline">hello@sknlybeauty.com</Link></p>
            <p>You can also check out our FAQ section <Link href={"/faqs"} className="underline">here</Link>.</p>
          </div>
        </DefaultSection>

        <DefaultSection
          outerClassName="py-10"
          className="max-w-3xl!"
        >
          <ContactForm />
        </DefaultSection>

        <div
          className="bg-[#EFE0EB] pt-6"
        >
          <JoinSknlySection
            hideBgImage
            className="pt-0!"
          />
        </div>

      </div>
    </InnerPagesLayout>
  )
}

export default ContactPage