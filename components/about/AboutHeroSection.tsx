export default function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          About LEOCON INFRA
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] mb-6 text-stone-900 break-words max-w-full md:max-w-5xl mx-auto">
          Building the <span className="text-orange-500">Future</span>
          <br />
          of <span className="text-orange-500">Construction</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
          LEOCON INFRA manufactures premium Autoclaved Aerated Concrete (AAC)
          blocks at our state-of-the-art facility in APIIC Mydukur, Kadapa,
          Andhra Pradesh. We transform industrial waste into world-class
          building materials - lighter, stronger, and greener.
        </p>
      </div>
    </section>
  );
}
