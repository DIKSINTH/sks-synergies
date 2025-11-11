import React from "react";

const TrustedBrands = () => {
  // Array of dummy logo image URLs (replace with actual logo paths)
  const logos = [
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+1", // Example: 30 Performance Oil
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+2", // Example: Energy Pipeline
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+3", // Example: Pacific Energy
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+4", // Example: SAZ
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+5", // Example: SRC
    "https://via.placeholder.com/150x50/cccccc/000000?text=LOGO+6", // Example: WS
  ];

  // Duplicate the logos to fill the grid as shown in the image
  const allLogos = [...logos, ...logos, ...logos, ...logos.slice(0, 3)]; // Adjust slice to match the exact count if needed

  return (
    <div className="font-sans bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center lg:text-left mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Lorem ipsum dolor, sit amet consectetur adipisicing.{" "}
            <br className="hidden sm:inline" />
            Lorem ipsum dolor sit.
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-20 p-2"
            >
              <img
                src={logo}
                alt={`Trusted brand logo ${index + 1}`}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Horizontal Divider Line at the bottom (Matching image_240e24.png) */}
        <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
