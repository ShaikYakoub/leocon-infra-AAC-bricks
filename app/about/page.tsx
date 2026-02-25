import Navbar from "@/components/Navbar";

import Image from "next/image";

const WA = "YOUR_CLIENT_NUMBER";

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

import Footer from "../../components/Footer";

export default function AboutPage() {
  const milestones = [
    { year: "1920", event: "AAC material invented in Sweden" },
    {
      year: "2020s",
      event: "AAC becomes Europe's most-used building material",
    },
    {
      year: "2024",
      event:
        "LEOCON INFRA establishes 50 m³/day AAC plant at APIIC Mydukur, Kadapa",
    },
    {
      year: "Today",
      event: "15,000 m³ annual capacity serving Andhra Pradesh and beyond",
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Environmental Responsibility",
      desc: "Converting 70% fly ash waste from thermal power plants into premium building material. Reducing carbon footprint one block at a time.",
    },
    {
      icon: "⚙️",
      title: "Precision Engineering",
      desc: "ISO-grade production standards. Every block undergoes 12-hour autoclaving at 1.2 MPa pressure and 185°C for guaranteed strength and durability.",
    },
    {
      icon: "💡",
      title: "Innovation & Quality",
      desc: "Adopting Swedish AAC technology perfected over a century. Continuous quality control from batching to finished product.",
    },
    {
      icon: "🤝",
      title: "Customer Partnership",
      desc: "Committed to helping builders, contractors, and homeowners achieve faster, stronger, and greener construction outcomes.",
    },
  ];

  const stats = [
    { value: "50 m³", label: "Daily Production Capacity" },
    { value: "15,000 m³", label: "Annual Output" },
    { value: "70%", label: "Fly Ash Content" },
    { value: "2.5×", label: "Lighter than Bricks" },
    { value: "40%", label: "Structural Cost Savings" },
    { value: "12 hrs", label: "Autoclave Curing Time" },
  ];

  return (
    <div className="bg-[#f8f7f4] text-[#1a1a1a] min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-12 bg-gradient-to-b from-stone-50 to-[#f8f7f4] border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            About LEOCON INFRA
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-stone-900">
            Building the <span className="gradient-text">Future</span>
            <br />
            of Construction
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            LEOCON INFRA manufactures premium Autoclaved Aerated Concrete (AAC)
            blocks at our state-of-the-art facility in APIIC Mydukur, Kadapa,
            Andhra Pradesh. We transform industrial waste into world-class
            building materials — lighter, stronger, and greener.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/images/about/plant-exterior-wide.jpg"
              alt="LEOCON plant exterior wide-angle"
              width={600}
              height={600}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
              priority
            />
          </div>
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl font-black text-stone-900 mb-4">
                Smarter, Stronger, Sustainable
              </h2>
              <p className="text-stone-600 leading-relaxed">
                To revolutionize India's construction sector by providing
                cutting-edge AAC block solutions that reduce structural costs,
                accelerate project timelines, and safeguard the environment. We
                believe every building can be lighter, safer, and more
                efficient.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Our Vision
              </div>
              <h2 className="text-4xl font-black text-stone-900 mb-4">
                Leading the Green Building Revolution
              </h2>
              <p className="text-stone-600 leading-relaxed">
                To become Andhra Pradesh's most trusted AAC block manufacturer
                and a benchmark for sustainable construction materials across
                South India. By converting coal fly ash — a hazardous power
                plant by-product — into high-performance building blocks, we're
                turning environmental challenges into construction
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Our Journey</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              A Century of Innovation
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              AAC technology has evolved from a Swedish invention in 1920 to a
              global standard. LEOCON INFRA brings this legacy to Kadapa.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center shrink-0">
                    <span className="text-orange-600 font-black text-sm">
                      {m.year}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-orange-300 to-transparent" />
                  )}
                </div>
                <div className="pt-4 pb-8">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">What Drives Us</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Our Core Values
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Four principles guide everything we do — from raw material
              sourcing to after-sales support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-stone-200 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-3xl mb-5">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-28 px-4 md:px-12 bg-gradient-to-b from-white to-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              LEOCON by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-stone-200 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-4xl font-black text-orange-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fly Ash Impact */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Environmental Impact</div>
            <h2 className="font-display text-5xl font-black text-stone-900 mb-6 leading-tight">
              Turning Waste into <span className="gradient-text">Strength</span>
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                <strong className="text-stone-900">
                  60% of India's electricity
                </strong>{" "}
                comes from coal-based thermal power stations, generating
                approximately{" "}
                <strong className="text-stone-900">
                  60 million tons of fly ash annually
                </strong>
                . Today, only 5% of this ash is productively utilized — the rest
                remains a hazardous environmental burden.
              </p>
              <p>
                <strong className="text-orange-600">
                  LEOCON INFRA changes that equation.
                </strong>{" "}
                Every cubic meter of our AAC blocks incorporates{" "}
                <strong className="text-stone-900">
                  520 kg of pulverized fly ash
                </strong>{" "}
                — 70% of the total composition. This isn't just recycling; it's{" "}
                <em>upcycling</em> industrial waste into a superior building
                material.
              </p>
              <p>
                By choosing LEOCON AAC blocks, you're not just building
                structures — you're reducing landfill waste, lowering CO₂
                emissions from brick kilns, and supporting a circular economy.
                Construction meets conservation.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
              <p className="text-sm text-orange-900 font-semibold">
                📊 With 15,000 m³ annual capacity, LEOCON INFRA consumes
                approximately <strong>7,800 tons of fly ash per year</strong> —
                waste that would otherwise pollute soil and water.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/images/about/flyash-transformation.jpg"
              alt="Fly ash transformation visual"
              width={900}
              height={675}
              className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
              priority
            />
          </div>
        </div>
      </section>

      {/* Location & Facility */}
      <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Our Facility</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Precision Manufacturing in Kadapa
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Located at Plot-22, APIIC Mydukur Industrial Park, our 50 m³/day
              plant combines automated production with stringent quality
              control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Image
              src="/images/about/aerial-plant-drone.jpg"
              alt="Aerial plant drone shot"
              width={900}
              height={506}
              className="rounded-2xl aspect-video object-cover border border-stone-200"
              priority
            />
            <Image
              src="/images/about/interior-cutting-floor.jpg"
              alt="Interior factory cutting floor"
              width={900}
              height={506}
              className="rounded-2xl aspect-video object-cover border border-stone-200"
              priority
            />
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  Plant Specifications
                </h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>
                      <strong className="text-stone-900">Model:</strong> 50 m³
                      AAC Production Unit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>
                      <strong className="text-stone-900">
                        Daily Capacity:
                      </strong>{" "}
                      50 cubic meters
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>
                      <strong className="text-stone-900">Annual Output:</strong>{" "}
                      15,000 m³ (300 working days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>
                      <strong className="text-stone-900">
                        Autoclave Count:
                      </strong>{" "}
                      Multiple units for continuous curing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>
                      <strong className="text-stone-900">
                        Quality Standards:
                      </strong>{" "}
                      ISO-grade production controls
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  Contact Us
                </h3>
                <address className="not-italic text-stone-600 leading-loose space-y-2">
                  <p>
                    <strong className="text-stone-900">LEOCON INFRA</strong>
                  </p>
                  <p>Plot-22, APIIC Mydukur</p>
                  <p>Kadapa District, Andhra Pradesh</p>
                  <p>India</p>
                </address>
                <div className="mt-6">
                  <a
                    href={`https://wa.me/${WA}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 hover:bg-orange-200 text-orange-700 font-semibold px-5 py-3 rounded-full text-sm transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.082a.75.75 0 0 0 .92.92l5.226-1.474A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.964-1.363l-.356-.212-3.695 1.043 1.043-3.695-.212-.356A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                    </svg>
                    Message Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with background image */}
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
            Partner with LEOCON INFRA
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a builder, contractor, architect, or homeowner —
            let's build something better together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA}`}
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
      <Footer />
    </div>
  );
}
