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
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Sizes For All Your Application Needs
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Choose the right AAC block size for your project - from interior
            partitions to heavy-duty boundary walls.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, i) => (
            <div
              key={product.size}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={600}
                  height={450}
                  className="rounded-2xl aspect-[4/3] object-cover border border-stone-200"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
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
                      <span className="text-orange-500 mt-1">v</span>
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
