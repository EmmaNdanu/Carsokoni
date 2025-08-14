// src/pages/Home.js
import React from "react";
import FeaturedCars from "../car/FeaturedCars";

import { Link } from "react-router-dom";
import NewsletterSignup from "../components/common/NewsletterSignup";
import HeroSection from "../components/common/HeroSection"; // Assuming you have a HeroSection component
const Home = () => {
  return (
    <div>
  
      <HeroSection />
      
      <h1>Welcome to Car Sales App</h1>
      <Link to="/cars">View Car Listings</Link>
      <FeaturedCars />
      <NewsletterSignup />

      
    </div>
  );
};

export default Home;
