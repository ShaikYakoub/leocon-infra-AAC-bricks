import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Gallery</div>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
            LEOCON in the Field
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <Image
              src="/images/homepage/gallery-construction-site.jpg"
              alt="Construction site with AAC block walls"
              width={800}
              height={800}
              className="rounded-2xl aspect-square object-cover border border-stone-200"
            />
          </div>
          <Image
            src="/images/homepage/gallery-warehouse-pallet.jpg"
            alt="AAC blocks on pallet in warehouse"
            width={400}
            height={400}
            className="rounded-2xl aspect-square object-cover border border-stone-200"
          />
          <Image
            src="/images/homepage/gallery-aerial-plant.jpg"
            alt="Aerial plant overview"
            width={400}
            height={400}
            className="rounded-2xl aspect-square object-cover border border-stone-200"
          />
          <Image
            src="/images/homepage/gallery-engineer-measuring.jpg"
            alt="Engineer measuring AAC block"
            width={400}
            height={400}
            className="rounded-2xl aspect-square object-cover border border-stone-200"
          />
          <Image
            src="/images/homepage/gallery-block-closeup.jpg"
            alt="AAC block close-up texture"
            width={400}
            height={400}
            className="rounded-2xl aspect-square object-cover border border-stone-200"
          />
        </div>
      </div>
    </section>
  );
}
