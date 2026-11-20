import React from 'react';
import { Award, Building, HardHat, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      value: "150+",
      label: "Completed Projects",
      detail: "Industrial factories, commercial buildings & lift cores across Bangladesh",
      icon: Building
    },
    {
      value: "100%",
      label: "Safety & Quality Compliance",
      detail: "BNBC, AISC & AWS D1.1 certified design & zero fatal incident record",
      icon: ShieldCheck
    },
    {
      value: "45+",
      label: "Structural Lift Cores",
      detail: "Specialized steel elevator shafts engineered for hotels & high-rises",
      icon: HardHat
    },
    {
      value: "18+",
      label: "Years of Engineering Excellence",
      detail: "Pioneering pre-engineered building solutions since inception",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-[#cbd5e1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border border-[#e2e8f0] p-6 rounded-2xl relative overflow-hidden group hover:border-[#d97706] hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 text-slate-200 group-hover:text-[#d97706]/15 transition-colors">
                  <Icon className="w-16 h-16 stroke-1" />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] font-heading mb-1">
                    {item.value}
                  </div>
                  <div className="text-base font-bold text-[#1e293b] mb-2">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#64748b] leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Us Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300">
              Who We Are
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight leading-tight">
              Modern, Safe & Cost-Effective <span className="text-[#d97706]">Steel Solutions</span>
            </h2>

            <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
              <strong>Asia Engineers BD</strong> is a leading structural engineering contractor based in Chattogram, Bangladesh. We specialize in industrial sheds, factory buildings, logistics warehouses, high-capacity lift core structures, and bespoke steel fabrication and erection works.
            </p>

            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Our engineering team is led by certified civil and structural engineers, seasoned site supervisors, and trained fabricators who ensure every beam, bolt, and weld meets the strictest tolerances of the Bangladesh National Building Code (BNBC) and international standards.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0f355c]">Safe & Resilient Structures</h4>
                  <p className="text-xs text-[#64748b]">Engineered to withstand coastal cyclone winds, seismic ground motions, and heavy industrial gantry loads.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0f355c]">Advanced Technology & CNC Precision</h4>
                  <p className="text-xs text-[#64748b]">State-of-the-art 3D Tekla modeling, automated plasma cutting, and laser-guided alignment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0f355c]">Rapid On-Time Handover</h4>
                  <p className="text-xs text-[#64748b]">Pre-engineered components slash traditional on-site construction timelines by over 50%.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#cbd5e1] shadow-xl">
              <img 
                src="/images/BUILDING-PROJECTS-COVER-PAGE-3_1610546163.jpg" 
                alt="Asia Engineers Steel Site" 
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <div className="text-xs uppercase font-bold text-[#d97706] tracking-wider mb-1">
                  Our Core Belief
                </div>
                <blockquote className="text-sm sm:text-base font-semibold text-[#0f355c] italic">
                  “Quality, Safety, and Commitment are the foundation of every successful project we construct.”
                </blockquote>
                <div className="text-xs text-slate-500 mt-2">
                  — Asia Engineers BD Executive Leadership
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
