import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      
      <div className="programs-container">
        
        <div className="programs-header">
          <div className="section-label-light fade-in-up">Programs</div>
          
          <h2 className="programs-heading fade-in-up delay-100">
            Precision-Engineered <br/>
            Curricula <br/>
            for a <span className="highlight">Complex World</span>
          </h2>
          
          <p className="programs-desc fade-in-up delay-200">
            Every program at ISBM is engineered to integrate professional certifications, global learning modules, and industry simulations directly into the academic journey — so students graduate with a professionally validated, market-ready portfolio of credentials.
          </p>
        </div>
        
        <div className="programs-grid">
          
          {/* Card 1: BBA + CA */}
          <div className="program-card white fade-in-up delay-300">
            <div className="pill-light">The Dual-Track Advantage</div>
            
            <h3 className="program-title-dark">BBA + CA</h3>
            <p className="program-subtitle">via JK Shah Classes</p>
            
            <div className="inner-card">
              <ul className="program-features">
                <li className="feature-item">Integrated Chartered Accountancy pathway</li>
                <li className="feature-item">Finance and consulting readiness</li>
                <li className="feature-item">Premium placement preparation</li>
              </ul>
            </div>
          </div>
          
          {/* Card 2: B.Com with ACCA */}
          <div className="program-card yellow fade-in-up delay-400">
            <div className="pill-dark-yellow">The Global Finance Passport</div>
            
            <h3 className="program-title-blue">
              B.Com (Hons.) <br/>
              <span>with ACCA</span>
            </h3>
            
            <div className="inner-card">
              <div className="inner-number">9</div>
              <div className="inner-subtitle">Paper ACCA Exemptions</div>
              <p className="inner-desc">
                Accepted in 180+ countries — a globally portable finance qualification.
              </p>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Programs;
