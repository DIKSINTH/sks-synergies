import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1600&q=80",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  const displayNum = (current + 1).toString().padStart(2, "0");
  const maxNum = total.toString().padStart(2, "0");

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-20">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
        <img
          src={slides[current].url}
          alt={`Slide ${displayNum}`}
          className="w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out"
        />

        {/* === Exact L-Shaped Design Box === */}
        <div className="absolute bottom-0 right-0 z-20 flex items-end">
          <div
            className="
              bg-white relative rounded-tl-[20px] 
              shadow-2xl
              p-5 sm:p-8
              pb-6 sm:pb-8
              flex flex-col items-end
              w-[100px] sm:w-[140px]
              min-h-[110px] sm:min-h-[140px]
            "
          >
            {/* Counter */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right">
              <span className="text-lg sm:text-2xl font-light text-gray-800 tracking-wider">
                <span className="font-semibold">{displayNum}</span> / {maxNum}
              </span>
            </div>

            {/* Circular Control Section */}
            <div
              className="
                absolute left-0 bottom-0 translate-x-[-40%] translate-y-[30%]
                bg-white shadow-2xl rounded-tl-[20px] pl-6 pb-5

                w-[100px] h-[70px] sm:w-[120px] sm:h-[80px]
                flex items-center justify-center gap-4
              "
            >
              {/* Prev */}
              <button
                onClick={goPrev}
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full flex items-center justify-center transition"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                className="ml-6 w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full flex items-center justify-center transition"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
