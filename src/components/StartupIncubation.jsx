import React from 'react';
import { Compass, Building2, Rocket, Globe } from 'lucide-react';
import './StartupIncubation.css';

const StartupIncubation = () => {
  const cards = [
    {
      id: 1,
      image: "/structured_mentorship.svg",
      title: "Structured Mentorship",
      desc: "One-on-one guidance from experienced entrepreneurs and business advisors."
    },
    {
      id: 2,
      image: "/Incubation Infrastructure.svg",
      title: "Incubation Infrastructure",
      desc: "Workspace, resources, and institutional support to develop and test business ideas."
    },
    {
      id: 3,
      image: "/investor and pitch.svg",
      title: "Investor & Pitch Readiness",
      desc: "Training in business plan development, financial modelling, and pitch deck creation."
    },
    {
      id: 4,
      image: "/Market access.svg",
      title: "Market Access",
      desc: "Connections to SGVU's 10,000+ alumni network for early customers and co-founders."
    }
  ];

  return (
    <section className="incubation-section">
      <div className="incubation-overlay"></div>
      <div className="incubation-container">
        
        <div className="incubation-left fade-in-up">
          <div className="incubation-label">
            <span className="line"></span> INCUBATION
          </div>
          
          <h2 className="incubation-heading">
            Startup<br/>
            Mentorship &<br/>
            <span className="highlight">Incubation</span>
          </h2>
          
          <h3 className="incubation-quote">
            "Not Every Leader Works for Someone Else."
          </h3>
          
          <p className="incubation-desc">
            The next generation of business leaders includes founders, not just employees. Our dedicated startup incubation programme provides:
          </p>
        </div>

        <div className="incubation-right">
          <div className="incubation-grid">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className={`incubation-card fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="incubation-svg-wrapper">
                  <img src={card.image} alt={card.title} className="incubation-animated-svg" />
                </div>
                <h4 className="incubation-card-title">{card.title}</h4>
                <p className="incubation-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartupIncubation;
