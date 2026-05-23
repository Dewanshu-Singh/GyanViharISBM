import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Stats from './Stats';
import './HeroContent.css';

const HeroContent = () => {
  return (
    <div className="hero-content-container">
      <h3 className="school-name fade-in-up">International School of Business Management</h3>
      
      <div className="floating-badge delay-400 fade-in-up">S</div>
      
      <h1 className="hero-heading">
        <span className="fade-in-up delay-100 text-gradient">Learn.</span>
        <span className="fade-in-up delay-200 text-gradient">Lead.</span>
        <span className="fade-in-up delay-300 text-gradient-gold">Transform.</span>
      </h1>
      
      <h2 className="hero-subheading fade-in-up delay-300">
        Architecting the Next Decade of Global Business
      </h2>
      
      <p className="hero-description fade-in-up delay-400">
        At ISBM, we don't just teach business. We engineer leaders who reshape industries, build enterprises, and command boardrooms — anywhere in the world.
      </p>
      
      <div className="hero-buttons fade-in-up delay-400">
        <a href="#admissions" className="btn-primary" style={{ textDecoration: 'none' }}>
          Apply Now <ArrowRight size={18} />
        </a>
        <button className="btn-secondary">
          <Download size={18} /> Download Brochure
        </button>
      </div>

      <div className="hero-stats-wrapper fade-in-up delay-400">
        <Stats />
      </div>
    </div>
  );
};

export default HeroContent;
