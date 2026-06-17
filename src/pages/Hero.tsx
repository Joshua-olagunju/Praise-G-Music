import { IoIosCall, IoIosPlay } from "react-icons/io";
import { MdSchool } from "react-icons/md";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/HeroImage.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero"
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-2xl mx-auto py-24">
        {/* Badge — changed from "Praise & Worship" */}
        <div className="inline-flex items-center gap-1.5 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <MdSchool size={13} />
          Praise-G Music Training Institute
        </div>

        {/* Headline — changed from "Where Music Meets the Spirit" */}
        <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] font-medium text-white leading-[1.1] tracking-tight mb-5">
          Where Talent Meets <span className="text-red-400">True Mastery</span>
        </h1>

        {/* Subtext — changed from worship/community copy */}
        <p className="text-base text-white/60 leading-relaxed mb-10 max-w-md mx-auto">
          Praise-G Music Institute offers hands-on instrument training for all
          ages — from your very first note to performance-ready skill.
        </p>

        {/* CTAs — kept as-is */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <IoIosPlay size={16} />
            Our services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <IoIosCall size={16} />
            Get in touch
          </a>
        </div>

        {/* Stats — changed from songs/events/listeners */}
        <div className="mt-14 flex items-center justify-center gap-10 flex-wrap">
          {[
            { num: "500+", label: "Students trained" },
            { num: "200+", label: "Classes completed" },
            { num: "4+", label: "Instruments taught" },
          ].map(({ num, label }, i, arr) => (
            <div key={label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="text-[22px] font-medium text-white">{num}</p>
                <p className="text-xs text-white/45 mt-0.5 tracking-wide">
                  {label}
                </p>
              </div>
              {i < arr.length - 1 && <div className="w-px h-9 bg-white/15" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
