import React from 'react';
import { TEAM_MEMBERS } from '../data/team';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#f8fafc] border-b border-[#cbd5e1] relative bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
            Engineering Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight mb-4">
            Experienced Team for Safe & Quality Construction
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our team consists of qualified civil and structural engineers, site managers, and certified technicians dedicated to precision workmanship and safety.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#cbd5e1] rounded-2xl p-6 hover:border-[#0f355c] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0f355c] text-white flex items-center justify-center font-bold text-xl shrink-0 group-hover:bg-[#d97706] transition-colors shadow-xs">
                    {member.name.split(' ').map(n => n[0]).filter((c, i) => i < 2).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f355c] group-hover:text-[#d97706] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#d97706] mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {member.credentials}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec, sidx) => (
                    <span
                      key={sidx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f1f5f9] text-[#334155] border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Core belief callout */}
        <div className="mt-16 text-center bg-[#e2e5e9] border border-slate-300 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xs">
          <div className="text-xs uppercase font-bold tracking-wider text-[#d97706] mb-2">
            Our Commitment
          </div>
          <p className="text-base sm:text-lg text-[#0f355c] font-bold italic">
            “Quality, Safety, and Commitment are the foundation of every successful project.”
          </p>
          <div className="text-xs text-slate-600 mt-2">
            Over 150 successful structural projects completed across Chittagong, Dhaka, and regional Bangladesh.
          </div>
        </div>

      </div>
    </section>
  );
}
