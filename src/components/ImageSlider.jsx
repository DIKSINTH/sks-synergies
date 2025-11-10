import React, { useState, useEffect } from "react";

// ✅ Real working construction images (Unsplash)
const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581093458944-67cf0d7ab1df?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581091215367-59ab3f4c1286?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1617585147402-87aea3fd9896?auto=format&fit=crop&w=1600&q=80",
  },
];

const ImageSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = slides.length;

  // --- Auto-Play Logic (The New Feature) ---
  useEffect(() => {
    // Function to calculate the next slide index
    const nextSlide = () => {
      setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // Set an interval to change the slide every 5000 milliseconds (5 seconds)
    const intervalId = setInterval(nextSlide, 5000);

    // Cleanup function: important to clear the interval when the component unmounts
    // or when the dependencies (totalSlides) change.
    return () => clearInterval(intervalId);
  }, [totalSlides]); // Dependency array: Re-run effect if totalSlides changes

  // --- Manual Navigation Functions (No change) ---
  const goToNext = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // --- Display Calculations (No change) ---
  const displayNumber = (currentSlideIndex + 1).toString().padStart(2, "0");
  const maxNumber = totalSlides.toString().padStart(2, "0");

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-24">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img
          src={slides[currentSlideIndex].url}
          alt={`Construction slide ${displayNumber}`}
          className="w-full h-full object-cover rounded-xl transition-opacity duration-700" // Added transition for smooth change
        />

        {/* Counter Box (Visual matching the previous request) */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 rounded-lg shadow-lg px-4 py-2 z-20">
          <span className="text-2xl font-semibold text-gray-800">
            {displayNumber} / {maxNumber}
          </span>
        </div>

        {/* Prev Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 rounded-full flex items-center justify-center transition z-20"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 rounded-full flex items-center justify-center transition z-20"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
