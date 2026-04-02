import type { Metadata } from "next";

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
import Image from "next/image";

const WA = "7239922999";

export const metadata: Metadata = {
  title: "LEOCON INFRA – Premium AAC Blocks Manufacturer | Kadapa",
  description:
    "LEOCON INFRA: Premium AAC blocks for faster, stronger, greener construction. 66% lighter than clay bricks, fire-resistant, earthquake-safe. ISO-certified manufacturer in Kadapa, Andhra Pradesh.",
  keywords: [
    "AAC blocks",
    "LEOCON",
    "Kadapa AAC",
    "lightweight blocks",
    "construction materials",
    "AAC manufacturer",
  ],
  alternates: {
    canonical: "https://leoconinfra.com",
  },
  openGraph: {
    title: "LEOCON INFRA – Premium AAC Blocks | Build Smarter & Greener",
    description:
      "Premium Autoclaved Aerated Concrete blocks engineered for faster construction, lower costs, and sustainable building.",
    type: "website",
    url: "https://leoconinfra.com",
    locale: "en_IN",
  },
};

const heroImg = "/images/about/plant-exterior-wide.jpg";

export default function Page() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are AAC blocks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AAC (Autoclaved Aerated Concrete) blocks are lightweight, durable building materials made from fly ash, cement, sand, and lime, autoclaved at 1.2 MPa and 185°C.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose LEOCON AAC blocks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "LEOCON AAC blocks offer 66% weight reduction, 25% foundation load savings, fire resistance, earthquake safety, and eco-friendly manufacturing using fly ash waste.",
                },
              },
              {
                "@type": "Question",
                name: "What sizes are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "LEOCON AAC blocks are available in 2-inch, 3-inch, 4-inch, 6-inch, and 9-inch thicknesses for various construction needs.",
                },
              },
              {
                "@type": "Question",
                name: "Are AAC blocks earthquake resistant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. AAC blocks are excellent for earthquake resistance due to their lightweight nature, reducing seismic forces on structures.",
                },
              },
            ],
          }),
        }}
      />
      <div className="flex justify-center py-6">
        <Image
          src={heroImg}
          alt="LEOCON INFRA Premium AAC Blocks"
          width={1200}
          height={630}
          priority
          className="rounded-xl shadow-lg"
        />
      </div>
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
