import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

const WA = "YOUR_CLIENT_NUMBER";

// Placeholder component for product images
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

  // ...rest of the page code remains unchanged...
}

export default function ProductsPage() {
  const products = [
    {
      size: "2 Inch",
      dimensions: "24 × 8 × 2",
      blocksPerM3: 162,
      marketRate: "₹30 - ₹40",
      avgValue: "₹3,500",
      weight: "~3 kg per block",
      use: "False Walls & Panels",
      description:
        "Perfect for false walls, panels, and non-structural elements. Extremely lightweight and easy to handle for creative interior solutions.",
      features: [
        "Extremely lightweight",
        "Ideal for panels",
        "Easy handling",
        "Creative interior solutions",
      ],
      image: "/images/products/2-inch-block.jpg",
      imageAlt: "2 inch AAC block",
    },
    {
      size: "3 Inch",
      dimensions: "24 × 8 × 3",
      blocksPerM3: 108,
      marketRate: "₹40 - ₹50",
      avgValue: "₹4,000",
      weight: "~4.5 kg per block",
      use: "Light Partition Walls",
      description:
        "Best for ultra-light partition walls and temporary structures. Easy to cut and install, ideal for flexible interior layouts.",
      features: [
        "Ultra-lightweight",
        "Quick installation",
        "Flexible for temporary walls",
        "Easy to cut and shape",
      ],
      image: "/images/products/3-inch-block.jpg",
      imageAlt: "3 inch AAC block",
    },
    {
      size: "4 Inch",
      dimensions: "24 × 8 × 4",
      blocksPerM3: 81,
      marketRate: "₹50 - ₹60",
      avgValue: "₹4,500",
      weight: "~6 kg per block",
      use: "Partition & Internal Walls",
      description:
        "Ideal for non-load-bearing partition walls and interior room dividers. Lightweight, easy to handle, and provides excellent acoustic insulation between rooms.",
      features: [
        "Perfect for interior divisions",
        "Easy single-person handling",
        "Minimal structural load",
        "Cost-effective for large partition areas",
      ],
      image: "/images/products/4-inch-block.jpg",
      imageAlt: "4 inch AAC block",
    },
    {
      size: "6 Inch",
      dimensions: "24 × 8 × 6",
      blocksPerM3: 54,
      marketRate: "₹70 - ₹80",
      avgValue: "₹5,500",
      weight: "~9 kg per block",
      use: "External & Load-Bearing Walls",
      description:
        "Best for external walls and load-bearing applications. Provides superior thermal insulation and structural strength for multi-storey buildings.",
      features: [
        "High compressive strength",
        "Superior insulation",
        "Ideal for external walls",
        "Reduces dead load",
      ],
      image: "/images/products/6-inch-block.jpg",
      imageAlt: "6 inch AAC block",
    },
    {
      size: "9 Inch",
      dimensions: "24 × 8 × 9",
      blocksPerM3: 36,
      marketRate: "₹90 - ₹100",
      avgValue: "₹6,500",
      weight: "~13 kg per block",
      use: "Boundary & Shear Walls",
      description:
        "Designed for boundary walls, shear walls, and heavy-duty applications. Maximum strength and sound insulation for critical structural elements.",
      features: [
        "Maximum wall thickness",
        "Best for boundaries",
        "Superior sound insulation",
        "Heavy-duty applications",
      ],
      image: "/images/products/9-inch-block.jpg",
      imageAlt: "9 inch AAC block",
    },
  ];
  const technicalSpecs = [
    {
      density: "451 – 550",
      gradeOne: "2.0",
      gradeTwo: "1.5",
      thermal: "0.21",
    },
    {
      density: "551 – 650",
      gradeOne: "4.0",
      gradeTwo: "3.0",
      thermal: "0.24",
    },
    {
      density: "651 – 750",
      gradeOne: "5.0",
      gradeTwo: "4.0",
      thermal: "0.30",
    },
    {
      density: "751 – 850",
      gradeOne: "6.0",
      gradeTwo: "5.0",
      thermal: "0.37",
    },
    {
      density: "851 - 1000",
      gradeOne: "7.0",
      gradeTwo: "6.0",
      thermal: "0.42",
    },
  ];

  const advantages = [
    {
      icon: "💰",
      title: "Cost Saving",
      desc: "66% lighter than conventional clay bricks. 25% less foundation load, 15% steel savings, 10% cement savings, 35% less plastering & labour costs, 40% overall structural cost reduction.",
    },
    {
      icon: "⏱️",
      title: "Time Saving",
      desc: "Lightweight, dry, and set quickly. Faster construction compared to conventional bricks, helping builders finish projects ahead of schedule.",
    },
    {
      icon: "📏",
      title: "Uniform in Size",
      desc: "Pre-defined sizes with constant dimensions. Minimizes adjustment time, ensures perfectly plumb walls, and reduces mortar consumption.",
    },
    {
      icon: "🔥",
      title: "Fire & Acoustics Resistant",
      desc: "Highest hourly fire-resistant rating per inch of any building material. Will not burn. Excellent thermal and acoustic insulation for air-conditioned and fire-rated buildings.",
    },
    {
      icon: "🏔️",
      title: "Earthquake Resistant",
      desc: "Impact of earthquake forces is proportional to structure weight. AAC blocks provide excellent seismic resistance due to their lightweight nature.",
    },
    {
      icon: "🛡️",
      title: "Less Breakage",
      desc: "Negligible breakage during transport and handling. Drastically reduces wastage with increased utilization on-site.",
    },
    {
      icon: "🐛",
      title: "Pest Resistant",
      desc: "Made of inorganic materials that do not disintegrate. Not susceptible to external influences. Keeps termites away, avoiding damage and losses.",
    },
    {
      icon: "📐",
      title: "Enhances Carpet Area",
      desc: "Achieve higher wall strength in thinner walls than conventional bricks in thick walls. Results in increased usable carpet area on every floor.",
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
            Product Range
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-stone-900">
            LEOCON <span className="gradient-text">AAC Blocks</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-12">
            Premium Autoclaved Aerated Concrete blocks in three sizes —
            engineered for strength, precision, and sustainability. 2.5× lighter
            than conventional bricks with comparable strength.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 shadow-[0_0_32px_rgba(234,88,12,0.35)] hover:shadow-[0_0_48px_rgba(234,88,12,0.5)]"
            >
              Request a Quote
            </a>
            <a
              href="#specifications"
              className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-orange-500 text-stone-700 hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-base transition-all duration-300"
            >
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 px-4 md:px-12 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative bg-gradient-to-b from-red-50 to-white border-2 border-red-200 rounded-3xl p-10 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Conventional
              </div>
              <p className="text-8xl font-black text-red-500 mb-2">590</p>
              <p className="text-stone-500 font-semibold">Red Clay Bricks</p>
              <p className="text-sm text-stone-400 mt-2">per cubic meter</p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-stone-900 mb-4">
                1 m³ Equivalence
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                One cubic meter of wall constructed with conventional red clay
                bricks requires{" "}
                <strong className="text-red-600">590 bricks</strong>. With
                LEOCON AAC Blocks, you need just{" "}
                <strong className="text-orange-600">
                  83, 55, 36, 108, or 162 blocks
                </strong>{" "}
                depending on wall thickness — saving time, labour, and
                structural load.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                  83 × 4-Inch
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                  55 × 6-Inch
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                  36 × 9-Inch
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                  108 × 3-Inch
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                  162 × 2-Inch
                </span>
              </div>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-8 w-full">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                50 m³
              </div>
              <div className="text-stone-700 font-semibold">
                Daily Production Capacity
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                15,000 m³
              </div>
              <div className="text-stone-700 font-semibold">Annual Output</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                70%
              </div>
              <div className="text-stone-700 font-semibold">
                Fly Ash Content
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                2.5×
              </div>
              <div className="text-stone-700 font-semibold">
                Lighter than Bricks
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                40%
              </div>
              <div className="text-stone-700 font-semibold">
                Structural Cost Savings
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">
                12 hrs
              </div>
              <div className="text-stone-700 font-semibold">
                Autoclave Curing Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Sizes For All Your Application Needs
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Choose the right AAC block size for your project — from interior
              partitions to heavy-duty boundary walls.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, i) => (
              <div
                key={product.size}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={600}
                    height={450}
                    className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
                    priority
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                    {product.size} Block
                  </div>
                  <h3 className="text-4xl font-black text-stone-900 mb-3">
                    {product.dimensions}
                    <span className="text-stone-400">"</span>
                  </h3>
                  <p className="text-xl text-orange-600 font-bold mb-4">
                    {product.use}
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                        Blocks / m³
                      </p>
                      <p className="text-2xl font-black text-orange-600">
                        {product.blocksPerM3}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                        Weight
                      </p>
                      <p className="text-2xl font-black text-stone-900">
                        {product.weight}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                        Market Rate
                      </p>
                      <p className="text-lg font-bold text-stone-700">
                        {product.marketRate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                        Avg Value / m³
                      </p>
                      <p className="text-lg font-bold text-stone-700">
                        {product.avgValue}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-stone-600"
                      >
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section
        id="specifications"
        className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Technical Data</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Industry-Standard Specifications
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              LEOCON AAC blocks meet stringent quality parameters across density
              grades, compressive strength, and thermal performance.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-50 border-b border-orange-200">
                    <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                      Block Density
                      <br />
                      <span className="text-xs font-normal normal-case">
                        (Oven Dry kg/m³)
                      </span>
                    </th>
                    <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                      Grade 1<br />
                      <span className="text-xs font-normal normal-case">
                        (Min N/mm²)
                      </span>
                    </th>
                    <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                      Grade 2<br />
                      <span className="text-xs font-normal normal-case">
                        (Min N/mm²)
                      </span>
                    </th>
                    <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                      Thermal Conductivity
                      <br />
                      <span className="text-xs font-normal normal-case">
                        (W/m.k Air Dry)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec, i) => (
                    <tr
                      key={spec.density}
                      className={`border-b border-stone-100 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-5 font-black text-stone-900">
                        {spec.density}
                      </td>
                      <td className="px-6 py-5 text-stone-700 font-semibold">
                        {spec.gradeOne}
                      </td>
                      <td className="px-6 py-5 text-stone-700 font-semibold">
                        {spec.gradeTwo}
                      </td>
                      <td className="px-6 py-5 text-stone-700 font-semibold">
                        {spec.thermal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 p-6 bg-orange-50 border border-orange-200 rounded-2xl">
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong className="text-orange-700">Note:</strong> All
              specifications comply with industry standards. Compressive
              strength tested after 28 days of curing. Thermal conductivity
              values measured in air-dry condition. Custom density grades
              available on request for specialized applications.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto w-fit">Why Choose AAC</div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
              Eight Unmatched Advantages
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Every LEOCON AAC block delivers measurable benefits — from cost
              and time savings to seismic safety and environmental
              responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white border border-stone-200 rounded-3xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-2xl mb-4">
                  {adv.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section
        className="py-20 px-4 md:px-12 border-t border-orange-600/20 relative bg-[#1c1410]"
        style={{
          backgroundImage: "url('/images/products/cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-white">
            Ready to Build with LEOCON?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a detailed quote, technical consultation, or schedule a site
            visit to see our AAC blocks in action.
          </p>
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
            Get Quote on WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
