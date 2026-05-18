import React from 'react';
import './AlumniNetwork.css';

const AlumniNetwork = () => {
  const stats = [
    { number: "10,000+", label: "ALUMNI WORLDWIDE" },
    { number: "9", label: "ACCA EXEMPTIONS" },
    { number: "180+", label: "COUNTRIES" }
  ];

  const recruiters = [
    { name: "Google", color: "#4285F4" },
    { name: "ITC", color: "#E31837" },
    { name: "L&T", color: "#00205B" },
    { name: "Asian Paints", color: "#C0282E" },
    { name: "Deloitte", color: "#86BC25" },
    { name: "HDFC Bank", color: "#004C8F" },
    { name: "Wipro", color: "#3B185F" },
    { name: "TCS", color: "#E31837" },
    { name: "Infosys", color: "#007CC3" },
    { name: "Hiremi", color: "#007CC3" },
    { name: "IMS Group", color: "#00205B" },
    { name: "ICICI Bank", color: "#F37021" }
  ];

  return (
    <section className="network-section" id="alumni">
      <div className="network-container">
        
        {/* Top Section */}
        <div className="network-top">
          <div className="network-content fade-in-up">
            <div className="network-label">
              <span className="line"></span> NETWORK
            </div>
            
            <h2 className="network-heading">
              A Network Without<br />Borders.<br />
              <span className="highlight-blue">A Career Without Limits.</span>
            </h2>
            
            <p className="network-desc">
              Spanning finance, consulting, manufacturing, FMCG, technology, 
              healthcare, and entrepreneurship — ISBM's alumni network is a career-long professional asset.
            </p>
            
            <div className="network-stats">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card fade-in-up delay-${(index + 1) * 100}`}>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="network-image-wrapper fade-in-up delay-200">
            <img src="/image11.png" alt="SGVU Students" className="network-image" />
          </div>
        </div>

        {/* Bottom Section - Recruiters Table */}
        <div className="recruiters-container fade-in-up delay-300">
          <div className="recruiters-header">
            <h3 className="recruiters-title">TOP RECRUITERS</h3>
            <span className="recruiters-subtitle">120+ companies • 2024 cohort</span>
          </div>
          
          <div className="recruiters-grid">
            {recruiters.map((recruiter, index) => (
              <div key={index} className="recruiter-cell">
                <span style={{ color: recruiter.color, fontWeight: '700', fontSize: '1.1rem' }}>
                  {recruiter.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="recruiters-footer">
            and many more across consulting, FMCG, BFSI, and tech.
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AlumniNetwork;
