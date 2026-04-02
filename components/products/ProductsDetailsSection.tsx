import Image from "next/image";

type Product = {
  size: string;
  dimensions: string;
  blocksPerM3: number;
  marketRate: string;
  avgValue: string;
  weight: string;
  use: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

type ProductsDetailsSectionProps = {
  products: Product[];
};

export default function ProductsDetailsSection({
  products,
}: ProductsDetailsSectionProps) {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mx-auto w-fit bg-orange-100 border border-orange-300 text-orange-700 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full block mb-4">
            Block Size Options
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            <span className="text-orange-500">Sizes</span> For All Your
            Application <span className="text-orange-500">Needs</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Choose the right AAC block size for your project - from interior
            partitions to heavy-duty boundary walls.
          </p>
        </div>

        <div className="grid gap-12">
          {products.map((product, i) => (
            <div
              key={product.size}
              className={`bg-white rounded-3xl shadow-xl border border-stone-200 flex flex-col lg:flex-row overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 flex items-center justify-center bg-stone-50">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={600}
                  height={450}
                  className="aspect-[4/3] object-cover border border-stone-200 w-full h-full"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest py-1.5 rounded-full mb-4 w-fit px-3">
                  {product.size} Block
                </div>
                <h3 className="text-4xl font-black text-stone-900 mb-3">
                  {product.dimensions}
                </h3>
                <p className="text-xl text-orange-600 font-bold mb-4">
                  {product.use}
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Blocks / m3
                    </p>
                    <p className="text-2xl font-black text-orange-600">
                      {product.blocksPerM3}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Weight
                    </p>
                    <p className="text-2xl font-black text-stone-900">
                      {product.weight}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Market Rate
                    </p>
                    <p className="text-lg font-bold text-stone-700">
                      {product.marketRate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Avg Value / m3
                    </p>
                    <p className="text-lg font-bold text-stone-700">
                      {product.avgValue}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-stone-600"
                    >
                      <span className="mt-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="10" cy="10" r="10" fill="#fb923c" />
                          <path
                            d="M6 10.5L9 13.5L14 8.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
