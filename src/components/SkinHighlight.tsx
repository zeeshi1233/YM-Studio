import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Sparkles, HeartPulse, Flower2, ClipboardList, ArrowRight, Heart } from 'lucide-react';

interface SkinHighlightProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

const SKIN_OFFERS = [
  { icon: Droplets, title: 'HydraFacial', desc: 'Deep Cleansing & Hydration', service: 'Skin Treatment: Hydra-Infusion / Hydro-Dermabrasion' },
  { icon: Sparkles, title: 'Microdermabrasion', desc: 'Smoother, Brighter Skin', service: 'Skin Treatment: Diamond Microdermabrasion' },
  { icon: HeartPulse, title: 'Skin Rejuvenation', desc: 'Revive & Glow', service: 'Facial: Classic European Facial' },
  { icon: Flower2, title: 'Custom Facials', desc: 'Tailored to your skin', service: 'Facial: Customised Face Lift Aroma Massage Facial' },
  { icon: ClipboardList, title: 'Skin Consultation', desc: 'Personalised care plan', service: null },
];

export const SkinHighlight: React.FC<SkinHighlightProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  return (
    <section
      id="beauty-skin-highlight"
      className="relative py-16 md:py-24 overflow-hidden bg-[#041413] floral-overlay"
      aria-labelledby="beauty-skin-heading"
    >
      <div className="absolute -left-20 top-10 w-72 h-72 bg-[#1FD1B2]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-16 bottom-0 w-80 h-80 bg-[#B829A0]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="beauty-skin-heading" className="leading-none mb-1">
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1FD1B2] uppercase">
                  Beauty & Skin
                </span>
                <span className="font-script text-4xl sm:text-5xl text-[#F472B6] inline-flex items-center gap-2">
                  Services
                  <Heart className="w-5 h-5 text-[#F472B6]" fill="currentColor" />
                </span>
              </h2>
              <p className="mt-4 text-sm text-[#94A3B8] max-w-md leading-relaxed">
                Clinical treatments and custom facials designed for glass-skin radiance — from HydraFacial
                to personalised consultations.
              </p>
            </motion.div>

            <div className="mt-8 space-y-3">
              {SKIN_OFFERS.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    item.service ? onSelectService(item.service) : onOpenConsultation()
                  }
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flyer-offer-row w-full text-left cursor-pointer group"
                >
                  <span className="flyer-gold-ring group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold text-white group-hover:text-[#1FD1B2] transition-colors">
                      {item.title}
                    </span>
                    <span className="block text-[11px] text-[#94A3B8]">{item.desc}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 relative rounded-[1.75rem] overflow-hidden border border-[#1FD1B2]/25 aspect-[4/3] md:aspect-[5/4] max-h-[520px]"
          >
            <img
              src="/images/skin-treatment-sharp.png"
              alt="HydraFacial beauty and skin treatment at YM Studios Melbourne"
              width={1200}
              height={900}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041413]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white font-medium max-w-md">
                Healthy skin is always in. Let&apos;s achieve your best skin together.
              </p>
              <button
                type="button"
                onClick={() => onSelectService('Skin Treatment: Hydra-Infusion / Hydro-Dermabrasion')}
                className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0C10] bg-[#1FD1B2] hover:shadow-[0_0_25px_rgba(31,209,178,0.45)] transition-all cursor-pointer"
              >
                Book Skin Care
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
