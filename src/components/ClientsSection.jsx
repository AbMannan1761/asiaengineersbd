import React from 'react';
import { CLIENT_LOGOS } from '../data/team';
import { Building } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#cbd5e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-[#d97706] tracking-wider uppercase mb-1">
            Industry Recognition
          </div>
          <h3 className="text-2xl font-bold text-[#0f355c]">
            Trusted by Major Industrial & Defense Entities
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 hover:border-[#0f355c] transition-all flex flex-col items-center justify-center text-center group shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e2e5e9] text-[#0f355c] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0f355c] group-hover:text-white transition-all">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#0f355c] group-hover:text-[#d97706] transition-colors">
                {client.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {client.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
