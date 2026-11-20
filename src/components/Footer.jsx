import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-slate-300 border-t border-slate-700 text-xs">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs">
                <img 
                  src="/images/asia_engineers_logo.png" 
                  alt="Asia Engineers BD" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight">
                  ASIA ENGINEERS <span className="text-[#d97706]">BD</span>
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Steel Structural & Construction
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Delivering high-quality, BNBC & AISC certified steel building, industrial shed, and structural lift core engineering solutions with precision workmanship across Bangladesh.
            </p>

            <div className="pt-2 text-[11px] text-amber-400 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Structural Engineering Contractor</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Steel Building Projects</a></li>
              <li><a href="#lift-portfolio" className="hover:text-amber-400 transition-colors">Lift Core Portfolio</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Cost Calculator</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Specialties
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Pre-Engineered Sheds</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">High-Rise Lift Cores</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Factory Steel Framing</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Emergency Fire Stairs</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Gantry Crane Girders</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Structural Retrofit</a></li>
            </ul>
          </div>

          {/* Office Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Head Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>CJKS Shopping Complex (Room 3028), Kajir Dewri, Chattogram, Bangladesh.</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:01830002040" className="hover:text-amber-400 font-semibold">01830002040</a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:asiaengineers09@gmail.com" className="hover:text-amber-400">asiaengineers09@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#0f172a] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Asia Engineers BD</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Safety First • Structural Precision • BNBC Standard</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
