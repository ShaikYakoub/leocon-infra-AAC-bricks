import Image from "next/image";

export default function ProcessAutoclaveSection() {
  return (
    <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-label">The Critical Step</div>
          <h2 className="font-display text-5xl font-black text-stone-900 mb-6 leading-tight">
            Why <span className="gradient-text">Autoclaving</span> Matters
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Autoclaving uses high-pressure steam curing to transform AAC and
            lock in structural performance and durability.
          </p>
        </div>
        <div>
          <Image
            src="/images/process/autoclave-interior.jpg"
            alt="Industrial autoclave interior"
            width={900}
            height={675}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
            priority
          />
        </div>
      </div>
    </section>
  );
}
