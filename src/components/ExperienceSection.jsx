// src/components/ExperienceSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../utils/motionVariants'; // Import the variant

/**
 * ExperienceSection component showcases the company's long-standing experience
 * and commitment to timely and budget-friendly project delivery.
 */
function ExperienceSection() {
  return (
    <motion.section
      className="experience-section"
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
    >
      <div className="experience-section-container">
        <div className="experience-section-grid">
          <motion.div variants={fadeInUpVariant}>
            <h2 className="experience-section-title">
              Celebrating over 40
              <br />
              years of impact.
              <br />
              Delivered on time &
              <br />
              on budget.
            </h2>
            <motion.button
              className="experience-section-button"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              See all client success stories
              <ArrowRight className="experience-section-button-icon" />
            </motion.button>
          </motion.div>
          <motion.div className="experience-section-text" variants={fadeInUpVariant}>
            <p className="experience-section-description">
              As a certified Microsoft Gold Partner, we are market
              <br />
              leaders delivering impact for some of Ireland's best
              <br />
              organisations, all while controlling costs and
              <br />
              mitigating risks.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
