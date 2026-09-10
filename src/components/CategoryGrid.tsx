import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/catalog';

export const CategoryGrid: React.FC = () => {
  return (
    <section id="services-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#1FD1B2]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B829A0]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/35 text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Explore our{' '}
            <span className="font-script text-4xl sm:text-5xl text-[#F472B6] font-normal tracking-normal">
              services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Choose a category to view full menus, pricing and details — makeup, skin, lash & brow, henna, hair and beauty education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICE_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/category/${category.slug}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#1FD1B2]/45 transition-all duration-300 h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    width={800}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/35 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: category.accent }}>
                    {category.shortName}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#1FD1B2] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-3 line-clamp-2">{category.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                    View services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
