import React from "react";
import "./lastsection5.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Waves Container */}
      <div className="footer-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(39, 36, 36, 0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(114, 113, 113, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(3, 3, 3, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="black" />
          </g>
        </svg>
      </div>

      {/* Footer Main Content */}
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Posterized.in</strong>, where creativity meets artistry in the form of stunning customized and designer posters. We believe that every wall has a story to tell, and we are here to help you tell yours.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Cancellation and Shipping Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Affiliate</a></li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="footer-section">
          <h2>Subscribe to our emails</h2>
          <div className="subscribe">
            <input type="email" placeholder="Email" />
            <button>→</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025, Posterized • <a href="#">Refund Policy</a> • <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a> • <a href="#">Shipping Policy</a> • <a href="#">Contact Information</a></p>
      </div>
    </footer>
  );
}
