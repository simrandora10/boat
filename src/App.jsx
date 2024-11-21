import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/Login";
import AdminLoginPage from "./components/AdminLogin";
import SignupPage from "./components/Signup";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import DetailedView from "./components/DetailedView";
import About from "./components/About"; 
import AdminBoard from "./components/AdminBoard";
import AdminProducts from "./components/AdminProducts";
import EditProducts from "./components/EditProducts";
import UsersManage from "./components/UsersManage";
import AddReviews from "./components/AddReviews";
import ReviewsManage from "./components/ReviewsManage";
import UserBoard from "./components/UserBoard";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <main className="overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Banner />
                <BannerText />
                <Blogs />
                <Footer />
              </>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<DetailedView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/adminboard" element={<AdminBoard />} />
            <Route path="/adminproducts" element={<AdminProducts />} />
            <Route path="/editproducts" element={<EditProducts />} />
            <Route path="/usersmanage" element={<UsersManage />} />
            <Route path="/addreviews" element={<AddReviews />} />
            <Route path="/reviewsmanage" element={<ReviewsManage />} />
            <Route path="/userboard" element={<UserBoard />} />

          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
