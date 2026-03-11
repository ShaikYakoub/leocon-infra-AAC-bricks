import Image from "next/image";

export default function AboutMissionVisionSection() {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Image
            src="/images/about/plant-exterior-wide.jpg"
            alt="LEOCON plant exterior wide-angle"
            width={600}
            height={600}
            className="rounded-2xl aspect-square object-cover border border-stone-200"
            priority
          />
        </div>
        <div className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Mission
            </div>
            <h2 className="text-4xl font-black text-stone-900 mb-4">
              Smarter, Stronger, Sustainable
            </h2>
            <p className="text-stone-600 leading-relaxed">
              To revolutionize India's construction sector by providing
              cutting-edge AAC block solutions that reduce structural costs,
              accelerate project timelines, and safeguard the environment. We
              believe every building can be lighter, safer, and more efficient.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Vision
            </div>
            <h2 className="text-4xl font-black text-stone-900 mb-4">
              Leading the Green Building Revolution
            </h2>
            <p className="text-stone-600 leading-relaxed">
              To become Andhra Pradesh's most trusted AAC block manufacturer and
              a benchmark for sustainable construction materials across South
              India. By converting coal fly ash - a hazardous power plant
              by-product - into high-performance building blocks, we're turning
              environmental challenges into construction opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
