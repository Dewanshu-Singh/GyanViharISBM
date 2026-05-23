import React, { useState, useEffect } from 'react';
import './CampusLife.css';

const CampusLife = () => {
  const allImages = [
    "/DSC00643.jpg",
    "/DSC00648.jpg",
    "/DSC00656.jpg",
    "/DSC00666.jpg",
    "/DSC00669.jpg",
    "/DSC00680.jpg",
    "/DSC00693.jpg",
    "/DSC00701.jpg",
    "/_DSC0612.jpg",
    "/_DSC4648.jpg",
    "/_DSC4688.jpg"
  ];

  const [mainIndex, setMainIndex] = useState(0);
  const [smallIndex1, setSmallIndex1] = useState(2);
  const [smallIndex2, setSmallIndex2] = useState(4);
  const [smallIndex3, setSmallIndex3] = useState(6);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);
    
    const smallTimer1 = setInterval(() => {
      setSmallIndex1((prev) => (prev + 1) % allImages.length);
    }, 5000);

    const smallTimer2 = setInterval(() => {
      setSmallIndex2((prev) => (prev + 1) % allImages.length);
    }, 6000);

    const smallTimer3 = setInterval(() => {
      setSmallIndex3((prev) => (prev + 1) % allImages.length);
    }, 7000);

    return () => {
      clearInterval(mainTimer);
      clearInterval(smallTimer1);
      clearInterval(smallTimer2);
      clearInterval(smallTimer3);
    };
  }, [allImages.length]);

  return (
    <section className="campus-section" id="campus-life">
      <div className="campus-glow glow-left"></div>
      <div className="campus-glow glow-right"></div>

      <div className="campus-container">
        <div className="campus-top">
          <div className="campus-content fade-in-up">
            <div className="campus-label">
              <span className="line"></span>
              Experience SGVU
            </div>
            <h2 className="campus-heading">
              SGVU <br />
              <span className="highlight-yellow">Campus Life</span>
            </h2>
            <p className="campus-desc">
              Discover a dynamic ecosystem where innovation meets tradition. Our campus is a thriving community designed to inspire, connect, and elevate your university experience.
            </p>
          </div>

          <div className="campus-img-main-wrapper fade-in-up delay-200">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Campus Life ${index + 1}`}
                className={`campus-img-slide ${index === mainIndex ? 'active' : ''}`}
              />
            ))}
            <div className="slider-indicators">
              {allImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === mainIndex ? 'active' : ''}`} 
                  onClick={() => setMainIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
