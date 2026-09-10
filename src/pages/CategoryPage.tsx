import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  CERTIFICATE_DISCLAIMER,
  EDUCATION_LEARNING_POINTS,
  EDUCATION_WHY,
  getCategoryBySlug,
} from '../data/catalog';

interface CategoryPageProps {
  onBook: (serviceName: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onBook }) => {
  const { categorySlug = '' } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) return <Navigate to="/" replace />;

  const isEducation = category.slug === 'beauty-education';
  const isHenna = category.slug === 'henna';

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#0B0C10]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/70 via-[#0B0C10]/90 to-[#0B0C10]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#1FD1B2] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>

          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: category.accent }}>
            YM Studios · {category.shortName}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">{category.name}</h1>
          <p className="font-script text-2xl sm:text-3xl text-[#F472B6] mb-4">{category.tagline}</p>
          <p className="max-w-3xl text-sm sm:text-base text-[#94A3B8] leading-relaxed">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {isEducation && (
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h2 className="text-lg font-bold text-white mb-4">What you&apos;ll learn</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EDUCATION_LEARNING_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FD1B2] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h2 className="text-lg font-bold text-white mb-4">Why learn with YM Studios?</h2>
              <div className="space-y-3">
                {EDUCATION_WHY.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-bold text-[#1FD1B2]">{item.title}</h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isHenna && (
          <div className="mb-10 glass-card rounded-2xl p-6 border border-[#D4AF37]/25">
            <h2 className="text-lg font-bold text-white mb-2">Perfect for</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Bridal henna & mehndi · Weddings & engagements · Bridal showers & hen parties · Birthday celebrations ·
              Private parties · Cultural celebrations · Corporate events & brand activations · Community events ·
              Henna experiences & workshops
            </p>
            <p className="text-xs text-[#D4AF37] mt-4">
              Pricing varies by design, detail, guests, duration and location. All henna bookings are by enquiry.
            </p>
          </div>
        )}

        <h2 className="text-xl font-bold text-white mb-6">
          {isEducation ? 'Choose your makeup training' : 'All services'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] flex flex-col"
            >
              <Link to={`/category/${category.slug}/${service.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.name}
                  width={640}
                  height={480}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                {service.popular && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white">
                    Popular
                  </span>
                )}
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                <p className="text-xs text-[#1FD1B2] font-medium mb-2">{service.subtitle}</p>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">{service.description}</p>
                <div className="flex items-end justify-between gap-3 pt-3 border-t border-white/[0.06]">
                  <div>
                    <p className="text-xl font-extrabold text-[#1FD1B2]">{service.price}</p>
                    {service.priceNote && <p className="text-[11px] text-slate-400 mt-0.5">{service.priceNote}</p>}
                  </div>
                  <Link
                    to={`/category/${category.slug}/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white px-3 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] hover:bg-[#1FD1B2] hover:text-[#0B0C10] transition-all"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                {isEducation && (
                  <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">{CERTIFICATE_DISCLAIMER}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onBook(`${category.name} Enquiry`)}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] cursor-pointer"
          >
            Enquire Now
          </button>
          <Link
            to="/"
            className="px-6 py-3 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/40 hover:bg-[#1FD1B2]/10"
          >
            Back to categories
          </Link>
        </div>
      </div>
    </div>
  );
};
