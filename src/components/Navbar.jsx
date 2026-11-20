import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'lift-portfolio', 'services', 'about', 'team', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Lift (Portfolio)', href: '#lift-portfolio', id: 'lift-portfolio' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Team Members', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#e5e7eb] border-b border-[#cbd5e1] shadow-xs py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo - Matching Exact Branding from Screenshot */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            {/* AE Icon Symbol */}
            <div className="flex items-center">
              <svg className="w-10 h-8 text-[#0f355c]" viewBox="0 0 100 70" fill="currentColor">
                <path d="M10 60 L35 10 L50 40 L35 40 L30 50 L55 50 L60 60 Z" />
                <path d="M50 15 L90 15 L90 25 L65 25 L65 33 L85 33 L85 43 L65 43 L65 50 L90 50 L90 60 L50 60 Z" />
              </svg>
            </div>
            
            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-black text-[#0f355c] tracking-tight font-sans">
                ASIA ENGINEERS
              </span>
              <span className="text-[11px] sm:text-xs font-black text-[#e67e22] tracking-[0.2em] uppercase font-sans">
                STEEL STRUCTURE
              </span>
            </div>
          </div>
        </a>

        {/* The Exact Menu Items as Requested in the Red Box */}
        <nav className="flex items-center gap-1 sm:gap-2 flex-wrap">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-[15px] font-bold transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#8c929a] text-white shadow-sm'
                    : 'text-[#2b3543] hover:text-[#0f355c] hover:bg-[#d8dce2]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
