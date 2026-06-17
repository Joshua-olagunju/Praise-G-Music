import { MdCheckCircle } from "react-icons/md";

const instruments = [
  {
    title: "Guitar",
    description:
      "Acoustic & electric. Chords, fingerpicking, and lead techniques.",
    icon: (
      <img
        src="/Studio1.jpeg"
        alt="Guitar"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-red-50",
  },
  {
    title: "Keyboard",
    description: "Theory, scales, chord voicings & gospel keyboard runs.",
    icon: (
      <img
        src="/Studio6.jpeg"
        alt="Keyboard"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-blue-50",
  },
  {
    title: "Saxophone",
    description: "Breath control, scales, and contemporary gospel phrasing.",
    icon: (
      <img
        src="/Studio4.jpeg"
        alt="Saxophone"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-green-50",
  },

  {
    title: "Violin",
    description:
      " Bow technique, finger positioning, and melodic phrasing for worship and contemporary music settings.",
    icon: (
      <img
        src="/Studio11.jpeg"
        alt="Violin"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-yellow-50",
  },
  {
    title: "Drums",
    description:
      "Rhythm, timing, fills & full kit coordination for worship bands.",
    icon: (
      <img
        src="/Studio9.jpeg"
        alt="Drums"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-yellow-50",
  },
  {
    title: "Trumpet",
    description:
      "Breath control, tone production, and melodic phrasing for powerful lead lines in worship and contemporary music settings..",
    icon: (
      <img
        src="/Studio12.jpeg"
        alt="Trumpet"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-yellow-50",
  },
  {
    title: "Trombone",
    description:
      "Slide technique, breath control, and smooth phrasing for rich harmonies, worship orchestration, and brass ensemble performance.",
    icon: (
      <img
        src="/Studio18.jpeg"
        alt="Trombone"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-yellow-50",
  },
  {
    title: "Recorder",
    description:
      "Basic breath control, finger positioning, and melody reading for foundational music training and ear development..",
    icon: (
      <img
        src="/Studio29.jpeg"
        alt="Recorder"
        className="w-full h-full object-cover"
      />
    ),
    bg: "bg-yellow-50",
  },
];

const plans = [
  {
    duration: "3",
    name: "Starter",
    featured: false,
    features: [
      "Core technique foundations",
      "Weekly 1-on-1 sessions",
      "Practice material included",
    ],
  },
  {
    duration: "6",
    name: "Growth",
    featured: true,
    features: [
      "Everything in Starter",
      "Song & repertoire building",
      "Group ensemble sessions",
      "Mid-point performance",
    ],
  },
  {
    duration: "9",
    name: "Mastery",
    featured: false,
    features: [
      "Everything in Growth",
      "Advanced theory & composition",
      "Live performance coaching",
      "Certificate of completion",
    ],
  },
];

export function Services() {
  return (
    <section className="bg-gray-50 py-20 px-6" id="services">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
          What we offer
        </p>
        <h2 className="text-center text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium text-gray-900 tracking-tight mb-3">
          Instrument Training
        </h2>
        <p className="text-center text-[15px] text-gray-500 leading-relaxed max-w-[430px] mx-auto mb-12">
          Professional coaching for all ages — beginner to advanced — in a warm,
          encouraging environment.
        </p>

        {/* Instrument cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-16">
          {instruments.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors"
            >
              <div
                className={`h-[300px] ${item.bg} flex items-center justify-center`}
              >
                {item.icon}
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {item.title}
                </p>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Training plans */}
        <div className="text-center mb-7">
          <h3 className="text-[1.2rem] font-medium text-gray-900 mb-1">
            Training plans
          </h3>
          <p className="text-[14px] text-gray-500">
            Choose a duration that works for you — suitable for any age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-16 md:grid-cols-span-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl p-6 text-center ${
                plan.featured
                  ? "border-[1.5px] border-red-600"
                  : "border border-gray-100"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-medium px-4 py-0.5 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}
              <p className="text-[2rem] font-medium text-gray-900 tracking-tight">
                {plan.duration}{" "}
                <span className="text-sm font-normal text-gray-400">
                  months
                </span>
              </p>
              <p className="text-[12px] text-gray-400 mt-1 mb-4">{plan.name}</p>
              <ul className="text-left space-y-2 mb-5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[13px] text-gray-500"
                  >
                    <MdCheckCircle
                      size={16}
                      className="text-red-500 mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center text-[13px] font-medium py-2.5 rounded-lg transition-colors ${
                  plan.featured
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border border-gray-200 hover:bg-gray-50 text-gray-800"
                }`}
              >
                Enrol now
              </a>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="text-center mb-7">
          <h3 className="text-[1.2rem] font-medium text-gray-900 mb-1">
            Our studio
          </h3>
          <p className="text-[14px] text-gray-500">
            Explore our space where students learn, practice, and create music.
          </p>
        </div>

        {/* 
          Gallery grid — mosaic layout:
          Left column spans 2 rows (main/tall photo).
          Right side has 4 equal slots.
          To use real images, replace each <div class="gimg..."> with:
          <img src="/your-photo.jpg" alt="..." className="w-full h-full object-cover rounded-xl" />
        */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-2.5"
          style={{ gridTemplateRows: "150px 150px" }}
        >
          {[
            { src: "/Studio2.jpeg", alt: "Studio photo 2" },
            { src: "/Studio3.jpeg", alt: "Studio photo 3" },
            { src: "/Studio4.jpeg", alt: "Studio photo 4" },
            { src: "/Studio5.jpeg", alt: "Studio photo 4" },
            { src: "/Studio6.jpeg", alt: "Studio photo 4" },
            { src: "/Studio22.jpeg", alt: "Studio photo 4" },
            { src: "/Studio23.jpeg", alt: "Studio photo 4" },
            { src: "/Studio24.jpeg", alt: "Studio photo 4" },
            { src: "/Studio9.jpeg", alt: "Studio photo 4" },
            { src: "/Studio10.jpeg", alt: "Studio photo 4" },
            { src: "/Studio11.jpeg", alt: "Studio photo 4" },
            { src: "/Studio12.jpeg", alt: "Studio photo 4" },
            { src: "/Studio13.jpeg", alt: "Studio photo 4" },
            { src: "/Studio14.jpeg", alt: "Studio photo 4" },
            { src: "/Studio15.jpeg", alt: "Studio photo 4" },
            { src: "/Studio16.jpeg", alt: "Studio photo 4" },
            { src: "/Studio17.jpeg", alt: "Studio photo 4" },
            { src: "/Studio18.jpeg", alt: "Studio photo 4" },
            { src: "/Studio7.jpeg", alt: "Studio photo 4" },
            { src: "/Studio8.jpeg", alt: "Studio photo 4" },
            { src: "/Studio19.jpeg", alt: "Studio photo 4" },
            { src: "/Studio20.jpeg", alt: "Studio photo 4" },
            { src: "/Studio21.jpeg", alt: "Studio photo 4" },

            { src: "/Studio25.jpeg", alt: "Studio photo 4" },
            { src: "/Studio26.jpeg", alt: "Studio photo 4" },
            { src: "/Studio27.jpeg", alt: "Studio photo 4" },
            { src: "/Studio28.jpeg", alt: "Studio photo 4" },
          ].map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
