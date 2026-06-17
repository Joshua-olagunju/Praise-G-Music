import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
export function Footer() {
  const quickLinks = ["Home", "About us", "Services", "Contact"];
  const instruments = [
    "Guitar",
    "Keyboard",
    "Saxophone",
    "Drums",
    "Trumpet",
    "Violin",
  ];
  const socials = [
    {
      label: "Facebook",
      icon: <FaFacebook size={16} />,
      href: "#",
      color: "hover:border-blue-500 hover:text-blue-600",
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={16} />,
      href: "#",
      color: "hover:border-pink-500 hover:text-pink-600",
    },
    {
      label: "YouTube",
      icon: <FaYoutube size={16} />,
      href: "#",
      color: "hover:border-red-500 hover:text-red-600",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp size={16} />,
      href: "#",
      color: "hover:border-green-500 hover:text-green-600",
    },
  ];
  return (
    <footer
      className="bg-white border-t border-gray-100 pt-16 pb-8 px-6"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-3">
              <div className="w-[34px] h-[34px] bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white text-base">♪</span>
              </div>
              <span className="text-[15px] font-medium text-gray-900">
                Praise-G Music
              </span>
            </a>
            <p className="text-[12px] font-medium text-red-600 italic mb-3">
              "We teach to Dominate"
            </p>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5 max-w-[220px]">
              A professional music training institute equipping students of all
              ages with the skills to master their instrument.
            </p>
            {/* Social icons — swap hrefs with real URLs */}
            <div className="flex gap-2">
              {socials.map(({ label, icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-[34px] h-[34px] border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${color}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mb-4">
              Quick links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replaceAll(" ", "")}`}
                    className="text-[13px] text-gray-500 hover:text-red-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instruments */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mb-4">
              Instruments
            </p>
            <ul className="space-y-2.5">
              {instruments.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[13px] text-gray-500 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mb-4">
              Contact us
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: "📍",
                  text: "Clinic Bus Stop, Iyana Isashi, Lagos, Nigeria",
                },
                { icon: "📞", text: "+234 816 881 8439" },
                { icon: "✉️", text: "praisesax001@gmail.com" },
              ].map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-2 text-[13px] text-gray-500"
                >
                  <span className="text-red-500 mt-0.5 text-xs">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-gray-300">
            &copy; 2025 Praise-G Music Institute. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <div className="flex gap-5">
              {["Privacy policy", "Terms of use"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[12px] text-gray-300 hover:text-red-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-[12px] text-gray-300">
              Designed &amp; developed by{" "}
              <a
                href="https://react-portfolio-eight-olive.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                Joshua Olagunju
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
