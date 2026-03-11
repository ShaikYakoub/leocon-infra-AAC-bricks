import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

const WA = "7239922999"; // Updated WhatsApp number

function VideoPlaceholder({
  prompt,
  aspect = "aspect-video",
  className = "",
}: {
  prompt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspect} ${className} rounded-2xl overflow-hidden bg-gradient-to-br from-stone-800 via-[#2c1a08] to-stone-900 border border-orange-500/20 flex flex-col items-center justify-center gap-4`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.08),transparent_70%)]" />
      <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-orange-400 ml-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="z-10 px-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-orange-400/80 font-bold mb-1">
          🎬 Video Prompt
        </p>
        <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
          {prompt}
        </p>
      </div>
    </div>
  );

  // ...rest of the page code remains unchanged...
}

function ImgPlaceholder({
  prompt,
  aspect = "aspect-video",
  className = "",
}: {
  prompt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspect} ${className} rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-neutral-100 border border-stone-200 flex flex-col items-center justify-center gap-4`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-12 h-12 text-orange-400/60 shrink-0"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path
          d="M21 15l-5-5L5 21"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="z-10 px-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-orange-500/70 font-bold mb-1">
          📸 Image Prompt
        </p>
        <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
          {prompt}
        </p>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const steps = [
    {
      n: "1",
      title: "Coal Fly Ash Processing",
      desc: "Coal fly ash — the primary raw material (70% of AAC composition) — is transported by wheel loader to the slurry preparing pond. Water is added to achieve the required concentration. The ash slurry is then pumped into storage tanks, ready for batching.",
      equipment:
        "Wheel loader, slurry pond, industrial pumps, slurry storage tanks",
      output: "520 kg fly ash per m³ of AAC blocks",
    },
    {
      n: "2",
      title: "Lime Processing",
      desc: "Powdered lime arrives at the factory and is lifted into dedicated lime powder silos using bucket elevators. The lime is stored under controlled conditions and fed into the production line as needed according to the precise batch recipe.",
      equipment: "Bucket elevator, lime powder silo, screw conveyor",
      output: "20 kg lime per m³ of AAC blocks",
    },
    {
      n: "3",
      title: "Gypsum Processing",
      desc: "Gypsum from the storage shed is manually added to the slurry pond during slurry preparation. Gypsum acts as a long-term strength gainer, ensuring the blocks achieve full structural integrity after autoclaving.",
      equipment: "Storage shed, manual handling",
      output: "Gypsum proportion as per batch requirement",
    },
    {
      n: "4",
      title: "Cement Processing",
      desc: "Cement arrives via tank truck and is directly pumped into the cement silo, maintaining a dust-free and moisture-controlled environment. The silo feeds the batching system with precise metered quantities.",
      equipment: "Cement silo, pneumatic transport system",
      output: "100 kg cement per m³ of AAC blocks",
    },
    {
      n: "5",
      title: "Aluminium Powder Processing",
      desc: "Purchased aluminium paste (in buckets or bags) is stored in a dedicated storehouse. When needed, it is lifted to the second floor of the batching building, measured precisely, and added to an aluminium mixer to create a 5% suspending liquid — the chemical reaction with lime generates millions of micro-bubbles, giving AAC its porous, lightweight structure.",
      equipment: "Aluminium storehouse, lifting equipment, aluminium mixer",
      output: "0.45 kg aluminium per m³ of AAC blocks",
    },
    {
      n: "6",
      title: "Waste & Scrape Slurry Management",
      desc: "Zero-waste production: Cleaning water under the casting machine and scrape from cutting operations are pumped to a ball mill, ground into slurry, and recycled back into the production process. This closed-loop system minimizes material wastage.",
      equipment: "Ball mill, waste slurry tank, industrial pumps",
      output: "Recycled slurry reused in batching",
    },
    {
      n: "7",
      title: "Batching, Mixing & Casting",
      desc: "Fly ash slurry, lime, cement, and aluminium suspending liquid are precisely measured by electronic scales in the batching building. All ingredients are discharged into a high-speed casting mixer. The slurry temperature is controlled to match process requirements. Once thoroughly mixed, the slurry is poured into greased steel molds positioned on ferry cars beneath the mixer.",
      equipment:
        "Electronic weighing scales, screw conveyors, casting mixer, steel molds, ferry car",
      output: "Freshly cast green-cake AAC ready for pre-curing",
    },
    {
      n: "8",
      title: "Pre-Curing & Expansion",
      desc: "After casting, the molds are left undisturbed for pre-curing (typically 2-4 hours). During this phase, the aluminium reacts with lime, releasing hydrogen gas and causing the mixture to expand. The green-cake rises in the mold, forming millions of tiny air bubbles that give AAC its characteristic porous structure.",
      equipment: "Controlled curing area",
      output: "Green-cake AAC with sufficient handling strength",
    },
    {
      n: "9",
      title: "Precision Wire-Cutting",
      desc: "Once the green-cake achieves the required strength, a crane lifts the mold to the cutting section. The side plates are removed, and the green block is cut into exact dimensions using fine steel wire saws. Factory-controlled tolerances ensure every block is identical — eliminating the dimensional inconsistencies common in conventional bricks.",
      equipment: "Overhead crane, automated wire-cutting machine",
      output: "AAC blocks in 4-inch, 6-inch, or 9-inch sizes",
    },
    {
      n: "10",
      title: "Grouping for Autoclaving",
      desc: "Cut blocks are transferred by crane onto curing trolleys with bottom plates. Each autoclave accommodates seven trolleys, with 14 pieces of green block per trolley. The loaded trolleys are moved to the front of the autoclave, ready for the final curing stage.",
      equipment: "Curing trolleys, bottom plates, crane",
      output: "Grouped green blocks on trolleys",
    },
    {
      n: "11",
      title: "Autoclaving — The Critical Step",
      desc: "Trolleys loaded with green blocks are moved into high-pressure autoclaves using a windlass system. The autoclave door is sealed, and steam curing begins. Over approximately 12 hours, blocks are exposed to ~1.2 MPa pressure and ~185°C temperature. This steam-curing process triggers a chemical mineralisation reaction, creating permanent crystalline bonds (tobermorite) that give AAC its final strength, dimensional stability, and fire resistance.",
      equipment: "Industrial autoclaves, windlass, steam generation system",
      output: "Fully cured, hardened AAC blocks",
    },
    {
      n: "12",
      title: "De-molding & Storage",
      desc: "After curing is complete, the autoclave is depressurized and opened. Trolleys are pulled out, and finished AAC blocks are unloaded and transported to the storage yard. Blocks are palletized, wrapped, and stored under cover, ready for dispatch to customers.",
      equipment: "Windlass, forklifts, storage yard",
      output: "Finished AAC blocks ready for sale",
    },
    {
      n: "13",
      title: "Mold Returning & Oiling",
      desc: "Side plates and bottom plates are lifted off the trolleys and returned via rail to the cutting machine section. They are combined with molds, sent through a cleaning and oiling line, and prepared for the next production cycle — ensuring a continuous, efficient manufacturing loop.",
      equipment: "Mold returning rail, cleaning system, oiling machine",
      output: "Clean, oiled molds ready for reuse",
    },
  ];

  const rawMaterials = [
    { name: "Fly Ash", qty: "520 kg", pct: "70%", color: "bg-stone-400" },
    { name: "Cement", qty: "100 kg", pct: "13.5%", color: "bg-orange-400" },
    { name: "Lime", qty: "20 kg", pct: "2.7%", color: "bg-amber-300" },
    { name: "Aluminium", qty: "0.45 kg", pct: "0.06%", color: "bg-zinc-300" },
    {
      name: "Water & Others",
      qty: "~100 kg",
      pct: "13.7%",
      color: "bg-blue-300",
    },
  ];

  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Manufacturing Process
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-stone-900">
            From Fly Ash to{" "}
            <span className="gradient-text">Finished Block</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-8">
            13 precision-controlled steps transform industrial waste into
            premium AAC blocks. ISO-grade quality at every stage — from raw
            material batching to 12-hour autoclave curing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-orange-600">50 m³</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">
                Daily Capacity
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-orange-600">12 hrs</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">
                Autoclave Time
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-orange-600">1.2 MPa</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">
                Curing Pressure
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-orange-600">185°C</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">
                Steam Temp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Overview Video */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto w-fit">
              Production Line Tour
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              See the Process in Action
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              A complete walkthrough of our 50 m³ AAC manufacturing plant — from
              coal fly ash intake to finished palletized blocks.
            </p>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="max-w-5xl mx-auto rounded-2xl aspect-video w-full border border-orange-500/20"
          >
            <source
              src="/images/process/production-walkthrough.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Raw Material Breakdown */}
      <section className="py-28 px-4 md:px-12 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">
              Material Composition
            </div>
            <h2 className="font-display text-5xl font-black text-stone-900 mb-5">
              What Goes Into 1 m³ of AAC
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Every cubic meter of LEOCON AAC blocks contains a precisely
              measured mix of five ingredients.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {rawMaterials.map((mat) => (
              <div key={mat.name} className="flex items-center gap-4">
                <div className="w-32 text-right">
                  <p className="text-sm font-bold text-stone-900">{mat.name}</p>
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 bg-stone-100 rounded-full h-8 overflow-hidden relative">
                    <div
                      className={`${mat.color} h-full flex items-center justify-end px-3 text-xs font-bold text-white transition-all duration-700`}
                      style={{ width: mat.pct }}
                    >
                      {/* Percentage label removed from inside bar */}
                    </div>
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-700 pr-2"
                      style={{ minWidth: "40px" }}
                    >
                      {mat.pct}
                    </span>
                  </div>
                  <div className="w-24 text-left">
                    <p className="text-sm text-stone-600 font-semibold">
                      {mat.qty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-orange-50 border border-orange-200 rounded-2xl">
            <p className="text-sm text-orange-900 leading-relaxed">
              <strong>🌱 Sustainability Note:</strong> With 70% fly ash content,
              LEOCON AAC blocks consume{" "}
              <strong>520 kg of coal fly ash per cubic meter</strong> —
              converting hazardous thermal power plant waste into a
              high-performance building material. At 15,000 m³ annual capacity,
              we recycle approximately 7,800 tons of fly ash every year.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Step-by-Step</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Complete Production Cycle
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              13 stages from raw material intake to finished product — each with
              precise controls and quality checks.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="bg-white border border-stone-200 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-3">
                  <h3 className="text-2xl font-black text-stone-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-5">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 border-t border-stone-100">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Equipment
                    </p>
                    <p className="text-sm text-stone-700">{step.equipment}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Output
                    </p>
                    <p className="text-sm font-semibold text-orange-600">
                      {step.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoclave Deep Dive */}
      <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">The Critical Step</div>
            <h2 className="font-display text-5xl font-black text-stone-900 mb-6 leading-tight">
              Why <span className="gradient-text">Autoclaving</span> Matters
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Autoclaving isn't just heating — it's a high-pressure steam-curing
              process that fundamentally transforms the chemical structure of
              AAC. During the 12-hour cycle at{" "}
              <strong className="text-stone-900">~1.2 MPa pressure</strong> and{" "}
              <strong className="text-stone-900">~185°C temperature</strong>, a
              mineralisation reaction occurs.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Calcium silicate hydrates (tobermorite crystals) form permanent
              crystalline bonds, locking in:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-0.5">✓</span>
                <span className="text-stone-700">
                  <strong className="text-stone-900">
                    Structural strength
                  </strong>{" "}
                  — compressive strength up to 7.0 N/mm²
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-0.5">✓</span>
                <span className="text-stone-700">
                  <strong className="text-stone-900">
                    Dimensional stability
                  </strong>{" "}
                  — blocks won't shrink or warp
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-0.5">✓</span>
                <span className="text-stone-700">
                  <strong className="text-stone-900">Fire resistance</strong> —
                  highest hourly rating per inch
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-0.5">✓</span>
                <span className="text-stone-700">
                  <strong className="text-stone-900">Durability</strong> —
                  inorganic, pest-proof, weatherproof
                </span>
              </li>
            </ul>
            <div className="p-5 bg-orange-100 border-l-4 border-orange-500 rounded-lg">
              <p className="text-sm text-orange-900 font-semibold">
                ⚡ Autoclave curing is what separates AAC from air-cured
                lightweight concrete. It's the difference between a premium
                engineered material and a basic substitute.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/images/process/autoclave-interior.jpg"
              alt="Industrial autoclave interior"
              width={900}
              height={675}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Quality Assurance</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              ISO-Grade Production Controls
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Multi-stage quality checks ensure every LEOCON block meets
              stringent industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-3xl mx-auto mb-4">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Batching Precision
              </h3>
              <p className="text-sm text-stone-600">
                Electronic scales measure every ingredient to ±0.5% accuracy. No
                manual guesswork.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-3xl mx-auto mb-4">
                🔬
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Wire-Cutting Accuracy
              </h3>
              <p className="text-sm text-stone-600">
                Factory-controlled cutting tolerances ensure every block is
                dimensionally identical.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-3xl mx-auto mb-4">
                🌡️
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Autoclave Monitoring
              </h3>
              <p className="text-sm text-stone-600">
                Continuous pressure and temperature monitoring during 12-hour
                curing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section
        className="py-20 px-4 md:px-12 border-t border-orange-600/20 relative bg-[#1c1410]"
        style={{
          backgroundImage: "url('/images/process/cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-white">
            Experience the Difference
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a plant tour to see our 50 m³ AAC production line in action
            at APIIC Mydukur, Kadapa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]"
            >
              Book a Plant Tour
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
      <Footer />
    </div>
  );
}
