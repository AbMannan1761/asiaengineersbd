import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const handleClick = () => {
    const text = encodeURIComponent("Hello Asia Engineers BD, I am interested in discussing a steel structure / lift core project.");
    window.open(`https://wa.me/8801830002040?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden group-hover:block mr-3 bg-slate-900 border border-slate-700 text-slate-200 text-xs py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap animate-in fade-in duration-200">
        Chat with our Structural Engineer
      </div>

      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all relative cursor-pointer"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
}
