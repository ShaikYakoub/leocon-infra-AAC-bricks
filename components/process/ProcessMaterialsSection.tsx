type RawMaterial = {
  name: string;
  qty: string;
  pct: string;
  color: string;
};

type ProcessMaterialsSectionProps = {
  rawMaterials: RawMaterial[];
};

export default function ProcessMaterialsSection({
  rawMaterials,
}: ProcessMaterialsSectionProps) {
  return (
    <section className="py-28 px-4 md:px-12 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">
            Material Composition
          </div>
          <h2 className="font-display text-5xl font-black text-stone-900 mb-5">
            What Goes Into 1 m3 of <span className="text-orange-500">AAC</span>
          </h2>
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
                    className={`${mat.color} h-full`}
                    style={{ width: mat.pct }}
                  />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-700 pr-2">
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
      </div>
    </section>
  );
}
