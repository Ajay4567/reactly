import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Top Paw® Navy Floral Cuddler Dog Bed",
            image: "/images/dog-bed.jpg",
            price: 9.97,
            oldPrice: 11.99,
            qty: 2,
            color: "Navy",
            deliveryMethod: "ship"
        }
    ]);

    const updateQuantity = (id, newQty) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

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
        <div className="cart-container">
            <h1>mCart</h1>
            <div className="cart-header">
                <p>Sign in or join rewards to earn points on this purchase.
                    <Link to="/rewards">Get Points {">"}</Link>
                </p>
                <button className="checkout-btn" onClick={handleCheckout}>Continue to Checkout</button>
            </div>

            <div className="cart-summary">
                <p>Subtotal ({cartItems.length} items) <span className="price">${(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)).toFixed(2)}</span></p>
            </div>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>How to get it</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Item Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-color">Color: {item.color}</p>
                                    <button className="remove-btn" onClick={() => removeItem(item.id)}>remove</button>
                                </div>
                            </td>
                            <td>
                                <label><input type="radio" name={`delivery-${item.id}`} defaultChecked /> ship to me</label>
                                <br />
                                <label><input type="radio" name={`delivery-${item.id}`} /> same-day delivery</label>
                                <br />
                                <label><input type="radio" name={`delivery-${item.id}`} /> in-store pickup</label>
                            </td>
                            <td>
                                <p className="price">${item.price.toFixed(2)} <span className="old-price">${item.oldPrice.toFixed(2)}</span></p>
                            </td>
                            <td>
                                <div className="qty-controls">
                                    <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
                                </div>
                            </td>

                            <td className="price">${(item.price * item.qty).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
