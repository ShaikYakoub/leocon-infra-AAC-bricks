type ProductsCtaSectionProps = {
  waNumber: string;
};

export default function ProductsCtaSection({
  waNumber,
}: ProductsCtaSectionProps) {
  return (
    <section
      className="py-20 px-4 md:px-12 border-t border-orange-600/20 relative bg-[#1c1410]"
      style={{
        backgroundImage: "url('/images/products/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-white">
          Ready to Build with LEOCON?
        </h2>
        <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Get a detailed quote, technical consultation, or schedule a site visit
          to see our AAC blocks in action.
        </p>
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]"
        >
          Get Quote on WhatsApp
        </a>
      </div>
    </section>
  );
}
