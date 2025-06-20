// src/components/AIAdoSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../utils/motionVariants';
// No need to import AIAdoSection.css here, it's imported in styles.css

/**
 * AIAdoSection component focuses on AI adoption for organizations,
 * with a description and a link to success stories.
 */
function AIAdoSection() {
  return (
    <motion.section
      className="ai-adoption-section"
      id="ai-adoption-section" // --- NEW: Added ID for scroll targeting ---
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      variants={fadeInUpVariant}
      transition={{ delay: 0.2 }}
    >
      <div className="ai-adoption-container">
        <div className="ai-adoption-content">
          <h2 className="ai-adoption-title">
            Enabling AI adoption for Ireland's
            <br />
            leading organisations
          </h2>
          <p className="ai-adoption-description">
            Organisations across every industry are adopting new capabilities to enhance value creation through data-driven insights.
            We implement solutions and ongoing support to expand access to your owned first-party data.
            We then enable the use of machine learning and Al to uncover new insights and transform business decision-making.
          </p>
          <motion.button
            className="ai-adoption-button"
            whileTap={{ scale: 0.95 }}
          >
            See all client success stories
            <ArrowRight className="ai-adoption-button-icon" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default AIAdoSection;