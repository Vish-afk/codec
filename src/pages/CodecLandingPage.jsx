// src/pages/CodecLandingPage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AIAdoSection from '../components/AIAdoSection';
import DataAISolutionsSection from '../components/DataAISolutionsSection';
import ExperienceSection from '../components/ExperienceSection';
import ClientLogos from '../components/ClientLogos';
import MicrosoftPartnerSection from '../components/MicrosoftPartnerSection';
import Footer from '../components/Footer';

/**
 * CodecLandingPage component assembles all the individual sections
 * to form the complete landing page.
 */
export default function CodecLandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AIAdoSection />
      <DataAISolutionsSection />
      <ExperienceSection />
      <ClientLogos />
      <MicrosoftPartnerSection />
      <Footer />
    </div>
  );
}
