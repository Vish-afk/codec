// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../utils/motionVariants'; // Import the variant

/**
 * Footer component with links, company info, and social media icons.
 */
function Footer() {
  return (
    <motion.footer
      className="footer-section"
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      variants={fadeInUpVariant}
      transition={{ delay: 0.1 }} // Small delay for the entire footer
    >
      <div className="footer-container">
        <div className="footer-left-content">
          <div className="footer-thought-leadership">
            <h2>(Re)Think Data</h2>
            <h2>Think LatentView</h2>
          </div>
          <div className="footer-logo-area">
            {/* Using inline SVG for LatentView logo and 20 Years graphic based on image */}
            {/* Replace with actual LatentView logo SVG path data if available */}
            <svg viewBox="0 0 100 100" className="latentview-logo">
              <rect x="0" y="0" width="100" height="100" fill="white" /> {/* Placeholder for logo */}
              <text x="50" y="55" fontFamily="Arial" fontSize="20" fill="#000" textAnchor="middle">LV</text>
            </svg>
            {/* Replace with actual "20 Years" logo SVG path data if available */}
            <svg viewBox="0 0 100 100" className="years-logo">
              <circle cx="50" cy="50" r="40" stroke="#0f9e5b" strokeWidth="5" fill="none" />
              <text x="50" y="55" fontFamily="Arial" fontSize="25" fill="#0f9e5b" textAnchor="middle">20</text>
              <text x="50" y="75" fontFamily="Arial" fontSize="10" fill="#0f9e5b" textAnchor="middle">years</text>
              <text x="50" y="30" fontFamily="Arial" fontSize="10" fill="#0f9e5b" textAnchor="middle">Building</text>
              <text x="50" y="40" fontFamily="Arial" fontSize="10" fill="#0f9e5b" textAnchor="middle">What's Next</text>
            </svg>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3 className="footer-column-title">Industries</h3>
            <a href="#" className="footer-link">Technology</a>
            <a href="#" className="footer-link">CPG</a>
            <a href="#" className="footer-link">Retail</a>
            <a href="#" className="footer-link">Financial Services</a>
            <a href="#" className="footer-link">Industrials</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Insights</h3>
            <a href="#" className="footer-link">Case Studies</a>
            <a href="#" className="footer-link">Infographics</a>
            <a href="#" className="footer-link">Events</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Whitepapers</a>
            <a href="#" className="footer-link">Glossary</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">About</h3>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Leadership Team</a>
            <a href="#" className="footer-link">Advisory Council</a>
            <a href="#" className="footer-link">Culture</a>
            <a href="#" className="footer-link">Corporate Social Responsibility</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Investors</h3>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Alumni Portal</a>
            <a href="#" className="footer-link">Newsroom</a>
          </div>
        </div>

        <div className="footer-social-copyright">
          <div className="footer-social-icons">
            {/* Using generic divs for social icons. These are designed to be masked by CSS with SVG backgrounds */}
            <motion.a href="#" className="social-icon-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><div className="social-icon linkedin-icon"></div></motion.a>
            <motion.a href="#" className="social-icon-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><div className="social-icon instagram-icon"></div></motion.a>
            <motion.a href="#" className="social-icon-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><div className="social-icon youtube-icon"></div></motion.a>
            <motion.a href="#" className="social-icon-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><div className="social-icon twitter-icon"></div></motion.a>
            <motion.a href="#" className="social-icon-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><div className="social-icon facebook-icon"></div></motion.a>
          </div>
          <div className="footer-copyright-links">
            <p className="footer-copyright">Copyright © 2025 LatentView Analytics.</p>
            <a href="#" className="footer-privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
