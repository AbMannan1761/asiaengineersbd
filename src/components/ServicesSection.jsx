import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { Building2, Factory, Layers, Compass, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Factory: Factory,
  Layers: Layers,
  Compass: Compass,
};

export default function ServicesSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-[#f8fafc] border-b border-[#cbd5e1] relative bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
            What We Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight mb-4">
            Professional Steel Structure & Construction Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From preliminary design and Tekla 3D modeling to heavy CNC fabrication and crane erection, we provide turnkey structural engineering solutions across Bangladesh.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((srv) => {
            const Icon = iconMap[srv.icon] || Building2;
            const isActive = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0f355c] text-white border-[#0f355c] shadow-lg font-semibold'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${isActive ? 'bg-[#d97706] text-white' : 'bg-slate-100 text-[#0f355c]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#0f355c]'}`}>
                    {srv.title}
                  </div>
                  <div className={`text-[11px] hidden sm:block ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                    {srv.items.length} Engineering Solutions
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Card */}
        <div className="bg-white border border-[#cbd5e1] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Description & Feature Pills */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#d97706] mb-1 block">
                  {activeService.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f355c] tracking-tight">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeService.description}
              </p>

              {/* Standard Badges */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Quality Standards
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Breakdown of Specific Capabilities */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Comprehensive Engineering Scope
              </div>
              <div className="grid grid-cols-1 gap-3">
                {activeService.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 hover:border-[#d97706] transition-colors flex items-start gap-4 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#e2e5e9] border border-slate-300 text-[#0f355c] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#0f355c] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f355c] group-hover:text-[#d97706] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
