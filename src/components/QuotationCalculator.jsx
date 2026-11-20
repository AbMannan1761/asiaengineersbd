import React, { useState } from 'react';
import { Calculator, ArrowRight, Send, Sparkles } from 'lucide-react';

export default function QuotationCalculator({ onOpenQuoteWithSpec }) {
  const [projectType, setProjectType] = useState('industrial-shed');
  const [areaSqFt, setAreaSqFt] = useState(10000);
  const [floors, setFloors] = useState(1);
  const [includeCivil, setIncludeCivil] = useState(false);
  const [includeCladding, setIncludeCladding] = useState(true);

  const rates = {
    'industrial-shed': {
      label: 'Industrial Factory Shed (PEB)',
      baseRatePerSqFt: 650,
      claddingRate: 220,
      steelPerSqFtKg: 22,
      weeksPer10k: 6,
    },
    'warehouse': {
      label: 'Logistics Warehouse (High Bay)',
      baseRatePerSqFt: 580,
      claddingRate: 200,
      steelPerSqFtKg: 19,
      weeksPer10k: 5,
    },
    'lift-core': {
      label: 'Structural Steel Lift Core Shaft',
      baseRatePerSqFt: 1800,
      claddingRate: 400,
      steelPerSqFtKg: 45,
      weeksPer10k: 4,
    },
    'commercial-frame': {
      label: 'Commercial Multi-Storey Steel Frame',
      baseRatePerSqFt: 1100,
      claddingRate: 350,
      steelPerSqFtKg: 35,
      weeksPer10k: 8,
    },
    'fire-stair': {
      label: 'Emergency Fire Escape Staircase Tower',
      baseRatePerSqFt: 1400,
      claddingRate: 150,
      steelPerSqFtKg: 40,
      weeksPer10k: 3,
    }
  };

  const currentConfig = rates[projectType] || rates['industrial-shed'];
  const totalFloorArea = projectType === 'lift-core' ? (floors * 120) : (areaSqFt * floors);

  const steelTonnage = ((totalFloorArea * currentConfig.steelPerSqFtKg) / 1000).toFixed(1);
  const baseCost = totalFloorArea * currentConfig.baseRatePerSqFt;
  const claddingCost = includeCladding ? totalFloorArea * currentConfig.claddingRate : 0;
  const civilCost = includeCivil ? totalFloorArea * 300 : 0;
  const totalCost = baseCost + claddingCost + civilCost;

  const formatBDT = (amount) => {
    if (amount >= 10000000) {
      return `৳ ${(amount / 10000000).toFixed(2)} Crore`;
    } else {
      return `৳ ${(amount / 100000).toFixed(2)} Lac`;
    }
  };

  const estimatedWeeks = Math.max(3, Math.round((totalFloorArea / 10000) * currentConfig.weeksPer10k));

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Asia Engineers BD,\n\nI used your online cost estimator for:\n` +
      `• Project Type: ${currentConfig.label}\n` +
      `• Total Area: ${totalFloorArea.toLocaleString()} sq.ft (${floors} ${floors > 1 ? 'Storeys' : 'Single Level'})\n` +
      `• Estimated Steel: ~${steelTonnage} Tons\n` +
      `• Estimated Budget: ${formatBDT(totalCost * 0.9)} - ${formatBDT(totalCost * 1.1)}\n\n` +
      `Please provide an official structural consultation and quotation.`
    );
    window.open(`https://wa.me/8801830002040?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#f8fafc] border-b border-[#cbd5e1] relative bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" /> Interactive Cost & Material Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight mb-4">
            Instant Steel Construction Cost Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate structural steel tonnage, preliminary budget, and construction duration for your factory shed, warehouse, or lift core in Bangladesh.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white border border-[#cbd5e1] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0f355c] block mb-3">
                  1. Select Structural Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(rates).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setProjectType(key)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        projectType === key
                          ? 'bg-[#0f355c] text-white border-[#0f355c] shadow-sm font-bold'
                          : 'bg-[#f8fafc] text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {data.label}
                    </button>
                  ))}
                </div>
              </div>

              {projectType !== 'lift-core' && projectType !== 'fire-stair' ? (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#0f355c]">
                      2. Floor Footprint Area (Sq. Ft.)
                    </label>
                    <span className="text-base font-bold text-[#d97706]">
                      {areaSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="80000"
                    step="1000"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="w-full accent-[#d97706] cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>2,000 sq.ft</span>
                    <span>40,000 sq.ft</span>
                    <span>80,000 sq.ft</span>
                  </div>
                </div>
              ) : null}

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0f355c]">
                    {projectType === 'lift-core' ? '2. Elevator Shaft Height / Storeys' : '3. Number of Levels / Storeys'}
                  </label>
                  <span className="text-base font-bold text-[#d97706]">
                    {floors} {floors > 1 ? 'Floors / Levels' : 'Single Level'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full accent-[#d97706] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Storey</span>
                  <span>7 Storeys</span>
                  <span>15 Storeys</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0f355c] block mb-3">
                  Scope Inclusions
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs text-slate-700 cursor-pointer hover:border-slate-300">
                    <input
                      type="checkbox"
                      checked={includeCladding}
                      onChange={(e) => setIncludeCladding(e.target.checked)}
                      className="accent-[#d97706] w-4 h-4 rounded"
                    />
                    <span>Include Roof & Wall Cladding</span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs text-slate-700 cursor-pointer hover:border-slate-300">
                    <input
                      type="checkbox"
                      checked={includeCivil}
                      onChange={(e) => setIncludeCivil(e.target.checked)}
                      className="accent-[#d97706] w-4 h-4 rounded"
                    />
                    <span>Include Civil Foundation Footings</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Results Display */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#e2e5e9] p-6 sm:p-8 rounded-2xl border border-[#cbd5e1] relative">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-300 pb-4">
                  <span className="text-xs uppercase font-bold text-slate-600">
                    Preliminary Calculation
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white text-[#0f355c] font-bold shadow-2xs">
                    BNBC Standard
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-1">Estimated Preliminary Budget Range:</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] font-heading">
                    {formatBDT(totalCost * 0.9)} - {formatBDT(totalCost * 1.1)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    *Approximate range for planning based on Chattogram / Dhaka market material costs.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] text-slate-500 uppercase font-semibold">Total Steel</div>
                    <div className="text-xl font-bold text-[#0f355c] mt-0.5">~{steelTonnage} <span className="text-xs text-[#d97706]">Tons</span></div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] text-slate-500 uppercase font-semibold">Timeline</div>
                    <div className="text-xl font-bold text-[#0f355c] mt-0.5">{estimatedWeeks} - {estimatedWeeks + 2} <span className="text-xs text-[#d97706]">Weeks</span></div>
                  </div>
                </div>

                <div className="text-xs text-slate-700 space-y-1.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Effective Area:</span>
                    <span className="font-semibold text-slate-900">{totalFloorArea.toLocaleString()} sq.ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Steel Code:</span>
                    <span className="font-semibold text-slate-900">ASTM A36 / A572 Gr 50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Fabrication:</span>
                    <span className="font-semibold text-[#0f355c]">Asia Engineers Works</span>
                  </div>
                </div>

              </div>

              <div className="space-y-2.5 pt-6 mt-6 border-t border-slate-300">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Spec to Engineer via WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenQuoteWithSpec({
                    type: currentConfig.label,
                    area: totalFloorArea,
                    tonnage: steelTonnage,
                    budget: `${formatBDT(totalCost * 0.9)} - ${formatBDT(totalCost * 1.1)}`
                  })}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0f355c] font-bold py-3 rounded-xl text-xs border border-slate-300 transition-all cursor-pointer shadow-xs"
                >
                  <span>Request Formal Engineering Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
