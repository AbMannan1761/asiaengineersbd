import React from 'react';
import { X, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#cbd5e1] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 transition-colors border border-slate-300 shadow-sm cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          
          {/* Main Visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#0f355c] text-white shadow-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                Status: {project.status}
              </span>
            </div>
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#d97706] mb-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f355c] tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Scope of Work */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
              Structural Scope & Execution
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.scope}
            </p>
          </div>

          {/* Highlights & Engineering Specs */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Technical Highlights & Design Factors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client & Contractor Details */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Project Client:</span>
              <span className="font-bold text-slate-900 text-sm">{project.client}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Contractor & Erection:</span>
              <span className="font-bold text-[#0f355c] text-sm">Asia Engineers BD</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#f8fafc] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d97706]" />
            <span>Designed in accordance with BNBC & AISC standards</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:01830002040"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(`Inquiry regarding ${project.title}`);
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f355c] hover:bg-[#0b2742] text-white text-xs font-bold shadow-md cursor-pointer"
            >
              <span>Get Quote for Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
