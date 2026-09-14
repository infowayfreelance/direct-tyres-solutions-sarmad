import BrandsMarquee from "./BrandsMarquee";
import CoverageMarquee from "./CoverageMarquee";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import QuoteContact from "./QuoteContact";
import Services from "./Services";
import WhyTrustUs from "./WhyTrustUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CoverageMarquee />
      <WhyTrustUs />
      <Services />
      <HowItWorks />
      <Gallery />
      <BrandsMarquee />
      <Pricing />
      <QuoteContact />
    </main>
  );
}
