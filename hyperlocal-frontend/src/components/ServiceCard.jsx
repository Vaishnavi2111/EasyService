// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, icon, description }) => (
  <div className="card h-100 text-center border-0 shadow-sm">
    <div className="card-body">
      <img src={icon} alt={title} className="mb-3" style={{ width: '60px', height: '60px' }} />
      <h5 className="card-title">{title}</h5>
      <p className="card-text text-muted">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
