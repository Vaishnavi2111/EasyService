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
  const [formData, setFormData] = useState({
    line1: '',
    line2: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    reason: '',
  });
  const [showMap, setShowMap] = useState(false);
  const [shopkeepers, setShopkeepers] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMap(true);

    // Identify service type from the page (title passed via router)
    const serviceType = state?.service?.title?.toLowerCase();

    // Shopkeeper mock data for each service
    const shopkeeperData = {
      plumbing: [
        { name: "Ajay Plumbing Services", address: "123 MG Road, Pune", phone: "9876543210" },
        { name: "Leak Fix Experts", address: "45 Shivaji Nagar, Pune", phone: "9023456789" },
        { name: "Pipe Masters", address: "Near Deccan Gymkhana", phone: "9988776655" },
        { name: "AquaFlow Plumbers", address: "Katraj, Pune", phone: "9767123456" },
        { name: "BluePipe Solutions", address: "Kharadi, Pune", phone: "9856347890" }
      ],
      electricians: [
        { name: "Spark Electric Works", address: "Sector 5, Navi Mumbai", phone: "9988123456" },
        { name: "Current Care", address: "Vashi Plaza", phone: "8899776655" },
        { name: "VoltFix Pros", address: "Nerul, Mumbai", phone: "9876512345" },
        { name: "BrightWatt Electricians", address: "Thane West", phone: "9777788888" },
        { name: "LiveWire Electricals", address: "Pimpri, Pune", phone: "9001122334" }
      ],
      "beauty treatment salon at home": [
        { name: "Glow & Go", address: "Baner Road, Pune", phone: "9765432180" },
        { name: "Urban Glam", address: "Kothrud", phone: "9832123412" },
        { name: "Beauty Lounge", address: "Aundh, Pune", phone: "9801234567" },
        { name: "Home Glamour", address: "Wakad, Pune", phone: "9798989898" },
        { name: "Bliss Beauty Hub", address: "Hinjewadi, Pune", phone: "9888123456" }
      ],
      carpenter: [
        { name: "WoodFix Solutions", address: "Bandra East", phone: "9988001122" },
        { name: "CraftWood Works", address: "Kurla, Mumbai", phone: "9090909090" },
        { name: "Smart Carpentry", address: "Panvel", phone: "9123456780" },
        { name: "FineEdge Carpentry", address: "Chembur, Mumbai", phone: "9345678901" },
        { name: "Timber Touch", address: "Vashi, Navi Mumbai", phone: "9898981212" }
      ],
      "appliance repair": [
        { name: "CoolTech Services", address: "Mulund West", phone: "9900112233" },
        { name: "Appliance Doctors", address: "Borivali", phone: "8888777666" },
        { name: "Fix It Hub", address: "Kandivali East", phone: "9977889900" },
        { name: "Gadget Repair Hub", address: "Kalyan", phone: "9797011223" },
        { name: "QuickFix Appliances", address: "Vikhroli, Mumbai", phone: "9898765432" }
      ]
    };

    // Get matching shopkeepers based on selected service
    const relevantShops = shopkeeperData[serviceType] || [];

    // Update state so that cards will be shown
    setShopkeepers(relevantShops);
  };


  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const fullAddress = `${formData.line1}, ${formData.line2}, ${formData.landmark}, ${formData.city}, ${formData.state} ${formData.pincode}`;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="service-detail-page"> {/* full width wrapper */}
      <div className="service-detail-container">
        <h2>{state?.service?.title || "Service Detail"}</h2>
        <p>{state?.service?.description}</p>

        <form onSubmit={handleSubmit} className="service-form">
          <input
            type="text"
            name="line1"
            placeholder="Address Line 1"
            value={formData.line1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="line2"
            placeholder="Address Line 2"
            value={formData.line2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
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

        {shopkeepers.length > 0 && (
          <div className="shopkeeper-cards-container">
            <h3>Available Service Providers Near You</h3>
            <div className="cards-wrapper">
              {shopkeepers.map((shop, index) => (
                <div key={index} className="shopkeeper-card">
                  <h4>{shop.name}</h4>
                  <p><strong>Address:</strong> {shop.address}</p>
                  <p><strong>Phone:</strong> {shop.phone}</p>
                  <button className="book-button">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ServiceDetail;
