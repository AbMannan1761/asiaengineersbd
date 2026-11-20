import React, { useState, useEffect } from 'react';
import { X, Calculator, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Industrial Factory Shed / PEB',
    specNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (typeof initialData === 'string') {
        setFormData(prev => ({ ...prev, specNotes: initialData }));
      } else if (typeof initialData === 'object') {
        setFormData(prev => ({
          ...prev,
          service: initialData.type || prev.service,
          specNotes: `Estimated Area: ${initialData.area?.toLocaleString()} sq.ft | Approx Steel: ~${initialData.tonnage} Tons | Ballpark: ${initialData.budget}`
        }));
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Asia Engineers BD,\n\nI want to request an official quotation:\n` +
      `Name: ${formData.name || 'Client'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Category: ${formData.service}\n` +
      `Notes: ${formData.specNotes || 'Standard consultation requested'}`
    );
    window.open(`https://wa.me/8801830002040?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white border border-[#cbd5e1] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#d97706] text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-4 h-4" /> Official Engineering Quote
        </div>

        <h3 className="text-2xl font-bold text-[#0f355c] mb-2">
          Request Project Consultation
        </h3>
        <p className="text-xs text-slate-600 mb-6">
          Provide your project specs and our senior structural team will prepare a preliminary BOQ & proposal.
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-[#0f355c]">Quote Request Submitted</h4>
            <p className="text-xs text-slate-600">
              Our engineering office in Kajir Dewri, Chattogram will call you at <strong>{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f355c] text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full name or company name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0f355c]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="018XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0f355c]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0f355c]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Service Type</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0f355c]"
              >
                <option value="Industrial Factory Shed / PEB">Industrial Factory Shed / PEB</option>
                <option value="Structural Steel Lift Core Shaft">Structural Steel Lift Core Shaft</option>
                <option value="Commercial Multi-Storey Building">Commercial Multi-Storey Building</option>
                <option value="Emergency Fire Stairway">Emergency Fire Stairway</option>
                <option value="Custom Steel Fabrication & Erection">Custom Steel Fabrication & Erection</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Specifications / Notes</label>
              <textarea
                rows="3"
                value={formData.specNotes}
                onChange={(e) => setFormData({ ...formData, specNotes: e.target.value })}
                placeholder="Mention area (sq.ft), height, location..."
                className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0f355c] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0f355c] hover:bg-[#0b2742] text-white font-bold py-3 rounded-xl text-xs shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Submit Quote Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl text-xs cursor-pointer shadow-sm"
              >
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
