import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";
export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart" style={{ textAlign: "center", marginTop: "50px" }}>
          <p>Your cart is empty.</p>
          <button className="go-back-btn" onClick={handleGoBack}>
            Go Back to Cars
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image} alt={item.model} />
                <div>
                  <h2>{item.brand} {item.model}</h2>
                  <p>Ksh {item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="cart-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p className="total-price">Ksh {(item.price * item.quantity).toLocaleString()}</p>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-subtotal">
            <span>Subtotal:</span>
            <span>Ksh {getTotal().toLocaleString()}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}