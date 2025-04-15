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

  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Brand Logo" />
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            🔍
          </button>
        </div>

        <div className="auth-options">
          {user ? (
            <div className="dropdown">
              <span>{user.name} ⬇</span>
              <div className="dropdown-content">
                <div className="flex flex-col">
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/wallet">My Wallet</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="auth-link"
              >
                Sign In
              </button>
              <SignInModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              <button onClick={() => setShowModal(true)}>Sign In Model</button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <OTPLogin onLoginSuccess={setUser} />
                </Modal>
              )}

              <Link to="/register" className="auth-link">
                Register
              </Link>
            </>
          )}
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            🛒 Cart
          </button>
        </div>
      </header>

      {/* CartPopup Section 1*/}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>
      )}

      <div className={`cart-container ${cartOpen ? "open" : ""}`}>
        <CartPopup
          isOpen={cartOpen}
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
        />
      </div>

      {/* Navigation Menu */}
      {/* <nav className="navbar">
                <ul className="nav-list">
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

                    <li>
                        <Link to="/deals" className="deals-link">🔥 Today's Deals</Link>
                    </li>
                </ul>
            </nav> */}

      <nav className="nav-container">
        <ul className="main-menu">
          {categories.map((main) => (
            <li key={main.slug} className="menu-item">
              <span>{main.name}</span>
              <ul className="submenu">
                {main.subcategories.map((sub) => (
                  <li key={sub.slug}>
                    <Link
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
