import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Process from './components/Process';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import QuoteModal from './components/QuoteModal';
import ProjectModal from './components/ProjectModal';
import ServiceModal from './components/ServiceModal';
import AboutModal from './components/AboutModal';
import Toast from './components/Toast';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenQuote = (serviceName = '') => {
    setQuoteInitialService(typeof serviceName === 'string' ? serviceName : '');
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. About Us */}
        <About 
          onOpenQuote={() => handleOpenQuote()} 
          onOpenAboutModal={() => setIsAboutModalOpen(true)}
        />

        {/* 3. Services Section */}
        <Services 
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Projects / Portfolio */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 6. Process Section (How We Work) */}
        <Process onOpenQuote={() => handleOpenQuote()} />

        {/* 7. Call To Action (CTA) */}
        <CTA onOpenQuote={() => handleOpenQuote()} />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact Section with validated form */}
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteInitialService}
        onShowToast={handleShowToast}
      />

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onOpenQuote={handleOpenQuote}
      />

      <ServiceModal
        service={selectedService}
        onClose={handleCloseService}
        onOpenQuote={handleOpenQuote}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
