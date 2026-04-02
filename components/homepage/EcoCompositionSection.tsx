import Image from "next/image";

const compositionItems = [
  "Fly Ash 70%",
  "Lime",
  "Cement",
  "Gypsum",
  "Aluminium Powder",
  "Water",
];

export default function EcoCompositionSection() {
  return (
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
            lime, cement, gypsum, water, and aluminium - with fly ash making up
            a full <strong className="text-orange-600">70%</strong> of the
            composition.
          </p>
          <p className="text-stone-500 leading-relaxed mb-10">
            Fly ash is a hazardous by-product of Thermal Power Plants. By making
            it our primary raw material, LEOCON INFRA converts industrial waste
            into world-class construction material - reducing the carbon
            footprint of every building we contribute to.
          </p>
          <div className="flex flex-wrap gap-2">
            {compositionItems.map((item) => (
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
        />
      </div>
    </section>
  );
}
