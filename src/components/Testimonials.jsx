import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Analyst, Goldman Sachs",
      videoId: "ym9qRVjd6t4",
      overlayText: (
        <>
          Learn beyond books.<br />
          Build beyond limits.
        </>
      )
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Brand Manager, ITC",
      videoId: "AMGzpD937B8",
      overlayText: (
        <>
          Experience it before<br />
          the real world demands it.
        </>
      )
    },
    {
      id: 3,
      name: "Rohan Kapoor",
      role: "Founder, Kapoor & Co.",
      videoId: "TPIpRCsfRAo",
      overlayText: (
        <>
          Not just theory —<br />
          but real experience, real impact.
        </>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const autoPlayRef = useRef();
  const playerRefs = useRef({});

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Keep reference to nextSlide for setInterval
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  // Auto-play carousel on mobile only
  useEffect(() => {
    if (!isMobile || playingVideoId) return; // Pause swapping if a video is playing
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 4000); // Auto swipe every 4 seconds
    return () => clearInterval(interval);
  }, [isMobile, playingVideoId]);

  // Touch events for manual swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const onPlayerReady = (event, id) => {
    playerRefs.current[id] = event.target;
  };

  const onPlayerPlay = (id) => {
    setPlayingVideoId(id);
  };

  const onPlayerPause = () => {
    setPlayingVideoId(null);
  };

  const onPlayerEnd = () => {
    setPlayingVideoId(null);
    nextSlide(); // Swap when video ends
  };

  const handleOverlayClick = (id) => {
    if (playerRefs.current[id]) {
      playerRefs.current[id].playVideo();
    }
  };

  const ytOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  return (
    <section className="testimonials-section">
      <div className="testi-header">
        <div className="testi-label fade-in-up">Student Voices</div>
        <h2 className="testi-heading fade-in-up delay-100">Think Bigger. Go Further.</h2>
        <p className="testi-subheading fade-in-up delay-200">Empowering future business leaders to thrive in a global world.</p>
      </div>

      <div className="testi-slider-container">
        <div 
          className="testi-grid"
          style={{
            transform: isMobile ? `translateX(-${currentIndex * 33.3333}%)` : 'none'
          }}
        >
          {testimonials.map((testi) => (
            <div 
              key={testi.id} 
              className="testi-card-wrapper"
              onTouchStart={isMobile ? onTouchStart : undefined}
              onTouchMove={isMobile ? onTouchMove : undefined}
              onTouchEnd={isMobile ? onTouchEnd : undefined}
            >
              <div className={`testi-card fade-in-up delay-${testi.delay || 100}`}>
                <div className="video-wrapper" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                  <YouTube
                    videoId={testi.videoId}
                    opts={ytOpts}
                    onReady={(e) => onPlayerReady(e, testi.id)}
                    onPlay={() => onPlayerPlay(testi.id)}
                    onPause={onPlayerPause}
                    onEnd={onPlayerEnd}
                    className="youtube-container"
                    iframeClassName="youtube-iframe"
                  />
                  
                  {playingVideoId !== testi.id && (
                    <div 
                      className="video-overlay" 
                      onClick={() => handleOverlayClick(testi.id)}
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%), url(https://i.ytimg.com/vi/${testi.videoId}/hqdefault.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="native-play-icon">
                        <svg viewBox="0 0 24 24" fill="white" width="64" height="64" style={{ filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.5))' }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="overlay-content">
                        <p className="overlay-text">{testi.overlayText}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        {isMobile && (
          <div className="testi-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testi-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
