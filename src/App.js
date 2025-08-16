import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Pages

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import BrowseCars from "./pages/BrowseCars";
import CarDetailsPage from "./pages/CarDetailsPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import UserProfile from "./pages/UserProfile";
// Components
import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
       {/* Default route - homepage */}
  <Route path="/" element={<Home />} />
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse-cars" element={<BrowseCars />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;