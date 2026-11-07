import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  MapPin,
  Heart,
  Award,
  Droplets,
} from 'lucide-react';
import { YMLogo } from './YMLogo';
import { MakeupAtmosphere } from './MakeupAtmosphere';
import { HeroBackgroundSlider, useHeroSlideIndex } from './HeroBackgroundSlider';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
}

const PILLARS = [
  { label: 'Makeup', to: '/category/makeup' },
  { label: 'Brow & Waxing', to: '/category/brow-lamination-waxing' },
  { label: 'Henna', to: '/category/henna' },
  { label: 'Hair Styles', to: '/category/hair' },
  { label: 'Skin', to: '/category/skin' },
  { label: 'Academy', to: '/category/beauty-education' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenConsultation }) => {
  const { index, setIndex } = useHeroSlideIndex();

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] pt-24 pb-0 overflow-visible bg-[#0B0C10]"
      aria-label="YM Studios Melbourne beauty hero"
    >
      {/* Category image loop — makeup, hair, skin, henna, brow, academy */}
      <HeroBackgroundSlider index={index} variant="full" showMeta={false} />
      <MakeupAtmosphere />
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] rounded-full bg-[#B829A0]/18 blur-[140px] pointer-events-none animate-[glowPulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/5 right-0 w-[420px] h-[420px] rounded-full bg-[#1FD1B2]/16 blur-[140px] pointer-events-none animate-[glowPulse_7s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left copy — flyer style */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-xl border border-[#D4AF37]/35 text-[11px] font-semibold tracking-wide text-[#D4AF37] uppercase mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1FD1B2]" />
              Melbourne Based · Mobile Makeup Services
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-5"
            >
              <YMLogo size="lg" />
              <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                Makeup · Skin · Artistry
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="font-script text-3xl sm:text-4xl text-[#1FD1B2] mb-1"
            >
              Welcome to
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-2"
            >
              YM Studios
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mb-5"
            >
              Melbourne Bridal · Makeup Artistry · Clinical Skin & Academy
            </motion.p>

            <motion.div
              id="hero-description"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="max-w-xl mb-4 space-y-2.5"
            >
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Led by Yamna Mohsin with over 12 years across Australia&apos;s leading clinics and luxury beauty brands. Every bridal look, skin treatment, and training session is tailored with precision, science, and care.
              </p>
              <p className="font-script text-2xl sm:text-3xl text-[#F472B6]">
                Beauty that feels like you
              </p>
            </motion.div>

            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
            >
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#0B0C10] uppercase tracking-wider bg-[#1FD1B2] hover:bg-[#25e2c2] shadow-[0_4px_20px_rgba(31,209,178,0.3)] transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire & Book</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-black/50 border border-white/[0.15] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Droplets className="w-4 h-4 text-[#1FD1B2]" />
                <span>Free Skin Consultation</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.44 }}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 border border-[#D4AF37]/30 text-xs text-slate-200">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>12+ Years Industry Experience</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 border border-[#1FD1B2]/30 text-xs text-slate-200">
                <Heart className="w-3.5 h-3.5 text-[#1FD1B2]" />
                <span>Personalised & Bespoke Care</span>
              </div>
            </motion.div>
          </div>

          {/* Right portrait — flyer style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_30px_80px_rgba(0,0,0,0.55)] aspect-[3/4] max-h-[640px] w-full max-w-[520px] mx-auto lg:ml-auto">
              <HeroBackgroundSlider
                index={index}
                onSelect={setIndex}
                variant="card"
                showMeta
              />
              <div className="gold-curve-divider" aria-hidden />

              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-5 right-5 z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-black/85 backdrop-blur-md border-2 border-[#D4AF37]/60 shadow-[0_8px_32px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center text-center p-3 animate-[floatSoft_5s_ease-in-out_infinite]"
              >
                <Heart className="w-4 h-4 text-[#D4AF37] mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-white/90 font-semibold leading-tight">
                  Your Beauty
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/90 font-semibold leading-tight">
                  Your Occasion
                </span>
                <span className="font-script text-lg text-[#D4AF37] leading-none mt-0.5">Your Style</span>
              </motion.div>

              <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2 max-w-[55%]">
                {PILLARS.map((pillar) => (
                  <Link
                    key={pillar.label}
                    to={pillar.to}
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/55 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition-colors"
                  >
                    {pillar.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom brand strip like flyer */}
      <div className="relative z-10 border-t border-[#D4AF37]/20 bg-[#062826]/80 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-20 floral-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-white/90 text-center sm:text-left font-medium">
            Healthy skin is always in. Let&apos;s achieve your best skin together.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-[#1FD1B2] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
            Free 10-min consultation with any facial
          </div>
        </div>
      </div>
    </section>
  );
};
