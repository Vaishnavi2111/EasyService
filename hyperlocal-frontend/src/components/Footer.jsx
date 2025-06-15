// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="mt-auto footer">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Home</a></li>
              <li><a href="#" className="text-decoration-none">Services</a></li>
              <li><a href="#" className="text-decoration-none">Contact</a></li>
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
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
