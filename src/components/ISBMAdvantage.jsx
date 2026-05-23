import React from 'react';
import { Briefcase, Globe, Users, Lightbulb, Award, GraduationCap } from 'lucide-react';
import './ISBMAdvantage.css';

const ISBMAdvantage = () => {
  const reasons = [
    {
      id: "01",
      icon: <Briefcase size={24} />,
      title: "Industry-Integrated Curriculum",
      desc: "Built in partnership with industry — what students learn today is what hiring managers want tomorrow.",
      image: "/DSC00643.jpg"
    },
    {
      id: "02",
      icon: <Globe size={24} />,
      title: "Global Certification Stack",
      desc: "Harvard Publishing, ACCA, NISM, Coursera, NPTEL — credentials that elevate from local to globally competitive.",
      image: "/DSC00648.jpg"
    },
    {
      id: "03",
      icon: <Users size={24} />,
      title: "10,000+ Alumni Network",
      desc: "A career-long asset of mentors, referrals, co-founders, and industry connections.",
      image: "/DSC00656.jpg"
    },
    {
      id: "04",
      icon: <Lightbulb size={24} />,
      title: "Startup Incubation Pathway",
      desc: "Structured mentorship and investor readiness for students who want to build, not just join.",
      image: "/DSC00666.jpg"
    },
    {
      id: "05",
      icon: <Award size={24} />,
      title: "9-Paper ACCA Exemption",
      desc: "A massive accelerator toward a globally recognised finance qualification.",
      image: "/DSC00669.jpg"
    },
    {
      id: "06",
      icon: <GraduationCap size={24} />,
      title: "Placement-Ready Graduates",
      desc: "Live projects and corporate simulations make graduates interview-ready from Day One.",
      image: "/DSC00701.jpg"
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
              className={`advantage-card fade-in-up delay-${(index + 1) * 100}`}
              style={{ backgroundImage: `url(${reason.image})` }}
            >
              <div className="card-overlay"></div>
              <div className="card-top">
                <div className="card-icon">
                  {reason.icon}
                </div>
                <div className="card-number">{reason.id}</div>
              </div>
              <div className="card-content-bottom">
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-desc">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ISBMAdvantage;
