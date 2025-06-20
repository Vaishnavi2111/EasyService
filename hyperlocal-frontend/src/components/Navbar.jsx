import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css'; // Create this if you want separate styling, or use Home.

const Navbar = () => {
  return (
    <nav className="home-navbar">
      <div className="navbar-left"style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="EasyService Logo" className="logo-image" />
        <span className="brand-name"></span>
      </div>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="/#services">Services</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/signin">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
