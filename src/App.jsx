import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutISBM from './components/AboutISBM';
import Credentials from './components/Credentials';
import Programs from './components/Programs';
import Specialisations from './components/Specialisations';
import GlobalPartners from './components/GlobalPartners';
import Testimonials from './components/Testimonials';
import CorporateExposure from './components/CorporateExposure';
import StartupIncubation from './components/StartupIncubation';
import AlumniNetwork from './components/AlumniNetwork';
import ISBMAdvantage from './components/ISBMAdvantage';
import CampusLife from './components/CampusLife';
import AdmissionsCTA from './components/AdmissionsCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <Hero />
      <AboutISBM />
      <Credentials />
      <Programs />
      <Specialisations />
      <GlobalPartners />
      <Testimonials />
      <CorporateExposure />
      <StartupIncubation />
      <AlumniNetwork />
      <ISBMAdvantage />
      <CampusLife />
      <AdmissionsCTA />
      <Footer />
    </>
  );
}

export default App;
