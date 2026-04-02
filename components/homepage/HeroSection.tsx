type HeroSectionProps = {
  waNumber: string;
};

export default function HeroSection({ waNumber }: HeroSectionProps) {
  // Navbar height is 80px (h-20)
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/hero/hero-bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-6 pb-24 w-full">
        <div className="max-w-2xl">
          {/* Location label removed as requested */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] mb-6 text-white break-words max-w-full md:max-w-5xl mx-auto">
            Build <span className="gradient-text">Smarter.</span>
            <br />
            Build{" "}
            <span className="relative inline-block">
              Stronger.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.55)]" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            Premium{" "}
            <strong className="text-white">
              Autoclaved Aerated Concrete (AAC)
            </strong>{" "}
            blocks engineered for faster construction, lower costs, and a
            greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 shadow-[0_0_32px_rgba(234,88,12,0.35)] hover:shadow-[0_0_48px_rgba(234,88,12,0.5)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.082a.75.75 0 0 0 .92.92l5.226-1.474A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.964-1.363l-.356-.212-3.695 1.043 1.043-3.695-.212-.356A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Get a Free Quote
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold py-4 px-8 rounded-full text-base transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-orange-400"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch How It&apos;s Made
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
