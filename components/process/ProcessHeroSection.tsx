export default function ProcessHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Manufacturing Process
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] mb-6 text-stone-900 break-words max-w-full md:max-w-5xl mx-auto">
          From Fly Ash to{" "}
          <span className="text-orange-500">Finished Block</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-8">
          13 precision-controlled steps transform industrial waste into premium
          AAC blocks. ISO-grade quality at every stage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 w-full">
          <a
            href="#process-steps"
            className="w-full sm:w-auto min-w-[210px] px-8 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg shadow transition-all duration-200 text-center border-2 border-orange-600"
          >
            See All Steps
          </a>
          <a
            href="/products"
            className="w-full sm:w-auto min-w-[210px] px-8 py-3 rounded-full bg-white hover:bg-orange-50 text-orange-600 font-bold text-lg shadow transition-all duration-200 text-center border-2 border-orange-600"
          >
            View AAC Products
          </a>
        </div>
      </div>
    </section>
  );
}
