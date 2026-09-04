import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  Info,
  Layers,
  Flame,
  Scissors,
  Droplets,
  Zap,
} from 'lucide-react';
import {
  MAKEUP_SERVICES,
  DEEP_CLEANSING_FACIALS,
  ADVANCED_CLINICAL_TREATMENTS,
  FACIAL_ADDONS,
  HAIR_SERVICES,
} from '../data/servicesData';

interface ServicesMenuProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'makeup' | 'skin' | 'hair'>('all');
  const [skinCategory, setSkinCategory] = useState<'all' | 'hydrating' | 'clinical' | 'addons'>('all');

  return (
    <section id="services-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#1FD1B2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B829A0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131419] border border-[#1FD1B2]/30 text-xs font-semibold text-[#1FD1B2] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Studio Menu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Comprehensive <span className="text-gradient-ym">Services & Artistry</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Master-crafted treatments executed with precision, medical-grade hygiene, and premium pigments.
          </p>

          {/* Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white shadow-[0_0_25px_rgba(31,209,178,0.35)]'
                  : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#1FD1B2]/40 hover:text-white'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveTab('makeup')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'makeup'
                  ? 'bg-[#1FD1B2] text-[#0B0C10] font-bold shadow-[0_0_25px_rgba(31,209,178,0.4)]'
                  : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#1FD1B2]/40 hover:text-white'
              }`}
            >
              💄 Makeup Artistry
            </button>
            <button
              onClick={() => setActiveTab('skin')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'skin'
                  ? 'bg-[#B829A0] text-white font-bold shadow-[0_0_25px_rgba(184,41,160,0.4)]'
                  : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#B829A0]/40 hover:text-white'
              }`}
            >
              ✨ Skin Treatments & Facials
            </button>
            <button
              onClick={() => setActiveTab('hair')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'hair'
                  ? 'bg-gradient-to-r from-[#1FD1B2] to-[#B829A0] text-white font-bold shadow-[0_0_25px_rgba(31,209,178,0.35)]'
                  : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#1FD1B2]/40 hover:text-white'
              }`}
            >
              💇‍♀️ Hair Styling
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 - A: MAKEUP ARTISTRY */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'makeup') && (
          <div id="makeup-services" className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-[#1FD1B2] text-xs font-bold uppercase tracking-widest mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#1FD1B2]" /> Section A
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#1FD1B2]">A.</span> MAKEUP ARTISTRY
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] italic mt-1">
                  "Flawless looks tailored to you, for every occasion."
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-xs text-[#1FD1B2] bg-[#1FD1B2]/10 border border-[#1FD1B2]/30 px-3 py-1.5 rounded-full inline-block">
                HD Long-Wear • Photographic Airbrushed Finish
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MAKEUP_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group relative border border-white/[0.07]"
                  id={`makeup-card-${item.id}`}
                >
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                      Most Requested
                    </div>
                  )}

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1FD1B2]/10 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] mb-4 group-hover:scale-110 group-hover:bg-[#1FD1B2]/20 transition-all">
                      <Sparkles className="w-5 h-5" />
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-[#1FD1B2] transition-colors mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#1FD1B2] font-medium mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Investment</span>
                      <span className="text-xl font-extrabold text-[#1FD1B2]">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(`Makeup: ${item.name}`)}
                      className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.12] hover:bg-[#1FD1B2] hover:text-[#0B0C10] hover:border-[#1FD1B2] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Look</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2 - B: SKIN TREATMENT */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'skin') && (
          <div id="skin-treatments-section" className="mb-20 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-[#B829A0] text-xs font-bold uppercase tracking-widest mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#B829A0]" /> Section B
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#B829A0]">B.</span> SKIN TREATMENT & CLINICAL FACIALS
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] italic mt-1">
                  "Healthy, glowing skin is always in. Let's achieve your best skin together."
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="text-xs text-[#1FD1B2] bg-[#1FD1B2]/10 border border-[#1FD1B2]/30 px-3 py-1.5 rounded-full font-medium">
                  *Free 10 min Skin Consultation with any facial
                </span>
              </div>
            </div>

            {/* Sub-Tabs for Skin Treatments */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <button
                onClick={() => setSkinCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  skinCategory === 'all'
                    ? 'bg-[#B829A0]/25 text-[#F472B6] border border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.3)]'
                    : 'bg-black/40 backdrop-blur-md text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]'
                }`}
              >
                All Skin Services
              </button>
              <button
                onClick={() => setSkinCategory('clinical')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  skinCategory === 'clinical'
                    ? 'bg-[#B829A0]/25 text-[#F472B6] border border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.3)]'
                    : 'bg-black/40 backdrop-blur-md text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]'
                }`}
              >
                Advanced Clinical & Exfoliating (Hydra, Micro, Peels)
              </button>
              <button
                onClick={() => setSkinCategory('hydrating')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  skinCategory === 'hydrating'
                    ? 'bg-[#B829A0]/25 text-[#F472B6] border border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.3)]'
                    : 'bg-black/40 backdrop-blur-md text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]'
                }`}
              >
                Deep Cleansing & Hydrating Facials
              </button>
              <button
                onClick={() => setSkinCategory('addons')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  skinCategory === 'addons'
                    ? 'bg-[#B829A0]/25 text-[#F472B6] border border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.3)]'
                    : 'bg-black/40 backdrop-blur-md text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]'
                }`}
              >
                Clinical Add-Ons (Steam, Extractions, LED)
              </button>
            </div>

            {/* 1. ADVANCED CLINICAL & EXFOLIATING TREATMENTS */}
            {(skinCategory === 'all' || skinCategory === 'clinical') && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#1FD1B2]" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                    Advanced Clinical & Exfoliating Treatments
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ADVANCED_CLINICAL_TREATMENTS.map((item) => (
                    <div
                      key={item.id}
                      className={`glass-card rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 ${
                        item.unavailable
                          ? 'opacity-60 border-slate-800'
                          : 'glass-card-hover border-white/[0.08]'
                      }`}
                      id={`clinical-card-${item.id}`}
                    >
                      {item.tag && (
                        <div className="absolute top-4 right-4 bg-[#1FD1B2]/20 border border-[#1FD1B2]/40 text-[#1FD1B2] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                          {item.tag}
                        </div>
                      )}
                      {item.unavailable && (
                        <div className="absolute top-4 right-4 bg-slate-800 text-slate-400 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full">
                          Currently Unavailable
                        </div>
                      )}

                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#B829A0]/10 border border-[#B829A0]/30 flex items-center justify-center text-[#F472B6] mb-4">
                          <Droplets className="w-5 h-5" />
                        </div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.name}</h5>
                        <p className="text-xs text-[#B829A0] font-medium mb-3">{item.subtitle}</p>
                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      {/* Pricing Table / List - Highlighted in #1FD1B2 */}
                      <div className="pt-4 border-t border-white/[0.06] mt-auto">
                        {item.options ? (
                          <div className="space-y-2 mb-4">
                            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                              Duration & Investment
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {item.options.map((opt, idx) => (
                                <div
                                  key={idx}
                                  className="bg-black/40 border border-[#1FD1B2]/30 rounded-xl p-2.5 text-center flex flex-col items-center justify-center"
                                >
                                  <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-[#1FD1B2]" /> {opt.duration}
                                  </span>
                                  <span className="text-lg font-extrabold text-[#1FD1B2]">
                                    {opt.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              {item.duration && (
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-[#1FD1B2]" /> {item.duration}
                                </span>
                              )}
                            </div>
                            <span className="text-xl font-extrabold text-[#1FD1B2]">
                              {item.price}
                            </span>
                          </div>
                        )}

                        {!item.unavailable && (
                          <button
                            onClick={() => onSelectService(`Skin Treatment: ${item.name}`)}
                            className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] hover:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <span>Book Treatment</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. DEEP CLEANSING & HYDRATING FACIALS */}
            {(skinCategory === 'all' || skinCategory === 'hydrating') && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#F472B6]" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                    Deep Cleansing & Hydrating Facials
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {DEEP_CLEANSING_FACIALS.map((item) => (
                    <div
                      key={item.id}
                      className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/[0.08] transition-all duration-300"
                      id={`cleansing-card-${item.id}`}
                    >
                      <div>
                        {item.popular && (
                          <div className="inline-block bg-[#1FD1B2]/20 border border-[#1FD1B2]/40 text-[#1FD1B2] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full mb-3">
                            Most Relaxing
                          </div>
                        )}
                        <h5 className="text-lg font-bold text-white mb-1">{item.name}</h5>
                        <p className="text-xs text-[#1FD1B2] font-medium mb-3">{item.subtitle}</p>
                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] mt-auto">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs text-slate-300 flex items-center gap-1 bg-white/[0.05] px-2.5 py-1 rounded-md">
                            <Clock className="w-3 h-3 text-[#1FD1B2]" /> {item.duration}
                          </span>
                          <span className="text-2xl font-black text-[#1FD1B2]">
                            {item.price}
                          </span>
                        </div>

                        <button
                          onClick={() => onSelectService(`Facial: ${item.name}`)}
                          className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.12] hover:bg-[#1FD1B2] hover:text-[#0B0C10] hover:border-[#1FD1B2] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Select Facial</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. FACIAL ADD-ONS */}
            {(skinCategory === 'all' || skinCategory === 'addons') && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#1FD1B2]" />
                      Custom Facial Add-Ons
                    </h4>
                    <p className="text-xs text-[#94A3B8] mt-1">
                      Target specific skin concerns by pairing your facial with customized medical enhancements.
                    </p>
                  </div>
                  <span className="text-xs text-[#1FD1B2] font-semibold mt-2 sm:mt-0">
                    Ask your therapist for tailored combinations
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {FACIAL_ADDONS.map((addon) => (
                    <div
                      key={addon.id}
                      className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#1FD1B2]/50 transition-all flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">{addon.name}</div>
                        <div className="text-[11px] text-slate-400">{addon.desc}</div>
                      </div>
                      <span className="text-base font-extrabold text-[#1FD1B2] ml-3 flex-shrink-0">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2 - C: HAIR STYLING */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'hair') && (
          <div id="hair-styling-section" className="mb-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-[#1FD1B2] text-xs font-bold uppercase tracking-widest mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#1FD1B2]" /> Section C
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#1FD1B2]">C.</span> HAIR STYLING & CUTS
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] italic mt-1">
                  "Straight, sleek, and vibrant styles."
                </p>
              </div>

              {/* SECTION 2 - C: MANDATORY NOTICE */}
              <div
                id="hair-styling-notice"
                className="mt-4 md:mt-0 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-semibold flex items-center gap-2"
              >
                <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>All charges depend upon the hair length & volume.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HAIR_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/[0.08] transition-all duration-300 group"
                  id={`hair-card-${item.id}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1FD1B2]/10 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] mb-4 group-hover:scale-110 transition-transform">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#1FD1B2] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#1FD1B2] font-semibold">
                      Quote on Length & Volume
                    </span>
                    <button
                      onClick={() => onSelectService(`Hair Styling: ${item.name}`)}
                      className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.12] hover:bg-[#B829A0] hover:border-[#B829A0] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire / Book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
