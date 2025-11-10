import React from "react";
import sample from "../../public/images/sample.jpg";

const PlumbingExcellenceSection = () => {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER TAG */}
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2">
          Lorem Ipsum
        </p>

        {/* MAIN HEADING */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl 
          font-extrabold leading-tight 
          text-[#1b2134] 
          mb-12"
        >
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          {/* TEXT AREA */}
          <div className="md:col-span-2 lg:col-span-7 flex flex-col justify-between">
            {/* STATS */}
            <div className="flex space-x-12 mb-8">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-blue-700 block">
                  100+
                </span>
                <span className="text-base text-gray-800 font-light">
                  Lorem ipsum dolor
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-bold text-blue-700 block">
                  10+
                </span>
                <span className="text-base text-gray-800 font-light">
                  Consectetur adipiscing
                </span>
              </div>
            </div>

            {/* PARAGRAPH */}
            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec ex magna. Sed non nisl in urna sagittis hendrerit. Integer a
              urna non elit volutpat tristique. Donec laoreet libero sed velit
              malesuada, ac facilisis tortor bibendum.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-start">
              <a
                href="#"
                className="flex items-center justify-center 
                           px-8 py-3 
                           text-base font-medium text-blue-700 
                           bg-white 
                           border-2 border-blue-700 
                           rounded-full 
                           hover:bg-blue-700 hover:text-white 
                           transition duration-300 whitespace-nowrap"
              >
                Lorem Ipsum →
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-700 hover:text-blue-700 transition py-3"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-1 lg:col-span-5 mt-10 md:mt-0">
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-full min-h-[300px]">
              <img
                src={sample}
                alt="Placeholder visual"
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
