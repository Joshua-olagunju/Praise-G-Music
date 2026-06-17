const timeline = [
  { label: "Founded", text: "Praise-G opens with guitar and keyboard classes for all ages." },
  { label: "Expansion", text: "Saxophone and drums added. First cohort of 50 students graduates." },
  { label: "Today", text: "500+ students trained with structured plans and certified completion." },
];

export function About() {
  return (
    <section className="bg-white py-20 px-6 border-b border-gray-100" id="about">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
          Who we are
        </p>
        <h2 className="text-center text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium text-gray-900 tracking-tight mb-3">
          About Praise-G Music Institute
        </h2>
        <p className="text-center text-[15px] text-gray-500 leading-relaxed max-w-[420px] mx-auto mb-14">
          A professional instrument training school in Lagos, dedicated to turning
          passion into skill for students of all ages.
        </p>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Left — director photo + name card */}
          <div className="flex flex-col gap-4">
            {/* Replace this div with <img src="/director.jpg" alt="..." className="w-full h-[320px] object-cover rounded-xl" /> */}
            <div className="bg-gray-100 border border-gray-200 rounded-xl h-[550px] flex flex-col items-center justify-center gap-2 text-gray-400 text-sm">
             <img src="/Founder.jpeg" alt="" className="w-full h-[550px] object-cover rounded-xl" />
            </div>
            {/* Name card */}
            <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-sm font-medium text-red-600 shrink-0">
                TB
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Tobi Babarinde</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Founder &amp; Director, Praise-G Music Institute
                </p>
              </div>
            </div>
          </div>

          {/* Right — our story */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-3">
              Our story
            </p>
            <h3 className="text-[1.25rem] font-medium text-gray-900 leading-snug mb-4">
              Built from a love of music and a gap in training
            </h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
              Praise-G Music Institute was founded with one conviction — that quality,
              structured music education should be accessible to anyone who wants it,
              regardless of age or background.
            </p>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
              What started as small group lessons has grown into a full training
              institute offering guitar, keyboard, saxophone, and drums across
              structured 3, 6, and 9-month programmes.
            </p>

            {/* Timeline */}
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={item.label} className="flex gap-3.5 pb-5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 mt-1 shrink-0" />
                    {i < timeline.length - 1 && (
                      <div className="flex-1 w-px bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-red-600 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}