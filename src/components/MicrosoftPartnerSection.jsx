// src/components/MicrosoftPartnerSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../utils/motionVariants'; // Import the variant

/**
 * MicrosoftPartnerSection component highlights the company's status
 * as a trusted Microsoft service partner.
 */
function MicrosoftPartnerSection() {
  return (
    <motion.section
      className="ms-partner-section"
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
    >
      <div className="ms-partner-container">
        <div className="ms-partner-grid">
          <motion.div
            className="ms-partner-left"
            variants={fadeInUpVariant}
          >
            <div className="ms-partner-heading-background">Microsoft</div>
            <div className="ms-partner-title">
              Microsoft
              <br />
              Partner
            </div>
            <div className="ms-partner-tag-container">
              <div className="ms-partner-tag">
                Microsoft
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ms-partner-right"
            variants={fadeInUpVariant}
          >
            <h3 className="ms-partner-right-title">
              Your trusted
              <br />
              Microsoft service
              <br />
              partner
            </h3>
            <p className="ms-partner-right-description">
              As a certified Microsoft Gold Partner with more than
              <br />
              20 years of experience, we have the expertise and
              <br />
              skilled resources to bring innovations that delivers an
              <br />
              impact for your business. Our data experts and advanced
              <br />
              analytics consultants work with technology leaders to
              <br />
              you work in the best way possible.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default MicrosoftPartnerSection;
