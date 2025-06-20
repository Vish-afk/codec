// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeInUpVariant } from '../utils/motionVariants';
import DotGrid from './DotGrid';

/**
 * HeroSection component displays the main heading, description,
 * an animated dot grid, a typewriter effect, and a scroll-down arrow.
 */
function HeroSection() {
  // Pre-define parts of the sentence with their colors
  const textParts = [
    { text: "Impact,", color: "#1a202c" }, // Dark color for "Impact,"
    { text: " delivered.", color: "#ef4444" } // Red color for " delivered." (note the leading space)
  ];

  // Combine parts to get the full string for typing length calculation
  const fullCombinedText = textParts.map(p => p.text).join('');

  const [typedCharsCount, setTypedCharsCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 10; // milliseconds per character

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

  // Function to render the text with dynamic coloring and stable width
  const renderTextWithColor = () => {
    let currentOverallCharCount = 0; // Tracks characters processed across all parts
    const renderedElements = [];

    textParts.forEach((part, index) => {
      const fullPartText = part.text;
      const partLength = fullPartText.length;

      // Determine how many characters of the current part should be visible (typed)
      const charsToDisplayInPart = Math.max(0, Math.min(partLength, typedCharsCount - currentOverallCharCount));
      const typedContent = fullPartText.substring(0, charsToDisplayInPart);
      const hiddenContent = fullPartText.substring(charsToDisplayInPart); // Remaining content to be hidden

      renderedElements.push(
        <span key={`part-${index}`} style={{ color: part.color, display: 'inline-block' }}>
          {/* Render the typed content as visible */}
          <span style={{ visibility: 'visible' }}>{typedContent}</span>
          {/* Render the untyped content as hidden, but occupying space */}
          <span style={{ visibility: 'hidden' }}>{hiddenContent}</span>
        </span>
      );

      // Add a line break after the first part ("Impact,")
      if (index === 0) {
        renderedElements.push(<br key="br-after-impact" />);
      }

      currentOverallCharCount += partLength; // Update total length processed for the next part
    });

    return renderedElements;
  };

  /**
   * Handles the click event for the arrow down button.
   * Scrolls the window smoothly to the next section (AIAdoSection).
   */
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('ai-adoption-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            </h1>
            <p className="hero-section-description">
              In an industry that often falls short of its promises, Codec delivers.
              Codec's unique project delivery framework helps organisations create dramatic shifts in efficiencies and customer experiences with new technology.
            </p>
            <div className="hero-section-arrow-down-container">
              <button
                className="hero-section-arrow-down"
                onClick={handleScrollToNextSection} // Attach the click handler
                aria-label="Scroll to next section" // Add accessibility label
              >
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
      <div className="hero-section-divider"></div>
    </section>
  );
}

export default HeroSection;