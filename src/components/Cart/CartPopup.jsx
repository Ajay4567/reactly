import React from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/CartPopup.css';

export default function CartPopup({ cartItems, isOpen, onClose }) {
    // Navigating to checkout
    const navigate = useNavigate();
    const handleCheckout = () => {
        // Example: Validate cart before navigating
        const cartIsValid = true; // Replace with actual logic
        if (cartIsValid) {
            navigate("/checkout");
        } else {
            alert("Your cart is empty or invalid!");
        }
    };
    return (
        <div className={`cart-popup ${isOpen ? "open" : ""}`}>
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <button className="close-btn" onClick={onClose}>✖</button>
            </div>

            {cartItems.length > 0 ? (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-info">
                                <h4>{item.name}</h4>
                                <p>₹{item.price} x {item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}

            <div className="cart-footer">
                <button className="checkout-btn" onClick={handleCheckout} >Go to Checkout</button>
            </div>
        </div>
    );
}
