export default function ProcessOverviewSection() {
  return (
    <section className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit">
            Production Line Tour
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            See the <span className="text-orange-500">Process</span> in{" "}
            <span className="text-orange-500">Action</span>
          </h2>
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="max-w-5xl mx-auto rounded-2xl aspect-video w-full border border-orange-500/20"
        >
          <source
            src="/images/process/production-walkthrough.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
