import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">
        About Our <span>Company</span>
      </h1>

      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Team"
          />
        </div>

        <div className="about-text">
          <p>
            At <strong>EasyService</strong>, we are redefining how local services are discovered and delivered. Whether it's a plumber, an electrician, or a beauty expert, our platform connects users with trusted professionals at the tap of a button.
          </p>
          <p>
            Our mission is simple — to make booking hyperlocal services as easy, fast, and reliable as online shopping. We’re dedicated to supporting both customers and service providers through a user-friendly app, transparent pricing, and real-time tracking.
          </p>
          <p>
            From scheduling to secure payments and feedback, EasyService covers everything — making it the go-to choice for households and professionals across the city.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
