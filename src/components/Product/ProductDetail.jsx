import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-image w-full h-[160px] bg-[#eee] mb-[10px] rounded-md"
      />
      <h1 className="text-[28px] font-bold text-[#003b5c]">{product.name}</h1>
      <p className="price text-lg text-red-500 font-bold">₹{product.price}</p>

      {/* ⭐ Display Rating */}
      <p className="rating text-orange-300 text-lg my-1 mx-0">
        {renderStars(product.rating)}
      </p>

      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
