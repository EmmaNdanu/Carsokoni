import React from "react";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); 
  };
  return (
    <div className="checkout-container" style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Checkout</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This is a UI-only checkout page. Here you could integrate payment and order summary in the future.
      </p>
      <button
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}
        onClick={handleGoBack}
      >
        Go Back to Shop
      </button>
      <button
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => alert("Order submitted! (UI Only)")}
      >
        Submit Order
      </button>
    </div>
  );
}