import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/Product.css';


const ProductCard = ({ product }) => {
    const [selectedPack, setSelectedPack] = useState(product.packs[0]);
    const renderStars = (rating) => {
        return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
    };
    console.log('renderStars', renderStars);

    return (
        <div className="product-card">
            {/* New Launch Badge */}
            <div className="badge">New Launch</div>

            {/* Product Image */}
            <img src={product.image} alt={product.name} className="product-image" />

            {/* Product Details */}
            <h4 className="brand">{product.brand}</h4>
            <p className="product-name">{product.name}</p>

            {/* Tags */}
            <div className="tags">
                {product.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>

            {/* Pack Options */}
            <div className="pack-options">
                {product.packs.map((pack, index) => (
                    <button
                        key={index}
                        className={`pack-btn ${selectedPack.label === pack.label ? "selected" : ""}`}
                        onClick={() => setSelectedPack(pack)}
                    >
                        {pack.label} {pack.discount && <span className="discount">{pack.discount}</span>}
                    </button>
                ))}
            </div>
            {/* ⭐ Display Rating */}
            <p className="rating">{renderStars(product.rating)}</p>

            <Link to={`/product/${product.id}`} className="details-link">View Details</Link>

            {/* Price & Add to Cart */}
            <div className="product-footer">
                <span className="price">₹{selectedPack.price}</span>
                <button className="add-btn">Add</button>
            </div>
        </div>
    );
};

export default ProductCard;
