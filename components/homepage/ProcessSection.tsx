type ProcessStepProps = {
  n: string;
  title: string;
  desc: string;
};

function ProcessStep({ n, title, desc }: ProcessStepProps) {
  return (
    <div className="flex gap-6 group">
      <div className="flex flex-col items-center gap-0">
        <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-300 group-hover:border-orange-500 group-hover:bg-orange-200 flex items-center justify-center text-orange-600 font-black text-lg transition-all duration-300 shrink-0">
          {n}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-orange-300/50 to-transparent mt-2" />
      </div>
      <div className="pb-10">
        <h4 className="text-lg font-bold text-stone-900 mb-2">{title}</h4>
        <p className="text-stone-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-28 px-4 md:px-12 bg-[#1c1410] border-y border-white/8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(234,88,12,0.05),transparent)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Behind the Block</div>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-white">
            How It&apos;s Made
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            ISO-grade precision at every stage. Raw material to ready-to-lay
            block in 12 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl aspect-[4/3] w-full border border-orange-500/20"
            >
              <source
                src="/images/homepage/manufacturing-timelapse.mp4"
                type="video/mp4"
              />
            </video>
            <p className="mt-6 text-center text-sm text-stone-400 italic">
              Live footage · LEOCON INFRA Plant · APIIC Mydukur, Kadapa
            </p>
          </div>
          <div className="pt-4">
            <ProcessStep
              n="1"
              title="Batching & Mixing"
              desc="Coal fly ash, lime, and cement are precisely measured by electronic scales and fed into the casting mixer. Aluminium powder is then introduced - the chemical reaction creates millions of micro-bubbles, giving AAC its lightweight, porous structure."
            />
            <ProcessStep
              n="2"
              title="Pouring & Pre-curing"
              desc="The slurry is poured into large steel molds and left to pre-cure. The mix expands as aluminium reacts, and the cake achieves enough green strength to be handled without deforming."
            />
            <ProcessStep
              n="3"
              title="Precision Wire-Cutting"
              desc="The green cake is transferred to a cutting frame and sliced by fine steel wires to exact block dimensions. Factory tolerances ensure every block is identical, eliminating the uneven sizes that slow down bricklaying."
            />
            <ProcessStep
              n="4"
              title="Autoclaving"
              desc="Blocks are loaded into high-pressure autoclaves and steam-cured for ~12 hours at ~1.2 MPa. This mineralises the block, creating a permanent crystalline bond that locks in final structural strength, fire resistance, and dimensional stability."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
