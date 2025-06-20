import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
// Assuming you have Lucide icons available for social media, otherwise, these will need to be custom SVGs or placeholder divs.
// For simplicity, I will use placeholder divs for social icons as specific Lucide icons for all those social media platforms are not guaranteed to be directly available.
// If you have specific icon imports (e.g., { Linkedin, Instagram, Youtube, Twitter, Facebook } from 'lucide-react'), you can uncomment and use them.

/**
 * Header component for the Codec landing page.
 * It contains the logo and navigation links.
 */
function Header() {
  return (
    <header className="header animate-fade-in-down">
      <div className="header-content">
        <div className="header-logo">codec</div>
        <nav className="header-nav">
          <a href="#" className="header-nav-link">The Codec Blog</a>
          <a href="#" className="header-nav-link">Solutions</a>
          <a href="#" className="header-nav-link">Technologies</a>
          <a href="#" className="header-nav-link">Industries</a>
          <a href="#" className="header-nav-link">Case Studies</a>
          <a href="#" className="header-nav-link">Client success</a>
          <a href="#" className="header-nav-link">About</a>
          <a href="#" className="header-nav-link">Resources</a>
          <a href="#" className="header-nav-link">Contact us</a>
        </nav>
      </div>
    </header>
  );
}

/**
 * HeroSection component displays the main heading, descriptive text,
 * and a call-to-action button for the landing page.
 */
