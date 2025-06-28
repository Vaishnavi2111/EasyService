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


/*[import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [userInitials, setUserInitials] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // ✅ Load user data on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      const initials = user.name.split(" ").map(word => word[0]).join("").toUpperCase();
      setUserInitials(initials);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserInitials(null);
    navigate('/signin');
  };

  return (
    <nav className="home-navbar">
      <div className="navbar-left" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="EasyService Logo" className="logo-image" />
      </div>

      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

        {userInitials ? (
          <div className="user-initials-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="user-initials">{userInitials}</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


/*[import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [userInitials, setUserInitials] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const initials = user.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
      setUserInitials(initials);
    }
  }, []);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserInitials('');
    setShowDropdown(false);
    navigate('/signin');
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <nav className="home-navbar">
      <div className="navbar-left">
        <img src={logo} alt="EasyService Logo" className="logo-image" />
      </div>

      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

        {userInitials ? (
          <div ref={dropdownRef} className="user-initials-wrapper">
            <div className="user-initials" onClick={toggleDropdown}>
              {userInitials}
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
) : (
  <Link to="/signin">Sign in</Link>
)}

      </div>
    </nav>
  );
};

export default Navbar;
]*/