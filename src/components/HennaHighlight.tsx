import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HennaHighlightProps {
  onEnquire: () => void;
}

export const HennaHighlight: React.FC<HennaHighlightProps> = ({ onEnquire }) => {
  return (
    <section id="henna-section" className="relative py-16 md:py-20 bg-[#07080B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch rounded-[1.75rem] overflow-hidden border border-[#D4AF37]/25 bg-[#0B0C10]"
        >
          <div className="lg:col-span-5 relative min-h-[260px]">
            <img
              src="/images/henna-bridal.png"
              alt="Bridal henna and mehndi artistry at YM Studios"
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Henna & Mehndi
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">HENNA & MEHNDI</h2>
            <p className="font-script text-2xl text-[#F472B6] mb-3">Beautifully Handcrafted. Meaningfully Celebrated.</p>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 max-w-xl">
              Handcrafted henna for weddings, brides, birthdays, parties, corporate events and special celebrations.
            </p>
            <p className="text-xs text-[#D4AF37] mb-6">
              Custom designs · Bridal henna · Guest henna · Event bookings · Pricing available on enquiry
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/category/henna"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0C10] bg-[#D4AF37] hover:brightness-110 transition-all"
              >
                View Henna Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onEnquire}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
