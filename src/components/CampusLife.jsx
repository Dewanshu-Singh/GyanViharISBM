import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CampusLife.css';

const CampusLife = () => {
  const allImages = [
    "/IMG_0071.JPG",
    "/Open Air Theatre - Facilities_.jpg",
    "/P1230527.JPG",
    "/WhatsApp Image 2026-04-10 at 3.16.12 PM.jpeg",
    "/DSC02917.JPG",
    "/for poster.jpg"
  ];

  const [mainIndex, setMainIndex] = useState(0);

  const nextSlide = () => {
    setMainIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setMainIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => {
      clearInterval(mainTimer);
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
            
            <button className="slider-nav-btn prev" onClick={prevSlide}>
              <ChevronLeft size={28} />
            </button>
            <button className="slider-nav-btn next" onClick={nextSlide}>
              <ChevronRight size={28} />
            </button>

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
