import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, HeartHandshake, Award, Clock, Star } from 'lucide-react';
import { YMLogo } from './YMLogo';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenConsultation }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-mesh-dark"
    >
      {/* Background Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-[#B829A0]/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-[#1FD1B2]/15 blur-[150px] pointer-events-none" />

      {/* Subtle floral silhouette lace texture overlays */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#1FD1B2_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* SECTION 1: BADGE */}
        <div
          id="hero-melbourne-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-[#1FD1B2]/40 shadow-[0_0_25px_rgba(31,209,178,0.22)] mb-6 transform hover:scale-105 transition-all duration-300 cursor-default"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1FD1B2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1FD1B2]"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-[#1FD1B2] uppercase">
            ✨ Melbourne Based | Mobile Services Available
          </span>
        </div>

        {/* Brand Emblem Feature */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <YMLogo size="lg" showSubtitle={false} />
        </div>

        {/* SECTION 1: TYPOGRAPHY Display Text */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.15]"
        >
          Welcome to{' '}
          <span className="text-gradient-ym inline-block drop-shadow-[0_4px_25px_rgba(184,41,160,0.4)]">
            YM Studios
          </span>
        </h1>

        {/* SECTION 1: SUB-TEXT */}
        <p
          id="hero-subtext"
          className="font-serif-luxury italic text-xl sm:text-2xl md:text-3xl text-slate-200 mb-6 font-medium tracking-wide flex items-center gap-3 justify-center"
        >
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-[#1FD1B2] to-[#1FD1B2]" />
          <span>Enhancing Beauty. Elevating Confidence.</span>
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent via-[#B829A0] to-[#B829A0]" />
        </p>

        {/* SECTION 1: CONTENT */}
        <p
          id="hero-description"
          className="max-w-2xl text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          With nearly <span className="text-white font-semibold">12 years of experience</span> in makeup artistry, skin & beauty, events, and training – I bring passion, precision, and creativity to every client.{' '}
          <span className="text-[#1FD1B2] font-semibold">You're in the right hands.</span>
        </p>

        {/* SECTION 1: CTA BUTTONS */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12"
        >
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_30px_rgba(31,209,178,0.4)] hover:shadow-[0_0_45px_rgba(31,209,178,0.6)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2.5 group"
            id="hero-book-now-cta"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquire & Book</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-[#1FD1B2] bg-black/50 backdrop-blur-xl border border-[#1FD1B2]/50 hover:bg-[#1FD1B2]/10 hover:border-[#1FD1B2] shadow-[0_0_20px_rgba(31,209,178,0.15)] hover:shadow-[0_0_30px_rgba(31,209,178,0.3)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
            id="hero-consultation-cta"
          >
            <Sparkles className="w-4 h-4 text-[#F472B6]" />
            <span>Get Free Consultation</span>
          </button>
        </div>

        {/* Quick Service Category Pills Matching Official Flyer Art */}
        <div
          id="hero-service-pills"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl"
        >
          <div className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#1FD1B2]/15 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] flex-shrink-0 shadow-[0_0_15px_rgba(31,209,178,0.2)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Makeup</div>
              <div className="text-[11px] text-[#94A3B8]">Bridal & Occasion</div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#B829A0]/15 border border-[#B829A0]/30 flex items-center justify-center text-[#F472B6] flex-shrink-0 shadow-[0_0_15px_rgba(184,41,160,0.2)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Skin & Facial</div>
              <div className="text-[11px] text-[#94A3B8]">Clinical & Rejuvenation</div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#1FD1B2]/15 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] flex-shrink-0 shadow-[0_0_15px_rgba(31,209,178,0.2)]">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Hair Styling</div>
              <div className="text-[11px] text-[#94A3B8]">Updos & Sleek Waves</div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#B829A0]/15 border border-[#B829A0]/30 flex items-center justify-center text-[#F472B6] flex-shrink-0 shadow-[0_0_15px_rgba(184,41,160,0.2)]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Academy</div>
              <div className="text-[11px] text-[#94A3B8]">Practical Job-Ready</div>
            </div>
          </div>
        </div>

        {/* Free Skin Consultation Perk Callout */}
        <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-[#1FD1B2]/40 text-xs text-[#1FD1B2] shadow-[0_0_25px_rgba(31,209,178,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
          <span className="font-semibold">*Free 10-minute professional skin consultation included with any facial appointment</span>
        </div>
      </div>
    </section>
  );
};
