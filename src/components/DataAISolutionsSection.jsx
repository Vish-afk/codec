// src/components/DataAISolutionsSection.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, cardItemVariants } from '../utils/motionVariants'; // Import variants

/**
 * DataAISolutionsSection component highlights data and AI solutions,
 * along with service cards for specific areas like data governance and AI/ML.
 */
function DataAISolutionsSection() {
  return (
    <motion.section
      className="data-ai-solutions-section"
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }} // Stagger children animations
    >
      <div className="data-ai-solutions-container">
        <div className="data-ai-solutions-header">
          <h2 className="data-ai-solutions-title">
            Data & AI solutions that deliver
            <br />
            impact
          </h2>
          <p className="data-ai-solutions-description">
            Organisations across every industry are adopting new capabilities to enhance value creation through data-driven insights.
            We implement solutions and amplify support for upskilled users to get control their data along with informed the use of
            artificial intelligence, machine learning and automation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="service-cards-grid">
          <motion.div
            className="service-card"
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="service-card-title">Data governance</h3>
            <ChevronRight className="service-card-icon" />
          </motion.div>
          <motion.div
            className="service-card-red"
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="service-card-title-white">AI & Machine learning</h3>
            <ChevronRight className="service-card-icon-white" />
          </motion.div>
          <motion.div
            className="service-card"
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="service-card-title">Data estate modernisation</h3>
            <ChevronRight className="service-card-icon" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default DataAISolutionsSection;
