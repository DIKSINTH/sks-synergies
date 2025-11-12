import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    // Main container with lsight gray background and responsive padding
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Content */}
        <p
          className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-4"
          data-aos="fade-right"
        >
          LOREM IPSUM
        </p>

        <h2
          data-aos="fade-right"
          className="
          text-4xl sm:text-5xl lg:text-6xl 
          font-extrabold leading-tight 
          text-[#1b2134] 
          mb-8
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <br className="hidden sm:inline" />
          elit, sed do eiusmod tempor.
        </h2>

        <p
          data-aos="fade-left"
          className="
          text-base sm:text-lg 
          text-gray-700 
          font-light 
          leading-relaxed 
          max-w-4xl 
          mx-auto // centers the paragraph block
        "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        {/* Horizontal Divider Line at the bottom (Matching image_240e24.png) */}
        <div className="col-span-12 mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
