// src/components/Footer.jsx
import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Venchidex Electrical. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;