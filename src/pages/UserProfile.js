import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserProfile.css";
export default function UserProfile() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  if (!currentUser) {
    return (
      <div className="profile-container">
        <h2>You are not logged in.</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }
  return (
    <div className="profile-container">
      <h2>Welcome, {currentUser.name}</h2>
      <p>Email: {currentUser.email}</p>
      <button className="logout-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}