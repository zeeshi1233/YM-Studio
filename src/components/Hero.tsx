import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  MapPin,
  Heart,
  Brush,
  Droplets,
  Crown,
  PartyPopper,
} from 'lucide-react';
import { YMLogo } from './YMLogo';
import { MakeupAtmosphere } from './MakeupAtmosphere';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
}

const OFFERINGS = [
  {
    icon: Brush,
    title: 'Makeup Artistry',
    desc: 'Flawless looks tailored to you, for every occasion.',
    target: 'makeup-services',
  },
  {
    icon: Droplets,
    title: 'Skin & Beauty',
    desc: 'Healthy, glowing skin is always in.',
    target: 'skin-treatments-section',
  },
  {
    icon: Crown,
    title: 'Bridal Makeup',
    desc: 'Your dream look for your special day.',
    target: 'makeup-services',
  },
  {
    icon: PartyPopper,
    title: 'Event & Occasion Glam',
    desc: 'Glamorous, elegant & camera-ready.',
    target: 'makeup-services',
  },
];

const PILLARS = [
  { label: 'Makeup', target: 'makeup-services' },
  { label: 'Skin', target: 'skin-treatments-section' },
  { label: 'Bridal', target: 'makeup-services' },
  { label: 'Events', target: 'makeup-services' },
];

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 85;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenConsultation }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] pt-24 pb-0 overflow-hidden bg-mesh-dark floral-overlay"
      aria-label="YM Studios Melbourne beauty hero"
    >
      <MakeupAtmosphere />
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] rounded-full bg-[#B829A0]/18 blur-[140px] pointer-events-none animate-[glowPulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/5 right-0 w-[420px] h-[420px] rounded-full bg-[#1FD1B2]/16 blur-[140px] pointer-events-none animate-[glowPulse_7s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 pb-16 md:pb-20">
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-3"
            >
              YM<span className="text-[#D4AF37]">.</span>STUDIOS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="text-sm sm:text-base uppercase tracking-[0.22em] text-[#B829A0] font-semibold mb-4"
            >
              Enhancing Beauty. Elevating Confidence.
            </motion.p>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-3"
            >
              With nearly <span className="text-white font-semibold">12 years of experience</span> in
              makeup artistry, skin & beauty, events and training — I bring passion, precision and
              creativity to every client.{' '}
              <span className="text-[#1FD1B2] font-semibold">You're in the right hands.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="font-script text-2xl sm:text-3xl text-[#F472B6] mb-7"
            >
              Beauty that <span className="italic">feels like you</span>
            </motion.p>

            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-9"
            >
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_28px_rgba(31,209,178,0.35)] hover:shadow-[0_0_40px_rgba(31,209,178,0.55)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                Enquire & Book
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#1FD1B2] bg-black/45 border border-[#1FD1B2]/45 hover:bg-[#1FD1B2]/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F472B6]" />
                Free Skin Consultation
              </button>
            </motion.div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-bold">
                What I Offer
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OFFERINGS.map((item, index) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => scrollTo(item.target)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.42 + index * 0.07 }}
                    className="flyer-offer-row text-left cursor-pointer"
                  >
                    <span className="flyer-gold-ring">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{item.title}</span>
                      <span className="block text-[11px] text-[#94A3B8] leading-snug">{item.desc}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right portrait — flyer style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_30px_80px_rgba(0,0,0,0.55)] aspect-[3/4] max-h-[640px] w-full max-w-[520px] mx-auto lg:ml-auto">
              <img
                src="/images/bridal-hero-sharp.png"
                alt="YM Studios bridal and event makeup artistry Melbourne"
                width={900}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover object-center"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-black/10 pointer-events-none" />
              <div className="gold-curve-divider" aria-hidden />

              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-5 right-5 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#B829A0] to-[#7c1d6e] border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(184,41,160,0.45)] flex flex-col items-center justify-center text-center p-3 animate-[floatSoft_5s_ease-in-out_infinite]"
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

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {PILLARS.map((pillar) => (
                    <button
                      key={pillar.label}
                      type="button"
                      onClick={() => scrollTo(pillar.target)}
                      className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/55 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition-colors cursor-pointer"
                    >
                      {pillar.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom brand strip like flyer */}
      <div className="relative border-t border-[#D4AF37]/20 bg-[#062826]/80 backdrop-blur-xl">
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
