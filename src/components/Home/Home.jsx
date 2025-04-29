import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/Home.css";
import HomeSlider from "./HomeSlider";
import Footer from "../Common/Footer";

const Home = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Scroll amount per click
  const scrollAmount = 300;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atStart = el.scrollLeft === 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeftArrow(!atStart);
    setShowRightArrow(!atEnd);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    handleScroll(); // check on mount
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
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
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white justify-center items-center h-10 w-10 shadow-md rounded-full hidden md:flex"
            >
              <svg
                className="w-4 h-4 rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
              >
                <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z"></path>
              </svg>
            </button>
          )}

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
          >
            {["Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"].map(
              (item, index) => (
                <div
                  className="text-center flex-shrink-0 w-[100px] md:w-[210px]"
                  key={index}
                >
                  <img
                    className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] object-cover rounded-full border-2 border-[#ddd]"
                    src={`images/${item.toLowerCase()}.jpg`}
                    alt={item}
                  />
                  <p className="text-base font-semibold text-center">{item}</p>
                </div>
              )
            )}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white justify-center items-center h-10 w-10 shadow-md rounded-full hidden md:flex"
            >
              <svg
                className="w-4 h-4 -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
              >
                <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="popular-categories px-4 md:px-[62px] mt-10">
        <h3 className="text-2xl font-bold mb-5">Explore Popular Categories</h3>
        <div className="categories flex flex-wrap !justify-between xl:justify-center">
          {["Dog", "Cat", "Dog", "Cat", "Dog", "Cat"].map((item) => (
            <div
              className="category-item text-center flex flex-wrap flex-col items-center justify-center w-6/12 sm:w-4/12 lg:w-2/12"
              key={item}
            >
              <img
                className="md:w-[210px] w-[120px] md:h-[210px] h-[120px] object-cover rounded-full border-2 border-solid border-[#ddd]"
                src={`${"images/" + item.toLowerCase()}.jpg`}
                alt={item}
              />
              {/* <img
                className="w-20 h-20 rounded-full border-2 border-solid border-[#ddd]"
                src={`${item.replace(/ /g, "-").toLowerCase()}.jpg`}
                alt={item}
              /> */}
              <p className="text-base font-semibold text-center">{item}</p>
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
