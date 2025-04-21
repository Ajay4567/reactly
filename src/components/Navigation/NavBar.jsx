import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";
import CartPopup from "../Cart/CartPopup";
import SignInModal from "../Auth/SignInModal";
import Modal from "../Common/Modal"; // Import the Modal component
import OTPLogin from "../Auth/OTPLogin"; // Import the OTP Login component
import "../../assets/styles/styles.css";

export function NavBar() {
  const userStatic = { id: "123", name: "ajay sodhi" };
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(userStatic);
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = [
    {
      name: "Dog",
      slug: "dog",
      subcategories: [
        {
          name: "Food & Treats",
          slug: "food-treats",
          filters: {
            Brand: ["Royal Canin", "Pedigree", "Drools"],
            "Special Diet": [
              "Grain-Free",
              "Weight Management",
              "Hypoallergenic",
            ],
            "Protein Source": ["Chicken", "Fish", "Lamb"],
            Price: ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"],
            Weight: ["1kg", "5kg", "10kg+"],
            "Life Stage": ["Puppy", "Adult", "Senior"],
            "Breed Size": ["Small", "Medium", "Large"],
          },
        },
        {
          name: "Grooming & Care",
          slug: "grooming-care",
          filters: {
            Brand: ["Himalaya", "Captain Zack"],
            Price: ["Under ₹300", "₹300 - ₹700", "Above ₹700"],
            "Product Type": ["Shampoo", "Conditioner", "Brush", "Paw Care"],
          },
        },
        {
          name: "Accessories",
          slug: "accessories",
          filters: {
            Brand: ["Heads Up For Tails", "Pawzone"],
            "Product Type": ["Leash", "Collar", "Harness", "Clothing"],
            Price: ["Under ₹500", "₹500 - ₹1500", "Above ₹1500"],
          },
        },
        {
          name: "Toys",
          slug: "toys",
          filters: {
            Type: ["Chew", "Plush", "Interactive", "Training"],
            Price: ["Under ₹200", "₹200 - ₹500", "Above ₹500"],
          },
        },
        {
          name: "Food & Treats",
          slug: "food-treats",
          filters: {
            Brand: ["Royal Canin", "Pedigree", "Drools"],
            "Special Diet": [
              "Grain-Free",
              "Weight Management",
              "Hypoallergenic",
            ],
            "Protein Source": ["Chicken", "Fish", "Lamb"],
            Price: ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"],
            Weight: ["1kg", "5kg", "10kg+"],
            "Life Stage": ["Puppy", "Adult", "Senior"],
            "Breed Size": ["Small", "Medium", "Large"],
          },
        },
        {
          name: "Grooming & Care",
          slug: "grooming-care",
          filters: {
            Brand: ["Himalaya", "Captain Zack"],
            Price: ["Under ₹300", "₹300 - ₹700", "Above ₹700"],
            "Product Type": ["Shampoo", "Conditioner", "Brush", "Paw Care"],
          },
        },
        {
          name: "Accessories",
          slug: "accessories",
          filters: {
            Brand: ["Heads Up For Tails", "Pawzone"],
            "Product Type": ["Leash", "Collar", "Harness", "Clothing"],
            Price: ["Under ₹500", "₹500 - ₹1500", "Above ₹1500"],
          },
        },
        {
          name: "Toys",
          slug: "toys",
          filters: {
            Type: ["Chew", "Plush", "Interactive", "Training"],
            Price: ["Under ₹200", "₹200 - ₹500", "Above ₹500"],
          },
        },
      ],
    },
    {
      name: "Cat",
      slug: "cat",
      subcategories: [
        {
          name: "Food & Nutrition",
          slug: "food-nutrition",
          filters: {
            Brand: ["Whiskas", "Me-O", "Sheba"],
            "Special Diet": ["Grain-Free", "Hairball Control"],
            "Protein Source": ["Fish", "Chicken"],
            Price: ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"],
            "Life Stage": ["Kitten", "Adult", "Senior"],
          },
        },
        {
          name: "Litter & Waste",
          slug: "litter-waste",
          filters: {
            Type: ["Clumping", "Non-Clumping", "Deodorizer"],
            Price: ["Under ₹300", "₹300 - ₹600", "Above ₹600"],
          },
        },
        {
          name: "Toys",
          slug: "toys",
          filters: {
            Type: ["Teasers", "Balls", "Interactive"],
            Price: ["Under ₹200", "₹200 - ₹500", "Above ₹500"],
          },
        },
        {
          name: "Furniture",
          slug: "furniture",
          filters: {
            Type: ["Cat Trees", "Scratchers", "Beds"],
            Price: ["Under ₹1000", "₹1000 - ₹3000", "Above ₹3000"],
          },
        },
      ],
    },
    {
      name: "Pet Parents",
      slug: "pet-parents",
      subcategories: [
        {
          name: "Gifting",
          slug: "gifting",
          filters: {
            Type: ["Gift Boxes", "Custom Name Tags"],
            Price: ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"],
          },
        },
        {
          name: "Cleaning Supplies",
          slug: "cleaning-supplies",
          filters: {
            Type: ["Disinfectants", "Deodorizers", "Wipes"],
            Price: ["Under ₹300", "₹300 - ₹700", "Above ₹700"],
          },
        },
      ],
    },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  //Global search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search term");
      return;
    }

    try {
      const response = await fetch(
        `https://api.example.com/search?query=${searchQuery}`
      );
      const data = await response.json();
      console.log("Search Results:", data);
      // Handle the search results (e.g., store in state, display results)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //CartPopup
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = [
    { id: 1, name: "Dog Food", price: 500, quantity: 2, image: "dogfood.png" },
    { id: 2, name: "Cat Toy", price: 300, quantity: 1, image: "cattoy.png" },
  ];

  // MENU BTN CLICK STATE
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuIcon = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (slug) => {
    setActiveDropdown((prev) => (prev === slug ? null : slug));
  };
  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center py-[10px] px-4 md:px-[62px] bg-[#f8f9fa] relative">
        <div
          className={`fixed left-0 w-full h-screen bg-[#ff6d1f] z-40 transition-all lg:hidden ${
            isMenuOpen ? "top-0 pt-12" : "-top-full pt-0"
          }`}
        >
          <nav className="nav-container py-[10px] px-2 md:px-[50px] block lg:hidden">
            <ul className="main-menu list-none flex flex-col gap-7 m-0 p-0 relative">
              {categories.map((main) => (
                <li
                  onClick={() => toggleDropdown(main.slug)}
                  key={main.slug}
                  className="menu-item cursor-pointer font-bold group flex justify-between relative"
                >
                  <div className="flex items-center">
                    <span className="inline-block py-2 px-2 sm:px-3">
                      {main.name}
                    </span>
                    <svg
                      className="w-4 h-4"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 15"
                    >
                      <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
                    </svg>
                  </div>
                  <ul
                    className={`submenu w-full flex-wrap absolute top-10 right-0 bg-white list-none p-3 shadow-2xl z-10 mx-5 ${
                      activeDropdown === main.slug ? "flex" : "hidden"
                    }`}
                  >
                    {main.subcategories.map((sub) => (
                      <li
                        className="flex flex-col items-center justify-center w-6/12 md:w-2/12 py-2 px-4 hover:bg-[#f0f0f0]"
                        key={sub.slug}
                      >
                        <img
                          className="w-20 h-20 rounded-full"
                          src="../../../images/dog.jpg"
                          alt="dog"
                        />
                        <Link
                          className="text-center"
                          to={`/products/${main.slug}/${sub.slug}`}
                          state={{ category: { ...sub, pet: main.slug } }}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 sm:gap-10">
          <div
            onClick={handleMenuIcon}
            className="flex flex-col gap-2 lg:hidden cursor-pointer transition-all duration-300 ease-in-out z-50"
          >
            {/* Top Line */}
            <span
              className={`border-b-[3px] border-solid border-black w-8 rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[10.5px]" : ""
              }`}
            ></span>

            {/* Middle Line */}
            <span
              className={`border-b-[3px] border-solid border-black w-8 rounded-full transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            ></span>

            {/* Bottom Line */}
            <span
              className={`border-b-[3px] border-solid border-black w-8 rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[10.5px]" : ""
              }`}
            ></span>
          </div>

          <div className="h-[50px]">
            <Link to="/">
              <img className="h-full" src="/images/logo.png" alt="Brand Logo" />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center border border-solid border-[#ccc] rounded-md">
          <input
            className="w-[300px] lg:w-[500px] border-transparent rounded-s-md m-0 outline-none"
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-[#ff6d1f] h-full py-3 text-white border-0 px-[12px] cursor-pointer rounded-e-md"
            type="submit"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center gap-3">
          <button>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM23.942 32H8.058A4.062 4.062 0 0 1 4 27.942c0-6.616 5.383-12 12-12s12 5.384 12 12A4.062 4.062 0 0 1 23.942 32zM16 17.942c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 8.058 30h15.884A2.06 2.06 0 0 0 26 27.942c0-5.514-4.486-10-10-10z" />
            </svg>
          </button>
          <div className="flex items-center gap-[15px]">
            {user ? (
              <div className="dropdown z-30 group">
                <div className="flex items-center gap-1">
                  {user.name}{" "}
                  <svg
                    className="w-4 h-4"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                  >
                    <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <div className="dropdown-content hidden absolute bg-white shadow-2xl p-3 group-hover:block">
                    <div className="flex flex-col gap-2">
                      <Link to="/profile">Profile</Link>
                      <Link to="/orders">My Orders</Link>
                      <Link to="/wallet">My Wallet</Link>
                      <button
                        onClick={handleLogout}
                        className="bg-[#ff6d1f] text-white px-2 py-1 rounded-sm"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white px-5 py-2 rounded-md bg-[#ff6d1f] hover:bg-white hover:text-[#ff6d1f] transition-all shadow-2xl"
                >
                  Login/Sign Up
                </button>
                <SignInModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
                {/* <button onClick={() => setShowModal(true)}>Sign In Model</button> */}
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                    <OTPLogin onLoginSuccess={setUser} />
                  </Modal>
                )}
                {/* <Link
                  to="/register"
                  className="text-[#007bff] font-bold hover:text-[#0056b3]"
                >
                  Register
                </Link> */}
              </>
            )}
            <button
              className="cart-btn bg-[#cccdcf] rounded-full shadow-2xl w-10 h-10 flex justify-center items-center relative"
              onClick={() => setCartOpen(true)}
            >
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-[10px] text-white">
                1
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M5.62466 18.0984C5.21738 18.0984 4.87414 17.9588 4.59495 17.6796C4.31592 17.4004 4.1764 17.0572 4.1764 16.6501C4.1764 16.2428 4.31592 15.8996 4.59495 15.6204C4.87414 15.3414 5.21738 15.2019 5.62466 15.2019C6.03195 15.2019 6.3751 15.3414 6.65413 15.6204C6.93333 15.8996 7.07292 16.2428 7.07292 16.6501C7.07292 17.0572 6.93333 17.4004 6.65413 17.6796C6.3751 17.9588 6.03195 18.0984 5.62466 18.0984ZM14.6855 18.0984C14.2782 18.0984 13.935 17.9588 13.656 17.6796C13.3768 17.4004 13.2372 17.0572 13.2372 16.6501C13.2372 16.2428 13.3768 15.8996 13.656 15.6204C13.935 15.3414 14.2782 15.2019 14.6855 15.2019C15.0927 15.2019 15.436 15.3414 15.7152 15.6204C15.9942 15.8996 16.1337 16.2428 16.1337 16.6501C16.1337 17.0572 15.9942 17.4004 15.7152 17.6796C15.436 17.9588 15.0927 18.0984 14.6855 18.0984ZM4.24689 3.02152L6.82406 8.44331H13.2297C13.3412 8.44331 13.4403 8.41539 13.5268 8.35956C13.6136 8.30388 13.6878 8.22656 13.7496 8.12759L16.2749 3.54144C16.3491 3.4053 16.3553 3.28462 16.2935 3.17938C16.2315 3.07414 16.1263 3.02152 15.9778 3.02152H4.24689ZM3.77524 2.05601H16.3454C16.7651 2.05601 17.0807 2.22715 17.2923 2.56942C17.5041 2.91169 17.5153 3.26418 17.3259 3.62689L14.5667 8.65476C14.4269 8.89002 14.2452 9.07451 14.0217 9.20823C13.7983 9.34196 13.5529 9.40882 13.2855 9.40882H6.38959L5.21601 11.5626C5.11705 11.7111 5.11399 11.8721 5.20684 12.0454C5.29969 12.2187 5.43896 12.3053 5.62466 12.3053H16.1337V13.2708H5.62466C5.06145 13.2708 4.64122 13.0335 4.36395 12.5588C4.08669 12.0841 4.07985 11.6072 4.34344 11.1281L5.79532 8.53986L2.24539 1.09051H0.5V0.125H2.85801L3.77524 2.05601Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-center border border-solid border-[#ccc] rounded-md md:hidden mx-4">
        <input
          className="w-full lg:w-[500px] border-transparent rounded-s-md m-0 outline-none"
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-[#ff6d1f] h-full py-3 text-white border-0 px-[12px] cursor-pointer rounded-e-md"
          type="submit"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      {/* CartPopup Section 1*/}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>
      )}

      <div
        className={`cart-container max-w-[900px] my-[20px] mx-auto ${
          cartOpen ? "open" : ""
        }`}
      >
        <CartPopup
          isOpen={cartOpen}
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
        />
      </div>

      {/* Navigation Menu */}
      {/* <nav className="navbar flex justify-between bg-white shadow-2xl py-4 px-5">
                <ul className="nav-list flex items-center gap-5 list-none">
                    <NavDropdown title="DOG" icon="🐶"
                        items={[
                            { label: "Foods", path: "/dog/foods" },
                            { label: "Treats", path: "/dog/treats" },
                            { label: "Training", path: "/dog/training" },
                        ]}
                    />

                    <NavDropdown title="CAT" icon="🐱"
                        items={[
                            { label: "Breeds", path: "/cat/breeds" },
                            { label: "Food & Nutrition", path: "/cat/food" },
                            { label: "Grooming & Care", path: "/cat/care" },
                        ]}
                    />

                    <NavDropdown title="PET PARENTS" icon="🐾"
                        items={[
                            { label: "Gifting", path: "/pet/gifting" },
                            { label: "Clothing & Accessories", path: "/pet/clothing" },
                            { label: "Cleaning Supplies", path: "/pet/cleaning" },
                        ]}
                    />

                    <li className="relative py-3 cursor-pointer font-bold px-4">
                        <Link to="/deals" className="deals-link text-red-500 font-bold no-underline hover:underline">🔥 Today's Deals</Link>
                    </li>
                </ul>
            </nav> */}

      <nav className="nav-container bg-white border-b border-solid border-b-[#ccc] py-[10px] px-2 md:px-[50px] hidden lg:block">
        <ul className="main-menu list-none flex gap-7 m-0 p-0 relative">
          {categories.map((main) => (
            <li
              key={main.slug}
              className="menu-item cursor-pointer font-bold group"
            >
              <div className="flex items-center">
                <span className="inline-block py-2 px-2 sm:px-3">
                  {main.name}
                </span>
                <svg
                  className="w-4 h-4"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                >
                  <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
                </svg>
              </div>
              <ul className="submenu w-full h-[300px] flex-wrap hidden group-hover:flex absolute top-[180px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white list-none p-3 shadow-2xl z-10 mx-5">
                {main.subcategories.map((sub) => (
                  <li
                    className="flex flex-col items-center justify-center !w-2/12 py-2 px-4 hover:bg-[#f0f0f0]"
                    key={sub.slug}
                  >
                    <img
                      className="w-20 h-20 rounded-full"
                      src="../../../images/dog.jpg"
                      alt="dog"
                    />
                    <Link
                      className="text-center"
                      to={`/products/${main.slug}/${sub.slug}`}
                      state={{ category: { ...sub, pet: main.slug } }}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
