import AACCalculator from "@/components/AACCalculator";

export default function CalculatorSection() {
  return (
    <section
      id="calculator"
      className="py-28 px-4 md:px-12 bg-white border-y border-stone-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Instant Estimate</div>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-5 text-stone-900">
            <span className="text-orange-500">Savings</span> Calculator
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Enter your construction volume and instantly see your material
            counts and savings.
          </p>
        </div>
        <AACCalculator />
      </div>
    </section>
  );
}
