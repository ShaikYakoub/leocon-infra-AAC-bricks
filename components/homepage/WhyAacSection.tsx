import Image from "next/image";
import type { ReactNode } from "react";

function BenefitCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative bg-white border border-stone-200 rounded-3xl p-8 flex flex-col gap-5 overflow-hidden shadow-sm">
      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 text-2xl shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
      {children}
    </div>
  );
}

export default function WhyAacSection() {
  return (
    <section id="why-aac" className="py-28 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="section-label mx-auto w-fit">The AAC Advantage</div>
        <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
          Why Choose AAC Blocks?
        </h2>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          Better material choices compound into massive savings across the
          entire structure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BenefitCard icon="⚖️" title="Lightweight & Strong">
          <p className="text-stone-500 leading-relaxed">
            <strong className="text-stone-900">2.5× lighter</strong> than
            conventional bricks -{" "}
            <strong className="text-stone-900">66% lighter</strong>
            than red clay bricks - while matching or exceeding structural
            strength requirements.
          </p>
          <Image
            src="/images/homepage/aac-honeycomb.jpg"
            alt="AAC block honeycomb cross-section"
            width={400}
            height={300}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
          />
        </BenefitCard>
        <BenefitCard icon="🤲" title="Effortless Handling">
          <p className="text-stone-500 leading-relaxed">
            AAC blocks are so lightweight, they can be easily lifted and placed
            by a single worker-reducing fatigue and speeding up construction.
          </p>
          <Image
            src="/images/optional/hands-holding-block.jpg"
            alt="Hands holding AAC block demonstrating lightweight property"
            width={400}
            height={300}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
          />
        </BenefitCard>
        <BenefitCard icon="🏗️" title="Precision Dimensions">
          <p className="text-stone-500 leading-relaxed">
            Factory-cut to{" "}
            <strong className="text-stone-900">exact tolerances</strong>.
            Uniform size means faster laying, less mortar, and perfectly plumb
            walls.
          </p>
          <Image
            src="/images/homepage/aac-construction.jpg"
            alt="Construction workers laying AAC blocks"
            width={400}
            height={300}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
          />
        </BenefitCard>
        <BenefitCard icon="🛡️" title="Built-in Safety">
          <p className="text-stone-500 leading-relaxed">
            Highest{" "}
            <strong className="text-stone-900">fire-resistance rating</strong>
            per inch. Excellent seismic performance. Inorganic composition -
            <strong className="text-stone-900">100% termite-proof</strong>.
          </p>
          <Image
            src="/images/homepage/aac-fire-resistance.jpg"
            alt="AAC block fire resistance test"
            width={400}
            height={300}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
          />
        </BenefitCard>
      </div>
    </section>
  );
}
