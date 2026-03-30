// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Venchidex Electrical. All rights reserved.</p>
        <nav className="footer-nav">
          <Link href="/about">About</Link>
          <Link  href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
