import React from 'react';
import { ShieldCheck, Cpu, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Structural Safety Record",
      desc: "All structural designs conform strictly to BNBC (Bangladesh National Building Code) and AISC seismic criteria with zero safety compromise."
    },
    {
      icon: Cpu,
      title: "Advanced CNC Fabrication",
      desc: "Plasma CNC cutting, automated submerged arc welding, and sub-millimeter laser alignment eliminate site fitting errors."
    },
    {
      icon: Award,
      title: "Certified Civil & Structural Engineers",
      desc: "Every project is supervised and approved by registered structural engineers with decades of combined industrial experience."
    },
    {
      icon: Clock,
      title: "Guaranteed On-Time Delivery",
      desc: "Streamlined fabrication and rapid crane erection ensure your industrial plant or warehouse begins operations on schedule."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#cbd5e1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
            The Asia Engineers Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight mb-4">
            Why Leading Enterprises Choose Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We bridge international structural standards with deep local knowledge of Bangladesh's geotechnical and industrial environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#0f355c] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e2e5e9] text-[#0f355c] flex items-center justify-center mb-5 group-hover:bg-[#0f355c] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f355c] mb-2 group-hover:text-[#d97706] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-[#d97706]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Assurance Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
