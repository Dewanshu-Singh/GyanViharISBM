import React, { useEffect, useRef, useState } from 'react';
import './GlobalPartners.css';

const GlobalPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const partners = [
    {
      id: 1,
      title: "Harvard Business School Publishing",
      desc: "Strategic frameworks, business cases, and analytical methodologies — core coursework benchmarked to global standards.",
      illustration: "/undraw_contract_ynau.svg",
      delay: 100
    },
    {
      id: 2,
      title: "Coursera Professional Modules",
      desc: "Curated specialisations in data analytics, project management, digital transformation, and business strategy.",
      illustration: "/undraw_continuous-learning_a1ld.svg",
      delay: 200
    },
    {
      id: 3,
      title: "NPTEL (IIT/IISc)",
      desc: "Advanced courses by IIT and IISc faculty in operations research, financial engineering, and managerial economics.",
      illustration: "/undraw_searching-everywhere_tffi.svg",
      delay: 300
    },
    {
      id: 4,
      title: "NISM Certification",
      desc: "Mandatory regulatory compliance credentials for professionals operating in Indian securities markets.",
      illustration: "/undraw_certificate_cqps.svg",
      delay: 400
    },
    {
      id: 5,
      title: "ACCA Global",
      desc: "9-paper exemption integrated B.Com pathway accepted in 180+ countries worldwide.",
      illustration: "/undraw_analyze_gcbr.svg",
      delay: 500
    },
    {
      id: 6,
      title: "JK Shah Classes",
      desc: "India's leading CA coaching ecosystem integrated with the BBA degree pathway.",
      illustration: "/undraw_educator_6dgp.svg",
      delay: 600
    }
  ];

  return (
    <section className="partners-section" id="partners" ref={sectionRef}>
      {/* Background Animated Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="partners-glow"></div>

      <div className="partners-container">
        <div className={`partners-label ${isVisible ? 'fade-in-up' : 'hidden'}`}>Global Partners</div>

        <h2 className={`partners-heading ${isVisible ? 'fade-in-up' : 'hidden'}`} style={{ animationDelay: '100ms' }}>
          Where Theory Meets <br />
          <span className="highlight">the Boardroom</span>
        </h2>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className={`partner-card ${isVisible ? 'fade-in-up' : 'hidden'}`}
              style={{ animationDelay: `${partner.delay}ms` }}
            >
              <div className="partner-illustration-wrapper">
                <img src={partner.illustration} alt={partner.title} className="partner-svg" />
              </div>

              <h3 className="partner-title">{partner.title}</h3>
              <p className="partner-desc">{partner.desc}</p>
              <div className="partner-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
