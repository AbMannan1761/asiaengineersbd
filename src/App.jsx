import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import QuotationCalculator from './components/QuotationCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloating from './components/WhatsAppFloating';
import { THEMES } from './data/themes';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.navyGold);
  const [selectedProject, setSelectedProject] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (initialData = null) => {
    setQuoteInitialData(initialData);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-800 flex flex-col font-sans transition-colors duration-300">
      {/* Navigation with Theme Switcher */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          currentTheme={currentTheme}
        />
        <StatsCounter currentTheme={currentTheme} />
        <ServicesSection onOpenQuote={handleOpenQuote} currentTheme={currentTheme} />
        <ProjectsSection onSelectProject={setSelectedProject} currentTheme={currentTheme} />
        <QuotationCalculator onOpenQuoteWithSpec={handleOpenQuote} currentTheme={currentTheme} />
        <WhyChooseUs currentTheme={currentTheme} />
        <TeamSection currentTheme={currentTheme} />
        <ClientsSection currentTheme={currentTheme} />
        <ContactSection currentTheme={currentTheme} />
      </main>

      {/* Footer */}
      <Footer currentTheme={currentTheme} />

      {/* Interactive Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        initialData={quoteInitialData}
      />

      {/* Persistent Floating Contact */}
      <WhatsAppFloating />
    </div>
  );
}
