type Advantage = {
  icon: string;
  title: string;
  desc: string;
};

type ProductsAdvantagesSectionProps = {
  advantages: Advantage[];
};

export default function ProductsAdvantagesSection({
  advantages,
}: ProductsAdvantagesSectionProps) {
  // Icon mapping
  const iconMap: { [key: string]: JSX.Element } = {
    COST: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <text
          x="14"
          y="18"
          textAnchor="middle"
          fontSize="14"
          fill="#fff"
          fontWeight="bold"
        >
          ₹
        </text>
      </svg>
    ),
    TIME: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <path
          d="M14 7v7l4 4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    SIZE: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <rect x="8" y="8" width="12" height="12" fill="#fff" />
      </svg>
    ),
    FIRE: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <path d="M14 10c2 2 2 4 0 6-2-2-2-4 0-6z" fill="#fff" />
      </svg>
    ),
    SEIS: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <path d="M7 21l7-14 7 14" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    SAFE: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <path d="M10 14l4 4 4-8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    PEST: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <ellipse cx="14" cy="14" rx="6" ry="8" fill="#fff" />
      </svg>
    ),
    AREA: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#FFB347" />
        <rect x="10" y="10" width="8" height="8" fill="#fff" />
      </svg>
    ),
  };

  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Why Choose AAC</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Eight Unmatched Advantages
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Every LEOCON AAC block delivers measurable benefits - from cost and
            time savings to seismic safety and environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-white border border-stone-200 rounded-3xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-xs font-bold text-orange-700 mb-4">
                {iconMap[adv.icon] || adv.icon}
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
  );
}
