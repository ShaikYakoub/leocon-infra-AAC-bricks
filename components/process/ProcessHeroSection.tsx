export default function ProcessHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Manufacturing Process
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-stone-900">
          From Fly Ash to <span className="gradient-text">Finished Block</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-8">
          13 precision-controlled steps transform industrial waste into premium
          AAC blocks. ISO-grade quality at every stage.
        </p>
      </div>
    </section>
  );
}
