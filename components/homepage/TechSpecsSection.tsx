const technicalRows = [
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
];

export default function TechSpecsSection() {
  return (
    <section id="specs" className="py-28 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Product Range</div>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
            Technical Specifications
          </h2>
        </div>
        <div className="rounded-3xl overflow-hidden border border-stone-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
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
                  <th className="px-8 py-5 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Best Use
                  </th>
                </tr>
              </thead>
              <tbody>
                {technicalRows.map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-b border-stone-100 hover:bg-orange-50/50 transition-colors ${
                      i % 2 === 0 ? "bg-stone-50" : "bg-white"
                    }`}
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
                    <td className="px-8 py-6 text-stone-400 text-sm">
                      {row.use}
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
