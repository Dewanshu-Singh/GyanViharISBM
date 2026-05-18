import React from 'react';
import HeroContent from './HeroContent';
import AdmissionForm from './AdmissionForm';
import './Hero.css';

const Hero = () => {
  return (
    <main className="hero-section">
      <HeroContent />
      <AdmissionForm />
    </main>
  );
};

export default Hero;
