// src/components/DataAISolutionsSection.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

/**
 * DataAISolutionsSection component highlights data and AI solutions,
 * along with service cards for specific areas like data governance and AI/ML.
 */
function DataAISolutionsSection() {
  return (
    <motion.section
      className="data-ai-solutions-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      <div className="data-ai-solutions-container">
        <div className="data-ai-solutions-header">
          <motion.h2 className="data-ai-solutions-title" variants={fadeInUpVariant}>
            Data & AI solutions that deliver
            <br />
            impact
          </motion.h2>
          <motion.p className="data-ai-solutions-description" variants={fadeInUpVariant}>
            Organisations across every industry are adopting new capabilities to enhance value creation through data-driven insights.
            We implement solutions and amplify support for upskilled users to get control their data along with informed the use of
            artificial intelligence, machine learning and automation.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="service-cards-grid">
          <motion.div
            className="service-card"
            variants={cardItemVariants}
          >
            <h3 className="service-card-title">Data governance</h3>
            <ChevronDown className="service-card-icon" />
          </motion.div>
          <motion.div
            className="service-card-red service-card-center" /* The middle card retains this class */
            variants={cardItemVariants}
          >
            <h3 className="service-card-title-white">AI & Machine learning</h3>
            <ChevronDown className="service-card-icon-white" />
          </motion.div>
          <motion.div
            className="service-card"
            variants={cardItemVariants}
          >
            <h3 className="service-card-title">Data estate modernisation</h3>
            <ChevronDown className="service-card-icon" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default DataAISolutionsSection;