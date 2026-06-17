import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-5">
        {/* Desktop row */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <FaMusic size={16} className="text-white" />
            </div>
            <span className="text-[17px] font-medium tracking-tight text-gray-900">
              Praise-G Music
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li>
              <a href="#hero" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
              >
                <IoIosCall size={15} />
                Contact us
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="md:hidden p-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col">
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About us" },
              { href: "#services", label: "Services" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[15px] text-gray-500 hover:text-red-600 border-b border-gray-100 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[15px] font-medium py-3 rounded-lg transition-colors"
            >
              <IoIosCall size={16} />
              Contact us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}