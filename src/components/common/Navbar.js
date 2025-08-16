import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="logo">Carsokoni</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse-cars">Cars</Link></li>
        <li><Link to="/about-us">About </Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {!currentUser && <li><Link to="/login">Login</Link></li>}
        {currentUser && <li><Link to="/profile">Profile</Link></li>}
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
