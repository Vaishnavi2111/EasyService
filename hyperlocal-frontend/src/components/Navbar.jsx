import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this if you want separate styling, or use Home.css

const Navbar = () => {
  return (
    <nav className="home-navbar">
      <div className="navbar-left">
        <div className="logo-box">Logo</div>
        <span className="brand-name">EasyService</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="#">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
