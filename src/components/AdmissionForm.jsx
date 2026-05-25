import React, { useEffect } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {

  return (
    <div className="form-container-wrapper fade-in-up delay-200" id="admissions">
      <div className="bg-shape-yellow fade-in-up delay-400"></div>
      <div className="bg-shape-blue fade-in-up delay-400"></div>
      
      <div className="admission-form-card">
        <div className="form-header">
          <div className="badge-yellow">Admissions Open 2026</div>
          <h3 className="form-title">APPLY FOR SGVUEE 2026</h3>
        </div>
        
        <iframe 
          src="https://widgets.in6.nopaperforms.com/register?&w=c2ccf50794637e9f986080d417cdaac8"
          width="100%"
          height="400px"
          frameBorder="0"
          title="Admission Form"
          style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
        ></iframe>
      </div>
    </div>
  );
};

export default AdmissionForm;
