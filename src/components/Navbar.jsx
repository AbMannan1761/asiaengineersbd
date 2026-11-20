import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const HEADER_STYLES = {
  navyGold: {
    id: 'navyGold',
    name: 'রয়্যাল নেভি ও গোল্ডেন (বেস্ট)',
    headerBg: 'bg-gradient-to-r from-[#07182e] via-[#0b2545] to-[#07182e] border-b-2 border-amber-500 shadow-xl',
    logoPrimary: 'text-white',
    logoSecondary: 'text-amber-400',
    iconColor: 'text-amber-400',
    linkActive: 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30',
    linkInactive: 'text-slate-100 hover:text-amber-400 hover:bg-white/10',
    dotColor: '#0b2545',
  },
  sapphireBlue: {
    id: 'sapphireBlue',
    name: 'স্যাফায়ার ওশান ব্লু',
    headerBg: 'bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#1e3a8a] border-b-2 border-orange-400 shadow-xl',
    logoPrimary: 'text-white',
    logoSecondary: 'text-orange-300',
    iconColor: 'text-orange-400',
    linkActive: 'bg-white text-blue-900 font-black shadow-lg',
    linkInactive: 'text-blue-100 hover:text-white hover:bg-white/15',
    dotColor: '#1d4ed8',
  },
  cleanWhite: {
    id: 'cleanWhite',
    name: 'ক্লিন প্রিমিয়াম হোয়াইট',
    headerBg: 'bg-white/95 backdrop-blur-md border-b-2 border-[#0f355c] shadow-md',
    logoPrimary: 'text-[#0f355c]',
    logoSecondary: 'text-[#e67e22]',
    iconColor: 'text-[#0f355c]',
    linkActive: 'bg-[#0f355c] text-white font-black shadow-md',
    linkInactive: 'text-slate-700 hover:text-[#0f355c] hover:bg-slate-100',
    dotColor: '#ffffff',
  },
  darkCharcoal: {
    id: 'darkCharcoal',
    name: 'ইন্ডাস্ট্রিয়াল চারকোল ও অরেঞ্জ',
    headerBg: 'bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] border-b-2 border-orange-500 shadow-xl',
    logoPrimary: 'text-white',
    logoSecondary: 'text-orange-400',
    iconColor: 'text-orange-500',
    linkActive: 'bg-orange-500 text-white font-black shadow-lg shadow-orange-500/30',
    linkInactive: 'text-slate-300 hover:text-orange-400 hover:bg-white/10',
    dotColor: '#111827',
  }
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentStyle, setCurrentStyle] = useState(HEADER_STYLES.navyGold);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

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

  const s = currentStyle;

  return (
    <header className={`sticky top-0 z-50 ${s.headerBg} py-3.5 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="flex items-center gap-2.5">
            {/* AE Icon Symbol */}
            <div className="flex items-center">
              <svg className={`w-10 h-8 ${s.iconColor} transition-colors`} viewBox="0 0 100 70" fill="currentColor">
                <path d="M10 60 L35 10 L50 40 L35 40 L30 50 L55 50 L60 60 Z" />
                <path d="M50 15 L90 15 L90 25 L65 25 L65 33 L85 33 L85 43 L65 43 L65 50 L90 50 L90 60 L50 60 Z" />
              </svg>
            </div>
            
            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className={`text-xl sm:text-2xl font-black ${s.logoPrimary} tracking-tight font-sans transition-colors`}>
                ASIA ENGINEERS
              </span>
              <span className={`text-[11px] sm:text-xs font-black ${s.logoSecondary} tracking-[0.2em] uppercase font-sans transition-colors`}>
                STEEL STRUCTURE
              </span>
            </div>
          </div>
        </a>

        {/* The Exact Menu Items as Requested */}
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 sm:gap-2 flex-wrap">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-[15px] font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? s.linkActive
                      : s.linkInactive
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick 1-Click Header Color Switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setColorPickerOpen(!colorPickerOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-black/20 hover:bg-black/30 text-amber-300 border border-amber-400/30 transition-all cursor-pointer shadow-xs"
              title="হেডার কালার বদলান"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">রং বদলান</span>
            </button>

            {colorPickerOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 text-xs animate-in fade-in duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  হেডারের রঙ বেছে নিন
                </div>
                <div className="py-1 space-y-1">
                  {Object.values(HEADER_STYLES).map((style) => (
                    <button
                      key={style.id}
                      onClick={() => {
                        setCurrentStyle(style);
                        setColorPickerOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors cursor-pointer ${
                        s.id === style.id ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40' : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-4 h-4 rounded-full border border-white/30 shadow-2xs shrink-0" 
                          style={{ backgroundColor: style.dotColor }}
                        />
                        <span className="text-[12px]">{style.name}</span>
                      </div>
                      {s.id === style.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
