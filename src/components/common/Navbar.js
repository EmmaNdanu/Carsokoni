import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="logo">Carsokoni</div>
      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/browse-cars" onClick={() => setMenuOpen(false)}>Cars</Link></li>
        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
        {!currentUser && <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>}
        {currentUser && <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>}
        {currentUser && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}