import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProcessAutoclaveSection from "@/components/process/ProcessAutoclaveSection";
import ProcessCtaSection from "@/components/process/ProcessCtaSection";
import ProcessHeroSection from "@/components/process/ProcessHeroSection";
import ProcessMaterialsSection from "@/components/process/ProcessMaterialsSection";
import ProcessOverviewSection from "@/components/process/ProcessOverviewSection";
import ProcessQualitySection from "@/components/process/ProcessQualitySection";
import ProcessStepsSection from "@/components/process/ProcessStepsSection";
import { rawMaterials, steps } from "@/components/process/processData";

const WA = "7239922999";

export const metadata: Metadata = {
  title: "AAC Block Manufacturing Process | LEOCON INFRA Quality Control",
  description:
    "Discover LEOCON's AAC manufacturing process: From raw materials to autoclaving at 185°C. Learn how we ensure premium quality blocks with ISO standards.",
  keywords: [
    "AAC manufacturing",
    "manufacturing process",
    "autoclaving",
    "quality control",
    "concrete production",
  ],
  openGraph: {
    title: "How LEOCON AAC Blocks are Made – Manufacturing Excellence",
    description:
      "Step-by-step AAC block manufacturing process featuring ISO-certified autoclaving and rigorous quality control.",
    type: "website",
    url: "https://leoconinfra.com/process",
  },
};

export default function ProcessPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "LEOCON AAC Block Manufacturing Process",
            description:
              "Complete AAC block manufacturing process from raw materials to finished product",
            steps: steps.map((step, idx) => ({
              "@type": "HowToStep",
              position: idx + 1,
              name: step.title,
              text: step.desc,
            })),
          }),
        }}
      />
      <Navbar />
      <ProcessHeroSection />
      <ProcessOverviewSection />
      <ProcessMaterialsSection rawMaterials={rawMaterials} />
      <ProcessStepsSection steps={steps} />
      <ProcessAutoclaveSection />
      <ProcessQualitySection />
      <ProcessCtaSection waNumber={WA} />
      <Footer />
    </div>
  );
}
