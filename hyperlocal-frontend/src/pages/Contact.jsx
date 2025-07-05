/*[import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-box">
        <div className="text-center">
          <h2 className="mt-0 contact-heading">Let's Get In Touch!</h2>
          <hr className="divider" />
          <p className="text-muted mb-4 contact-subtext">
            "Have a service request, partnership inquiry, or just a question? Reach out to us — our team is ready to assist you!"
          </p>
        </div>
        <form>
          <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Full name" required />
            <label htmlFor="name">Full name</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="email" type="email" placeholder="Email" required />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="message" placeholder="Message" style={{ height: '10rem' }} required />
            <label htmlFor="message">Message</label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-xl" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
]*/

import React, { useState } from 'react';
import './Contact.css';
 import axios from 'axios';
//import api from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await api.post('/api/contact', formData);
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="contact">
      <div className="contact-box">
        <div className="text-center">
          <h2 className="mt-0 contact-heading">Let's Get In Touch!</h2>
          <hr className="divider" />
          <p className="text-muted mb-4 contact-subtext">
            "Have a service request, partnership inquiry, or just a question? Reach out to us — our team is ready to assist you!"
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Full name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="message"
              placeholder="Message"
              style={{ height: '10rem' }}
              required
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary btn-xl" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
