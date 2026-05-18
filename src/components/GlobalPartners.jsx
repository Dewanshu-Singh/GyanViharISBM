import React from 'react';
import { Award } from 'lucide-react';
import './GlobalPartners.css';

const GlobalPartners = () => {
  const partners = [
    {
      id: 1,
      title: "Harvard Business School Publishing",
      desc: "Strategic frameworks, business cases, and analytical methodologies — core coursework benchmarked to global standards.",
      delay: "100"
    },
    {
      id: 2,
      title: "Coursera Professional Modules",
      desc: "Curated specialisations in data analytics, project management, digital transformation, and business strategy.",
      delay: "200"
    },
    {
      id: 3,
      title: "NPTEL (IIT/IISc)",
      desc: "Advanced courses by IIT and IISc faculty in operations research, financial engineering, and managerial economics.",
      delay: "300"
    },
    {
      id: 4,
      title: "NISM Certification",
      desc: "Mandatory regulatory compliance credentials for professionals operating in Indian securities markets.",
      delay: "400"
    },
    {
      id: 5,
      title: "ACCA Global",
      desc: "9-paper exemption integrated B.Com pathway accepted in 180+ countries worldwide.",
      delay: "500"
    },
    {
      id: 6,
      title: "JK Shah Classes",
      desc: "India's leading CA coaching ecosystem integrated with the BBA degree pathway.",
      delay: "600"
    }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-glow"></div>

      <div className="partners-container">
        <div className="partners-label fade-in-up">Global Partners</div>

        <h2 className="partners-heading fade-in-up delay-100">
          Where Theory Meets <br />
          <span className="highlight">the Boardroom</span>
        </h2>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className={`partner-card fade-in-up delay-${partner.delay}`}>
              <div className="partner-icon-wrapper">
                <Award size={22} strokeWidth={2.5} />
              </div>

              <h3 className="partner-title">{partner.title}</h3>
              <p className="partner-desc">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
