type ValueItem = {
  icon: string;
  title: string;
  desc: string;
};

type AboutValuesSectionProps = {
  values: ValueItem[];
};

export default function AboutValuesSection({
  values,
}: AboutValuesSectionProps) {
  // Icon mapping
  const iconMap: { [key: string]: JSX.Element } = {
    ENV: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#4CAF50" />
        <path
          d="M16 24c-4-2-8-6-8-10a8 8 0 0 1 16 0c0 4-4 8-8 10z"
          fill="#fff"
        />
      </svg>
    ),
    ENG: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#2196F3" />
        <rect x="10" y="10" width="12" height="12" fill="#fff" />
        <path d="M16 10v12" stroke="#2196F3" strokeWidth="2" />
      </svg>
    ),
    INN: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#FFB347" />
        <path d="M16 12v8M12 16h8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    CUS: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#FF7043" />
        <path d="M16 20c-2-2-6-2-6-6a6 6 0 0 1 12 0c0 4-4 4-6 6z" fill="#fff" />
      </svg>
    ),
  };

  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">What Drives Us</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Our Core Values
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Four principles guide everything we do - from raw material sourcing
            to after-sales support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-stone-200 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-sm font-bold text-orange-700 mb-5">
                {iconMap[v.icon] || v.icon}
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
  );
}
