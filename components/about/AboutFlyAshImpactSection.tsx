import Image from "next/image";

export default function AboutFlyAshImpactSection() {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-label">Environmental Impact</div>
          <h2 className="font-display text-5xl font-black text-stone-900 mb-6 leading-tight">
            Turning <span className="text-orange-500">Waste</span> into{" "}
            <span className="text-orange-500">Strength</span>
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              <strong className="text-stone-900">
                60% of India's electricity
              </strong>
              comes from coal-based thermal power stations, generating
              approximately{" "}
              <strong className="text-stone-900">
                60 million tons of fly ash annually
              </strong>
              . Today, only 5% of this ash is productively utilized - the rest
              remains a hazardous environmental burden.
            </p>
            <p>
              <strong className="text-orange-600">
                LEOCON INFRA changes that equation.
              </strong>
              Every cubic meter of our AAC blocks incorporates
              <strong className="text-stone-900">
                520 kg of pulverized fly ash
              </strong>
              - 70% of the total composition. This is not just recycling; it is
              upcycling industrial waste into a superior building material.
            </p>
            <p>
              By choosing LEOCON AAC blocks, you are not just building
              structures - you are reducing landfill waste, lowering CO2
              emissions from brick kilns, and supporting a circular economy.
              Construction meets conservation.
            </p>
          </div>

          <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <p className="text-sm text-orange-900 font-semibold">
              With 15,000 m3 annual capacity,{" "}
              <span className="text-orange-500">LEOCON INFRA</span> consumes
              approximately{" "}
              <strong className="text-orange-500">
                7,800 tons of fly ash per year
              </strong>{" "}
              - waste that would otherwise pollute soil and water.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/images/about/flyash-transformation.jpg"
            alt="Fly ash transformation visual"
            width={900}
            height={675}
            className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
          />
        </div>
      </div>
    </section>
  );
}
