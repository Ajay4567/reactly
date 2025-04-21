import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Product.css";

const ProductCard = ({ product }) => {
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };
  console.log("renderStars", renderStars);

  return (
    <div className="product-card border border-solid border-[#ddd] rounded-lg p-[15px] bg-white relative text-center">
      {/* New Launch Badge */}
      <div className="badge bg-green-600 text-white p-1 text-xs absolute top-[10px] left-[10px] rounded-md">
        New Launch
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="product-image w-full h-[160px] bg-[#eee] mb-[10px] rounded-md"
      />

      {/* Product Details */}
      <h4 className="brand text-orange-400 font-bold">{product.brand}</h4>
      <p className="product-name text-base font-medium">{product.name}</p>

      {/* Tags */}
      <div className="tags flex gap-1">
        {product.tags.map((tag, index) => (
          <span key={index} className="tag bg-[#ddd] p-1 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Pack Options */}
      <div className="pack-options flex gap-[10px] mt-[10px]">
        {product.packs.map((pack, index) => (
          <button
            key={index}
            className={`pack-btn border border-solid border-[#ddd] p-1 rounded text-xs ${
              selectedPack.label === pack.label
                ? "selected bg-[#ff7a00] text-white"
                : ""
            }`}
            onClick={() => setSelectedPack(pack)}
          >
            {pack.label}{" "}
            {pack.discount && (
              <span className="discount bg-green-500 text-white text-[10px] ml-1 p-[2px] rounded">
                {pack.discount}
              </span>
            )}
          </button>
        ))}
      </div>
      {/* ⭐ Display Rating */}
      <p className="rating text-orange-300 text-lg my-1 mx-0">
        {renderStars(product.rating)}
      </p>

      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>

      {/* Price & Add to Cart */}
      <div className="product-footer flex justify-between items-center mt-[10px]">
        <span className="price text-lg text-red-500 font-bold">
          ₹{selectedPack.price}
        </span>
        <button className="add-btn bg-orange-400 text-white border-hidden py-2 px-4 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
