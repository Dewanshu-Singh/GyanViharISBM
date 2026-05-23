import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import './AdmissionsCTA.css';

const AdmissionsCTA = () => {
  return (
    <section className="cta-section" id="cta-admissions">
      {/* Background Image overlay */}
      <div className="cta-bg-overlay"></div>
      
      {/* Decorative Elements */}
      <div className="cta-shape-top-right"></div>
      <div className="cta-shape-bottom-left"></div>

      <div className="cta-wrapper fade-in-up" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className="cta-container">
          <div className="cta-label">
            <span className="line"></span>
            ADMISSIONS 2025-26 OPEN
            <span className="line"></span>
          </div>
          
          <h2 className="cta-heading">
            Your Seat at the Table Awaits.<br />
            <span className="highlight-yellow">Claim It.</span>
          </h2>
          
          <p className="cta-desc">
            Apply now for the 2025-26 intake and join one of central India's most forward-thinking business schools.
          </p>
          
          <div className="cta-actions">
            <a href="#admissions" className="cta-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Apply Now <ArrowRight size={18} />
            </a>
            
            <a href="tel:8306694440" className="cta-btn-outline">
              <Phone size={18} /> Call 83066 94440
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
