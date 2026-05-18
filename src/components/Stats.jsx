import React, { useState, useEffect } from 'react';
import './Stats.css';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo easing function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  // Format with commas for large numbers
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return <span>{formattedCount}{suffix}</span>;
};

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-number">
          <CountUp end={10000} suffix="+" />
        </div>
        <div className="stat-label">Alumni Worldwide</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-number">
          <CountUp end={9} />
        </div>
        <div className="stat-label">ACCA Paper Exemptions</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-number">
          <CountUp end={180} suffix="+" />
        </div>
        <div className="stat-label">Countries Accept ACCA</div>
      </div>
    </div>
  );
};

export default Stats;
