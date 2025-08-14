import React, { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    // Get existing subscribers from localStorage
    const existing = JSON.parse(localStorage.getItem("subscribers")) || [];

    // Add new subscriber
    const updated = [...existing, { email, date: new Date().toISOString() }];

    // Save back to localStorage
    localStorage.setItem("subscribers", JSON.stringify(updated));

    setMessage("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", background: "#ffeeba" }}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Subscribe
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
