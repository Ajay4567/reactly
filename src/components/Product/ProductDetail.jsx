import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const renderStars = (rating) => {
        return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
    };

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} className="product-image" />
            <h1>{product.name}</h1>
            <p className="price">₹{product.price}</p>

            {/* ⭐ Display Rating */}
            <p className="rating">{renderStars(product.rating)}</p>

            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
