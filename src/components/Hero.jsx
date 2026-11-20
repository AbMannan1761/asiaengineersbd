import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const quickCards = [
    {
      title: "Services",
      href: "#services",
      img: "./images/BUILDING-PROJECTS-COVER-PAGE-3_1610546163.jpg",
    },
    {
      title: "Contact Us",
      href: "#contact",
      img: "./images/cartonCraft-1024x1024.webp",
    },
    {
      title: "Lift (Portfolio)",
      href: "#lift-portfolio",
      img: "./images/unitex-1024x1024.webp",
    },
    {
      title: "Steel Building Projects",
      href: "#projects",
      img: "./images/phpMotors-1024x1024.webp",
    }
  ];

  return (
    <section id="home" className="py-8 sm:py-12 bg-[#ffffff] border-b border-[#d1d5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Exact Text Card from Screenshot */}
          <div className="lg:col-span-7 bg-[#dfe2e6] border border-[#cbd5e1] rounded-xs p-8 sm:p-12 shadow-2xs flex flex-col justify-center">
            <p className="text-xl sm:text-2xl lg:text-[27px] text-[#2c3e50] leading-[1.6] font-normal tracking-tight">
              We are a <strong className="font-bold text-[#1f2937]">professional and reliable steel structure and construction company</strong> committed to delivering <strong className="font-bold text-[#1f2937]">high-quality engineering solutions</strong>. Our goal is to build <strong className="font-bold text-[#1f2937]">safe, durable, and modern steel structures</strong> using <strong className="font-bold text-[#1f2937]">advanced technology, skilled workmanship, and strong quality control</strong>.
            </p>
          </div>

          {/* Right Column: 2x2 Image Cards from Screenshot */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="group relative rounded-xs overflow-hidden border border-[#cbd5e1] bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-end aspect-4/3 min-h-[180px]"
              >
                {/* Background Image (grayscale styling matching screenshot) */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Banner at Bottom Matching Screenshot */}
                <div className="relative z-10 p-3.5 bg-[#4b5563]/90 backdrop-blur-2xs group-hover:bg-[#374151] transition-colors border-t border-slate-500/40">
                  <h3 className="text-base font-bold text-white tracking-tight underline decoration-1 underline-offset-4 flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </h3>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
