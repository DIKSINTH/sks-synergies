import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";
import Aos from "aos";
import "aos/dist/aos.css";

function KeyValueRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-100 py-2 text-sm">
      <div className="text-gray-600">{label}</div>
      <div className="text-teal-700 font-medium text-right">{value}</div>
    </div>
  );
}

export default function ProductDetail() {
  useEffect(() => {
    Aos.init({ duration: 300, once: true });
  }, []);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const found = productsData.find((p) => p.slug === slug);
    setProduct(found || null);
    setActiveIndex(0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <p className="mb-4 text-gray-600">Product not found.</p>
          <button
            onClick={() => navigate("/products")}
            className="px-4 py-2 bg-teal-600 text-white rounded-md"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const gallery = product.gallery?.length
    ? product.gallery
    : [product.heroImage];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-600 mb-6 flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT IMAGE GALLERY */}
        <div
          data-aos="fade-right"
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <img
              src={gallery[activeIndex]}
              alt={product.title}
              className="w-full h-80 sm:h-96 object-cover rounded-xl"
            />

            <div className="flex gap-3 mt-4 overflow-x-auto">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-md overflow-hidden border flex-shrink-0 ${
                    index === activeIndex
                      ? "ring-2 ring-teal-500"
                      : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-20 h-16 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div data-aos="fade-left" className="space-y-8">
          <div>
            <div className="text-sm text-teal-600 font-medium">
              {product.category}
            </div>
            <h1
              data-aos="fade-left"
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2"
            >
              {product.title}
            </h1>
            <p className="mt-4 text-gray-600">{product.shortDescription}</p>
          </div>

          {product.keySpecifications && (
            <div className="bg-white rounded-md p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Key Specifications</h3>
              {Object.entries(product.keySpecifications).map(([key, val]) => (
                <KeyValueRow key={key} label={key} value={val} />
              ))}
            </div>
          )}

          {product.features && (
            <div className="bg-white rounded-md p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                Features & Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                {product.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    ✅ {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.construction && (
            <div className="bg-white rounded-md p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Construction</h3>
              {Object.entries(product.construction).map(([key, val]) => (
                <KeyValueRow key={key} label={key} value={val} />
              ))}
            </div>
          )}

          {product.performance && (
            <div className="bg-white rounded-md p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Performance</h3>
              {Object.entries(product.performance).map(([key, val]) => (
                <KeyValueRow key={key} label={key} value={val} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
