/*import React from 'react';
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
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/signin">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
*/

import React, { useEffect, useState } from "react";
import "./Navbar.css"; // ensure your styles are imported

function Navbar() {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  const getInitials = (name) =>
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <nav className="home-navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <span className="brand-name">EasyService</span>
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        {!user ? (
          <a href="/signin">Sign in</a>
        ) : (
          <div className="user-menu-wrapper">
            <div className="user-initials" onClick={toggleMenu}>
              {getInitials(user.name)}
            </div>
            {showMenu && (
              <div className="user-menu-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;







