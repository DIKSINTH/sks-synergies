import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* FIX: prevents horizontal scrolling globally */}
      <div className="fixed inset-0 pointer-events-none overflow-x-hidden"></div>

      <header className="bg-neutral-50 fixed top-0 left-0 w-full z-50 shadow-md overflow-x-hidden">
        {/* Top Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-32 h-9" />
            </div>

            {/* Desktop Nav */}
            <DesktopNav onToggleMobile={() => setMobileOpen((s) => !s)} />

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
      </header>

      {/* FIX: Push page down so header doesn’t overlap */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <div className="bg-neutral-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2134] leading-tight"
            >
              We are
              <br />
              Building a
              <br />
              Sustainable Future
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

      {/* Mobile Navigation */}
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Floating Buttons */}
      <FixedActionButtons />
    </>
  );
}

/* -------- Desktop nav component -------- */
function DesktopNav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const [activePath, setActivePath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname);
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
            aria-current={isActive ? "page" : undefined}
            className={`relative py-1 transition ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.label}
            <span
              aria-hidden
              className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-200 ${
                isActive ? "w-full bg-blue-600" : "w-0"
              }`}
            />
          </a>
        );
      })}

      <a
        href="/contact"
        onClick={(e) => handleClick(e, "/contact")}
        className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition ${
          activePath === "/contact"
            ? "text-white bg-blue-600 border-blue-600"
            : "text-[#1b2134] bg-neutral-100 border-[#1b2134]"
        }`}
      >
        LET'S TALK →
      </a>
    </nav>
  );
}

/* -------- Mobile sliding panel -------- */
function MobilePanel({ open, onClose }) {
  const [activePath, setActivePath] = useState(window.location.pathname);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-full z-40 bg-white shadow-md border-b overflow-x-hidden transform transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-24 h-7" />

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-neutral-100"
          >
            ✕
          </button>
        </div>

        <nav className="mt-4 space-y-4">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActivePath(item.href);
                  onClose();
                }}
                className={`block text-lg font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* -------- Fixed Action Buttons (unchanged) -------- */
function FixedActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg"
        >
          ↑
        </button>
      )}

      <a
        href="https://wa.me/919042594468"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white ${
          clicked ? "bg-blue-500" : "bg-[#25D366]"
        }`}
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 400);
        }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
