import React from "react";
import sample from "../../../public/images/sample.jpg";

// ProductShowcase.jsx
// A responsive product-detail style section (heading + 3 cards) built with Tailwind CSS.
// - Drop into any React project using Tailwind.
// - Each card shows an image, heading and a short description.
// - Responsive: 1 column on mobile, 2 on tablet, 3 on desktop.

export default function ProductShowcase({
  eyebrow = "DETAILS",
  title = "power and efficiency, engineered for the demands of today.",
  cards = null,
}) {
  // Default images (replace these paths with your own asset locations or pass `cards` prop)
  const defaultImg = sample; // put your images in public/images/... or pass absolute URLs

  const defaultCards = [
    {
      id: 1,
      image: defaultImg,
      heading: "Key Specifications",
      text: "Some text here description of some text here",
    },
    {
      id: 2,
      image: defaultImg,
      heading: "Features & Benefits",
      text: "Some text here description of some text here",
    },
    {
      id: 3,
      image: defaultImg,
      heading: "Construction",
      text: "Some text here description of some text here",
    },
  ];

  const items = cards && cards.length ? cards : defaultCards;

  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 lg:mb-12">
          <div className="text-xs font-semibold text-gray-600 mb-4">
            {eyebrow}
          </div>

          {/* Title: large, multi-line, heavy weight like the design */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            {title}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {items.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="w-full h-48 sm:h-44 md:h-56 lg:h-48 xl:h-52 overflow-hidden">
                {/* Image - object-cover keeps the crop similar to the provided design */}
                <img
                  src={c.image}
                  alt={c.heading}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {c.heading}
                </h3>
                <p className="text-sm text-gray-500">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
USAGE

1) Place this file in your project (e.g. src/components/ProductShowcase.jsx)
2) Make sure Tailwind CSS is configured and the Tailwind stylesheet is loaded.
3) Add images to `public/images/` (or use absolute URLs) and update `defaultImg` or pass your cards prop.

Example usage:

import ProductShowcase from "./components/ProductShowcase";

const cards = [
  { id: 1, image: '/images/industrial-1.jpg', heading: 'Key Specifications', text: 'Short description...' },
  { id: 2, image: '/images/industrial-2.jpg', heading: 'Features & Benefits', text: 'Short description...' },
  { id: 3, image: '/images/industrial-3.jpg', heading: 'Construction', text: 'Short description...' },
];

function Page() {
  return <ProductShowcase eyebrow="DETAILS" title="Your big headline here" cards={cards} />;
}

*/
