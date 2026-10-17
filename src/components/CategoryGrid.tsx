import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Calendar,
  Info,
  Layers,
} from 'lucide-react';
import { SERVICE_CATEGORIES, ServiceCategory } from '../data/catalog';

interface CategoryGridProps {
  onBook?: (serviceName: string, details?: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onBook }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Filtered category or null if 'all'
  const selectedCategory: ServiceCategory | undefined =
    activeTab === 'all'
      ? undefined
      : SERVICE_CATEGORIES.find(
          (c) =>
            c.id === activeTab ||
            c.slug === activeTab ||
            c.name.toLowerCase() === activeTab.toLowerCase()
        );

  const navTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'brow-lamination-waxing', label: 'Brow Lamination & Waxing', accent: '#B829A0' },
    { id: 'henna', label: 'Henna Services', accent: '#D4AF37' },
    { id: 'hair', label: 'Hair Styles & Cuts', accent: '#D4AF37' },
    { id: 'makeup', label: 'Makeup Artistry', accent: '#1FD1B2' },
    { id: 'skin', label: 'Skin Treatments', accent: '#1FD1B2' },
    { id: 'beauty-education', label: 'Beauty Education', accent: '#F472B6' },
  ];

  return (
    <section
      id="services-section"
      className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden rounded-t-[2rem] shadow-[0_-24px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#1FD1B2]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B829A0]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
            Browse by category to view full menus, pricing, and treatment details — brow lamination, precision waxing, henna services, hair styles & cuts, makeup, and clinical skin treatments.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white shadow-[0_0_25px_rgba(31,209,178,0.35)] scale-[1.02]'
                      : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#1FD1B2]/40 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* View All Categories Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'all' && (
            <motion.div
              key="all-categories"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
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
                    className="group block relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#1FD1B2]/45 transition-all duration-300 h-full bg-[#131419]"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1"
                        style={{ color: category.accent }}
                      >
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
            </motion.div>
          )}

          {/* Specific Category Tab Selected */}
          {selectedCategory && (
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Category Header Banner */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.1] relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="relative z-10 max-w-2xl">
                  <p
                    className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-1"
                    style={{ color: selectedCategory.accent }}
                  >
                    YM Studios · {selectedCategory.shortName}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedCategory.name}
                  </h3>
                  <p className="font-script text-2xl text-[#F472B6] mb-3">
                    {selectedCategory.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {selectedCategory.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-start md:items-center">
                  <Link
                    to={`/category/${selectedCategory.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(31,209,178,0.25)]"
                  >
                    <span>Full Menu & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Special notice for Hair Styles & Cuts */}
              {selectedCategory.id === 'hair' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-semibold flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Notice: All hair styling & cut charges depend upon the hair length & volume.
                  </span>
                </div>
              )}

              {/* Services Grid for This Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#1FD1B2]/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          width={600}
                          height={450}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                            service.imageFocus || 'object-center'
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/20 to-transparent pointer-events-none" />

                        {service.popular && (
                          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white shadow-lg">
                            Most Requested
                          </span>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-base sm:text-lg font-black text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.1]">
                            {service.price}
                          </span>
                          {service.duration && (
                            <span className="text-[11px] text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/[0.1]">
                              <Clock className="w-3 h-3 text-[#1FD1B2]" /> {service.duration}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#1FD1B2] transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-[#1FD1B2] font-medium mb-2.5">
                          {service.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {service.tags && service.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {service.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-white/[0.06] mt-auto flex items-center justify-between gap-2">
                      <Link
                        to={`/category/${selectedCategory.slug}/${service.slug}`}
                        className="text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => {
                          if (onBook) {
                            onBook(
                              `${selectedCategory.shortName}: ${service.name}`,
                              `Interested in booking ${service.name}. Price: ${service.priceNote || service.price}`
                            );
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-white/[0.08] hover:bg-[#1FD1B2] hover:text-[#0B0C10] border border-white/[0.12] transition-all cursor-pointer inline-flex items-center gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quick Return / Navigation */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-[#1FD1B2] transition-colors cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  View All Other Categories
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
