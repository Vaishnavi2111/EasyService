// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all">
      <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
