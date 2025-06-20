// src/components/HeroSection.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInVariant, fadeInUpVariant } from '../utils/motionVariants'; // Import variants

/**
 * HeroSection component displays the main heading, descriptive text,
 * and a call-to-action button for the landing page.
 */
function HeroSection() {
  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariant}
      transition={{ delay: 0.1 }}
    >
      <div className="hero-section-container">
        <div className="hero-section-content">
          <motion.h1
            className="hero-section-title"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ delay: 0.3 }}
          >
            Impact,
            <br />
            <span className="hero-section-title-highlight">delivered</span>
          </motion.h1>
          <motion.p
            className="hero-section-description"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ delay: 0.5 }}
          >
            In an industry that often falls short of its promises, Codec delivers.
            Codec's unique project delivery framework helps organisations create dramatic shifts in efficiencies and customer experiences with new technology.
          </motion.p>
          <motion.button
            className="hero-section-button"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
            <ChevronRight className="hero-section-button-icon" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
