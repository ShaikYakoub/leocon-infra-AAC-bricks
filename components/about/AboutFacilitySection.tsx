import Image from "next/image";

type AboutFacilitySectionProps = {
  waNumber: string;
};

export default function AboutFacilitySection({
  waNumber,
}: AboutFacilitySectionProps) {
  return (
    <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Our Facility</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Precision Manufacturing in Kadapa
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Located at Plot-22, APIIC Mydukur Industrial Park, our 50 m3/day
            plant combines automated production with stringent quality control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/images/about/aerial-plant-drone.jpg"
            alt="Aerial plant drone shot"
            width={900}
            height={506}
            className="rounded-2xl aspect-video object-cover border border-stone-200"
          />
          <Image
            src="/images/about/interior-cutting-floor.jpg"
            alt="Interior factory cutting floor"
            width={900}
            height={506}
            className="rounded-2xl aspect-video object-cover border border-stone-200"
          />
        </div>

        <div className="bg-white border border-stone-200 rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Plant Specifications
              </h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">-</span>
                  <span>
                    <strong className="text-stone-900">Model:</strong> 50 m3 AAC
                    Production Unit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">-</span>
                  <span>
                    <strong className="text-stone-900">Daily Capacity:</strong>{" "}
                    50 cubic meters
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">-</span>
                  <span>
                    <strong className="text-stone-900">Annual Output:</strong>{" "}
                    15,000 m3 (300 working days)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">-</span>
                  <span>
                    <strong className="text-stone-900">Autoclave Count:</strong>{" "}
                    Multiple units for continuous curing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">-</span>
                  <span>
                    <strong className="text-stone-900">
                      Quality Standards:
                    </strong>{" "}
                    ISO-grade production controls
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Contact Us
              </h3>
              <address className="not-italic text-stone-600 leading-loose space-y-2">
                <p>
                  <strong className="text-stone-900">LEOCON INFRA</strong>
                </p>
                <p>Plot-22, APIIC Mydukur</p>
                <p>Kadapa District, Andhra Pradesh</p>
                <p>India</p>
              </address>
              <div className="mt-6">
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 hover:bg-orange-200 text-orange-700 font-semibold px-5 py-3 rounded-full text-sm transition-all duration-300"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
