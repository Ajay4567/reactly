import React from "react";
import '../../assets/styles/Home.css';

const Home = () => {
    return (
        <div className="landing-page">
            <div class="slider">
                <div class="slides">
                    <img src="images/image1.jpg" alt="Slide 1" />
                </div>
                <div class="slides">
                    <img src="images/image1.jpg" alt="Slide 1" />
                </div>
            </div>
            <div class="slider">
                <div class="slides">
                    <img src="images/image1.jpg" alt="Slide 1" />
                </div>
                <div class="slides">
                    <img src="images/image1.jpg" alt="Slide 1" />
                </div>
            </div>
            {/* Hero Section */}
            <div className="hero-banner">
                <div className="hero-content">
                    <h2>Support Gut Health</h2>
                    <p>With Royal Canin Gastrointestinal Nutrition.</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
                <img src="images/hero-banner.jpg" alt="Dog and Cat" className="hero-image" />
            </div>

            {/* Top Navigation Links */}
            <div className="top-links">
                <a href="#">Sign In</a>
                <a href="#">Save 30% Today</a>
                <a href="#">Recent Order</a>
                <a href="#">Chewy Pharmacy</a>
            </div>

            {/* Shopping for Today Section */}
            <div className="shopping-today">
                <h3>Who are you shopping for today?</h3>
                <div className="categories">
                    {["Dog", "Cat", "Horse", "Wild Bird", "Chicken", "Wildlife", "Pet"].map(
                        (item) => (
                            <div className="category-item" key={item}>
                                <img src={`${'images/' + item.toLowerCase()}.jpg`} alt={item} />
                                <p>{item}</p>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Popular Categories */}
            <div className="popular-categories">
                <h3>Explore Popular Categories</h3>
                <div className="categories">
                    {["Dog Food", "Dog Flea & Tick", "Dog Treats", "Cat Food", "Cat Litter", "Deals"].map(
                        (item) => (
                            <div className="category-item" key={item}>
                                <img src={`${item.replace(/ /g, "-").toLowerCase()}.jpg`} alt={item} />
                                <p>{item}</p>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Pet Parenting Section */}
            <div className="pet-parenting">
                <div className="parenting-card">
                    <h4>Award-Winning 24/7 Customer Care</h4>
                    <p>Order help plz</p>
                </div>
                <div className="parenting-card">
                    <h4>Chat Free with a Licensed Vet</h4>
                    <p>Hi! I'm Dr. Katy.</p>
                </div>
                <div className="parenting-card">
                    <h4>Prescription Meds, Delivered Fast</h4>
                </div>
                <div className="parenting-card">
                    <h4>Discover Pet Insurance</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;
