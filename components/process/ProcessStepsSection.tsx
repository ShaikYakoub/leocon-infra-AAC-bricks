type Step = {
  n: string;
  title: string;
  desc: string;
  equipment: string;
  output: string;
};

type ProcessStepsSectionProps = {
  steps: Step[];
};

export default function ProcessStepsSection({
  steps,
}: ProcessStepsSectionProps) {
  return (
    <section id="process-steps" className="py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Step-by-Step</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            Complete <span className="text-orange-500">Production</span>{" "}
            <span className="text-orange-500">Cycle</span>
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-white border border-stone-200 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-5">{step.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 border-t border-stone-100">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                    Equipment
                  </p>
                  <p className="text-sm text-stone-700">{step.equipment}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                    Output
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    {step.output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
