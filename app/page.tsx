import Navbar from "@/components/Navbar";
import AACCalculator from "@/components/AACCalculator";

import Footer from "@/components/Footer";
import Image from "next/image";

const WA = "7239922999"; // WhatsApp number for all CTAs

/* ─── Image / Video placeholder components ───────────────────────── */

function StatBadge({ pct, label }: { pct: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-5 border-r border-stone-200 last:border-r-0">
      <span className="text-4xl font-black text-orange-600">{pct}</span>
      <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold text-center leading-snug">
        {label}
      </span>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white border border-stone-200 rounded-3xl p-8 flex flex-col gap-5 overflow-hidden shadow-sm">
      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 text-2xl shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
      {children}
    </div>
  );
}

function ProcessStep({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
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
export default function Page() {
  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <Navbar />
      {/* ════ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-24 w-full">
          <div className="max-w-2xl">
            <div className="section-label">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              APIIC Mydukur · Kadapa, Andhra Pradesh
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-white">
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
                href={`https://wa.me/${WA}`}
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

      {/* ════ WHY AAC ══════════════════════════════════════════════ */}
      <section id="why-aac" className="py-28 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">The AAC Advantage</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Why Choose AAC Blocks?
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Better material choices compound into massive savings across the
            entire structure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard icon="⚖️" title="Lightweight & Strong">
            <p className="text-stone-500 leading-relaxed">
              <strong className="text-stone-900">2.5× lighter</strong> than
              conventional bricks —{" "}
              <strong className="text-stone-900">66% lighter</strong> than red
              clay bricks — while matching or exceeding structural strength
              requirements.
            </p>
            <Image
              src="/images/homepage/aac-honeycomb.jpg"
              alt="AAC block honeycomb cross-section"
              width={400}
              height={300}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </BenefitCard>
          {/* Optional Feature Highlight: Hands Holding AAC Block */}
          <BenefitCard icon="🤲" title="Effortless Handling">
            <p className="text-stone-500 leading-relaxed">
              AAC blocks are so lightweight, they can be easily lifted and
              placed by a single worker—reducing fatigue and speeding up
              construction.
            </p>
            <Image
              src="/images/optional/hands-holding-block.jpg"
              alt="Hands holding AAC block demonstrating lightweight property"
              width={400}
              height={300}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </BenefitCard>
          <BenefitCard icon="🏗️" title="Precision Dimensions">
            <p className="text-stone-500 leading-relaxed">
              Factory-cut to{" "}
              <strong className="text-stone-900">exact tolerances</strong>.
              Uniform size means faster laying, less mortar, and perfectly plumb
              walls.
            </p>
            <Image
              src="/images/homepage/aac-construction.jpg"
              alt="Construction workers laying AAC blocks"
              width={400}
              height={300}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </BenefitCard>
          <BenefitCard icon="🛡️" title="Built-in Safety">
            <p className="text-stone-500 leading-relaxed">
              Highest{" "}
              <strong className="text-stone-900">fire-resistance rating</strong>{" "}
              per inch. Excellent seismic performance. Inorganic composition —{" "}
              <strong className="text-stone-900">100% termite-proof</strong>.
            </p>
            <Image
              src="/images/homepage/aac-fire-resistance.jpg"
              alt="AAC block fire resistance test"
              width={400}
              height={300}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </BenefitCard>
        </div>
      </section>
      {/* ════ ECO COMPOSITION ══════════════════════════════════════ */}
      <section className="py-28 px-4 md:px-12 bg-[#f2ede8] border-y border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Sustainability First</div>
            <h2 className="font-display text-5xl font-black mb-6 leading-tight text-stone-900">
              Eco-Friendly <span className="gradient-text">by Design</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Every LEOCON block is made from a precision mix of{" "}
              <strong className="text-stone-900">pulverized fly ash</strong>,
              lime, cement, gypsum, water, and aluminium — with fly ash making
              up a full <strong className="text-orange-600">70%</strong> of the
              composition.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Fly ash is a hazardous by-product of Thermal Power Plants. By
              making it our primary raw material, LEOCON INFRA converts
              industrial waste into world-class construction material — reducing
              the carbon footprint of every building we contribute to.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Fly Ash 70%",
                "Lime",
                "Cement",
                "Gypsum",
                "Aluminium Powder",
                "Water",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Image
            src="/images/homepage/eco-flatlay.jpg"
            alt="Eco-friendly AAC block raw materials flatlay"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg aspect-square object-cover"
            priority
          />
        </div>
      </section>

      {/* ════ CALCULATOR ══════════════════════════════════════════ */}
      <section
        id="calculator"
        className="py-28 px-4 md:px-12 bg-white border-y border-stone-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Instant Estimate</div>
            <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
              Savings Calculator
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Enter your construction volume and instantly see your material
              counts and savings.
            </p>
          </div>
          <AACCalculator />
        </div>
      </section>
      {/* ════ TECH SPECS ══════════════════════════════════════════ */}
      <section id="specs" className="py-28 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Product Range</div>
            <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
              Technical Specifications
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stone-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-orange-50 border-b border-orange-200">
                  <th className="px-8 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Block Size
                  </th>
                  <th className="px-8 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Dimensions (Inches)
                  </th>
                  <th className="px-8 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Blocks / m³
                  </th>
                  <th className="px-8 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider hidden md:table-cell">
                    Best Use
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    size: "2 Inch",
                    dim: "24 × 8 × 2",
                    count: "166",
                    use: "False Ceilings, Panelling, Decorative Walls",
                  },
                  {
                    size: "3 Inch",
                    dim: "24 × 8 × 3",
                    count: "111",
                    use: "Lightweight Partitions, Renovation, Interior Walls",
                  },
                  {
                    size: "4 Inch",
                    dim: "24 × 8 × 4",
                    count: "83",
                    use: "Partition & Internal Walls",
                  },
                  {
                    size: "6 Inch",
                    dim: "24 × 8 × 6",
                    count: "55",
                    use: "External & Load-bearing Walls",
                  },
                  {
                    size: "9 Inch",
                    dim: "24 × 8 × 9",
                    count: "36",
                    use: "Boundary & Perimeter Walls",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-b border-stone-100 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
                  >
                    <td className="px-8 py-6 font-black text-stone-900 text-lg">
                      {row.size}
                    </td>
                    <td className="px-8 py-6 text-stone-600 font-mono">
                      {row.dim}
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-block bg-orange-100 border border-orange-200 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">
                        {row.count}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-stone-400 text-sm hidden md:table-cell">
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ════ MANUFACTURING PROCESS ═══════════════════════════════ */}
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
                desc="Coal fly ash, lime, and cement are precisely measured by electronic scales and fed into the casting mixer. Aluminium powder is then introduced — the chemical reaction creates millions of micro-bubbles, giving AAC its lightweight, porous structure."
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
      {/* ════ GALLERY ══════════════════════════════════════════════ */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Gallery</div>
            <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
              LEOCON in the Field
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/homepage/gallery-construction-site.jpg"
                alt="Construction site with AAC block walls"
                width={800}
                height={800}
                className="rounded-2xl aspect-square object-cover border border-stone-200"
                priority
              />
            </div>
            <Image
              src="/images/homepage/gallery-warehouse-pallet.jpg"
              alt="AAC blocks on pallet in warehouse"
              width={400}
              height={400}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
              priority
            />
            <Image
              src="/images/homepage/gallery-aerial-plant.jpg"
              alt="Aerial plant overview"
              width={400}
              height={400}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
              priority
            />
            <Image
              src="/images/homepage/gallery-engineer-measuring.jpg"
              alt="Engineer measuring AAC block"
              width={400}
              height={400}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
              priority
            />
            <Image
              src="/images/homepage/gallery-block-closeup.jpg"
              alt="AAC block close-up texture"
              width={400}
              height={400}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
              priority
            />
          </div>
        </div>
      </section>
      {/* ════ CTA BANNER ══════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-28 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#1c1410] via-[#2c1a08] to-[#1a0f07] border-y border-orange-600/20"
      >
        {/* Optional: Subtle blurred construction site background */}
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
            Talk to our team directly on WhatsApp for a fast, personalised
            quote. We supply across Andhra Pradesh and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA}`}
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
      <Footer />
    </div>
  );
}
