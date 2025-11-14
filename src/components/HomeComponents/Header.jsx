import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg";

/**
 * Header with fixed top navigation (Option A)
 */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();
  }, []);

  return (
    <header className="bg-neutral-50 relative">
      {/* ⭐ FIXED TOP NAVIGATION BAR ⭐ */}
      <div className="fixed top-0 left-0 w-full bg-neutral-50 shadow-md z-50">
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
                className="p-2 rounded-md text-[#1b2134] hover:bg-neutral-100 focus:ring-2 focus:ring-blue-400"
              >
                {mobileOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Padding so hero doesn’t hide behind fixed nav */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <div className="bg-neutral-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2134] leading-tight"
            >
              Your Roof, Our Mission:
              <br />
              Clean Energy.
            </h1>
          </div>

          <div className="lg:col-span-5 flex items-start lg:items-center">
            <p
              data-aos="fade-left"
              className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed max-w-md pt-4 lg:pt-0"
            >
              Solar energy is a viable source of power in all parts of India
              throughout the year.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-12 mt-8 lg:mt-12">
            <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
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

  const [activePath, setActivePath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleClick = (e, href) => {
    setActivePath(href);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
      {navItems.map((item) => {
        const isActive = activePath === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`relative py-1 transition ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.label}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
                isActive ? "w-full bg-blue-600" : "w-0"
              }`}
            />
          </a>
        );
      })}

      {/* CTA BUTTON */}
      <a
        href="/contact"
        onClick={(e) => handleClick(e, "/contact")}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition ${
          activePath === "/contact"
            ? "bg-blue-600 text-white"
            : "bg-neutral-100 border-2 border-[#1b2134] text-[#1b2134] hover:bg-blue-200"
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

  const [activePath, setActivePath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleClick = (href) => setActivePath(href);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-0 z-40 transform transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
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
              className="p-2 rounded-md hover:bg-neutral-100 focus:ring-2 focus:ring-blue-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-4 space-y-3">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    handleClick(item.href);
                    onClose();
                  }}
                  className={`block text-gray-700 font-medium py-2 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="/contact"
              onClick={() => {
                handleClick("/contact");
                onClose();
              }}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition ${
                activePath === "/contact"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 border-2 border-[#1b2134] text-[#1b2134] hover:bg-blue-200"
              }`}
            >
              LET'S TALK →
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Floating Buttons ---------------- */
function FixedActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#1649f1", color: "white" }}
      >
        ↑
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919042594468"
        target="_blank"
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform ${
          clicked ? "bg-blue-500" : "bg-[#25D366]"
        }`}
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 400);
        }}
        style={{ color: "white" }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
