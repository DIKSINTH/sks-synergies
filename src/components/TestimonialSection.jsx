import React, { useState } from "react";

const testimonials = [
  {
    text: "AFLOWZ consistently delivers high-quality solutions that meet our needs. Their attention to detail and customer service are exceptional.",
    author: "David Wilson",
    role: "Project Lead, Future Industries",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328bf628?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Their team provided excellent support throughout the entire process. Truly professional and reliable.",
    author: "Sophia Martinez",
    role: "Operations Head, GreenTech",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Amazing experience! The final results exceeded our expectations in every way.",
    author: "Michael Lee",
    role: "Founder, BuildWave",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const { text, author, role, avatar } = testimonials[index];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Top Title */}
        <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase">
          Voices of Satisfaction
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mt-4 mb-10">
          Effortlessly solving your challenges with <br /> the expertise of our
          professionals
        </h2>

        {/* Testimonial Text */}
        <blockquote className="text-xl sm:text-2xl text-gray-600 italic leading-relaxed relative">
          {text}
          <span className="text-5xl text-blue-600 font-bold align-top ml-2">
            ”
          </span>
        </blockquote>

        {/* Line + Counter */}
        <div className="flex items-center justify-between mt-12 mb-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="ml-4 text-gray-600 text-sm font-medium">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>

        {/* Author Info + Controls */}
        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center space-x-4">
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{author}</p>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>

          {/* Slider Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
