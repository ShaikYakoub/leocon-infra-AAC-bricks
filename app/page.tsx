import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CalculatorSection from "@/components/homepage/CalculatorSection";
import CtaSection from "@/components/homepage/CtaSection";
import EcoCompositionSection from "@/components/homepage/EcoCompositionSection";
import GallerySection from "@/components/homepage/GallerySection";
import HeroSection from "@/components/homepage/HeroSection";
import ProcessSection from "@/components/homepage/ProcessSection";
import TechSpecsSection from "@/components/homepage/TechSpecsSection";
import WhyAacSection from "@/components/homepage/WhyAacSection";

const WA = "7239922999";
export default function Page() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <HeroSection waNumber={WA} />
      <WhyAacSection />
      <EcoCompositionSection />
      <CalculatorSection />
      <TechSpecsSection />
      <ProcessSection />
      <GallerySection />
      <CtaSection waNumber={WA} />
      <Footer />
    </div>
  );
}
