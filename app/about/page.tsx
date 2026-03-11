import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutCtaSection from "@/components/about/AboutCtaSection";
import AboutFacilitySection from "@/components/about/AboutFacilitySection";
import AboutFlyAshImpactSection from "@/components/about/AboutFlyAshImpactSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutMissionVisionSection from "@/components/about/AboutMissionVisionSection";
import AboutTimelineSection from "@/components/about/AboutTimelineSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import { milestones, values } from "@/components/about/aboutData";

const WA = "7239922999";

export default function AboutPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <AboutHeroSection />
      <AboutMissionVisionSection />
      <AboutTimelineSection milestones={milestones} />
      <AboutValuesSection values={values} />
      <AboutFlyAshImpactSection />
      <AboutFacilitySection waNumber={WA} />
      <AboutCtaSection waNumber={WA} />
      <Footer />
    </div>
  );
}
