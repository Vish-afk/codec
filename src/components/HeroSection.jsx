// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeInUpVariant } from '../utils/motionVariants'; // Removed fadeInDownVariant if not used
import DotGrid from './DotGrid';

/**
 * HeroSection component displays the main heading, description,
 * an animated dot grid, a typewriter effect, and a scroll-down arrow.
 */
function HeroSection() {
  // Pre-define parts of the sentence with their colors
  const textParts = [
    { text: "Impact,", color: "#1a202c" }, // Dark color for "Impact,"
    { text: " delivered.", color: "#ef4444" } // Red color for " delivered."
  ];

  // Combine parts to get the full string for typing length calculation
  const fullCombinedText = textParts.map(p => p.text).join('');

  const [typedCharsCount, setTypedCharsCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let timer;
    if (typedCharsCount < fullCombinedText.length) {
      timer = setTimeout(() => {
        setTypedCharsCount(prev => prev + 1);
      }, typingSpeed);
    } else {
      setIsTypingComplete(true);
    }
    return () => clearTimeout(timer);
  }, [typedCharsCount, fullCombinedText.length, typingSpeed]);

  // Function to render the text with dynamic coloring based on typed characters
  const renderTextWithColor = () => {
    let currentTotalLength = 0;
    return textParts.map((part, index) => {
      // Calculate how many characters of the current part should be displayed
      const charsToDisplayInPart = Math.max(0, Math.min(part.text.length, typedCharsCount - currentTotalLength));
      const textToDisplay = part.text.substring(0, charsToDisplayInPart);
      currentTotalLength += part.text.length; // Update total length processed

      return (
        <span key={index} style={{ color: part.color }}>
          {textToDisplay}
        </span>
      );
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-grid">
          <motion.div
            className="hero-section-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-section-title">
              {renderTextWithColor()}
              {/* Blinking cursor only when typing is not complete */}
              {!isTypingComplete && (
                <span className="blinking-cursor">|</span>
              )}
            </h1>
            <p className="hero-section-description">
              Our unique partnership approach is designed to deliver transformational results by embedding our team into yours.
              We challenge, deliver & excel to help you get ahead.
            </p>
            <div className="hero-section-arrow-down-container">
              <button className="hero-section-arrow-down">
                <ArrowDown className="hero-section-arrow-down-icon" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-section-right"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DotGrid />
          </motion.div>
        </div>
      </div>
      {/* Blinking cursor CSS (can be added to global styles or HeroSection.css) */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 300;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;