import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'; // Ensure you create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">© 2024 UOB Fraud Detection Web Application</span>
        <div className="footer-links">
          <Link to="/aboutus">About Us</Link>
          <Link to="/methodology">Our AI Methodology</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
