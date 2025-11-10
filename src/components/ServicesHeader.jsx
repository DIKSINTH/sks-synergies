import React from "react";

const ServicesHeader = () => {
  return (
    // Main container with light gray background and responsive padding
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-4">
          LOREM IPSUM
        </p>

        <h2
          className="
          // Responsive Heading Sizes: 4xl (mobile), 5xl (tablet), 6xl (desktop)
          text-4xl sm:text-5xl lg:text-6xl 
          font-extrabold leading-tight 
          text-[#1b2134] 
          mb-8 // Bottom margin for the heading
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <br className="hidden sm:inline" />
          elit, sed do eiusmod tempor.
        </h2>

        <p
          className="
          // Responsive Text Size: base (mobile), lg (tablet/desktop)
          text-base sm:text-lg 
          text-gray-700 
          font-light // Matches the thin font weight in the image
          leading-relaxed
          max-w-4xl // Constrains the paragraph width, similar to the design
        "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        {/* Horizontal Divider Line: Full width across max-w-7xl content area */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <hr className="border-t-2 border-gray-400 border-opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
