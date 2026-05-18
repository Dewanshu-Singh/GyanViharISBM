import React from 'react';
import './CampusLife.css';

const CampusLife = () => {
  return (
    <section className="campus-section" id="campus-life">
      {/* Background glow effects */}
      <div className="campus-glow glow-left"></div>
      <div className="campus-glow glow-right"></div>

      <div className="campus-container">

        {/* Top Section: Text and Main Image */}
        <div className="campus-top">
          <div className="campus-content fade-in-up">
            <div className="campus-label">
              INTERNATIONAL SCHOOL OF BUSINESS MANAGEMENT
            </div>
            <h2 className="campus-heading">
              Campus Life<br />
              At SGVU
            </h2>
          </div>

          <div className="campus-img-main-wrapper fade-in-up delay-200">
            <img
              src="/Overlay+Shadow.png"
              alt="Students studying at SGVU campus"
              className="campus-img-main"
            />
          </div>
        </div>

        {/* Bottom Section: Three Images Grid */}
        <div className="campus-bottom fade-in-up delay-300">
          <div className="campus-img-small-wrapper image-hover">
            <img src="/Overlay+Shadow (1).png" alt="Campus Life" className="campus-img-small" />
          </div>
          <div className="campus-img-small-wrapper image-hover delay-100">
            <img src="/Microscope research.png" alt="Research" className="campus-img-small" />
          </div>
          <div className="campus-img-small-wrapper image-hover delay-200">
            <img src="/Microscope research (1).png" alt="Lab" className="campus-img-small" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampusLife;
