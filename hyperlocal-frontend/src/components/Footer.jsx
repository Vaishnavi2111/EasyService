
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="mt-auto footer">
      <div className="container">
        <div className="row">
          {/* About Us */}
          {/* 
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>EasyService is your one-stop solution for local services.</p>
          </div>
          */}

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
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
