import React, { useEffect, useRef } from "react";

const logos = [
  {
    id: 1,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+A",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+B",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+C",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+D",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+E",
  },
  {
    id: 6,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+F",
  },
  {
    id: 7,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+G",
  },
  {
    id: 8,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+H",
  },
  // duplicated for infinite scroll
  {
    id: 9,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+A",
  },
  {
    id: 10,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+B",
  },
  {
    id: 11,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+C",
  },
  {
    id: 12,
    url: "https://via.placeholder.com/150x80/cccccc/808080?text=Logo+D",
  },
];

const ClientLogosSection = () => {
  const scrollRef = useRef(null);
  const scrollSpeed = 0.5;

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId;
    let currentScroll = 0;

    const animateScroll = () => {
      if (scrollElement) {
        currentScroll += scrollSpeed;

        if (currentScroll >= scrollElement.scrollWidth / 2) {
          currentScroll = 0;
        }

        scrollElement.scrollLeft = currentScroll;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1b2134] mb-12 sm:mb-16 lg:mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ut?{" "}
          <br className="hidden sm:inline" />
          Lorem ipsum dolor sit.lorem1
        </h2>

        <div
          ref={scrollRef}
          className="
            flex 
            overflow-x-hidden
            whitespace-nowrap
            py-4
            mb-16 sm:mb-20 lg:mb-24
            [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]
            md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
          "
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 py-2"
            >
              <img
                src={logo.url}
                alt={`Client logo ${logo.id}`}
                className="h-16 sm:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Horizontal Divider Line at the bottom (Matching image_240e24.png) */}
        <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
