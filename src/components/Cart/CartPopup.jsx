import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/CartPopup.css";

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
    <div
      className={`cart-popup fixed top-0 w-[300px] h-screen bg-white shadow-2xl p-5 transition-all z-[60] ${
        isOpen ? "open right-0" : "right-[-350px]"
      }`}
    >
      <div className="cart-header flex justify-between items-center border-b border-solid border-[#ddd] pb-[10px]">
        <h2>Shopping Cart</h2>
        <button
          className="close-btn bg-none border-none text-lg"
          onClick={onClose}
        >
          ✖
        </button>
      </div>

      {cartItems.length > 0 ? (
        <ul className="cart-items list-none p-0">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="cart-item flex items-center justify-between gap-2 my-4"
            >
              <img
                className="object-cover w-20 h-20 rounded-full"
                src="/images/cat.jpg"
                alt="cat"
              />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}

      <div className="cart-footer">
        <button
          className="checkout-btn bg-[#0079c1] text-white py-3 px-5 border-hidden text-base rounded-md"
          onClick={handleCheckout}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
