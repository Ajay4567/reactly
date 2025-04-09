import React, { useState } from "react";
import '../../assets/styles/Checkout.css';

const Checkout = () => {
    const [shippingAddress, setShippingAddress] = useState({
        name: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    const handleInputChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Shipping Address Submitted:", shippingAddress);
    //     // Integrate Payment Gateway Here
    // };

    // Need to run npm install razorpay
    const handlePayment = () => {
        alert("Proceeding to payment...");
        // Integrate payment gateway here
        const options = {
            key: "YOUR_RAZORPAY_KEY",
            amount: 50000, // Amount in paise (₹500)
            currency: "INR",
            name: "Pet Store",
            description: "Order Payment",
            handler: function (response) {
                console.log("Payment Successful", response);
                alert("Payment Successful");
            },
            prefill: {
                name: shippingAddress.name,
                email: "customer@example.com",
                contact: "9999999999",
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="checkout-container">
            {/* Left Section - Shipping Address */}
            <div className="checkout-left">
                <h2>Shipping Address</h2>
                <form>
                    <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required />
                    <input type="text" name="address" placeholder="Street Address" onChange={handleInputChange} required />
                    <input type="text" name="city" placeholder="City" onChange={handleInputChange} required />
                    <input type="text" name="zip" placeholder="ZIP Code" onChange={handleInputChange} required />
                    <input type="text" name="country" placeholder="Country" onChange={handleInputChange} required />
                </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="checkout-right">
                <h2>Order Summary</h2>
                <div className="order-item">
                    <img src="/images/dog-food.jpg" alt="Dog Food" />
                    <div>
                        <p><strong>Dog Food</strong></p>
                        <p>₹500 x 2</p>
                    </div>
                </div>
                <div className="order-item">
                    <img src="/images/cat-toy.jpg" alt="Cat Toy" />
                    <div>
                        <p><strong>Cat Toy</strong></p>
                        <p>₹300 x 1</p>
                    </div>
                </div>
                <hr />
                <h3>Total: ₹1300</h3>
                <button className="checkout-btn" onClick={handlePayment}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Checkout;
