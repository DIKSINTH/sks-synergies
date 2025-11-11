// src/components/IndustryExpertService.jsx
import React from "react";
import sample from "../../../public/images/sample.jpg";

const IndustryExpertService = () => {
  const imageUrl = sample;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] rounded-lg shadow-xl overflow-hidden">
          {/* LEFT SIDE */}
          <div className="bg-[#0c85ff] flex items-center justify-center p-10 sm:p-12 lg:p-16 text-white min-h-[300px]">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod felis at arcu tincidunt, id placerat lorem consequat.
              </h2>

              <button
                className="
                  border border-white 
                  text-white 
                  py-3 px-6 
                  text-base font-semibold 
                  rounded 
                  transition duration-300 ease-in-out
                  hover:bg-white hover:text-[#123456] 
                  flex items-center 
                  justify-center 
                  space-x-2
                "
              >
                <span>LET'S GET YOU STARTED</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative overflow-hidden min-h-[300px] md:min-h-full">
            <img
              src={imageUrl}
              alt="Industrial setting"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertService;
