import React, { useState } from "react";
import "../../assets/styles/Checkout.css";

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
    // <div className="checkout-container flex max-w-[900px] my-[90px] mx-auto p-5 bg-white rounded-lg shadow-2xl">
    //   {/* Left Section - Shipping Address */}
    //   <div className="checkout-left flex-1 p-5">
    //     <h2 className="text-[22px] text-[#333]">Shipping Address</h2>
    //     <form>
    //       <input
    //         className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
    //         type="text"
    //         name="name"
    //         placeholder="Full Name"
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <input
    //         className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
    //         type="text"
    //         name="address"
    //         placeholder="Street Address"
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <input
    //         className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
    //         type="text"
    //         name="city"
    //         placeholder="City"
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <input
    //         className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
    //         type="text"
    //         name="zip"
    //         placeholder="ZIP Code"
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <input
    //         className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
    //         type="text"
    //         name="country"
    //         placeholder="Country"
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </form>
    //   </div>

    //   {/* Right Section - Order Summary */}
    //   <div className="checkout-right flex-1 p-5">
    //     <h2 className="text-[22px] text-[#333]">Order Summary</h2>
    //     <div className="order-item flex items-center mb-[10px]">
    //       <img
    //         className="w-[60px] h-[60px] rounded-md mr-4"
    //         src="/images/dog-food.jpg"
    //         alt="Dog Food"
    //       />
    //       <div>
    //         <p>
    //           <strong>Dog Food</strong>
    //         </p>
    //         <p>₹500 x 2</p>
    //       </div>
    //     </div>
    //     <div className="order-item flex items-center mb-[10px]">
    //       <img
    //         className="w-[60px] h-[60px] rounded-md mr-4"
    //         src="/images/cat-toy.jpg"
    //         alt="Cat Toy"
    //       />
    //       <div>
    //         <p>
    //           <strong>Cat Toy</strong>
    //         </p>
    //         <p>₹300 x 1</p>
    //       </div>
    //     </div>
    //     <hr />
    //     <h3>Total: ₹1300</h3>
    //     <button
    //       className="checkout-btn bg-[#0079c1] text-white py-3 px-5 border-hidden text-base rounded-md"
    //       onClick={handlePayment}
    //     >
    //       Proceed to Payment
    //     </button>
    //   </div>
    // </div>
    <div className="px-4 md:px-[62px]">
      <div className="flex flex-wrap justify-between mt-4">
        <div className="w-8/12">
          {/* Login/Signup */}
          <div className="shadow-2xl border-b-2">
            <div className="flex items-center gap-5 bg-blue-500 p-3 rounded-sm">
              <p className="bg-white shadow-2xl text-sm rounded-md px-2 py-1">1</p>
              <h3 className="uppercase text-white text-lg font-semibold">Login</h3>
            </div>
            <div className="flex justify-between gap-5 px-10 py-6 my-4">
              <div className="w-5/12">
                <form className="w-full">
                  <input required className="w-full border-b mb-4 outline-none pb-1" type="text" placeholder="Enter Email/Mobile Number" />
                  <p className="text-xs">By continuing, you agree to Flipkart's <a className="text-blue-400" href="#">Terms of Use</a> and <a className="text-blue-400" href="#">Privacy Policy</a></p>
                  <button type="submit" className="bg-[#ff6d1f] text-white px-4 py-3 mt-6 rounded-md font-medium text-sm w-full uppercase">Continue</button>
                </form>
              </div>
              <div className="w-5/12">
                <p className="text-[#878787]">Advantages of our secure login</p>
                <p className="mt-3 text-sm">Easily Track Orders, Hassle free Returns</p>
                <p className="mt-3 text-sm">Get Relevant Alerts and Recommendation</p>
                <p className="mt-3 text-sm">Wishlist, Reviews, Ratings and more.</p>
              </div>
            </div>
          </div>
          {/* Delivery address */}
          <div className="shadow-2xl border-b-2 mt-4">
            <div className="flex items-center gap-5 bg-blue-500 p-3 rounded-sm">
              <p className="bg-white shadow-2xl text-sm rounded-md px-2 py-1">2</p>
              <h3 className="uppercase text-white text-lg font-semibold">Delivery Address</h3>
            </div>
            <div className="flex justify-between gap-5 px-10 py-6 my-4">
              <div className="w-5/12">
                <form className="w-full">
                  <input required className="w-full border-b mb-4 outline-none pb-1" type="text" placeholder="Enter Email/Mobile Number" />
                  <p className="text-xs">By continuing, you agree to Flipkart's <a className="text-blue-400" href="#">Terms of Use</a> and <a className="text-blue-400" href="#">Privacy Policy</a></p>
                  <button type="submit" className="bg-[#ff6d1f] text-white px-4 py-3 mt-6 rounded-md font-medium text-sm w-full uppercase">Continue</button>
                </form>
              </div>
              <div className="w-5/12">
                <p className="text-[#878787]">Advantages of our secure login</p>
                <p className="mt-3 text-sm">Easily Track Orders, Hassle free Returns</p>
                <p className="mt-3 text-sm">Get Relevant Alerts and Recommendation</p>
                <p className="mt-3 text-sm">Wishlist, Reviews, Ratings and more.</p>
              </div>
            </div>
          </div>
          {/* Order Summery */}
          <div className="shadow-2xl border-b-2 mt-4">
            <div className="flex items-center gap-5 bg-blue-500 p-3 rounded-sm">
              <p className="bg-white shadow-2xl text-sm rounded-md px-2 py-1">3</p>
              <h3 className="uppercase text-white text-lg font-semibold">Order summery</h3>
            </div>
            <div className="flex justify-between gap-5 px-10 py-6 my-4">
              <div className="w-5/12">
                <form className="w-full">
                  <input required className="w-full border-b mb-4 outline-none pb-1" type="text" placeholder="Enter Email/Mobile Number" />
                  <p className="text-xs">By continuing, you agree to Flipkart's <a className="text-blue-400" href="#">Terms of Use</a> and <a className="text-blue-400" href="#">Privacy Policy</a></p>
                  <button type="submit" className="bg-[#ff6d1f] text-white px-4 py-3 mt-6 rounded-md font-medium text-sm w-full uppercase">Continue</button>
                </form>
              </div>
              <div className="w-5/12">
                <p className="text-[#878787]">Advantages of our secure login</p>
                <p className="mt-3 text-sm">Easily Track Orders, Hassle free Returns</p>
                <p className="mt-3 text-sm">Get Relevant Alerts and Recommendation</p>
                <p className="mt-3 text-sm">Wishlist, Reviews, Ratings and more.</p>
              </div>
            </div>
          </div>
          {/* Payment */}
          <div className="shadow-2xl border-b-2 mt-4">
            <div className="flex items-center gap-5 bg-blue-500 p-3 rounded-sm">
              <p className="bg-white shadow-2xl text-sm rounded-md px-2 py-1">4</p>
              <h3 className="uppercase text-white text-lg font-semibold">Payment options</h3>
            </div>
            <div className="flex justify-between gap-5 px-10 py-6 my-4">
              <div className="w-5/12">
                <form className="w-full">
                  <input required className="w-full border-b mb-4 outline-none pb-1" type="text" placeholder="Enter Email/Mobile Number" />
                  <p className="text-xs">By continuing, you agree to Flipkart's <a className="text-blue-400" href="#">Terms of Use</a> and <a className="text-blue-400" href="#">Privacy Policy</a></p>
                  <button type="submit" className="bg-[#ff6d1f] text-white px-4 py-3 mt-6 rounded-md font-medium text-sm w-full uppercase">Continue</button>
                </form>
              </div>
              <div className="w-5/12">
                <p className="text-[#878787]">Advantages of our secure login</p>
                <p className="mt-3 text-sm">Easily Track Orders, Hassle free Returns</p>
                <p className="mt-3 text-sm">Get Relevant Alerts and Recommendation</p>
                <p className="mt-3 text-sm">Wishlist, Reviews, Ratings and more.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="px-3 shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
