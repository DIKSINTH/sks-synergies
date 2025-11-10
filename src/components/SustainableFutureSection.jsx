import React from "react";

const SustainableFutureSection = () => {
  return (
    // Main container: Light gray background (bg-neutral-50 is a close match to the subtle tone)
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Layout Container */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-12 lg:space-x-16">
          {/* Left Column: Heading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1
              className="
                // Massive font size: using a specific large value for better control
                text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] 
                // CRUCIAL CHANGE: Use leading-tight or leading-snug to reduce the gap
                font-extrabold 
                leading-tight // Using leading-tight for minimal vertical space
                // Very dark text color (using a darker shade for better match)
                text-gray-900 
                tracking-tight
              "
            >
              {/* REMOVED className="block" for inline display */}
              <span className="text-[#1b2134]">Sustainable Future</span>
            </h1>
          </div>

          {/* Right Column: Paragraph */}
          {/* md:pt-4 keeps the slight offset alignment from the previous version */}
          <div className="md:w-1/2 md:pt-4">
            <p
              className="
                text-lg sm:text-xl 
                text-gray-700 
                font-light 
                leading-relaxed
              "
            >
              We are dedicated to creating a sustainable future by offering
              eco-friendly plumbing and installation solutions. Our focus is on
              reducing environmental impact while delivering reliable,
              long-lasting services.
            </p>
          </div>
        </div>

        {/* Horizontal Line at the bottom */}
        {/* Margin and border classes for the line's exact position and thickness */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8">
          <hr className="border-t border-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default SustainableFutureSection;
