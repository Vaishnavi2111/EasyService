// src/components/OurServices.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Cleaning', icon: '/assets/icons/cleaning.png', description: 'Professional cleaning services' },
  { title: 'Plumbing', icon: '/assets/icons/plumbing.png', description: 'Expert plumbing solutions' },
  { title: 'Electrician', icon: '/assets/icons/electrician.png', description: 'Reliable electrical services' },
];

const OurServices = () => (
  <div className="py-5 bg-white">
    <div className="container">
      <h2 className="mb-4 text-success text-center">Our Services</h2>
      <div className="row">
        {services.map((srv, idx) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={idx}>
            <ServiceCard {...srv} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurServices;
