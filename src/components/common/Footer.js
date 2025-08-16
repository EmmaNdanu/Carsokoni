// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Carsokoni</h3>
          <p>Your trusted marketplace for all car needs.</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@carsokoni.com" target="_blank" rel="noopener noreferrer">
              support@carsokoni.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+254712345678">+254 712 345 678</a>
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Carsokoni. All rights reserved.</p>
    </footer>
  );
};
export default Footer;