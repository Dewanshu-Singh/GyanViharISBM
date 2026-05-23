import React from 'react';
import './AlumniNetwork.css';

const AlumniNetwork = () => {
  const stats = [
    { number: "10,000+", label: "ALUMNI WORLDWIDE" },
    { number: "9", label: "ACCA EXEMPTIONS" },
    { number: "180+", label: "COUNTRIES" }
  ];

  const recruiters = [
    { name: "Google", src: "/google.webp" },
    { name: "ITC", src: "/itc.webp" },
    { name: "L&T", src: "/l&t.webp" },
    { name: "Asian Paints", src: "/asianpaint.webp" },
    { name: "Deloitte", src: "/Deloitte.webp" },
    { name: "HDFC Bank", src: "/Hdfcbank.webp" },
    { name: "Wipro", src: "/wipro.webp" },
    { name: "TCS", src: "/tcs.webp" },
    { name: "Infosys", src: "/infosys.webp" },
    { name: "Hiremi", src: "/hireme.png" },
    { name: "IMS Group", src: "/imsgroup.webp" },
    { name: "ICICI Bank", src: "/icicibank.webp" }
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
            <div className="network-floating-inner">
              <img src="/DSC00680.jpg" alt="Alumni Network" className="network-image" />
              <div className="top-recruiters-badge">
                <span className="badge-title">Top Recruiters</span>
                <span className="badge-names">Google • ITC • L&T</span>
              </div>
            </div>
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
              <div key={index} className={`recruiter-cell fade-in-up delay-${(index % 6) * 100}`}>
                <img 
                  src={recruiter.src} 
                  alt={recruiter.name} 
                  className="recruiter-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="recruiter-fallback-text" style={{ display: 'none' }}>
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
