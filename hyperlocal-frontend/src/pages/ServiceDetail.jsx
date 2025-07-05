/*[import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import './ServiceDetail.css';

function ServiceDetail() {
  const location = useLocation();
  const { service } = location.state || {};
  const [formData, setFormData] = useState({ address: '', reason: '' });
  const [mapUrl, setMapUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedAddress = encodeURIComponent(formData.address);
    setMapUrl(`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`);
  };

  return (
    <div className="service-detail-page">
      <h2>{service?.title} Service Booking</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          name="reason"
          placeholder="Reason for calling service"
          required
          value={formData.reason}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {mapUrl && (
        <div className="map-container">
          <iframe
            title="Google Map"
            src={mapUrl}
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ServiceDetail;]*/


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ServiceDetail.css';




function ServiceDetail() {
  const { state } = useLocation();
  const [formData, setFormData] = useState({ address: '', reason: '' });
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMap(true);
  };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(formData.address)}`;

  return (
    <div className="service-detail-container">
      <h2>{state?.service?.title || "Service Detail"}</h2>
      <p>{state?.service?.description}</p>

      <form onSubmit={handleSubmit} className="service-form">
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="reason"
          placeholder="Reason for service"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {showMap && (
        <div className="map-container">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ServiceDetail;
