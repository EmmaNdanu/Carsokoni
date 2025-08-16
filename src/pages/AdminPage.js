import React from "react";
export default function Admin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];
  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Users</h2>
      {users.length === 0 ? <p>No users registered.</p> : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} ({user.email})</li>
          ))}
        </ul>
      )}
      <h2>Login History</h2>
      {loginHistory.length === 0 ? <p>No logins yet.</p> : (
        <ul>
          {loginHistory.map((entry, index) => (
            <li key={index}>{entry.email} - {entry.time}</li>
          ))}
        </ul>
      )}
    </div>
  );
}