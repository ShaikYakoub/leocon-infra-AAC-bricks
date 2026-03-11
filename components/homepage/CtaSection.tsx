import Image from "next/image";

type CtaSectionProps = {
  waNumber: string;
};

export default function CtaSection({ waNumber }: CtaSectionProps) {
  return (
    <section
      id="contact"
      className="py-28 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#1c1410] via-[#2c1a08] to-[#1a0f07] border-y border-orange-600/20"
    >
      <Image
        src="/images/optional/construction-bg-blur.jpg"
        alt="Blurred construction site background"
        fill
        className="object-cover object-center opacity-30 pointer-events-none select-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(234,88,12,0.15),transparent)] z-10" />
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-orange-500/10" />
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-orange-500/10" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full border border-orange-500/10" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="section-label mx-auto w-fit">Ready to Build?</div>
        <h2 className="font-display text-5xl md:text-7xl font-black mb-6 text-white">
          Let&apos;s Start Your <span className="gradient-text">Project</span>
        </h2>
        <p className="text-stone-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Talk to our team directly on WhatsApp for a fast, personalised quote.
          We supply across Andhra Pradesh and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.082a.75.75 0 0 0 .92.92l5.226-1.474A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.964-1.363l-.356-.212-3.695 1.043 1.043-3.695-.212-.356A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href="tel:+917239922999"
            className="inline-flex items-center justify-center gap-3 border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.89a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
