// src/components/DotGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Don't import DotGrid.css here, it's imported in styles.css

/**
 * DotGrid component displays an animated grid of dots.
 * Uses Framer Motion for individual dot animations.
 */
const DotGrid = () => {
  const GRID_COLS = 35; // Increased density (adjust as needed)
  const GRID_ROWS = 25; // Increased density (adjust as needed)
  const dots = Array.from({ length: GRID_COLS * GRID_ROWS }); // Create an array for the dots

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // No staggerChildren here for a pure wave effect, delay is calculated per dot
      // staggerChildren: 0.005,
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    // Use a function to pass the custom prop (index 'i') to calculate delay
    visible: (i) => {
      const colIndex = i % GRID_COLS;
      const rowIndex = Math.floor(i / GRID_COLS);

      // Adjust these factors to control wave speed and direction
      // Smaller values make the wave slower/more spread out
      const baseWaveDelay = 0.02; // Determines overall speed of the wave
      const rowOffset = 0.02; // Additional delay per row
      const colOffset = 0.02; // Additional delay per column

      // Calculate delay for diagonal wave (or customize for horizontal/vertical)
      const calculatedDelay = (rowIndex * rowOffset) + (colIndex * colOffset) + baseWaveDelay;

      return {
        opacity: [0.3, 0.7, 0.3], // Animate opacity
        scale: [1, 1.1, 1], // Animate scale for a pulse effect
        transition: {
          duration: 3, // Duration of one pulse cycle
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: calculatedDelay, // Use the calculated delay for wave effect
        },
      };
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
          custom={i} // Pass the index 'i' as a custom prop to the variant
        />
      ))}
    </motion.div>
  );
};

export default DotGrid;