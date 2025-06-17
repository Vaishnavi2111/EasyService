// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid px-5">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              EasyService connects you with trusted local pros—fast, easy, and hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2025 Easy Service. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
