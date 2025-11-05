import { useState } from "react";

export default function ProductCard({ product, basePrice }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const finalPrice = (basePrice * product.multiplier).toFixed(0);

  return (
    <div className="bg-stone-200  shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-all duration-300">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-48 h-48 object-cover  mb-4"
      />
      <h3 className="text-lg font-serif font-extralight text-neutral-600">{product.name}</h3>
      <p className="text-neutral-600 mt-1">₹{finalPrice}</p>

      {/* Color swatches */}
      <div className="flex space-x-2 mt-3">
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-5 h-5 rounded-full border ${
              selectedColor === color ? "border-neutral-500" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
