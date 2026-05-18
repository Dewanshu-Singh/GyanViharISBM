import React from 'react';
import { Briefcase, Globe, Users, Lightbulb, Award, GraduationCap } from 'lucide-react';
import './ISBMAdvantage.css';

const ISBMAdvantage = () => {
  const reasons = [
    {
      id: "01",
      icon: <Briefcase size={20} />,
      title: "Industry-Integrated Curriculum",
      desc: "Built in partnership with industry — what students learn today is what hiring managers want tomorrow.",
      theme: "yellow"
    },
    {
      id: "02",
      icon: <Globe size={20} />,
      title: "Global Certification Stack",
      desc: "Harvard Publishing, ACCA, NISM, Coursera, NPTEL — credentials that elevate from local to globally competitive.",
      theme: "dark"
    },
    {
      id: "03",
      icon: <Users size={20} />,
      title: "10,000+ Alumni Network",
      desc: "A career-long asset of mentors, referrals, co-founders, and industry connections.",
      theme: "yellow"
    },
    {
      id: "04",
      icon: <Lightbulb size={20} />,
      title: "Startup Incubation Pathway",
      desc: "Structured mentorship and investor readiness for students who want to build, not just join.",
      theme: "dark"
    },
    {
      id: "05",
      icon: <Award size={20} />,
      title: "9-Paper ACCA Exemption",
      desc: "A massive accelerator toward a globally recognised finance qualification.",
      theme: "yellow"
    },
    {
      id: "06",
      icon: <GraduationCap size={20} />,
      title: "Placement-Ready Graduates",
      desc: "Live projects and corporate simulations make graduates interview-ready from Day One.",
      theme: "dark"
    }
  ];

  return (
    <section className="advantage-section">
      <div className="advantage-container">
        
        <div className="advantage-header fade-in-up">
          <div className="advantage-label">
            <span className="line"></span> THE ISBM ADVANTAGE
          </div>
          <h2 className="advantage-heading">
            Six reasons leaders choose ISBM
          </h2>
        </div>

        <div className="advantage-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`advantage-card theme-${reason.theme} fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="card-top">
                <div className="card-icon">
                  {reason.icon}
                </div>
                <div className="card-number">{reason.id}</div>
              </div>
              <h3 className="card-title">{reason.title}</h3>
              <p className="card-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ISBMAdvantage;
