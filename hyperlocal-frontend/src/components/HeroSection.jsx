// src/components/HeroSection.jsx
/*import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="display-4 text-primary">Welcome to EasyService</h1>
        <p className="lead text-secondary">
          This is the Hero Sections
        </p>
      </div>
    </div>
  );
};

export default HeroSection;*/

import React, { useEffect, useState } from 'react';
import './Home.css';

const backgroundImages = [
  '/appliance.png',
  '/beauty3.png',
  '/body.png',
  '/carpenter.png',
  '/electric.png',
  '/facial.png',
  '/hair.png',
  '/makeup.png',
  '/nailart.png',
  '/plumbing.png'
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slideshow">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-content">
        <h2 className="hero-title">
          Connecting you with Trusted professionals, right when you need them.
        </h2>
        <h3 className="hero-subtitle">
          From beauty service to home repairs, find and book reliable experts.
        </h3>
        <p className="hero-description">
          Explore verified service providers, check ratings and reviews, and book appointments easily.
        </p>
        <button className="hero-button">GET STARTED</button>
      </div>
    </div>
  );
};

export default HeroSection;

