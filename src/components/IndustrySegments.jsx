import React from "react";

// --- Placeholder Industry Data (With Lorem Ipsum Names) ---
const industrySegments = [
  {
    name: "LOREM IPSUM",
    imageUrl:
      "https://images.unsplash.com/photo-1547844033-02f5a54f19b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "DOLOR SIT AMET",
    imageUrl:
      "https://images.unsplash.com/photo-1544778393-27a3c301c233?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "CONSECTETUR",
    imageUrl:
      "https://images.unsplash.com/photo-1511210985223-1d09e535e691?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "ADIPISICING ELIT",
    imageUrl:
      "https://images.unsplash.com/photo-1560731478-f682894548c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "SED DO EIUSMOD",
    imageUrl:
      "https://images.unsplash.com/photo-1546738918-051187441112?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "TEMPOR INCIDIDUNT",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946761-b54199c90538?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "UT LABORE",
    imageUrl:
      "https://images.unsplash.com/photo-1524334316315-998845e20790?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "ET DOLORE",
    imageUrl:
      "https://images.unsplash.com/photo-1514787050186-5d63f25c739f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "MAGNA ALIQUA",
    imageUrl:
      "https://images.unsplash.com/photo-1558223637-299f2b3e8e97?auto=format&fit=crop&w=800&q=80",
  },
];

const IndustrySegments = () => {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2">
          LOREM IPSUM DOLOR
        </p>

        <h2
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
