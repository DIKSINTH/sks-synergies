import React from "react";

// Sample image URL for the right column (monochromatic industrial style)
const sampleImageUrl =
  "http://googleusercontent.com/image_collection/image_retrieval/16373965021365995076";

const PlumbingExcellenceSection = () => {
  return (
    // Main container with light gray background and responsive padding
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header and Heading */}
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2">
          ABOUT US
        </p>
        <h2
          className="
          text-4xl sm:text-5xl lg:text-6xl 
          font-extrabold leading-tight 
          text-[#1b2134] 
          mb-12
        "
        >
          Discover the Art of Plumbing Excellence <br />
          with Our Expert Solutions
        </h2>

        {/* 2. Main Content Grid (Grid on md+, Stacked on small screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          {/* A. Text Content Wrapper (Takes 7/12 columns on large screens) */}
          <div className="md:col-span-2 lg:col-span-7 flex flex-col justify-between">
            {/* Statistics Row */}
            <div className="flex space-x-12 mb-8">
              {/* 100+ Projects */}
              <div>
                <span
                  className="
                  text-3xl sm:text-4xl 
                  font-bold text-teal-700 
                  block
                "
                >
                  100+
                </span>
                <span className="text-base text-gray-800 font-light">
                  Successful projects
                </span>
              </div>

              {/* 10+ Years */}
              <div>
                <span
                  className="
                  text-3xl sm:text-4xl 
                  font-bold text-teal-700 
                  block
                "
                >
                  10+
                </span>
                <span className="text-base text-gray-800 font-light">
                  Years of experience
                </span>
              </div>
            </div>

            {/* Paragraph Text */}
            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-10">
              We are a team of skilled professionals dedicated to providing
              top-notch plumbing and installation services, no matter how big
              the project. We meticulously plan and execute every job to ensure
              lasting quality and satisfaction, making sure our work stands the
              test of time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-start">
              {/* 'LET'S WORK TOGETHER' Button (Primary Style) */}
              <a
                href="#contact"
                className="flex items-center justify-center 
                           px-8 py-3 
                           text-base font-medium text-teal-700 
                           bg-white 
                           border-2 border-teal-700 
                           rounded-full 
                           hover:bg-teal-700 hover:text-white 
                           transition duration-300 whitespace-nowrap"
              >
                LET'S WORK TOGETHER →
              </a>

              {/* 'KNOW MORE' Link (Secondary Style) */}
              <a
                href="#learn-more"
                className="text-base font-medium text-gray-700 hover:text-teal-700 transition py-3"
              >
                KNOW MORE
              </a>
            </div>
          </div>

          {/* B. Image Column (Takes 5/12 columns on large screens) */}
          <div className="md:col-span-1 lg:col-span-5 mt-10 md:mt-0">
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-full min-h-[300px]">
              <img
                src={sampleImageUrl}
                alt="Industrial plumbing pipes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingExcellenceSection;
