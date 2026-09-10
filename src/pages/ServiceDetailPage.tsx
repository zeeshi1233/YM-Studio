import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CERTIFICATE_DISCLAIMER, getServiceBySlug } from '../data/catalog';

interface ServiceDetailPageProps {
  onBook: (serviceName: string, details?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onBook }) => {
  const { categorySlug = '', serviceSlug = '' } = useParams();
  const result = getServiceBySlug(categorySlug, serviceSlug);

  if (!result) return <Navigate to="/" replace />;

  const { category, service } = result;
  const isEducation = category.slug === 'beauty-education';

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={`/category/${category.slug}`}
          className="inline-flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#1FD1B2] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to {category.name}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-6 relative rounded-[1.75rem] overflow-hidden border border-white/[0.1] aspect-[4/5] max-h-[620px]">
            <img
              src={service.image}
              alt={service.name}
              width={900}
              height={1125}
              className="absolute inset-0 w-full h-full object-cover object-center"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>

          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D4AF37] mb-2">
              {category.name}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{service.name}</h1>
            <p className="text-sm text-[#1FD1B2] font-medium mb-4">{service.subtitle}</p>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
              {service.longDescription || service.description}
            </p>

            <div className="glass-card rounded-2xl p-5 border border-white/[0.08] mb-6">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">Investment</p>
              <p className="text-3xl font-extrabold text-[#1FD1B2]">{service.price}</p>
              {service.priceNote && <p className="text-sm text-slate-300 mt-1">{service.priceNote}</p>}
              {service.duration && <p className="text-xs text-slate-400 mt-2">Duration: {service.duration}</p>}
            </div>

            {service.includes && service.includes.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-white mb-3">What&apos;s included</h2>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                      <CheckCircle2 className="w-4 h-4 text-[#1FD1B2] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold border border-[#D4AF37]/35 text-[#D4AF37]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() =>
                  onBook(
                    `${category.shortName}: ${service.name}`,
                    `Interested in ${service.name}. ${service.priceNote || service.price}`
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] cursor-pointer"
              >
                Enquire / Book <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to={`/category/${category.slug}`}
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/40 hover:bg-[#1FD1B2]/10"
              >
                More in {category.shortName}
              </Link>
            </div>

            {isEducation && (
              <p className="text-[11px] text-slate-500 mt-6 leading-relaxed">{CERTIFICATE_DISCLAIMER}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
