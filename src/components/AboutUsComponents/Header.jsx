import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg";

/**
 * Full Updated Header Component
 * - Desktop + Mobile Navigation
 * - Active highlight on click & on page load
 * - Mobile slide-down menu
 * - Floating WhatsApp + Scroll-To-Top
 * - No mobile white space issues
 * - Only TOP NAVIGATION is FIXED
 */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <header className="bg-neutral-50 relative overflow-x-hidden">
      {/* FIXED TOP NAVIGATION */}
      <div className="fixed top-0 left-0 w-full z-50 bg-neutral-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-32 h-9 object-contain" />
            </div>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 rounded-md text-[#1b2134] hover:bg-neutral-200 transition"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION (pushed down because navbar is fixed) */}
      <div className="bg-neutral-50 overflow-hidden pt-[90px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2134] leading-tight"
            >
              Powering a Brighter
              <br />
              Tomorrow,
              <br />
              Today.
            </h1>
          </div>

          <div className="lg:col-span-5 flex items-start lg:items-center">
            <p
              data-aos="fade-left"
              className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed max-w-md pt-4 lg:pt-0"
            >
              Together, we can create a sustainable future where the power of
              the sun fuels endless possibilities.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-12 mt-10">
            <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Floating Buttons */}
      <FixedActionButtons />
    </header>
  );
}

/* ---------------- Desktop Navigation ---------------- */
function DesktopNav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const [activePath, setActivePath] = useState(
    () => window.location.pathname || "/"
  );

  const handleClick = (href) => setActivePath(href);

  return (
    <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
      {navItems.map((item) => {
        const active = activePath === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => handleClick(item.href)}
            className={`relative py-1 transition ${
              active ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }`}
          >
            {item.label}

            {/* Underline */}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
                active ? "w-full bg-blue-600" : "w-0"
              }`}
            ></span>
          </a>
        );
      })}

      {/* Button */}
      <a
        href="/contact"
        onClick={() => handleClick("/contact")}
        className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition ${
          activePath === "/contact"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-neutral-100 text-[#1b2134] border-[#1b2134] hover:bg-blue-200"
        }`}
      >
        LET'S TALK →
      </a>
    </nav>
  );
}

/* ---------------- Mobile Panel ---------------- */
function MobilePanel({ open, onClose }) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-0 z-40 transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md border-b px-4 py-4">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-[#1b2134]">SKS Synergies</div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-200 rounded-md transition"
          >
            ✕
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-gray-700 text-lg hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={onClose}
            className="inline-block px-4 py-2 rounded-full bg-neutral-100 border-2 border-[#1b2134] text-[#1b2134] hover:bg-blue-200 transition"
          >
            LET'S TALK →
          </a>
        </nav>
      </div>
    </div>
  );
}

/* ---------------- Floating Buttons ---------------- */
function FixedActionButtons() {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const scrollCheck = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", scrollCheck);
    return () => window.removeEventListener("scroll", scrollCheck);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-12 h-12 rounded-full bg-[#1649f1] text-white flex items-center justify-center shadow-lg transition ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919042594468"
        target="_blank"
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 400);
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 ${
          clicked ? "bg-blue-500" : "bg-[#25D366]"
        } text-white`}
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
