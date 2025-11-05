import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Collection() {
  const [basePrice, setBasePrice] = useState(1000);

  // Group categories manually (for display order)
  const categories = ["Ring", "Earring", "Bracelet", "Necklace", "Anklet"];

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 bg-stone-300 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-extralight text-neutral-700 text-center md:text-left">
          Our Collection
        </h1>
        <div className="flex items-center space-x-2">
          <label className="font-serif text-neutral-600 font-extralight text-sm sm:text-base">
            Base Price:
          </label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            className="border border-neutral-400 font-serif text-neutral-600 font-extralight rounded-md px-2 sm:px-3 py-1 w-24 sm:w-28 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
          />
        </div>
      </div>

      {/* Product Categories */}
      {categories.map((category) => (
        <div key={category} className="mb-14 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-serif font-extralight text-neutral-800 mb-5 border-b border-gray-300 pb-2 text-center md:text-left">
            {category}s
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  basePrice={basePrice}
                />
              ))}
          </div>
        </div>
      ))}

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
