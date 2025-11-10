import React, { useState } from "react";

// --- Logo Component (Updated to 'sks synergies') ---
const Logo = () => (
  <div className="flex items-center text-2xl font-semibold">
    {/* 'sks' block: White background, Blue text, Blue border */}
    <div
      className="
      px-2 py-1 
      bg-white 
      text-blue-700 
      border border-blue-700
      leading-none
    "
    >
      sks
    </div>
    {/* 'synergies' block: Blue background, White text */}
    <div
      className="
      px-2 py-1 
      bg-blue-700 
      text-white 
      leading-none
    "
    >
      synergies
    </div>
  </div>
);

// --- Navigation Items (No Change) ---
const navItems = [
  { name: "Home", href: "home" },
  { name: "About Us", href: "about" },
  { name: "Products", href: "products" },
  { name: "Services", href: "services" },
  { name: "Contact Us", href: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. Fixed Header Container
    // Fixed position, high z-index, and light-gray background.
    <header className="fixed top-0 left-0 right-0 bg-gray-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area (Updated) */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* 2. Desktop Navigation (Visible from 'md' breakpoint and up) */}
          <nav className="hidden md:flex md:items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // Styling to match the subtle navigation links
                className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 3. 'LET'S TALK' Button (No Change) */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center justify-center 
                         px-6 py-3 
                         text-lg font-medium text-blue-700 
                         bg-white bg-opacity-80 
                         border-2 border-blue-700 
                         rounded-full 
                         hover:bg-blue-700 hover:text-white 
                         transition duration-300 ease-in-out
                         whitespace-nowrap"
            >
              LET'S TALK
              <span className="ml-2 font-bold">→</span>
            </a>
          </div>

          {/* 4. Mobile Menu Button (No Change) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Panel (No Change) */}
      {isOpen && (
        <div
          className="md:hidden border-t border-gray-300 bg-gray-100"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
