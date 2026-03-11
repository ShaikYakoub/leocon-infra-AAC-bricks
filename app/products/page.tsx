import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsAdvantagesSection from "@/components/products/ProductsAdvantagesSection";
import ProductsComparisonSection from "@/components/products/ProductsComparisonSection";
import ProductsCtaSection from "@/components/products/ProductsCtaSection";
import ProductsDetailsSection from "@/components/products/ProductsDetailsSection";
import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import ProductsTechnicalSection from "@/components/products/ProductsTechnicalSection";
import {
  advantages,
  products,
  technicalSpecs,
} from "@/components/products/productsData";

const WA = "7239922999";

export const metadata: Metadata = {
  title: "AAC Blocks | Premium Lightweight Building Materials | LEOCON INFRA",
  description:
    "Explore LEOCON's premium AAC blocks: 2-inch to 9-inch options for all construction needs. Lightweight, fire-resistant, earthquake-safe, and eco-friendly building solutions.",
  keywords: [
    "AAC blocks",
    "2 inch AAC block",
    "4 inch AAC block",
    "6 inch AAC block",
    "9 inch AAC block",
    "lightweight blocks",
    "fire-resistant blocks",
    "earthquake-resistant blocks",
  ],
  openGraph: {
    title: "LEOCON AAC Blocks – Lightweight & Durable Building Materials",
    description:
      'Premium AAC blocks in multiple sizes. Cost-effective, fire-resistant, and earthquake-safe. Available in 2", 3", 4", 6", and 9" thicknesses.',
    type: "website",
    url: "https://leoconinfra.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "LEOCON AAC Blocks Product Catalog",
            description:
              "Premium Autoclaved Aerated Concrete (AAC) blocks in multiple sizes",
            url: "https://leoconinfra.com/products",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((product, idx) => ({
                "@type": "Product",
                position: idx + 1,
                name: `LEOCON AAC Block - ${product.size}`,
                description: product.description,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: product.avgValue || "On Request",
                  availability: "https://schema.org/InStock",
                },
              })),
            },
          }),
        }}
      />
      <Navbar />
      <ProductsHeroSection waNumber={WA} />
      <ProductsComparisonSection />
      <ProductsDetailsSection products={products} />
      <ProductsTechnicalSection technicalSpecs={technicalSpecs} />
      <ProductsAdvantagesSection advantages={advantages} />
      <ProductsCtaSection waNumber={WA} />
      <Footer />
    </div>
  );
}
