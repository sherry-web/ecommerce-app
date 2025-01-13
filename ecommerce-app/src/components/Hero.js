import React from 'react';
import '../styles/Hero.css';
import backgroundLogo from '../assets/backgroundlogo.svg'; // Import the image

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <div className="hero-content">
          <h1>Welcome to Our E-commerce Store</h1>
          <p>
            Discover a wide range of products tailored to your needs. Shop now and
            experience the best deals in town.
          </p>
          <a href="#shop" className="btn-cta">
            Shop Now
          </a>
        </div>
      </div>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${backgroundLogo})` }} // Use the imported image
      ></div>
    </div>
  );
};

export default Hero;
