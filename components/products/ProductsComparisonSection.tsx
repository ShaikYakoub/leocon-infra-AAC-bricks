export default function ProductsComparisonSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 w-full flex justify-center">
          <span className="section-label mx-auto w-fit bg-orange-100 border border-orange-300 text-orange-700 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Block Count per m³
          </span>
        </div>
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
              1m³ of Wall <span className="text-orange-500">Equivalence</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              One cubic meter of wall constructed with conventional red clay
              bricks requires
              <strong className="text-red-600"> 590 bricks</strong>. With LEOCON
              AAC Blocks, you need just
              <strong className="text-orange-600">
                {" "}
                83, 55, 36, 108, or 162 blocks{" "}
              </strong>
              depending on wall thickness - saving time, labour, and structural
              load.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                83 x 4-Inch
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                55 x 6-Inch
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                36 x 9-Inch
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                108 x 3-Inch
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold bg-orange-100 border border-orange-200 text-orange-700 rounded-full">
                162 x 2-Inch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
