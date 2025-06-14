import React, { useState, useEffect } from 'react';
import './Home.css';
import img1 from '../assets/appliance.jpg';
import img2 from '../assets/beauty3.jpg';
import img3 from '../assets/body.jpg';
import img4 from '../assets/carpenter.jpg';
import img5 from '../assets/electric.jpg';
import img6 from '../assets/facial.jpg';
import img7 from '../assets/hair.jpg';
import img8 from '../assets/makeup.jpg';
import img9 from '../assets/nailart.jpg';
import img10 from '../assets/plumbing.jpg';
import img11 from '../assets/item.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="navbar-left">
          <div className="logo-box">Logo</div>
          <span className="brand-name">EasyService</span>
        </div>
        <div className="navbar-right">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Sign in</a>
        </div>
      </nav>

      {/* Hero Section with background slideshow */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <h2 className="hero-title">
          Connecting you with Trusted professionals, right when you need them.
        </h2>
        <h3 className="hero-subtitle">
          From beauty service to home repairs, find and book reliable experts in your area with just a few click.
        </h3>
        <p className="hero-description">
          Whether you're looking for a quick fix or a schedule service, our platform helps you explore verified service providers, check ratings and reviews, and book appointments with ease. With real-time updates, flexible bookings, and secure payments, getting professional help has never been more convenient.
        </p>
        <button className="hero-button">GET STARTED</button>
      </section>
    </div>
  );
}

export default Home;






