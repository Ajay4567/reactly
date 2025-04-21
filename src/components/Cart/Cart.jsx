import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Cart.css";

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
      deliveryMethod: "ship",
    },
  ]);

  const updateQuantity = (id, newQty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
    <div className="cart-container max-w-[900px] my-[90px] mx-auto">
      <h1 className="text-[28px] font-bold text-[#003b5c]">mCart</h1>
      <div className="cart-header flex justify-between items-center bg-[#f3faff] p-[10px] rounded-md">
        <p className="text-[#003b5c] text-sm">
          Sign in or join rewards to earn points on this purchase.
          <Link to="/rewards">Get Points {">"}</Link>
        </p>
        <button
          className="checkout-btn bg-[#0079c1] text-white py-3 px-5 border-hidden text-base rounded-md"
          onClick={handleCheckout}
        >
          Continue to Checkout
        </button>
      </div>

      <div className="cart-summary text-right text-lg my-[15px] mx-0">
        <p>
          Subtotal ({cartItems.length} items){" "}
          <span className="price text-lg text-red-500 font-bold">
            $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.qty, 0)
              .toFixed(2)}
          </span>
        </p>
      </div>

      <table className="cart-table w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 border-b border-solid border-[#ddd] text-left">
              Item
            </th>
            <th className="p-3 border-b border-solid border-[#ddd] text-left">
              How to get it
            </th>
            <th className="p-3 border-b border-solid border-[#ddd] text-left">
              Unit Price
            </th>
            <th className="p-3 border-b border-solid border-[#ddd] text-left">
              Qty
            </th>
            <th className="p-3 border-b border-solid border-[#ddd] text-left">
              Item Total
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="cart-item flex items-center p-3 border-b border-solid border-[#ddd] text-left">
                <img
                  className="w-[80px] h-[80px] mr-4 rounded-md"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="item-name font-bold">{item.name}</p>
                  <p className="item-color">Color: {item.color}</p>
                  <button
                    className="remove-btn bg-none text-red-500 border-hidden text-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    remove
                  </button>
                </div>
              </td>
              <td className="p-3 border-b border-solid border-[#ddd] text-left">
                <label>
                  <input
                    className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
                    type="radio"
                    name={`delivery-${item.id}`}
                    defaultChecked
                  />{" "}
                  ship to me
                </label>
                <br />
                <label>
                  <input
                    className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
                    type="radio"
                    name={`delivery-${item.id}`}
                  />{" "}
                  same-day delivery
                </label>
                <br />
                <label>
                  <input
                    className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
                    type="radio"
                    name={`delivery-${item.id}`}
                  />{" "}
                  in-store pickup
                </label>
              </td>
              <td className="p-3 border-b border-solid border-[#ddd] text-left">
                <p className="price text-lg text-red-500 font-bold">
                  ${item.price.toFixed(2)}{" "}
                  <span className="old-price line-through text-gray-400 text-sm">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                </p>
              </td>
              <td className="p-3 border-b border-solid border-[#ddd] text-left">
                <div className="qty-controls flex items-center justify-center gap-2">
                  <button
                    className="w-[30px] h-[30px] text-lg bg-[#f0f0f0] border border-solid border-[#ccc] rounded-md"
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                  >
                    -
                  </button>
                  <span className="text-lg font-bold min-w-5 text-center">
                    {item.qty}
                  </span>
                  <button
                    className="w-[30px] h-[30px] text-lg bg-[#f0f0f0] border border-solid border-[#ccc] rounded-md"
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="price text-lg text-red-500 font-bold p-3 border-b border-solid border-[#ddd] text-left">
                ${(item.price * item.qty).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
