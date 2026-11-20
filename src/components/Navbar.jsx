import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Calculator, ShieldCheck, Palette, Check } from 'lucide-react';
import { THEMES } from '../data/themes';

export default function Navbar({ onOpenQuote, currentTheme, onThemeChange }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorMenuOpen, setColorMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'lift-portfolio', 'services', 'about', 'team', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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

  const t = currentTheme || THEMES.navyGold;

  return (
    <>
      {/* Top Hotline Bar */}
      <div className="bg-[#071322] text-xs text-slate-300 py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> BNBC & AISC Code Certified Steel Construction
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">CJKS Shopping Complex (Room 3028), Kajir Dewri, Chattogram</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="mailto:asiaengineers09@gmail.com" className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> asiaengineers09@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:01830002040" className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5" /> 01830-002040
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Always High Contrast & Visible */}
      <header className="sticky top-0 z-50 bg-[#0a1e36] border-b-2 border-amber-500/40 shadow-xl py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Logo with high-contrast text */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="h-10 w-auto flex items-center bg-white rounded-lg p-1 shadow-sm">
              <img 
                src="/images/asia_engineers_logo.png" 
                alt="Asia Engineers BD Logo" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-1.5">
                <span className="text-xl font-black text-[#0a1e36]">AE</span>
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-1">
                ASIA ENGINEERS <span className="text-amber-400">BD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                Steel Structural & Construction
              </span>
            </div>
          </a>

          {/* Navigation Menu Links - Visible on md screens and above (768px+) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-bold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap text-xs lg:text-sm ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/30'
                      : 'text-white hover:text-amber-400 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Color Palette Switcher */}
            <div className="relative">
              <button
                onClick={() => setColorMenuOpen(!colorMenuOpen)}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-400/30 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                title="কালার থিম পরিবর্তন করুন"
              >
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">কালার</span>
              </button>

              {colorMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 text-xs">
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                    কালার থিম নির্বাচন করুন
                  </div>
                  <div className="py-1 space-y-1">
                    {Object.values(THEMES).map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          onThemeChange(theme);
                          setColorMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                          t.id === theme.id ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold' : 'text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-4 h-4 rounded-full border border-white/40 shadow-xs" 
                            style={{ backgroundColor: theme.primary }} 
                          />
                          <span>{theme.nameBn}</span>
                        </div>
                        {t.id === theme.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quote Button */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-3.5 py-1.5 rounded-full text-xs font-black shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Free Quote</span>
            </button>

            {/* Hotline Button */}
            <a
              href="tel:01830002040"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">01830-002040</span>
              <span className="sm:hidden">কল</span>
            </a>

            {/* Mobile Menu Toggle (on screens < 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#071322] border-t border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1 text-sm font-bold">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'text-white hover:bg-white/10 hover:text-amber-400'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-sm shadow-md"
              >
                <Calculator className="w-4 h-4" /> Get Free Engineering Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
