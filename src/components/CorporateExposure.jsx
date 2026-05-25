import React from 'react';
import './CorporateExposure.css';

const CorporateExposure = () => {
  const cards = [
    {
      id: 1,
      title: "Live Corporate Projects",
      desc: "Students work on live assignments sourced from corporate partners — actual business problems in marketing, operations, finance, and strategy.",
      bgImage: "/corporate_projects_bg.png",
      delay: "100"
    },
    {
      id: 2,
      title: "Case Competitions & Workshops",
      desc: "Inter-college and national-level business case competitions, strategy workshops, and analytics hackathons.",
      bgImage: "/case_competitions_bg.png",
      delay: "200"
    },
    {
      id: 3,
      title: "Industry Immersion & Guest Lectures",
      desc: "CEOs, CFOs, founders, and sector heads regularly deliver masterclasses — students hear directly from the people running industries.",
      bgImage: "/industry_immersion_bg.png",
      delay: "300"
    }
  ];

  return (
    <section className="corp-section">
      <div className="corp-header-container">
        <div className="corp-header-left">
          <div className="corp-label fade-in-up">Corporate Exposure</div>
          <h2 className="corp-heading fade-in-up delay-100">
            From classroom to boardroom
          </h2>
        </div>
        
        <div className="corp-header-right fade-in-up delay-200">
          <img src="/INTERNATIONAL SCHOOL OF BUSINESS MANAGEMENT (1) 1.png" alt="Students" className="students-cutout" loading="lazy" />
        </div>
      </div>

      <div className="corp-grid">
        {cards.map((card) => (
          <div key={card.id} className={`corp-card fade-in-up delay-${card.delay}`}>
            <img src={card.bgImage} alt={card.title} className="corp-bg" />
            
            <div className="corp-overlay">
              <div className="yellow-line"></div>
              <h3 className="corp-title">{card.title}</h3>
              <p className="corp-card-desc">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorporateExposure;
