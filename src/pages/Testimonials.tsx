const testimonials = [
  {
    initials: "SO",
    name: "Soji Olagunju",
    detail: "Guitar · 3-month plan",
    quote:
      "I had zero experience with guitar before enrolling. After 3 months I was already playing full songs. The teaching style here is very patient and structured.",
  },
  {
    initials: "NK",
    name: "Ngozi Kalu",
    detail: "Parent · Keyboard · 6-month plan",
    quote:
      "My daughter has been taking keyboard lessons here for 6 months. The progress has been incredible. The instructor is dedicated and genuinely cares about each student.",
  },
  {
    initials: "EM",
    name: "Emeka Madu",
    detail: "Drums · 9-month plan",
    quote:
      "I completed the 9-month mastery plan for drums and it completely changed my playing. The theory they teach alongside the practical is what sets Praise-G apart.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 border-b border-gray-100" id="testimonials">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
          Student reviews
        </p>
        <h2 className="text-center text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium text-gray-900 tracking-tight mb-3">
          What our students say
        </h2>
        <p className="text-center text-[15px] text-gray-500 leading-relaxed max-w-[400px] mx-auto mb-12">
          Real feedback from students and parents who have trained with us.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 border-t border-gray-100 pt-4">
                <div className="w-[38px] h-[38px] rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[13px] font-medium text-red-600 shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-gray-900">{t.name}</p>
                  <p className="text-[12px] text-gray-400 mt-0.5">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}