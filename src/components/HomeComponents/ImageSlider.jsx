import React, { useState, useEffect } from "react";
import sample from "../../../public/images/sample.jpg";

// ✅ Real working construction images (Unsplash)
const slides = [
  {
    id: 1,
    url: sample,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    url: sample,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    url: sample,
  },
];

const ImageSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = slides.length;

  // --- Auto-Play Logic ---
  useEffect(() => {
    const nextSlide = () => {
      // Logic for auto-play: go to the next slide, or loop back to the first one.
      setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // Set an interval to change the slide every 5000 milliseconds (5 seconds)
    const intervalId = setInterval(nextSlide, 5000);

    // Cleanup function: clear the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, [totalSlides]);

  // --- Manual Navigation Functions ---
  const goToNext = () => {
    // Logic for manual next: go to the next slide, or loop back to the first one.
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    // Optional: Reset auto-play or pause it on manual interaction for better UX
    // (not implemented here to keep the current autoplay logic simple)
  };

  const goToPrevious = () => {
    // Logic for manual previous: go to the previous slide, or loop to the last one.
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // --- Display Calculations ---
  // Calculates the current slide number (1-based) and pads it with a leading zero if needed.
  const displayNumber = (currentSlideIndex + 1).toString().padStart(2, "0");
  // Calculates the total slide number and pads it with a leading zero if needed.
  const maxNumber = totalSlides.toString().padStart(2, "0");

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-24">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img
          src={slides[currentSlideIndex].url}
          alt={`Construction slide ${displayNumber}`}
          className="w-full h-full object-cover rounded-xl transition-opacity duration-700" // Added transition for smooth change
        />

        {/* *** UPDATED CODE FOR THE RED-MARKED DESIGN ***
          - The container now uses absolute positioning at the bottom-right.
          - It uses a custom Tailwind class or inline styles to create the L-shape 
            or simply uses a plain white background for simplicity and combines the elements.
          - We'll use a single container for the counter and the buttons, placed at the bottom right.
        */}

        <div className="absolute bottom-0 right-0 z-20">
          <div className="bg-white px-8 pt-8 pb-4 rounded-tl-lg shadow-2xl">
            {/* Counter Box (Top-right section of the L-shape) */}
            <div className="flex justify-end mb-4">
              <span className="text-3xl font-light tracking-wider text-gray-800">
                <span className="font-semibold">{displayNumber}</span> /{" "}
                {maxNumber}
              </span>
            </div>
            {/* Navigation Buttons (Bottom-right section of the L-shape) */}
            <div className="flex justify-between space-x-4">
              {/* Prev Button */}
              <button
                onClick={goToPrevious}
                className="w-12 h-12 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full flex items-center justify-center transition"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="w-12 h-12 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full flex items-center justify-center transition"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
