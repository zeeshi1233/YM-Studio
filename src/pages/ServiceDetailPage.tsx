import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Shield,
  AlertCircle,
  ChevronDown,
  Layers,
  Heart,
  Check,
} from 'lucide-react';
import { CERTIFICATE_DISCLAIMER, getServiceBySlug } from '../data/catalog';

interface ServiceDetailPageProps {
  onBook: (serviceName: string, details?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onBook }) => {
  const { categorySlug = '', serviceSlug = '' } = useParams();
  const result = getServiceBySlug(categorySlug, serviceSlug);

  const [selectedTarget, setSelectedTarget] = useState<string>('');
  const [activeStep, setActiveStep] = useState<number | null>(0);

  if (!result) return <Navigate to="/" replace />;

  const { category, service } = result;
  const isEducation = category.slug === 'beauty-education';
  const isUnavailable = Boolean(service.unavailable);

  const handleBookClick = () => {
    let details = `Interested in ${service.name}. ${service.priceNote || service.price}`;
    if (selectedTarget) {
      details += ` • Target Focus: ${selectedTarget}`;
    }
    onBook(`${category.shortName}: ${service.name}`, details);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={`/category/${category.slug}`}
          className="inline-flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#1FD1B2] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to {category.name}
        </Link>

        {/* Unavailable Service Banner */}
        {isUnavailable && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                Currently Not Available
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 mt-1 leading-relaxed">
                {service.name} is temporarily unavailable for direct booking while we update our schedule.
                You are welcome to submit an enquiry or explore our other available treatments.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Media & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.1] aspect-[4/5] max-h-[580px] shadow-2xl">
              <img
                src={service.image}
                alt={service.name}
                width={900}
                height={1125}
                className={`absolute inset-0 w-full h-full object-cover ${service.imageFocus || 'object-center'}`}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              {isUnavailable ? (
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                  Currently Not Available
                </div>
              ) : service.popular ? (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                  Most Requested
                </div>
              ) : null}
            </div>

            {/* Treatment Specifications Card */}
            {(service.treatmentTime || service.downtime || service.bestFor) && (
              <div className="glass-card rounded-2xl p-5 border border-white/[0.08] space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Treatment Specifications
                </h3>
                {service.treatmentTime && (
                  <div className="flex items-start gap-2.5 text-xs">
                    <Clock className="w-4 h-4 text-[#1FD1B2] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Treatment Time:</span>{' '}
                      <span className="text-[#94A3B8]">{service.treatmentTime}</span>
                    </div>
                  </div>
                )}
                {service.downtime && (
                  <div className="flex items-start gap-2.5 text-xs">
                    <Shield className="w-4 h-4 text-[#B829A0] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Downtime:</span>{' '}
                      <span className="text-[#94A3B8]">{service.downtime}</span>
                    </div>
                  </div>
                )}
                {service.bestFor && (
                  <div className="flex items-start gap-2.5 text-xs">
                    <Heart className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Best For:</span>{' '}
                      <span className="text-[#94A3B8]">{service.bestFor}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Content & Interactivity */}
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-2">
              {category.name}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{service.name}</h1>
            <p className="text-sm sm:text-base text-[#1FD1B2] font-medium mb-4">{service.subtitle}</p>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
              {service.longDescription || service.description}
            </p>

            {/* Pricing / Investment Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.08] mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">Investment</p>
                <p className="text-3xl font-extrabold text-[#1FD1B2]">{service.price}</p>
                {service.priceNote && <p className="text-xs text-slate-300 mt-1">{service.priceNote}</p>}
              </div>
              {service.duration && (
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">Standard Duration</p>
                  <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1FD1B2]" /> {service.duration}
                  </p>
                </div>
              )}
            </div>

            {/* Key Benefits Section */}
            {service.keyBenefits && service.keyBenefits.length > 0 && (
              <div className="mb-6 glass-card rounded-2xl p-5 border border-white/[0.08]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#1FD1B2]" />
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.keyBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-[#1FD1B2] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step-by-Step Breakdown (Collapsible Accordion / Detail Box) */}
            {service.stepBreakdown && service.stepBreakdown.length > 0 && (
              <div className="mb-6 glass-card rounded-2xl p-5 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#1FD1B2]" />
                    Step-by-Step Treatment Breakdown
                  </h2>
                  <span className="text-[11px] text-slate-400">Tap step to expand</span>
                </div>
                <div className="space-y-2">
                  {service.stepBreakdown.map((item, index) => {
                    const isOpen = activeStep === index;
                    return (
                      <div
                        key={item.step}
                        className="rounded-xl border border-white/[0.08] bg-black/30 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveStep(isOpen ? null : index)}
                          className="w-full p-3.5 flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.03] transition-colors"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#1FD1B2]/20 text-[#1FD1B2] text-xs flex items-center justify-center font-bold">
                              {index + 1}
                            </span>
                            <span className="text-sm font-bold text-white">{item.step}</span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-[#1FD1B2]' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-3.5 pt-1 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04]">
                            {item.detail}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Customizable Add-Ons / Target Options (For Customized Facial) */}
            {service.targetOptions && service.targetOptions.length > 0 && (
              <div className="mb-6 glass-card rounded-2xl p-5 border border-[#B829A0]/30 bg-[#B829A0]/5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                    Customizable Target Options
                  </h2>
                  <span className="text-[11px] text-[#F472B6]">Choose your focus</span>
                </div>
                <p className="text-xs text-[#94A3B8] mb-3">
                  Select your primary focus area below to include with your consultation & booking:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.targetOptions.map((opt) => {
                    const isSelected = selectedTarget === opt.title;
                    return (
                      <button
                        key={opt.title}
                        type="button"
                        onClick={() => setSelectedTarget(isSelected ? '' : opt.title)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#B829A0]/25 border-[#B829A0] shadow-[0_0_15px_rgba(184,41,160,0.3)]'
                            : 'bg-black/40 border-white/[0.08] hover:border-white/[0.2]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-white">{opt.title}</span>
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center border text-[9px] ${
                              isSelected
                                ? 'bg-[#F472B6] border-[#F472B6] text-black font-bold'
                                : 'border-white/[0.3] text-transparent'
                            }`}
                          >
                            ✓
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">{opt.desc}</p>
                      </button>
                    );
                  })}
                </div>
                {selectedTarget && (
                  <p className="text-xs text-[#1FD1B2] mt-3 font-medium">
                    ✓ Selected target focus: <span className="font-bold">{selectedTarget}</span>
                  </p>
                )}
              </div>
            )}

            {/* What's Included */}
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

            {/* Tags */}
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

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {isUnavailable ? (
                <button
                  type="button"
                  onClick={() =>
                    onBook(
                      `Enquiry: ${service.name} (Currently Not Available)`,
                      `I am interested in ${service.name} once scheduling resumes.`
                    )
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer"
                >
                  Enquire for Future Dates <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleBookClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] hover:shadow-[0_0_25px_rgba(31,209,178,0.35)] transition-all cursor-pointer"
                >
                  Enquire / Book <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <Link
                to={`/category/${category.slug}`}
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/40 hover:bg-[#1FD1B2]/10 transition-colors"
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
