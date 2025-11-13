// src/components/SKSFooter.jsx
import React from "react";

// You would typically import icons from a library like react-icons or use SVGs directly
// For simplicity, I'm using placeholder SVGs that represent the social media logos.
// Replace these with actual icons if you have an icon library set up (e.g., Font Awesome, Lucide, etc.)
const FacebookIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.248 0-1.647.778-1.647 1.56V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.471 2 7.915 2.019 7.07 2.059c-.832.04-1.354.148-1.782.316-.428.169-.769.378-1.125.734s-.566.697-.734 1.125c-.168.428-.276.95-.316 1.782C2.019 7.915 2 8.471 2 12s.019 4.085.059 4.93c.04.832.148 1.354.316 1.782.169.428.378.769.734 1.125s.697.566 1.125.734c.428.168.95.276 1.782.316C7.915 21.981 8.471 22 12 22s4.085-.019 4.93-.059c.832-.04 1.354-.148 1.782-.316.428-.169.769-.378 1.125-.734s.566-.697.734-1.125c.168-.428.276-.95.316-1.782C21.981 16.085 22 15.529 22 12s-.019-4.085-.059-4.93c-.04-.832-.148-1.354-.316-1.782-.169-.428-.378-.769-.734-1.125s-.697-.566-1.125-.734c-.428-.168-.95-.276-1.782-.316C16.085 2.019 15.529 2 12 2zm0 1.6C15.932 3.6 16.488 3.619 17.33 3.659c.789.039 1.189.132 1.488.246.3.114.529.232.721.423.19.19.31.41.423.721.114.299.207.699.246 1.488.04 0 .059.556.059 4.49s-.019 4.49-.059 4.49c-.039.789-.132 1.189-.246 1.488-.114.3-.232.529-.423.721-.19.19-.41.31-.721.423-.299.114-.699.207-1.488.246-.04 0-.556.059-4.49.059s-4.49-.019-4.49-.059c-.789-.039-1.189-.132-1.488-.246-.3-.114-.529-.232-.721-.423-.19-.19-.31-.41-.423-.721-.114-.299-.207-.699-.246-1.488-.04 0-.059-.556-.059-4.49s.019-4.49.059-4.49c.039-.789.132-1.189.246-1.488.114-.3.232-.529.423-.721.19-.19.41-.31.721-.423.299-.114.699-.207 1.488-.246.04 0 .556-.059 4.49-.059zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 1.6c1.87 0 3.4 1.53 3.4 3.4s-1.53 3.4-3.4 3.4-3.4-1.53-3.4-3.4 1.53-3.4 3.4-3.4zm6.4-5.6c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.05 20.49H3.68V9.21h3.37v11.28zM5.36 7.64c-1.17 0-2.12-.95-2.12-2.12s.95-2.12 2.12-2.12 2.12.95 2.12 2.12-.95 2.12-2.12 2.12zm15.09 12.85h-3.37v-5.65c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75h-3.37V9.21h3.23v1.48h.04c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.24 4.04 5.16v5.89z"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.565 7.002c-.287-1.096-.867-1.87-1.794-2.26C18.423 4.21 16.51 4 12 4s-6.423.21-7.771.742c-.927.39-1.507 1.164-1.794 2.26C2 8.358 2 12 2 12s0 3.642.435 4.998c.287 1.096.867 1.87 1.794 2.26C5.577 19.79 7.49 20 12 20s6.423-.21 7.771-.742c.927-.39 1.507-1.164 1.794-2.26C22 15.642 22 12 22 12s0-3.642-.435-4.998zM9.995 15.424V8.576L15.606 12l-5.611 3.424z"></path>
  </svg>
);

const SKSFooter = () => {
  return (
    <footer className="bg-gray-100 py-10 md:py-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo, Let's Connect, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-12 border-b border-gray-300">
          {/* Column 1: Logo & Social Media */}
          <div className="flex flex-col space-y-6">
            {/* SKS Synergies Logo - Using text for now. Replace with img tag if you have an SVG/PNG */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-800">
                SKS SYNERGIES
              </span>
              {/* If you have an image logo, replace the above span with: */}
              {/* <img src="/path/to/your/sks-logo.svg" alt="SKS Synergies Logo" className="h-10" /> */}
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                <YouTubeIcon />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Let's Connect (Title) & Placeholder Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-gray-800 pb-1 w-fit">
              Let's connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                About us
              </a>
            </div>
          </div>

          {/* Column 3: Contact Information (Phone/Email) */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-800 pb-1 w-fit hidden lg:block invisible">
              {/* Invisible header to align with "Let's connect" for desktop, but hidden on mobile */}
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+6584963414"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                +91 9655272707
              </a>
              <a
                href="mailto:sales@sks-synergies.com"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              >
                letstalk@skssynergies.com
              </a>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-800 pb-1 w-fit hidden lg:block invisible">
              {/* Invisible header to align with "Let's connect" for desktop, but hidden on mobile */}
            </h3>
            <address className="not-italic text-gray-600">
              4th main road, Thiruvanmiyur, chennai.
              <br />
            </address>
          </div>
        </div>

        {/* Bottom Section: Copyright and Created By */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <p className="mb-2 sm:mb-0">
            Copyright &copy; 2025 SKS Synergies. All rights reserved.
          </p>
          <p>
            Created by{" "}
            <span className="text-gray-700 font-medium">Diksinth S</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SKSFooter;
