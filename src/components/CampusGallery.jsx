import React, { useState, useEffect } from 'react';
import './CampusGallery.css';

const CampusGallery = () => {
  const images = [
    { src: '/_DSC0398.jpg', title: 'Vibrant Campus Life' },
    { src: '/_DSC4648.jpg', title: 'World-Class Infrastructure' },
    { src: '/DSC02917.JPG', title: 'Student Engagement' },
    { src: '/new6.jpg', title: 'Academic Excellence' },
    { src: '/new7.jpg', title: 'Campus Community' },
    { src: '/new8.jpg', title: 'State-of-the-Art Facilities' },
    { src: '/new9.JPG', title: 'Student Innovation' },
    { src: '/DSC05198.jpg', title: 'Extracurricular Activities' },
    { src: '/_DSC4688.jpg', title: 'Sports & Recreation' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="campus-gallery-section">
      <div className="gallery-header fade-in-up">
        <div className="gallery-subtitle">Life at ISBM</div>
        <h2 className="gallery-title">Experience Our Vibrant Campus</h2>
      </div>

      <div className="coverflow-container fade-in-up delay-200">
        {images.map((img, index) => {
          let diff = index - currentIndex;
          if (diff < -3) diff += images.length;
          if (diff > 3) diff -= images.length;

          let className = 'coverflow-card';
          if (diff === 0) className += ' center';
          else if (diff === 1) className += ' right-1';
          else if (diff === 2) className += ' right-2';
          else if (diff === -1) className += ' left-1';
          else if (diff === -2) className += ' left-2';
          else className += ' hidden';

          return (
            <div 
              key={index} 
              className={className}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
            </div>
          );
        })}
      </div>
      
      <div className="gallery-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CampusGallery;
