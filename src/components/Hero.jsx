import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Ruler, CheckCircle2, PhoneCall, Building2, HardHat } from 'lucide-react';

export default function Hero({ onOpenQuote, currentTheme }) {
  const quickNavCards = [
    {
      title: "Services",
      href: "#services",
      img: "/images/BUILDING-PROJECTS-COVER-PAGE-3_1610546163.jpg",
      desc: "Fabrication, Erection & PEB Solutions"
    },
    {
      title: "Contact Us",
      href: "#contact",
      img: "/images/cartonCraft-1024x1024.webp",
      desc: "Kajir Dewri Office & Site Survey"
    },
    {
      title: "Lift (Portfolio)",
      href: "#lift-portfolio",
      img: "/images/unitex-1024x1024.webp",
      desc: "45+ Specialized Structural Cores"
    },
    {
      title: "Steel Building Projects",
      href: "#projects",
      img: "/images/phpMotors-1024x1024.webp",
      desc: "Industrial Factories & Warehouses"
    }
  ];

  return (
    <section id="home" className="py-8 sm:py-12 bg-[#f8fafc] border-b border-[#cbd5e1] relative bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Section Header / H1 Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300 mb-3">
            <HardHat className="w-4 h-4 text-amber-600" /> Leading Steel Construction Company in Bangladesh
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e36] tracking-tight leading-tight">
            Asia Engineers BD — <span className="text-[#d97706]">Steel Structure</span> & Industrial Construction
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Mission & Core Value Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0a1e36] to-[#12335e] text-white rounded-2xl p-7 sm:p-10 shadow-xl flex flex-col justify-between border border-[#1e4679]">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 mb-6 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Build Your Dream Project With Us
              </div>

              {/* Core Statement */}
              <p className="text-xl sm:text-2xl lg:text-[26px] leading-relaxed font-normal tracking-tight mb-8 text-slate-100">
                We are a <strong className="font-extrabold text-amber-400">professional and reliable steel structure and construction company</strong> committed to delivering <strong className="font-extrabold text-amber-400">high-quality engineering solutions</strong>. Our goal is to build <strong className="font-extrabold text-amber-400">safe, durable, and modern steel structures</strong> using <strong className="font-extrabold text-amber-400">advanced technology, skilled workmanship, and strong quality control</strong>.
              </p>

              {/* Engineering Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                <div className="bg-white/10 border border-white/15 rounded-lg p-2.5 text-center shadow-xs backdrop-blur-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-white block">Safe Structure</span>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-lg p-2.5 text-center shadow-xs backdrop-blur-xs">
                  <Cpu className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-white block">Advanced Tech</span>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-lg p-2.5 text-center shadow-xs backdrop-blur-xs">
                  <Ruler className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-white block">Precision Quality</span>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-lg p-2.5 text-center shadow-xs backdrop-blur-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-white block">On-Time Finish</span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm group cursor-pointer"
              >
                <span>Explore 150+ Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold px-5 py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer"
              >
                <span>Instant Cost Estimator</span>
              </button>

              <a
                href="tel:01830002040"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-xl text-sm transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>01830-002040</span>
              </a>
            </div>

          </div>

          {/* Right Column: 2x2 Quick Feature Image Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickNavCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="group relative rounded-2xl overflow-hidden border border-[#cbd5e1] bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end aspect-4/3 min-h-[190px]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                <div className="relative z-10 p-4 bg-slate-900/90 backdrop-blur-xs group-hover:bg-[#0a1e36]/95 transition-colors border-t border-slate-700/60">
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {card.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
