import React from "react";
import "../../assets/styles/Home.css";
import HomeSlider from "./HomeSlider";
import Footer from "../Common/Footer";

const Home = () => {
  return (
    <div className="landing-page font-arial m-auto">
      {/* HOME PAGE SLIDER */}
      <HomeSlider />
      {/* Hero Section */}
      <div className="hero-banner flex flex-wrap items-center justify-between bg-[#f5f5f5] py-12 rounded-xl px-4 md:px-[62px]">
        <div className="hero-content w-full md:w-5/12">
          <h2 className="text-2xl font-bold">Support Gut Health</h2>
          <p className="text-base mb-3">
            With Royal Canin Gastrointestinal Nutrition.
          </p>
          <button className="shop-now-btn bg-[#ff6d1f] text-white border-hidden py-2 px-5 rounded-md">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-6/12 mt-5 md:mt-0">
          <img
            src="images/hero-banner.jpg"
            alt="Dog and Cat"
            className="hero-image w-full rounded-lg"
          />
        </div>
      </div>

      {/* Top Navigation Links */}
      <div className="top-links flex justify-between py-4 bg-white mt-4 px-4 md:px-[62px]">
        <a
          className="no-underline text-[#ff6d1f] text-[10px] sm:text-base font-bold"
          href="#"
        >
          Sign In
        </a>
        <a
          className="no-underline text-[#ff6d1f] text-[10px] sm:text-base font-bold"
          href="#"
        >
          Save 30% Today
        </a>
        <a
          className="no-underline text-[#ff6d1f] text-[10px] sm:text-base font-bold"
          href="#"
        >
          Recent Order
        </a>
        <a
          className="no-underline text-[#ff6d1f] text-[10px] sm:text-base font-bold"
          href="#"
        >
          Chewy Pharmacy
        </a>
      </div>

      {/* Shopping for Today Section */}
      <div className="shopping-today px-4 md:px-[62px] mt-5">
        <h3 className="text-2xl font-bold mb-5">
          Who are you shopping for today?
        </h3>
        <div className="categories flex flex-wrap justify-between gap-4">
          {["Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"].map((item) => (
            <div className="category-item text-center max-w-32" key={item}>
              <img
                className="w-28 h-28 rounded-full border-2 border-solid border-[#ddd]"
                src={`${"images/" + item.toLowerCase()}.jpg`}
                alt={item}
              />
              <p className="text-base font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="popular-categories px-4 md:px-[62px] mt-10">
        <h3 className="text-2xl font-bold mb-5">Explore Popular Categories</h3>
        <div className="categories flex flex-wrap justify-between gap-4">
          {["Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"].map((item) => (
            <div className="category-item text-center max-w-32" key={item}>
              <img
                className="w-28 h-28 rounded-full border-2 border-solid border-[#ddd]"
                src={`${"images/" + item.toLowerCase()}.jpg`}
                alt={item}
              />
              {/* <img
                className="w-20 h-20 rounded-full border-2 border-solid border-[#ddd]"
                src={`${item.replace(/ /g, "-").toLowerCase()}.jpg`}
                alt={item}
              /> */}
              <p className="text-base font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pet Parenting Section */}
      <div className="pet-parenting flex flex-wrap justify-between mt-12 px-4 md:px-[50px]">
        <div className="px-3 w-full sm:w-6/12 md:w-3/12">
          <div className="parenting-card bg-[#e8f4ff] p-5 rounded-lg text-center h-full">
            <h4>Award-Winning 24/7 Customer Care</h4>
            <p>Order help plz</p>
          </div>
        </div>
        <div className="px-3 w-full sm:w-6/12 md:w-3/12 mt-6 sm:mt-0">
          <div className="parenting-card bg-[#e8f4ff] p-5 rounded-lg text-center h-full">
            <h4>Chat Free with a Licensed Vet</h4>
            <p>Hi! I'm Dr. Katy.</p>
          </div>
        </div>
        <div className="px-3 w-full sm:w-6/12 md:w-3/12 mt-6 md:mt-0">
          <div className="parenting-card bg-[#e8f4ff] p-5 rounded-lg text-center h-full">
            <h4>Prescription Meds, Delivered Fast</h4>
          </div>
        </div>
        <div className="px-3 w-full sm:w-6/12 md:w-3/12 mt-6 md:mt-0">
          <div className="parenting-card bg-[#e8f4ff] p-5 rounded-lg text-center h-full">
            <h4>Discover Pet Insurance</h4>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default Home;