function HeroSection() {
  return (
    <section className="hero-section animate-fade-in-up delay-100">
      <div className="hero-section-container">
        <div className="hero-section-content">
          <h1 className="hero-section-title animate-fade-in delay-300">
            Impact,
            <br />
            <span className="hero-section-title-highlight">delivered</span>
          </h1>
          <p className="hero-section-description animate-fade-in delay-500">
In an industry that often falls short of its promises, Codec delivers.
Codec's unique project delivery framework helps organisations create dramatic shifts in efficiencies and customer experiences with new technology.
          </p>
          <button className="hero-section-button animate-fade-in delay-700">
            Learn more
            <ChevronRight className="hero-section-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * AIAdoSection component focuses on AI adoption for organizations,
 * with a description and a link to success stories.
 */
function AIAdoSection() {
  return (
    <section className="ai-adoption-section animate-fade-in-up delay-900">
      <div className="ai-adoption-container">
        <div className="ai-adoption-content">
          <h2 className="ai-adoption-title">
            Enabling AI adoption for Ireland's
            <br />
            leading organisations
          </h2>
          <p className="ai-adoption-description">
          Organisations across every industry are adopting new capabilities to enhance value creation through data-driven insights. 
          We implement solutions and ongoing support to expand access to your owned first-party data. 
          We then enable the use of machine learning and Al to uncover new insights and transform business decision-making.
          </p>
          <button className="ai-adoption-button">
            See all client success stories
            <ArrowRight className="ai-adoption-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * DataAISolutionsSection component highlights data and AI solutions,
 * along with service cards for specific areas like data governance and AI/ML.
 */
function DataAISolutionsSection() {
  return (
    <section className="data-ai-solutions-section animate-fade-in-up delay-1100">
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
          <div className="service-card animate-fade-in-up delay-1300">
            <h3 className="service-card-title">Data governance</h3>
            <ChevronRight className="service-card-icon" />
          </div>
          <div className="service-card-red animate-fade-in-up delay-1400">
            <h3 className="service-card-title-white">AI & Machine learning</h3>
            <ChevronRight className="service-card-icon-white" />
          </div>
          <div className="service-card animate-fade-in-up delay-1500">
            <h3 className="service-card-title">Data estate modernisation</h3>
            <ChevronRight className="service-card-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ExperienceSection component showcases the company's long-standing experience
 * and commitment to timely and budget-friendly project delivery.
 */
function ExperienceSection() {
  return (
    <section className="experience-section animate-fade-in-up delay-1700">
      <div className="experience-section-container">
        <div className="experience-section-grid">
          <div>
            <h2 className="experience-section-title">
              Celebrating over 40
              <br />
              years of impact.
              <br />
              Delivered on time &
              <br />
              on budget.
            </h2>
            <button className="experience-section-button">
              See all client success stories
              <ArrowRight className="experience-section-button-icon" />
            </button>
          </div>
          <div className="experience-section-text">
            <p className="experience-section-description">
              As a certified Microsoft Gold Partner, we are market
              <br />
              leaders delivering impact for some of Ireland's best
              <br />
              organisations, all while controlling costs and
              <br />
              mitigating risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ClientLogos component displays a row of client logos,
 * indicating partnerships or successful collaborations.
 */
function ClientLogos() {
  return (
    <section className="client-logos-section animate-fade-in-up delay-1900">
      <div className="client-logos-container">
        <div className="client-logos-grid">
          <div className="client-logo">An Roinn Talmhaíochta</div>
          <div className="client-logo">SCIENCE FOUNDATION IRELAND</div>
          <div className="client-logo">applegreen</div>
          <div className="client-logo">Goodbody</div>
          <div className="client-logo">NTA</div>
          <div className="client-logo">flipdish</div>
        </div>
      </div>
    </section>
  );
}

/**
 * MicrosoftPartnerSection component highlights the company's status
 * as a trusted Microsoft service partner.
 */
function MicrosoftPartnerSection() {
  return (
    <section className="ms-partner-section animate-fade-in-up delay-2100">
      <div className="ms-partner-container">
        <div className="ms-partner-grid">
          <div className="ms-partner-left">
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
          </div>
          <div className="ms-partner-right">
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
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Footer component with links, company info, and social media icons.
 */
function Footer() {
  return (
    <footer className="footer-section animate-fade-in-up delay-2300">
      <div className="footer-container">
        <div className="footer-left-content">
          <div className="footer-thought-leadership">
            <h2>(Re)Think Data</h2>
            <h2>Think LatentView</h2>
          </div>
          <div className="footer-logo-area">
            {/* Using inline SVG for LatentView logo and 20 Years graphic based on image */}
            <svg viewBox="0 0 100 100" className="latentview-logo">
              {/* This is a placeholder SVG. Replace with actual LatentView logo SVG path data */}
              <rect x="0" y="0" width="100" height="100" fill="#fff" />
              <text x="50" y="55" font-family="Arial" font-size="20" fill="#000" text-anchor="middle">LatentView</text>
            </svg>
            <svg viewBox="0 0 100 100" className="years-logo">
              {/* This is a placeholder SVG. Replace with actual "20 Years" logo SVG path data */}
              <circle cx="50" cy="50" r="40" stroke="#0f9e5b" stroke-width="5" fill="none" />
              <text x="50" y="55" font-family="Arial" font-size="25" fill="#0f9e5b" text-anchor="middle">20</text>
              <text x="50" y="75" font-family="Arial" font-size="10" fill="#0f9e5b" text-anchor="middle">years</text>
              <text x="50" y="30" font-family="Arial" font-size="10" fill="#0f9e5b" text-anchor="middle">Building</text>
              <text x="50" y="40" font-family="Arial" font-size="10" fill="#0f9e5b" text-anchor="middle">What's Next</text>
            </svg>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3 className="footer-column-title">Industries</h3>
            <a href="#" className="footer-link">Technology</a>
            <a href="#" className="footer-link">CPG</a>
            <a href="#" className="footer-link">Retail</a>
            <a href="#" className="footer-link">Financial Services</a>
            <a href="#" className="footer-link">Industrials</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Insights</h3>
            <a href="#" className="footer-link">Case Studies</a>
            <a href="#" className="footer-link">Infographics</a>
            <a href="#" className="footer-link">Events</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Whitepapers</a>
            <a href="#" className="footer-link">Glossary</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">About</h3>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Leadership Team</a>
            <a href="#" className="footer-link">Advisory Council</a>
            <a href="#" className="footer-link">Culture</a>
            <a href="#" className="footer-link">Corporate Social Responsibility</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Investors</h3>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Alumni Portal</a>
            <a href="#" className="footer-link">Newsroom</a>
          </div>
        </div>

        <div className="footer-social-copyright">
          <div className="footer-social-icons">
            {/* Using generic divs for social icons. Replace with actual SVG icons or specific Lucide icons if desired */}
            <a href="#" className="social-icon-link"><div className="social-icon linkedin-icon"></div></a>
            <a href="#" className="social-icon-link"><div className="social-icon instagram-icon"></div></a>
            <a href="#" className="social-icon-link"><div className="social-icon youtube-icon"></div></a>
            <a href="#" className="social-icon-link"><div className="social-icon twitter-icon"></div></a>
            <a href="#" className="social-icon-link"><div className="social-icon facebook-icon"></div></a>
          </div>
          <div className="footer-copyright-links">
            <p className="footer-copyright">Copyright © 2025 LatentView Analytics.</p>
            <a href="#" className="footer-privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
      <Footer /> {/* Added the Footer component here */}
    </div>
  );
}