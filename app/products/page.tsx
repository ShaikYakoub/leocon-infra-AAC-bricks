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

export default function ProductsPage() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
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
