import React from 'react';
import { Award, Users, BookOpen, Globe, GraduationCap, Sparkles } from 'lucide-react';
import './Credentials.css';

const Credentials = () => {
  const credentialsData = [
    {
      id: 1,
      title: "NAAC A+ Accredited",
      desc: "India's highest institutional quality endorsement.",
      icon: <Award size={24} />,
      type: "light",
      delay: "100"
    },
    {
      id: 2,
      title: "10,000+ Global Alumni",
      desc: "A career-long professional advantage.",
      icon: <Users size={24} />,
      type: "dark",
      delay: "200"
    },
    {
      id: 3,
      title: "Harvard Business School Publishing",
      desc: "Global-standard business education.",
      icon: <BookOpen size={24} />,
      type: "light",
      delay: "300"
    },
    {
      id: 4,
      title: "ACCA Integration",
      desc: "9-Paper Exemption — globally portable finance credential.",
      icon: <Globe size={24} />,
      type: "dark",
      delay: "400"
    },
    {
      id: 5,
      title: "BBA + CA via JK Shah",
      desc: "Dual-track management & chartered accountancy.",
      icon: <GraduationCap size={24} />,
      type: "light",
      delay: "500"
    },
    {
      id: 6,
      title: "NISM, Coursera & NPTEL",
      desc: "Multi-platform professional upskilling certifications.",
      icon: <Sparkles size={24} />,
      type: "dark",
      delay: "600"
    }
  ];

  return (
    <section className="credentials-section">
      <div className="credentials-container">
        
        <div className="section-label-center fade-in-up">Why ISBM</div>
        
        <h2 className="credentials-heading fade-in-up delay-100">
          Credentials that command <br/> boardrooms
        </h2>
        
        <div className="credentials-grid">
          {credentialsData.map((item) => (
            <div 
              key={item.id} 
              className={`credential-card ${item.type} fade-in-up delay-${item.delay}`}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Credentials;
