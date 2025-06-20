// src/components/DotGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Don't import DotGrid.css here, it's imported in styles.css

/**
 * DotGrid component displays an animated grid of dots.
 * Uses Framer Motion for individual dot animations.
 */
const DotGrid = () => {
  const GRID_COLS = 15;
  const GRID_ROWS = 10;
  const dots = Array.from({ length: GRID_COLS * GRID_ROWS }); // Create an array for the dots

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Stagger animation for individual dots
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: [0.3, 0.7, 0.3], // Animate opacity
      scale: [1, 1.1, 1], // Animate scale for a pulse effect
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2, // Random delay for a more organic look
      },
    },
  };

  return (
    <motion.div
      className="dot-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ '--grid-cols': GRID_COLS, '--grid-rows': GRID_ROWS }} // Pass CSS variables
    >
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="dot"
          variants={dotVariants}
        />
      ))}
    </motion.div>
  );
};

export default DotGrid;