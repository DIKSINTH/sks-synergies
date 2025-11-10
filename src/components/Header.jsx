import React, { useState, useEffect } from "react";

// --- NEW COMPONENT FOR FIXED BUTTONS (Kept) ---
const FixedActionButtons = () => {
  // State to track if the 'Scroll to Top' button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Effect to handle scroll events and update visibility state
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled down more than 300px (a common threshold)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    // Fixed container for the buttons, positioned at the bottom right.
    // z-50 ensures they float above other content.
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {/* 1. Scroll to Top Button (Appears only when scrolled down) */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          // Style matching the arrow button in the reference image (dark blue, rounded, simple arrow)
          className="w-12 h-12 bg-[#1649f1] text-white rounded-full shadow-lg flex items-center justify-center transition-opacity duration-300 hover:bg-gray-700"
          aria-label="Scroll to top"
        >
          {/* SVG for the Up Arrow */}
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
      )}

      {/* 2. WhatsApp Button (Always visible) */}
      <a
        // Replace '1234567890' with the actual phone number, including country code (without '+')
        href="https://wa.me/919042594468"
        target="_blank"
        rel="noopener noreferrer"
        // Style matching the WhatsApp button in the reference image (bright green, rounded)
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {/* SVG for the WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.518.068 7.848c0 1.458.349 2.906 1.01 4.137L.492 15.654l3.664-.975c1.077.585 2.36 1.025 3.666 1.025h.001c4.365 0 7.925-3.519 7.925-7.848 0-2.091-.817-4.132-2.392-5.694zM8 14.659c-1.385 0-2.671-.486-3.722-1.328l-.264-.176-2.551.678.694-2.525-.183-.284C1.94 9.06 1.5 7.973 1.5 6.818c0-3.411 2.763-6.18 6.18-6.18s6.18 2.769 6.18 6.18c0 3.411-2.763 6.18-6.18 6.18zM11.606 9.53a.52.52 0 0 0-.275-.152c-.17-.044-1.014-.498-1.169-.553s-.266-.084-.378.106-.436.553-.532.665-.205.106-.375.053-.728-.27-.872-.455a4.846 4.846 0 0 1-.774-.959c-.161-.27-.018-.415.132-.565s.31-.38.465-.565c.155-.185.207-.315.309-.498.101-.184.05-.348-.025-.498s-.375-.959-.517-1.312a.37.37 0 0 0-.17-.291c-.046-.039-.1-.061-.161-.061h-.31a.76.76 0 0 0-.532.222c-.161.159-.611.59-.611 1.439s.623 1.666.71 1.778c.088.112 1.258 1.93 3.033 2.65.234.095.426.152.576.195.18.053.469.043.649-.035.18-.08.498-.553.568-.959.07-.406.07-.75-.02-.959s-.234-.316-.405-.394z" />
        </svg>
      </a>
    </div>
  );
};
// --- END NEW COMPONENT ---

// Sub-component for the responsive Navigation Bar (UNMODIFIED)
const NavigationBar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      {/* Logo Placeholder (Based on image_239641.png) */}
      <div className="flex items-center space-x-2">
        {/* Placeholder for the blue logo. Using a block of color for the shape. */}
        <div className="w-12 h-8 bg-blue-600 rounded-lg"></div>
        <span className="text-xl font-bold text-[#1b2134]">Sks</span>
        <span className="text-xs font-light text-gray-500 hidden sm:inline">
          Synergies
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-10 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600 transition">
          Home
        </a>
        <a href="#about" className="hover:text-blue-600 transition">
          About Us
        </a>
        <a href="#products" className="hover:text-blue-600 transition">
          Products
        </a>
        <a href="#services" className="hover:text-blue-600 transition">
          Services
        </a>
        <a href="#contact" className="hover:text-blue-600 transition">
          Contact Us
        </a>

        {/* "LET'S TALK" Button (Styled exactly like the sample) */}
        <a
          href="#contact"
          className="
            inline-flex items-center px-6 py-2 
            text-base font-medium text-[#1b2134] 
            bg-neutral-100 
            border-2 border-[#1b2134] 
            rounded-full 
            hover:bg-blue-200 
            transition duration-300
          "
        >
          LET'S TALK →
        </a>
      </div>

      {/* Mobile Menu Icon (Hamburger icon) */}
      <div className="lg:hidden">
        {/* Placeholder for a mobile menu button (Hamburger icon) */}
        <button className="text-[#1b2134] p-2 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

// Sub-component for the large Title and Description block (MODIFIED SPACING)
const SustainableFutureBlock = () => {
  return (
    <div
      className="
      max-w-7xl mx-auto 
      grid grid-cols-1 lg:grid-cols-12 
      gap-8 
      // *** MODIFIED: Reduced vertical padding from py-16/py-24 to py-8/py-12 ***
      py-8 sm:py-10 lg:py-12 
      px-4 sm:px-6 lg:px-8
    "
    >
      {/* Title Column (Spans 7 columns on desktop) */}
      <div className="col-span-1 lg:col-span-7">
        <h1
          className="
          text-5xl sm:text-6xl lg:text-7xl 
          font-extrabold leading-none 
          text-[#1b2134]
          max-w-3xl
        "
        >
          We are <br />
          Building a <br />
          Sustainable Future
        </h1>
      </div>

      {/* Description Column (Spans 5 columns on desktop) */}
      <div className="col-span-1 lg:col-span-5 flex items-end">
        <p
          className="
          text-lg sm:text-xl 
          text-gray-700 
          font-light 
          leading-relaxed
          max-w-md // Ensures the text doesn't span too wide
          pt-8 lg:pt-0 // Spacing when stacked on mobile
        "
        >
          We are dedicated to creating a sustainable future by offering
          eco-friendly plumbing and installation solutions. Our focus is on
          reducing environmental impact while delivering reliable, long-lasting
          services.
        </p>
      </div>

      {/* Horizontal Divider Line at the bottom (Matching image_240e24.png) */}
      <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
        <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
      </div>
    </div>
  );
};

// Main Component combining all elements
const Header = () => {
  return (
    <header className="bg-neutral-50 relative">
      <NavigationBar />
      <SustainableFutureBlock />

      {/* 💥 INTEGRATED FIXED BUTTONS 💥 */}
      <FixedActionButtons />
    </header>
  );
};

export default Header;
