import React, { useEffect } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  useEffect(() => {
    // 1. Find the widget container
    const widgetContainer = document.querySelector('.npf_wgts');
    if (widgetContainer) {
      widgetContainer.innerHTML = ''; // Clear any existing iframes to prevent duplicates
    }

    // 2. Remove any previously injected script to force re-evaluation
    const existingScript = document.getElementById('npf-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    // 3. Inject the script fresh so it runs and finds the new div
    const script = document.createElement("script");
    script.id = "npf-widget-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if component unmounts
      const scriptToRemove = document.getElementById('npf-widget-script');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <div className="form-container-wrapper fade-in-up delay-200" id="admissions">
      <div className="bg-shape-yellow fade-in-up delay-400"></div>
      <div className="bg-shape-blue fade-in-up delay-400"></div>
      
      <div className="admission-form-card">
        <div className="form-header">
          <div className="badge-yellow">Admissions Open 2026</div>
          <h3 className="form-title">APPLY FOR SGVUEE 2026</h3>
        </div>
        
        <div className="npf_wgts" data-height="400px" data-w="c2ccf50794637e9f986080d417cdaac8"></div>
      </div>
    </div>
  );
};

export default AdmissionForm;
