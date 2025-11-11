import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";

export default function ProductGrid() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const categories = [
    "All Products",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All Products"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <nav className="mb-8 overflow-x-auto">
        <ul className="flex gap-6 whitespace-nowrap text-sm text-gray-600 pb-2 border-b">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer hover:text-teal-600 ${
                selectedCategory === cat
                  ? "text-teal-600 font-semibold border-b-2 border-teal-600 pb-1"
                  : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <article
            key={p.slug}
            onClick={() => navigate(`/products/${p.slug}`)}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={p.heroImage}
              alt={p.title}
              className="w-full h-44 sm:h-48 md:h-40 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500">{p.shortDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
