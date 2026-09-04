import React, { useState } from 'react';
import { Calculator, Sparkles, Check, Plus, Minus, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { FACIAL_ADDONS } from '../data/servicesData';

interface InteractiveQuoteCalculatorProps {
  onApplyPackage: (packageSummary: string) => void;
}

const BASE_OPTIONS = [
  { id: 'hydra-30', name: 'Hydra-Infusion (30 min)', duration: 30, price: 65, category: 'Skin Treatment' },
  { id: 'hydra-60', name: 'Hydra-Infusion (1 hour)', duration: 60, price: 85, category: 'Skin Treatment' },
  { id: 'micro-30', name: 'Microdermabrasion (30 min)', duration: 30, price: 65, category: 'Skin Treatment' },
  { id: 'micro-60', name: 'Microdermabrasion (1 hour)', duration: 60, price: 85, category: 'Skin Treatment' },
  { id: 'classic-euro', name: 'Classic European Facial', duration: 45, price: 50, category: 'Facial' },
  { id: 'basic-3step', name: 'Basic 3-Step Express Facial', duration: 40, price: 35, category: 'Facial' },
  { id: 'face-lift', name: 'Face Lift Aroma Massage Facial', duration: 60, price: 100, category: 'Facial' },
  { id: 'event-glam', name: 'Event & Occasion Glam Makeup', duration: 60, price: 110, category: 'Makeup' },
  { id: 'soft-glam', name: 'Soft Glam Makeup', duration: 50, price: 95, category: 'Makeup' },
];

export const InteractiveQuoteCalculator: React.FC<InteractiveQuoteCalculatorProps> = ({
  onApplyPackage,
}) => {
  const [selectedBaseId, setSelectedBaseId] = useState<string>('hydra-60');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['add-led']);

  const selectedBase = BASE_OPTIONS.find((b) => b.id === selectedBaseId) || BASE_OPTIONS[0];

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  // Calculations
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = FACIAL_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.priceVal : 0);
  }, 0);

  const totalCost = selectedBase.price + addonsTotal;
  const totalEstimatedTime = selectedBase.duration + selectedAddonIds.length * 15;

  const handleBookPackage = () => {
    const addonNames = selectedAddonIds
      .map((id) => FACIAL_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `Custom Package: ${selectedBase.name} ($${selectedBase.price})${
      addonNames ? ` + Add-ons: [${addonNames}] (+$${addonsTotal})` : ''
    }. Total Estimate: $${totalCost} AUD (${totalEstimatedTime} mins + Free 10-min Consultation).`;

    onApplyPackage(summary);
  };

  return (
    <section id="quote-calculator-section" className="relative py-20 bg-[#0B0C10] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131419] border border-[#1FD1B2]/30 text-xs font-semibold text-[#1FD1B2] uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Custom Facial & Glam <span className="text-gradient-ym">Package Builder</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Configure your dream treatment in real-time. Transparent pricing with zero hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Base and Addon Selection (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Pick Base Treatment */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1FD1B2]/20 text-[#1FD1B2] text-xs flex items-center justify-center font-bold">
                  1
                </span>
                Select Your Base Treatment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {BASE_OPTIONS.map((base) => {
                  const isSelected = base.id === selectedBaseId;
                  return (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBaseId(base.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1FD1B2]/15 border-[#1FD1B2] shadow-[0_0_15px_rgba(31,209,178,0.25)]'
                          : 'bg-black/40 border-white/[0.06] hover:border-white/[0.2]'
                      }`}
                    >
                      <div className="mb-2">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          {base.category}
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          {base.name}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#1FD1B2]" /> {base.duration}m
                        </span>
                        <span className="font-extrabold text-[#1FD1B2]">
                          ${base.price}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Medical & Glow Add-ons */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#B829A0]/20 text-[#F472B6] text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  Add Clinical Boosters (Optional)
                </h3>
                <span className="text-xs text-[#94A3B8]">Tap to toggle</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FACIAL_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#B829A0]/15 border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.25)]'
                          : 'bg-black/40 border-white/[0.06] hover:border-white/[0.2]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isChecked
                              ? 'bg-[#B829A0] border-[#B829A0] text-white'
                              : 'border-white/[0.2] bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{addon.name}</div>
                          <div className="text-[11px] text-slate-400">{addon.desc}</div>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-[#1FD1B2] ml-2 flex-shrink-0">
                        {addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculation Summary Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-[#1FD1B2]/40 shadow-[0_10px_35px_rgba(31,209,178,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-300">
                  Estimated Summary
                </span>
                <span className="text-xs font-semibold text-[#1FD1B2] bg-[#1FD1B2]/10 px-2.5 py-0.5 rounded-full">
                  Instant Quote
                </span>
              </div>

              {/* Base Item */}
              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between items-start">
                  <span className="text-slate-300 font-medium">{selectedBase.name}</span>
                  <span className="font-bold text-white">${selectedBase.price} AUD</span>
                </div>

                {/* Addons List */}
                {selectedAddonIds.map((id) => {
                  const addon = FACIAL_ADDONS.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between text-slate-400 pl-2 border-l border-white/[0.1]">
                      <span>+ {addon.name}</span>
                      <span className="text-[#1FD1B2] font-semibold">${addon.priceVal}</span>
                    </div>
                  );
                })}

                {/* Complimentary perk */}
                <div className="flex justify-between text-emerald-400 font-semibold pt-2 border-t border-white/[0.06]">
                  <span>✨ 10-Min Skin Consultation</span>
                  <span>FREE</span>
                </div>
              </div>

              {/* Total Summary */}
              <div className="pt-4 border-t border-white/[0.1] mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1FD1B2]" /> Total Appt Time:
                  </span>
                  <span className="font-bold text-white">~{totalEstimatedTime} Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-300">Estimated Total:</span>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1FD1B2] via-emerald-300 to-[#1FD1B2] drop-shadow-[0_0_20px_rgba(31,209,178,0.4)]">
                    ${totalCost} <span className="text-xs text-slate-400 font-normal">AUD</span>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBookPackage}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_25px_rgba(31,209,178,0.35)] hover:shadow-[0_0_40px_rgba(31,209,178,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
                id="apply-calculated-package-btn"
              >
                <span>Book This Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-center text-slate-400 mt-3">
                No deposit needed today • Pay on day in studio or mobile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
