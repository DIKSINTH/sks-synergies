import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Responsive Header + Fixed Action Buttons (single-file React component)
// Tailwind CSS required in the project.

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  return (
    <header className="bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-8 bg-blue-600 rounded-md flex-shrink-0" />
            <div>
              <div className="text-lg font-bold text-[#1b2134] leading-none">
                Sks
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">
                Synergies
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="/about" className="hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/products" className="hover:text-blue-600 transition">
              Products
            </a>
            <a href="/services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#1b2134] bg-neutral-100 border-2 border-[#1b2134] rounded-full hover:bg-blue-200 transition duration-300"
            >
              LET'S TALK →
            </a>
          </nav>

          {/* Mobile menu button */}
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

      {/* Hero / Title area */}
      <div className="bg-neutral-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          {/* Title */}
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

          {/* Description */}
          <div className="lg:col-span-5 flex items-start lg:items-center">
            <p
              data-aos="fade-left"
              className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-md pt-4 lg:pt-0"
            >
              We are dedicated to creating a sustainable future by offering
              eco-friendly plumbing and installation solutions. Our focus is on
              reducing environmental impact while delivering reliable,
              long-lasting services.
            </p>
          </div>

          {/* Divider */}
          <div className="col-span-1 lg:col-span-12 mt-8 lg:mt-12">
            <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
          </div>
        </div>
      </div>

      {/* Mobile navigation panel (sliding) */}
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Fixed action buttons */}
      <FixedActionButtons />
    </header>
  );
}

function MobilePanel({ open, onClose }) {
  // close on escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

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
            <a
              href="/"
              onClick={onClose}
              className="block text-gray-700 font-medium py-2"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={onClose}
              className="block text-gray-700 font-medium py-2"
            >
              About Us
            </a>
            <a
              href="/products"
              onClick={onClose}
              className="block text-gray-700 font-medium py-2"
            >
              Products
            </a>
            <a
              href="/services"
              onClick={onClose}
              className="block text-gray-700 font-medium py-2"
            >
              Services
            </a>
            <a
              href="/contact"
              onClick={onClose}
              className="block text-gray-700 font-medium py-2"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#1b2134] bg-neutral-100 border-2 border-[#1b2134] rounded-full hover:bg-blue-200 transition duration-300"
            >
              LET'S TALK →
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

function FixedActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {/* Scroll to top (visible on scroll) */}
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

      {/* WhatsApp (always visible) */}
      <a
        href="https://wa.me/919042594468"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        style={{ backgroundColor: "#25D366", color: "white" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.2.297-.772.966-.945 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51-.173-.01-.372-.01-.571-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 1.418.612 2.524.978 3.393 1.25 1.426.405 2.72.348 3.748.211.114-.037 1.758-.719 2.006-1.415.248-.695.248-1.29.174-1.415-.074-.124-.273-.198-.57-.347z" />
          <path d="M12.004 2.003C6.478 2.003 1.998 6.484 1.998 12.01c0 2.116.655 4.068 1.79 5.708L2 22l4.426-1.163c1.583.86 3.4 1.322 5.578 1.322 5.526 0 10.006-4.48 10.006-10.006 0-5.526-4.48-10.006-10.006-10.006z" />
        </svg>
      </a>
    </div>
  );
}
