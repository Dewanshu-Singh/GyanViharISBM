import React, { useEffect } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  useEffect(() => {
    // Only inject if it doesn't already exist to avoid StrictMode double-loading issues
    if (!document.getElementById("npf-widget-script")) {
      const script = document.createElement("script");
      script.id = "npf-widget-script";
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);
    }
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
