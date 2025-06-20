
/*import React from 'react';
import './Home.css';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className="home-wrapper">
      <HeroSection />
    </div>
  );
}

export default Home;*/

import React from 'react';
import './Home.css';
import HeroSection from '../components/HeroSection';

import plumbing from '../assets/plum.png';
import electric from '../assets/electri.png';
import beauty from '../assets/treatment.png';
import carpenter from '../assets/featured.png';
import appliance from '../assets/repair.png';

function Home() {
  const services = [
    {
      image: plumbing,
      title: 'Plumbing',
      description: 'Leak repair, bathroom fittings, and pipe installations.',
    },
    {
      image: electric,
      title: 'Electricians',
      description: 'Lighting, wiring, appliances — all electrical works.',
    },
    {
      image: beauty,
      title: 'Beauty Treatment',
      description: 'Salon at home – facial, hair, nail, body treatment and facial',
    },
    {
      image: carpenter,
      title: 'Carpenter',
      description: 'Furniture repair, woodwork, fittings, and shelves.',
    },
    {
      image: appliance,
      title: 'Appliance Repair',
      description: 'AC, fridge, microwave,  and more – quick fixes.', 
    },
  ];

  return (
    <div className="home-wrapper">
      <HeroSection />
      <section className="services-section" id="services">
        <h4 className="services-heading-small">FEATURES</h4>
        <h2 className="services-heading">Our Features & Services</h2>
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <img src={item.image} alt={item.title} className="service-image" />
              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.description}</p>
              <button className="service-button">MORE</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

