import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { FaWhatsapp, FaTiktok, FaFacebook } from "react-icons/fa";

const faqs = [
  {
    q: "Do I need any prior experience to join?",
    a: "Not at all. Our programmes are designed for complete beginners all the way to advanced players. You just need the willingness to learn — we handle the rest.",
  },
  {
    q: "What age groups do you accept?",
    a: "We train students of all ages — from young children to adults. There is no age limit. If you want to learn, you are welcome here.",
  },
  {
    q: "Which instruments can I learn?",
    a: "We currently offer training in four instruments: guitar, keyboard, saxophone, Trumpet, Violin, and drums. You can enrol in one instrument per plan.",
  },
  {
    q: "How long are the training programmes?",
    a: "We offer three plan durations — 3 months (Starter), 6 months (Growth), and 9 months (Mastery). Each plan builds progressively on the last.",
  },
  {
    q: "Do I need to bring my own instrument?",
    a: "Instruments are available at the institute during sessions. However, we strongly encourage students to practise at home — owning your own instrument will speed up your progress significantly.",
  },
  {
    q: "How do I enrol?",
    a: "Simply reach out via WhatsApp, Facebook, or the contact section. We'll discuss your goals, recommend the right plan, and get you started.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 px-6 border-b border-gray-100" id="faq">
      <div className="max-w-[680px] mx-auto">
        {/* Heading */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
          Got questions?
        </p>
        <h2 className="text-center text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium text-gray-900 tracking-tight mb-3">
          Frequently asked questions
        </h2>
        <p className="text-center text-[15px] text-gray-500 leading-relaxed max-w-[400px] mx-auto mb-12">
          Everything you need to know before enrolling.
        </p>

        {/* Accordion — each item is a card with gap between */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between gap-4 px-5 py-[1.1rem] text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[14px] font-medium text-gray-900">
                  {item.q}
                </span>
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i
                      ? "bg-red-50 border-red-200"
                      : "border-gray-200"
                  }`}
                >
                  {openIndex === i ? (
                    <ImCancelCircle size={13} className="text-red-600" />
                  ) : (
                    <CiCirclePlus size={13} className="text-gray-400" />
                  )}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-[14px] text-gray-500 leading-relaxed px-5 pb-[1.1rem]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center bg-gray-50 border border-gray-100 rounded-xl py-7 px-5">
          <p className="text-[14px] text-gray-500 mb-4">
            Still have a question? Reach us directly.
          </p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <a
              href="https://wa.me/2348168818439?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20at%20Praise-G%20Music%20Institute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp size={15} /> WhatsApp
            </a>
            <a
              href="https://www.tiktok.com/@praisesax1?_r=1&_t=ZS-97HepLzSJBE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <FaTiktok size={14} /> TikTok
            </a>
            <a
              href="https://www.facebook.com/share/1Cx73MEYgV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <FaFacebook size={15} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
