type AboutCtaSectionProps = {
  waNumber: string;
};

export default function AboutCtaSection({ waNumber }: AboutCtaSectionProps) {
  return (
    <section
      className="py-20 px-4 md:px-12 border-t border-orange-600/20 relative bg-[#1c1410]"
      style={{
        backgroundImage: "url('/images/about/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-white">
          Partner with <span className="text-orange-500">LEOCON INFRA</span>
        </h2>
        <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you are a builder, contractor, architect, or homeowner - let's
          build something better together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]"
          >
            Get in Touch
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center gap-3 border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
