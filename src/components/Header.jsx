import React from "react";

// Sub-component for the responsive Navigation Bar
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
            hover:bg-neutral-200 
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

// Sub-component for the large Title and Description block
const SustainableFutureBlock = () => {
  return (
    <div
      className="
      max-w-7xl mx-auto 
      grid grid-cols-1 lg:grid-cols-12 
      gap-8 
      py-16 sm:py-20 lg:py-24 
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

// Main Component combining both elements
const Header = () => {
  return (
    <header className="bg-neutral-50">
      <NavigationBar />
      <SustainableFutureBlock />
    </header>
  );
};

export default Header;
