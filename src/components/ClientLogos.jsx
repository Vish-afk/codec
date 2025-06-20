// src/components/ClientLogos.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { logoItemVariant } from '../utils/motionVariants'; // Import the variant

/**
 * ClientLogos component displays a row of client logos,
 * indicating partnerships or successful collaborations.
 */
function ClientLogos() {
  return (
    <motion.section
      className="client-logos-section"
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
    >
      <div className="client-logos-container">
        <div className="client-logos-grid">
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>An Roinn Talmhaíochta</motion.div>
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>SCIENCE FOUNDATION IRELAND</motion.div>
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>applegreen</motion.div>
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>Goodbody</motion.div>
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>NTA</motion.div>
          <motion.div className="client-logo" variants={logoItemVariant} whileHover={{ scale: 1.08 }}>flipdish</motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ClientLogos;
