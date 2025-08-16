import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cars from "../data/Cars";
import "../styles/BrowseCars.css";
const CarDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((car) => car.id === parseInt(id));
  const [addedMessage, setAddedMessage] = useState("");
  if (!car) return <div className="browse-page">Car not found</div>;
  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === car.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = storedCart.map((item) =>
        item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...car, quantity: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Show confirmation message for 2 seconds
    setAddedMessage(`${car.brand} ${car.model} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };
  const buyNow = () => {
    addToCart();
    navigate("/cart");
  };
  return (
    <div className="browse-page">
      <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <div className="card-title">{car.brand} {car.model}</div>
          <div className="card-sub">Category: {car.category}</div>
          <div className="price">KES {car.price.toLocaleString()}</div>
          <p style={{ marginTop: "10px", fontSize: "15px" }}>
            {car.description || "No description available."}
          </p>
          <h3>Specifications:</h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <li><strong>Engine:</strong> {car.specifications?.engine}</li>
            <li><strong>Transmission:</strong> {car.specifications?.transmission}</li>
            <li><strong>Fuel Type:</strong> {car.specifications?.fuelType}</li>
            <li><strong>Mileage:</strong> {car.specifications?.mileage}</li>
            <li><strong>Seating:</strong> {car.specifications?.seatingCapacity}</li>
            <li><strong>Color:</strong> {car.specifications?.color}</li>
          </ul>
          <h3>Financing:</h3>
          <p>{car.financing || "Contact us for financing options."}</p>
          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              onClick={addToCart}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={buyNow}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#10b981",
                color: "white",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
          {/* Confirmation message */}
          {addedMessage && (
            <p style={{ color: "#10b981", marginTop: "10px", fontWeight: "bold" }}>
              {addedMessage}
            </p>
          )}
          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: "15px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#6b7280",
              color: "white",
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default CarDetailsPage;