import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendationSection = ({ currentProduct, allProducts = [] }) => {
  const navigate = useNavigate();

  // ✅ Avoid crash if data not loaded yet
  if (!currentProduct || !Array.isArray(allProducts)) return null;

  const relatedProducts = allProducts.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  if (relatedProducts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase">
            Recommended
          </h4>
          <h2 className="text-3xl font-extrabold mt-2">You May Also Like</h2>
          <p className="text-gray-600 mt-1">
            Make confident choices and discover the best solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {relatedProducts.map((product, index) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.slug}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={product.heroImage}
                alt={product.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <span className="absolute bottom-2 right-3 bg-white rounded-xl px-3 py-1 text-sm font-semibold shadow">
                {String(index + 1).padStart(2, "0")}/
                {String(allProducts.length).padStart(2, "0")}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {product.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
