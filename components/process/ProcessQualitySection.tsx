export default function ProcessQualitySection() {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Quality Assurance</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            <span className="text-orange-500">ISO-Grade</span> Production{" "}
            <span className="text-orange-500">Controls</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              Batching Precision
            </h3>
            <p className="text-sm text-stone-600">
              Electronic scales measure every ingredient to high accuracy.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              Wire-Cutting Accuracy
            </h3>
            <p className="text-sm text-stone-600">
              Factory-controlled cutting tolerances ensure dimension
              consistency.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              Autoclave Monitoring
            </h3>
            <p className="text-sm text-stone-600">
              Continuous pressure and temperature tracking throughout curing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
