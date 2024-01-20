// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="company-name">Billing Software</div>
      </div>
      <div className="contact">Contact: +1234567890</div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
