// src/components/Header.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInDownVariant } from '../utils/motionVariants';

/**
 * Header component for the Codec landing page.
 * It contains the logo and navigation links with dropdowns.
 */
function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  // Effect to handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const navItems = [
    { name: 'The Codec Blog', href: '#' },
    {
      name: 'Solutions',
      href: '#',
      dropdown: ['Solution A', 'Solution B', 'Solution C']
    },
    {
      name: 'Technologies',
      href: '#',
      dropdown: ['Tech 1', 'Tech 2', 'Tech 3']
    },
    {
      name: 'Industries',
      href: '#',
      dropdown: ['Industry X', 'Industry Y', 'Industry Z']
    },
    { name: 'Case Studies', href: '#' },
    { name: 'Client success', href: '#' },
    {
      name: 'About',
      href: '#',
      dropdown: ['Our Story', 'Team', 'Careers']
    },
    { name: 'Resources', href: '#' },
    { name: 'Contact us', href: '#' },
  ];

  return (
    <motion.header
      // Apply 'scrolled' class conditionally
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={fadeInDownVariant}
    >
      <div className="header-content">
        <a href="/" className="header-logo">codec</a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`header-nav-item ${item.dropdown ? 'has-dropdown' : ''} ${openDropdown === item.name ? 'open' : ''}`}
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href} className="header-nav-link">
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    className={`h-4 w-4 dropdown-arrow ${openDropdown === item.name ? 'rotate-180' : ''}`}
                  />
                )}
              </a>
              {item.dropdown && (
                <ul className={`dropdown-menu ${openDropdown === item.name ? 'open' : ''}`}>
                  {item.dropdown.map((subItem, index) => (
                    <li key={index} className="dropdown-item">
                      <a href="#">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;