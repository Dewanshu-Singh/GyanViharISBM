import React from 'react';
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
        
        <form className="form-grid">
          <input type="text" className="form-input" placeholder="Name *" required />
          <input type="email" className="form-input" placeholder="Email *" required />
          <input type="tel" className="form-input" placeholder="+91 Enter Mobile No. *" required />
          
          <div className="form-row-2">
            <select className="form-input" required defaultValue="">
              <option value="" disabled>State *</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="delhi">Delhi</option>
              <option value="maharashtra">Maharashtra</option>
            </select>
            
            <select className="form-input" required defaultValue="">
              <option value="" disabled>Qualification *</option>
              <option value="12th">12th Pass</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
            </select>
          </div>
          
          <select className="form-input" required defaultValue="">
            <option value="" disabled>Discipline Interested In *</option>
            <option value="management">Management</option>
            <option value="engineering">Engineering</option>
            <option value="arts">Arts</option>
          </select>
          
          <select className="form-input" required defaultValue="">
            <option value="" disabled>Select Program *</option>
            <option value="mba">MBA</option>
            <option value="bba">BBA</option>
          </select>
          
          <div className="captcha-container">
            <div className="captcha-box">80157</div>
            <input type="text" className="form-input" placeholder="Enter Captcha" required />
          </div>
          
          <div className="auth-checkbox-container">
            <input type="checkbox" id="auth-check" required />
            <label htmlFor="auth-check" className="auth-label">
              I authorize Suresh Gyan Vihar University to contact me via email, SMS, WhatsApp and call. This will override the registry on DND / NDNC.
            </label>
          </div>
          
          <button type="submit" className="btn-submit">
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
