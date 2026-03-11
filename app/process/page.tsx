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

export default function ProcessPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
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
