type ProductsHeroSectionProps = {
  waNumber: string;
};

export default function ProductsHeroSection({
  waNumber,
}: ProductsHeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Product Range
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-stone-900">
          LEOCON <span className="gradient-text">AAC Blocks</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-12">
          Premium Autoclaved Aerated Concrete blocks in three sizes - engineered
          for strength, precision, and sustainability. 2.5x lighter than
          conventional bricks with comparable strength.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 shadow-[0_0_32px_rgba(234,88,12,0.35)] hover:shadow-[0_0_48px_rgba(234,88,12,0.5)]"
          >
            Request a Quote
          </a>
          <a
            href="#specifications"
            className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-orange-500 text-stone-700 hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-base transition-all duration-300"
          >
            View Specifications
          </a>
        </div>
      </div>
    </section>
  );
}
