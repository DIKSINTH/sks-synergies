import React from "react";

const SustainableFutureSection = () => {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Layout (Stacks on mobile) */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-12 lg:space-x-16">
          {/* Left Column - Heading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1
              className="
                // FIX: Standard mobile text size (text-3xl)
                // Scaling up for tablets (sm:text-4xl/md:text-5xl)
                // Final large desktop size (lg:text-[4.5rem])
                text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem]
                font-extrabold 
                leading-tight 
                text-gray-900 
                tracking-tight
              "
            >
              <span className="text-[#1b2134]">Lorem Ipsum Dolor</span>
            </h1>
          </div>

          {/* Right Column - Paragraph */}
          {/* The md:pt-4 is applied only from medium screens up, ensuring the paragraph starts right after the heading on mobile */}
          <div className="md:w-1/2 md:pt-4">
            <p
              className="
                text-lg sm:text-xl 
                text-gray-700 
                font-light 
                leading-relaxed
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium, arcu sed suscipit tincidunt, lorem arcu egestas velit,
              sed auctor eros dolor id lorem. Etiam ac nunc vitae urna consequat
              tristique vitae vel mauris. Curabitur maximus lorem metus, sed
              feugiat urna vulputate ac.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        {/* Reduced bottom margin on mobile (mt-12) and increased responsively */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8">
          <hr className="border-t border-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default SustainableFutureSection;
