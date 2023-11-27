import React from 'react';
import logo from './logo.png'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Walmart Logo" width="75" height="75" /> {/* Adjust width and height as needed */}
        </div>
        <div className="title">
          <h3>Wall-E-Cart Online Shopping</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
