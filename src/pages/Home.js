import React from "react";
import FeaturedCars from "../car/FeaturedCars";
import Footer from "../components/common/Footer";
import NewsletterSignup from "../components/common/NewsletterSignup";
import HeroSection from "../components/common/HeroSection";
const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
  <section className="Welcome-section">
        <h1>Welcome to Carsokoni </h1>
        <p>
          Your trusted online marketplace for buying and selling cars in Kenya. 
          <br />Browse, compare, and find your dream car from the comfort of your home
        </p>
         </section>
         <section className="featured-cars-section">
          
        <h3>Featured Cars</h3>
        <FeaturedCars />
      </section>
<NewsletterSignup /> 
<Footer />
</div>
  );
};
export default Home;