type Milestone = {
  year: string;
  event: string;
};

type AboutTimelineSectionProps = {
  milestones: Milestone[];
};

export default function AboutTimelineSection({
  milestones,
}: AboutTimelineSectionProps) {
  return (
    <section className="py-28 px-4 md:px-12 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Our Journey</div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-stone-900 mb-5">
            A Century of <span className="text-orange-500">Innovation</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            AAC technology has evolved from a Swedish invention in 1920 to a
            global standard. LEOCON INFRA brings this legacy to You.
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <div key={m.year + i} className="flex gap-8 items-start">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center shrink-0">
                  <span className="text-orange-600 font-black text-sm">
                    {m.year}
                  </span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-orange-300 to-transparent" />
                )}
              </div>
              <div className="pt-4 pb-8">
                <p className="text-lg text-stone-700 leading-relaxed">
                  {m.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
