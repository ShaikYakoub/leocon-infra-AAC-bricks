type TechnicalSpec = {
  density: string;
  gradeOne: string;
  gradeTwo: string;
  thermal: string;
};

type ProductsTechnicalSectionProps = {
  technicalSpecs: TechnicalSpec[];
};

export default function ProductsTechnicalSection({
  technicalSpecs,
}: ProductsTechnicalSectionProps) {
  return (
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
                  </th>
                  <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Grade 1
                  </th>
                  <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Grade 2
                  </th>
                  <th className="px-6 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Thermal Conductivity
                  </th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, i) => (
                  <tr
                    key={spec.density}
                    className={`border-b border-stone-100 hover:bg-orange-50/50 transition-colors ${
                      i % 2 === 0 ? "bg-stone-50" : "bg-white"
                    }`}
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
      </div>
    </section>
  );
}
