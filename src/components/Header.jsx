// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInDownVariant } from '../utils/motionVariants'; // Import the variant

/**
 * Header component for the Codec landing page.
 * It contains the logo and navigation links.
 */
function Header() {
  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={fadeInDownVariant}
    >
      <div className="header-content">
        <div className="header-logo">codec</div>
        <nav className="header-nav">
          <a href="#" className="header-nav-link">The Codec Blog</a>
          <a href="#" className="header-nav-link">Solutions</a>
          <a href="#" className="header-nav-link">Technologies</a>
          <a href="#" className="header-nav-link">Industries</a>
          <a href="#" className="header-nav-link">Case Studies</a>
          <a href="#" className="header-nav-link">Client success</a>
          <a href="#" className="header-nav-link">About</a>
          <a href="#" className="header-nav-link">Resources</a>
          <a href="#" className="header-nav-link">Contact us</a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
