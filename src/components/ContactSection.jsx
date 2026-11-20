import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Steel Building / Industrial Shed',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Asia Engineers BD,\n\nI want to discuss a new project inquiry:\n` +
      `Name: ${formData.name || 'Client'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Type: ${formData.projectType}\n` +
      `Location: ${formData.location || 'Bangladesh'}\n` +
      `Details: ${formData.message || 'General inquiry'}`
    );
    window.open(`https://wa.me/8801830002040?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc] border-b border-[#cbd5e1] relative bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight mb-4">
            Let’s Build Safe, Strong & Durable Structures Together
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Contact Asia Engineers BD today for professional steel structure design, fabrication, construction, and lift core installation support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details Cards & Google Map */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#cbd5e1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e2e5e9] text-[#0f355c] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Head Office Location
                </h4>
                <p className="text-sm font-bold text-[#0f355c] leading-relaxed">
                  CJKS Shopping Complex (Room 3028), Kajir Dewri, Chattogram, Bangladesh.
                </p>
                <div className="text-xs text-[#d97706] font-semibold mt-1">
                  Centrally located in Kajir Dewri, Chattogram
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#cbd5e1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e2e5e9] text-[#0f355c] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Direct Line & Hotline
                </h4>
                <a
                  href="tel:01830002040"
                  className="text-lg font-bold text-[#0f355c] hover:text-[#d97706] transition-colors block"
                >
                  +880 1830-002040
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  Available Saturday – Thursday (9:00 AM – 7:00 PM)
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#cbd5e1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e2e5e9] text-[#0f355c] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Corporate Inquiries
                </h4>
                <a
                  href="mailto:asiaengineers09@gmail.com"
                  className="text-sm font-bold text-[#0f355c] hover:text-[#d97706] transition-colors block"
                >
                  asiaengineers09@gmail.com
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  Send your CAD drawings or RFQ for rapid review
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#cbd5e1] h-64 bg-white shadow-xs">
              <iframe
                title="Asia Engineers Office Location"
                src="https://maps.google.com/maps?q=Kajir+Dewri,+Chattogram,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Inquiry Submission Form */}
          <div className="lg:col-span-7 bg-white border border-[#cbd5e1] rounded-3xl p-6 sm:p-10 shadow-lg">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0f355c] mb-2">
                Send Project Inquiry / Request Site Survey
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the details below and our structural engineering team will review your project requirements and respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-[#0f355c]">Inquiry Received Successfully!</h4>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our senior structural engineer will review your project details and contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0f355c] hover:text-[#d97706] font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Masum Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="018XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chattogram / Dhaka"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Structural Service Needed *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c]"
                  >
                    <option value="Industrial Factory Shed / Warehouse">Industrial Factory Shed / Warehouse</option>
                    <option value="Structural Steel Lift Core Shaft">Structural Steel Lift Core Shaft</option>
                    <option value="Commercial Multi-Storey Steel Frame">Commercial Multi-Storey Steel Frame</option>
                    <option value="Emergency Fire Escape Steel Staircase">Emergency Fire Escape Steel Staircase</option>
                    <option value="Structural Health Audit & Certification">Structural Health Audit & Certification</option>
                    <option value="Turnkey Steel Fabrication & Erection">Turnkey Steel Fabrication & Erection</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Project Details / Dimension / Requirements
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Describe estimated square footage, timeline, crane requirements, or specific architectural considerations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f355c] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0f355c] hover:bg-[#0b2742] text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#d97706]" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
