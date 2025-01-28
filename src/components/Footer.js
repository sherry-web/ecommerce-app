import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="footer-contact">
        <p>Email: support@ecommerce.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;