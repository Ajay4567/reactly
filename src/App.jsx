import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navigation/NavBar";
import Home from "./components/Home/Home";
import PetProfile from "./components/PetProfile/PetProfile";
import ProductList from "./components/Product/ProductList";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import MyOrders from "./components/Account/MyOrders";
import MyWallet from "./components/Account/MyWallet";
import productsData from "./data/productData"; // Ensure this contains product data

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* ACCOUNT ROUTES */}
        <Route path="/profile" element={<PetProfile />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/wallet" element={<MyWallet />} />
        {/* DOG ROUTES */}
        {/* <Route path="/dog/food/:category" element={<ProductList />} /> */}
        <Route path="/products/:petType/:subCategory" element={<ProductList />} />

        <Route path="/product/:id" element={<ProductDetail products={productsData} />} />
        <Route path="/dog/breeds" element={<h1>Dog Breeds123</h1>} />
        <Route path="/dog/training" element={<h1>Dog Training</h1>} />

        {/* CAT ROUTES */}
        <Route path="/cat/breeds" element={<h1>Cat Breeds</h1>} />
        <Route path="/cat/food" element={<h1>Cat Food & Nutrition</h1>} />
        <Route path="/cat/care" element={<h1>Cat Grooming & Care</h1>} />

        <Route path="/pet-parents" element={<h1>Pet Parents Section</h1>} />
        <Route path="/deals" element={<h1>Today's Deals</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
