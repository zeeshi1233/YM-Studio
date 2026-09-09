import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MakeupProcessProps {
  onBook: () => void;
}

const STEPS = [
  {
    id: 1,
    title: 'Skin Prep & Base',
    desc: 'Cleanse, hydrate, then build a flawless long-wear foundation that photographs in every light.',
    image: '/images/skin-treatment-sharp.png',
    tip: 'Glass-skin canvas before colour',
  },
  {
    id: 2,
    title: 'Eyes, Brows & Contour',
    desc: 'Sculpted dimension, feathered brows, and custom eye artistry matched to your occasion.',
    image: '/images/makeup-application-sharp.png',
    tip: 'Precision blending for HD finish',
  },
  {
    id: 3,
    title: 'Final Glam Lock',
    desc: 'Lips, lashes, highlight and setting spray — bridal and event glam that lasts 12+ hours.',
    image: '/images/bridal-hero-sharp.png',
    tip: 'Camera-ready bridal seal',
  },
];

export const MakeupProcess: React.FC<MakeupProcessProps> = ({ onBook }) => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section
      id="makeup-process-section"
      className="relative py-20 md:py-28 bg-[#07080B] overflow-hidden floral-overlay"
      aria-labelledby="makeup-process-heading"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B829A0]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#1FD1B2]/35 text-[11px] uppercase tracking-widest text-[#1FD1B2] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              How Makeup Comes Alive
            </div>
            <h2 id="makeup-process-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              From bare skin to{' '}
              <span className="font-script text-4xl sm:text-5xl text-[#F472B6] font-normal tracking-normal">
                full glam
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
              A clear 3-step studio workflow — tap each stage to preview the look transformation.
            </p>
          </div>
          <button
            type="button"
            onClick={onBook}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] shadow-[0_0_24px_rgba(31,209,178,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Book This Look
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 space-y-3">
            {STEPS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  active === index
                    ? 'border-[#B829A0]/55 bg-[#B829A0]/12'
                    : 'border-white/[0.08] bg-black/35 hover:border-[#D4AF37]/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                      active === index
                        ? 'bg-gradient-to-br from-[#B829A0] to-[#1FD1B2] text-white'
                        : 'bg-white/5 text-[#D4AF37] border border-[#D4AF37]/35'
                    }`}
                  >
                    {item.id}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{item.title}</span>
                    <span className="block text-[11px] text-[#94A3B8] mt-0.5">{item.tip}</span>
                  </span>
                  {active === index && <CheckCircle2 className="w-4 h-4 text-[#1FD1B2] ml-auto" />}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.1] bg-[#0B0C10] aspect-[16/10] max-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={step.image}
                  src={step.image}
                  alt={step.title}
                  width={1280}
                  height={800}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                  Step {step.id} of {STEPS.length}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
