
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@easyservice.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} EasyService. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

