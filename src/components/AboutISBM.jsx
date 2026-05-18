import React from 'react';
import { Quote } from 'lucide-react';
import './AboutISBM.css';

const AboutISBM = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Column */}
        <div className="about-content fade-in-up">
          <div className="section-label">About ISBM</div>
          
          <h2 className="about-heading">
            Architecting the Next Decade of <br />
            <span className="highlight">Global Business</span>
          </h2>
          
          <div className="stats-grid">
            <div className="stat-card white-yellow">
              <div className="stat-val">2008</div>
              <div className="stat-desc">Established</div>
            </div>
            
            <div className="stat-card white-blue">
              <div className="stat-val">A+</div>
              <div className="stat-desc">NAAC Grade</div>
            </div>
            
            <div className="stat-card dark">
              <div className="stat-val">50+</div>
              <div className="stat-desc">Faculty</div>
            </div>
            
            <div className="stat-card yellow">
              <div className="stat-val">10K+</div>
              <div className="stat-desc">Alumni</div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="quote-card-wrapper fade-in-up delay-200">
          <div className="quote-icon-badge">
            <Quote size={24} fill="currentColor" strokeWidth={0} />
          </div>
          
          <div className="quote-card">
            <h3 className="quote-text">
              The next generation of business leaders will not emerge from passive classrooms — but from <span className="highlight">ecosystems that fuse academic rigor with real-world corporate exposure.</span>
            </h3>
            
            <div className="quote-divider"></div>
            
            <div className="quote-details">
              <p className="quote-paragraph">
                One of central India's most forward-thinking business schools — where undergraduates pursue globally integrated <strong>ACCA qualifications with 9-paper exemptions</strong>.
              </p>
              
              <p className="quote-paragraph">
                Students don't just study Harvard Business School cases — they work through them as part of their core curriculum.
              </p>
            </div>
            
            <div className="tags-container">
              <span className="tag-pill">NAAC A+</span>
              <span className="tag-pill">ACCA Partner</span>
              <span className="tag-pill">Harvard Cases</span>
              <span className="tag-pill">JK Shah</span>
              <span className="tag-pill">NISM</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutISBM;
