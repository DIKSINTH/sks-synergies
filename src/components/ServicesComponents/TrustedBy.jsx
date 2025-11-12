import React from "react";

export default function TrustedBy({
  title = "Trusted by more than 25 leading companies in Singapore",
  containerWidth = "max-w-6xl",
}) {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className={`mx-auto px-6 sm:px-8 ${containerWidth}`}>
        {/* Grid layout — single column on mobile, two columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Headline */}
          <div className="flex items-start">
            <h2
              className="w-full text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
              style={{ lineHeight: 1.02 }}
            >
              {title}
            </h2>
          </div>

          {/* RIGHT: Paragraphs */}
          <div className="flex">
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Curabitur sodales ligula in libero.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-1 lg:col-span-12 mt-8 lg:mt-12">
          <hr className="border-t-2 border-[#1b2134] border-opacity-30" />
        </div>
      </div>
    </section>
  );
}
