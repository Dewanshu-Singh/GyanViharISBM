import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: About */}
          <div className="footer-col about-col">
            <img src="/sgvu-logo.png" alt="Suresh Gyan Vihar University Logo" className="footer-logo" />
            <p className="footer-desc">
              Suresh Gyan Vihar University is a self-financed state university located in Jaipur, Rajasthan, India. In 2017, the university became the first private university in Rajasthan to be awarded an 'A' grade by NAAC.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#admissions">Admission Procedure</a></li>
              <li><a href="#programs">Course Fee Structure</a></li>
              <li><a href="#about">Scholarship Details</a></li>
              <li><a href="#alumni">Placements Cell</a></li>
              <li><a href="#campus-life">Anti-Ragging Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="contact-list">
              <li>
                <div className="contact-icon-wrapper"><MapPin size={16} /></div>
                <span>Mahal Rd, Jagatpura, Jaipur, Rajasthan 302017</span>
              </li>
              <li>
                <div className="contact-icon-wrapper"><Phone size={16} /></div>
                <span>83066 94440</span>
              </li>
              <li>
                <div className="contact-icon-wrapper"><Mail size={16} /></div>
                <span>admissions@gyanvihar.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions Help Card */}
          <div className="footer-col card-col">
            <div className="admissions-help-card">
              <h4 className="card-heading">Admissions Help</h4>
              <p className="card-text">
                Speak with our admissions team for B.Sc. and M.Sc. programs 2025-26.
              </p>
              <p className="card-phone">Call: 83066 94440</p>
              <a href="#admissions" className="card-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Suresh Gyan Vihar University - International School of Business Management</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
