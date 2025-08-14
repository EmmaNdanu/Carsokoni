import './HeroSection.css';
import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Drive Your Dream</h1>
        <p>Explore a wide range of quality cars today.</p>
        <a href="/browse-cars" className="cta-button">Browse Cars</a>
      </div>

      <div className="hero-image">
        <img src="/images/mazda cx5.jpeg" alt="Mazda CX-5" />
      </div>
    </section>
  );
}
