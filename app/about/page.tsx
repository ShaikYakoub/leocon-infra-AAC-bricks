import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About LEOCON INFRA | AAC Block Manufacturer | Kadapa, AP",
  description:
    "Learn about LEOCON INFRA: India's leading AAC block manufacturer. Discover our mission, values, ISO-certified facility, and commitment to sustainable construction since 2024.",
  keywords: [
    "LEOCON INFRA",
    "AAC manufacturer",
    "about us",
    "Kadapa",
    "sustainable building",
    "fly ash recycling",
  ],
  openGraph: {
    title: "About LEOCON INFRA – Premium AAC Block Manufacturer",
    description:
      "Meet LEOCON INFRA: A trusted AAC block manufacturer committed to sustainable construction and quality excellence.",
    type: "website",
    url: "https://leoconinfra.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LEOCON INFRA",
            description: "Premium AAC blocks manufacturer in Kadapa, India",
            url: "https://leoconinfra.com",
            telephone: "+917239922999",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot-22, APIIC Mydukur",
              addressLocality: "Kadapa",
              addressRegion: "Andhra Pradesh",
              postalCode: "516301",
              addressCountry: "IN",
            },
            foundingDate: "2024",
            foundingLocation: "Kadapa, Andhra Pradesh, India",
          }),
        }}
      />
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
