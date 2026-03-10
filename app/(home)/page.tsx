import HomeLayout from "@/layouts/home-layout";
import HomePageHeroSection from "../(components)/hero-section";
import HomePageproductSection from "../(components)/product-section";
import FruitPoweredSection from "../(components)/fruit-powered-section";
import BundleMoreSection from "../(components)/bundle-more-section";
import JoinSknlySection from "../(components)/join-sknly-section";
import WeKnowSection from "../(components)/we-know-section";
import WippedServeSection from "../(components)/wipped-serve-section";
import RedirectToLoginPageOneTime from "./redirect-to-login-page";

export default async function Home() {
  return (
    <HomeLayout>
      <HomePageHeroSection />
      <HomePageproductSection />
      <FruitPoweredSection />
      {/* <ProductInActionSection /> */}
      <BundleMoreSection />
      <JoinSknlySection />
      <WeKnowSection />
      {/* <BundleMoreSectionTwo /> */}
      <WippedServeSection />

      <RedirectToLoginPageOneTime/>
      {/* <EspressoMoussePopup/> */}

    </HomeLayout>
  );
}
