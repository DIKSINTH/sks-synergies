import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg";

/**
 * Header Component
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();
  }, []);

  return (
    <header className="bg-neutral-50 relative">
      {/* ⭐ FIXED TOP NAVIGATION ⭐ */}
      <div className="fixed top-0 left-0 w-full bg-neutral-50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-32 h-9" />
            </div>

            {/* Desktop Nav */}
            <DesktopNav />

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-[#1b2134] hover:bg-neutral-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ HERO SECTION (ADDED TOP PADDING FOR FIXED NAV) ⭐ */}
      <div className="bg-neutral-50 pt-[90px]">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 
        gap-8 py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2134] leading-tight"
            >
              Customizable <br /> Solutions.
            </h1>
          </div>

          <div className="lg:col-span-5 flex items-start lg:items-center">
            <p
              data-aos="fade-left"
              className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed max-w-md pt-4 lg:pt-0"
            >
              Offer tiered packages - basic, standard and premium that cater to
              varying budgets and energy needs.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-12 mt-8 lg:mt-12">
            <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Floating Buttons */}
      <FixedActionButtons />
    </header>
  );
}

/* --------------------------------------------------------
   DESKTOP NAVIGATION
-------------------------------------------------------- */
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

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setActivePath(item.href)}
          className={`transition relative py-1 ${
            activePath === item.href
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {item.label}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
              activePath === item.href ? "w-full bg-blue-600" : "w-0"
            }`}
          />
        </a>
      ))}

      <a
        href="/contact"
        onClick={() => setActivePath("/contact")}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition ${
          activePath === "/contact"
            ? "text-white bg-blue-600"
            : "text-[#1b2134] bg-neutral-100 border-2 border-[#1b2134]"
        }`}
      >
        LET'S TALK →
      </a>
    </nav>
  );
}

/* --------------------------------------------------------
   MOBILE PANEL
-------------------------------------------------------- */
function MobilePanel({ open, onClose }) {
  const [activePath, setActivePath] = useState(
    () => window.location.pathname || "/"
  );

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-0 z-40 transform transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-8 bg-blue-600 rounded-md" />
              <div>
                <div className="text-base font-bold text-[#1b2134]">Sks</div>
                <div className="text-xs text-gray-500">Synergies</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-neutral-100"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-4 space-y-3">
            {["/", "/about", "/products", "/services", "/contact"].map(
              (href, i) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => {
                    setActivePath(href);
                    onClose();
                  }}
                  className={`block text-gray-700 font-medium py-2 ${
                    activePath === href
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {
                    ["Home", "About Us", "Products", "Services", "Contact Us"][
                      i
                    ]
                  }
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------
   FIXED ACTION BUTTONS
-------------------------------------------------------- */
function FixedActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () =>
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white
        transition ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        ↑
      </button>

      <a
        href="https://wa.me/919042594468"
        target="_blank"
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-[#25D366] text-white"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
