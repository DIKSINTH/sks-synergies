import React from "react";
import sample from "../../public/images/sample.jpg";

// --- Sample Product Data (Limited to 4 for this view) ---
const products = [
  {
    id: 1,
    name: "Lorem Ipsum Dolor Sit Amet Consectetur - Series A",
    imageUrl: { sample },
    link: "/products/product-a",
  },
  {
    id: 2,
    name: "Sed Do Eiusmod Tempor Incididunt Ut Labore - Series B",
    imageUrl: { sample },
    link: "/products/product-b",
  },
  {
    id: 3,
    name: "Ut Enim Ad Minim Veniam Quis Nostrud Exercitation",
    imageUrl: { sample },
    link: "/products/product-c",
  },
  {
    id: 4,
    name: "Duis Aute Irure Dolor In Reprehenderit In Voluptate",
    imageUrl: { sample },
    link: "/products/product-d",
  },
];

const ProductsSection = () => {
  // Use the first 4 products explicitly
  const featuredProducts = products.slice(0, 4);
  const totalProducts = featuredProducts.length; // Now correctly 4

  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Header and Description */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="w-full">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2">
              LOREM IPSUM
            </p>
            <h2
              className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-extrabold leading-tight 
              text-[#1b2134] 
            "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <br className="hidden sm:inline" />
              sed do eiusmod tempor incididunt ut labore.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>

        {/* Product Cards Grid (4 items) */}
        <div
          className="
            grid 
            grid-cols-1 // Mobile: 1 product per row
            sm:grid-cols-2 // Tablet: 2 products per row
            lg:grid-cols-4 // Desktop: 4 products per row
            gap-8 lg:gap-10 // Spacing between grid items
          "
        >
          {featuredProducts.map((product, index) => (
            <a
              key={product.id}
              href={product.link}
              className="
                group // Used for hover effects
                bg-white 
                rounded-xl shadow-lg 
                overflow-hidden
                transition-all duration-300 hover:shadow-xl
                block // Make the whole card clickable
              "
            >
              <div className="relative aspect-video bg-gray-200">
                <img
                  src={sample}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Index Counter on Image */}
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 rounded-lg shadow-lg px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">
                    {(index + 1).toString().padStart(2, "0")} /{" "}
                    {totalProducts.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1b2134] leading-relaxed">
                  {product.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* "EXPLORE OUR PRODUCTS NOW!" Button */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <a
            href="/products" // This will redirect to a /products page
            className="inline-flex items-center justify-center 
                       px-10 py-4 
                       text-base font-medium text-blue-700 
                       bg-white 
                       border-2 border-blue-700 
                       rounded-full 
                       hover:bg-blue-700 hover:text-white 
                       transition duration-300 whitespace-nowrap"
          >
            EXPLORE MORE PRODUCTS →
          </a>
        </div>

        {/* Horizontal Line at the bottom */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t border-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
