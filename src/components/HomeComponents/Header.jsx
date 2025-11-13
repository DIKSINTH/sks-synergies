import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg";

/**
 * Header with:
 * - Desktop + mobile nav
 * - Active link highlighting (based on window.location.pathname and clicks)
 * - Mobile sliding panel
 * - Fixed action buttons (scroll-to-top + WhatsApp with click color)
 *
 * Works with regular anchor navigation. If you're using react-router, replace anchors with <NavLink>.
 */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();
  }, []);

  return (
    <header className="bg-neutral-50 relative">
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
              className="p-2 rounded-md text-[#1b2134] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
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
                  viewBox="0 0 24 24"
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

      {/* Mobile Navigation */}
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Floating Buttons */}
      <FixedActionButtons />
    </header>
  );
}

/* -------- Desktop nav component (keeps code tidy) -------- */
function DesktopNav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  // activePath initialized from location; updates on popstate (back/forward)
  const [activePath, setActivePath] = useState(
    () => window.location.pathname || "/"
  );

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // click handler: set active path (then let browser navigate)
  const handleClick = (e, href) => {
    setActivePath(href);
    // If using SPA routing (client-side), you might want to prevent default and pushState here.
    // We're leaving default navigation so anchors still work in multi-page apps.
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
            className={`transition relative py-1 ${
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {/* optional underline indicator */}
            <span className="inline-block">{item.label}</span>
            {/* small active underline for clarity */}
            <span
              aria-hidden
              className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-200 ${
                isActive ? "w-full bg-blue-600" : "w-0 bg-transparent"
              }`}
            />
          </a>
        );
      })}

      <a
        href="/contact"
        onClick={(e) => handleClick(e, "/contact")}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition duration-300 ${
          activePath === "/contact"
            ? "text-white bg-blue-600 border-blue-600"
            : "text-[#1b2134] bg-neutral-100 border-2 border-[#1b2134] hover:bg-blue-200"
        }`}
        style={activePath === "/contact" ? {} : {}}
      >
        LET'S TALK →
      </a>
    </nav>
  );
}

/* -------- Mobile sliding panel -------- */
function MobilePanel({ open, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  // local state so the mobile menu can show which was pressed before navigation
  const [activePath, setActivePath] = useState(
    () => window.location.pathname || "/"
  );

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleClick = (href) => {
    setActivePath(href);
    // allow default anchor behavior (page navigation). If SPA, replace with router navigation.
  };

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-0 z-40 transform transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!open}
    >
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-8 bg-blue-600 rounded-md flex-shrink-0" />
              <div>
                <div className="text-base font-bold text-[#1b2134]">Sks</div>
                <div className="text-xs text-gray-500">Synergies</div>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-md text-[#1b2134] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
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
                    onClose(); // close panel so user sees navigation or stays tidy on SPA nav
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`block text-gray-700 font-medium py-2 transition ${
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
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition duration-300 ${
                activePath === "/contact"
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-[#1b2134] bg-neutral-100 border-2 border-[#1b2134] hover:bg-blue-200"
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

/* -------- Fixed action buttons (unchanged behavior, small tweak to keep consistency) -------- */
function FixedActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // Reset after 0.4s
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#1649f1", color: "white" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919042594468"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={handleWhatsAppClick}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ${
          clicked ? "bg-blue-500" : "bg-[#25D366]"
        }`}
        style={{ color: "white" }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
