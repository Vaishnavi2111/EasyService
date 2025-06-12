// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div className="container">
      <a className="navbar-brand fw-bold text-primary" href="#">EasyService</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
        <button className="btn btn-outline-primary ms-lg-3">Login</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
