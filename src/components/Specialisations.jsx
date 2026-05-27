import React from 'react';
import { Megaphone, LineChart, Briefcase, Truck } from 'lucide-react';
import './Specialisations.css';

const Specialisations = () => {
  const tracks = [
    {
      id: 1,
      title: "Digital Marketing",
      desc: "SEO, performance marketing, brand analytics.",
      icon: <Megaphone size={22} />,
      bgImage: "/digital_marketing_bg.png",
      delay: "100"
    },
    {
      id: 2,
      title: "Business Analytics",
      desc: "Visualisation, predictive modelling, BI tools.",
      icon: <LineChart size={22} />,
      bgImage: "/business_analytics_bg.png",
      delay: "200"
    },
    {
      id: 3,
      title: "Banking & Finance",
      desc: "Capital markets, credit, NISM certification.",
      icon: <Briefcase size={22} />,
      bgImage: "/banking_finance_bg.png",
      delay: "300"
    },
    {
      id: 4,
      title: "Logistics & SCM",
      desc: "Procurement, global trade, supply strategy.",
      icon: <Truck size={22} />,
      bgImage: "/logistics_scm_bg.png",
      delay: "400"
    }
  ];

  return (
    <section className="specialisations-section">
      <div className="spec-header-container">
        <div className="spec-header-left">
          <div className="spec-label fade-in-up">Specialisation Tracks</div>
          <h2 className="spec-heading fade-in-up delay-100">
            Sharpen your competitive edge
          </h2>
        </div>
        
        <div className="spec-header-right fade-in-up delay-200">
          <p className="spec-desc">
            Four targeted tracks for the highest-demand business domains.
          </p>
        </div>
      </div>
      
      <div className="spec-grid">
        {tracks.map((track) => (
          <div key={track.id} className={`spec-card fade-in-up delay-${track.delay}`}>
            
            <div className="spec-overlay">
              <div className="spec-icon">
                {track.icon}
              </div>
              <h3 className="spec-title">{track.title}</h3>
              <p className="spec-card-desc">{track.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialisations;
