import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import BrowseCars from "./pages/BrowseCars";
import CarList from "./pages/CarList";
import CarDetailsPage from "./pages/CarDetailsPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPage from "./pages/AdminPage";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import AboutUsPage from "./pages/AboutUsPage";

// Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/browse-cars" element={<BrowseCars />} />
        {/* ✅ FIX: Make sure path matches what BrowseCars.js links to */}
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/about-us" element={<AboutUsPage />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
