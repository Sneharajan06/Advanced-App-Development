import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <span>The Gift Studio</span>
      </div>
      <div className="navbar-right">
        <div className="login-container">
          <span>Login</span>
          <span>Sign Up</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          
        </div>
      </div>
    </div>
  );
}
