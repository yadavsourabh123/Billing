// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-address-book"></i> Contacts</li>
        <li><i className="fas fa-box"></i> Inventory</li>
        <li><i className="fas fa-shopping-cart"></i> Purchase</li>
        <li><i className="fas fa-cash-register"></i> Sales</li>
        <li><i className="fas fa-building"></i> Branch</li>
        <li><i className="fas fa-chart-bar"></i> Report</li>
        <li><i className="fas fa-cogs"></i> Settings</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
