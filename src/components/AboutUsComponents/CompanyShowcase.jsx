import React from "react";
import sample from "../../../public/images/sample.jpg";

const CompanyShowcase = () => {
  return (
    // Set explicit white background and black text color globally for this component
    <div className="font-sans bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Trust Statement and Image */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Heading remains black/dark gray */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Lorem ipsum dolor sit. <br />
              {/* Blue accent color retained for the number */}
              <span className="text-blue-600">Lorem ipsum dolor sit.</span>{" "}
              <br />
              Lorem, ipsum.
            </h1>

            {/* Body text updated to a standard Lorem Ipsum block */}
            <p className="mt-6 text-base text-gray-700 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image (Placeholder) */}
          <div className="lg:w-1/2 w-full">
            {/* Retaining the gray/grayscale industrial image style */}
            <div
              className="w-full h-80 sm:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${sample})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%)",
              }}
              aria-label="Industrial setting illustrating large-scale projects"
            >
              {/* This div acts as the container for the image */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 text-center">
            {/* Stat 1: Successful projects */}
            <div className="flex flex-col items-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                100+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Successful projects
              </p>
            </div>

            {/* Stat 2: Years of experience */}
            <div className="flex flex-col items-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                10+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Years of experience
              </p>
            </div>

            {/* Stat 3: Happy customers */}
            <div className="flex flex-col items-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                90+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Happy customers
              </p>
            </div>

            {/* Stat 4: Google reviews */}
            <div className="flex flex-col items-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                4.7+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Google reviews
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line at the bottom (Matching image_240e24.png) */}
        <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;
