import React from "react";
import sample from "../../../public/images/sample.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// --- Placeholder Industry Data (With Lorem Ipsum Names) ---
const industrySegments = [
  {
    name: "LOREM IPSUM",
    imageUrl: sample,
  },
  {
    name: "DOLOR SIT AMET",
    imageUrl: sample,
  },
  {
    name: "CONSECTETUR",
    imageUrl: sample,
  },
  {
    name: "ADIPISICING ELIT",
    imageUrl: sample,
  },
  {
    name: "SED DO EIUSMOD",
    imageUrl: sample,
  },
  {
    name: "TEMPOR INCIDIDUNT",
    imageUrl: sample,
  },
  {
    name: "UT LABORE",
    imageUrl: sample,
  },
  {
    name: "ET DOLORE",
    imageUrl: sample,
  },
  {
    name: "MAGNA ALIQUA",
    imageUrl: sample,
  },
];

const IndustrySegments = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <p
          className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2"
          data-aos="fade-right"
        >
          LOREM IPSUM DOLOR
        </p>

        <h2
          data-aos="fade-right"
          className="
          text-3xl sm:text-4xl lg:text-5xl 
          font-extrabold leading-tight 
          text-[#1b2134] 
          mb-4
        "
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h2>

        <p
          data-aos="fade-left"
          className="
          text-base sm:text-lg 
          text-gray-700 
          font-light 
          leading-relaxed
          max-w-4xl 
          mb-12 sm:mb-16 lg:mb-20
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          nisl nec lectus blandit, ac cursus nibh hendrerit. Vivamus imperdiet
          lorem vel interdum laoreet. Maecenas pharetra rutrum tellus, at
          vehicula metus posuere sed.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          <IndustryCard
            {...industrySegments[0]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[1]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[2]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[3]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[4]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[5]}
            className="col-span-12 sm:col-span-6 lg:col-span-9"
          />
          <IndustryCard
            {...industrySegments[6]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[7]}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          />
          <IndustryCard
            {...industrySegments[8]}
            className="col-span-12 sm:col-span-6 lg:col-span-6"
          />
        </div>
      </div>
    </section>
  );
};

// Card Component
const IndustryCard = ({ name, imageUrl, className }) => {
  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group ${
        name === "TEMPOR INCIDIDUNT"
          ? "h-64 sm:h-80 lg:h-96"
          : "h-64 sm:h-56 lg:h-64"
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500 ease-in-out"
      />
      <div className="absolute inset-0 p-6 flex items-end">
        <h3 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wider">
          {name}
        </h3>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-500 transition duration-300"></div>
    </div>
  );
};

export default IndustrySegments;
