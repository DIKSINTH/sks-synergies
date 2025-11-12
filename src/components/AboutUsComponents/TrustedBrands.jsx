import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import your logos (replace these with actual logo paths)
import logo1 from "../../../public/images/sample.jpg";
import logo2 from "../../../public/images/sample.jpg";
import logo3 from "../../../public/images/sample.jpg";
import logo4 from "../../../public/images/sample.jpg";
import logo5 from "../../../public/images/sample.jpg";
import logo6 from "../../../public/images/sample.jpg";

const TrustedBrands = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  // ✅ Each logo as a separate variable
  const allLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="font-sans bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div data-aos="fade-right" className="text-center lg:text-left mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Lorem ipsum dolor, sit amet consectetur adipisicing.{" "}
            <br className="hidden sm:inline" />
            Lorem ipsum dolor sit.
          </h2>
        </div>

        {/* Logos Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center"
        >
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

        {/* Divider */}
        <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
