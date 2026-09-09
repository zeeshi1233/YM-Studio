import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Calendar,
  Send,
  Sparkles,
  Phone,
  Mail,
  User,
  Clock,
  MapPin,
  CheckCircle2,
  Copy,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialServiceCategory?: string;
  initialDetails?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceCategory = '',
  initialDetails = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: initialServiceCategory || 'Bridal Makeup',
    details: initialDetails || '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    isMobileService: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    data: BookingFormData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync external prefilled service or details
  useEffect(() => {
    if (initialServiceCategory) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: initialServiceCategory,
      }));
    }
  }, [initialServiceCategory]);

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({
        ...prev,
        details: initialDetails,
      }));
    }
  }, [initialDetails]);

  const baseServiceOptions = [
    'Bridal Makeup',
    'Event & Occasion Glam',
    'Soft Glam Makeup',
    'Natural Glam Makeup',
    'Lash Tint',
    'Brow Tint',
    'Lash & Brow Package',
    'Brow Lamination',
    'Brow Lamination with Tint',
    'Brow Lamination, Tint & Shaping',
    'Waxing Services',
    'HydraFacial (Hydro-Dermabrasion)',
    'Microdermabrasion',
    'Classic European Facial',
    'Basic 3-Step Facial',
    'Face Lift Aroma Massage Facial',
    'Chemical Peels (AHA/BHA)',
    'LED Light Therapy',
    'Acne-Clarifying Clinical Facial',
    'Anti-Aging Firming Facial',
    'Hair Styling (Straight & Sleek, Curls, Buns)',
    'Academy & Training Enquiry',
    'Custom Facial & Glam Package',
    'Other Special Enquiry',
  ];
  const serviceOptions = Array.from(
    new Set([formData.serviceCategory, ...baseServiceOptions].filter(Boolean))
  );

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address';
    if (!formData.phone.trim() || formData.phone.length < 8)
      errs.phone = 'Please provide a valid Australian contact number';
    if (!formData.serviceCategory)
      errs.serviceCategory = 'Please select what you are enquiring about';
    if (!formData.details.trim())
      errs.details = 'Please tell us your preferred date, occasion, and requirements';
    return errs;
  };

  const STUDIO_WHATSAPP = '61469320044';

  const buildEnquiryMessage = (data: BookingFormData, reference: string) =>
    [
      `Hi YM Studios! 👋`,
      `I would like to book / enquire.`,
      ``,
      `📌 Booking Ref: ${reference}`,
      `👤 Name: ${data.fullName}`,
      `📧 Email: ${data.email}`,
      `📞 Phone: ${data.phone}`,
      `✨ Service: ${data.serviceCategory}`,
      `📍 Appointment: ${data.isMobileService ? 'Mobile Makeup Service (Melbourne — travel fees may apply)' : 'Studio visit'}`,
      ``,
      `📝 Details:`,
      data.details,
    ].join('\n');

  const openWhatsAppWithEnquiry = (data: BookingFormData, reference: string) => {
    const msg = encodeURIComponent(buildEnquiryMessage(data, reference));
    window.open(`https://wa.me/${STUDIO_WHATSAPP}?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        const refCode = 'YM-' + Math.floor(100000 + Math.random() * 900000);
        const bookingData = { ...formData };

        setSubmittedBooking({
          reference: refCode,
          data: bookingData,
        });

        openWhatsAppWithEnquiry(bookingData, refCode);

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#1FD1B2', '#B829A0', '#F472B6', '#FFFFFF'],
          });
        } catch {
          // fallback
        }
      }, 400);
    }
  };

  const handleCopySummary = () => {
    if (!submittedBooking) return;
    navigator.clipboard.writeText(
      buildEnquiryMessage(submittedBooking.data, submittedBooking.reference)
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openWhatsApp = () => {
    if (!submittedBooking) return;
    openWhatsAppWithEnquiry(submittedBooking.data, submittedBooking.reference);
  };

  return (
    <section id="booking-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B829A0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#1FD1B2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header matching Mobile Mockup Screen */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2
            id="booking-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3"
          >
            Enquire & <span className="text-gradient-ym">Book</span>
          </h2>
          <p className="text-base text-[#94A3B8]">
            Send an enquiry and tell me what you're looking for.
          </p>
        </div>

        {/* UI Card replicating mobile mockups with glowing input focus borders in #1FD1B2 */}
        <div
          id="booking-card"
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative"
        >
          {submittedBooking ? (
            /* Success State */
            <div className="text-center py-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1FD1B2]/20 border border-[#1FD1B2] text-[#1FD1B2] flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(31,209,178,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                Thank you, <span className="text-white font-semibold">{submittedBooking.data.fullName}</span>. Your enquiry for <span className="text-[#1FD1B2] font-semibold">{submittedBooking.data.serviceCategory}</span> has opened in WhatsApp with all your details ready to send to YM Studios.
              </p>

              <div className="max-w-md mx-auto bg-black/50 border border-white/[0.08] rounded-2xl p-4 text-left mb-6 text-xs space-y-2">
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-slate-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#1FD1B2]">{submittedBooking.reference}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-slate-400">Phone:</span>
                  <span className="text-white">{submittedBooking.data.phone}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-slate-400">Service:</span>
                  <span className="text-white">{submittedBooking.data.serviceCategory}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Details:</span>
                  <p className="text-slate-300 bg-white/[0.02] p-2 rounded-lg italic">
                    "{submittedBooking.data.details}"
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.1] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => setSubmittedBooking(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/40 hover:bg-[#1FD1B2]/10 transition-all cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-5" id="enquiry-form">
              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Name <span className="text-[#B829A0]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-[#0B0C10]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all duration-300"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Field 2 & 3: Email and Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Email Address <span className="text-[#B829A0]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-[#0B0C10]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all duration-300"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Phone Number <span className="text-[#B829A0]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                      className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-[#0B0C10]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all duration-300"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Field 4: Custom Styled Dropdown - What are you enquiring about? */}
              <div>
                <label
                  htmlFor="serviceCategory"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  What are you enquiring about? <span className="text-[#B829A0]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#0B0C10]/90 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all duration-300 cursor-pointer appearance-none"
                  >
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#131419] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile Makeup Service Checkbox */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                <input
                  type="checkbox"
                  id="isMobileService"
                  checked={formData.isMobileService}
                  onChange={(e) => setFormData({ ...formData, isMobileService: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-700 text-[#1FD1B2] focus:ring-[#1FD1B2] cursor-pointer"
                />
                <label htmlFor="isMobileService" className="text-xs text-slate-300 cursor-pointer flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1FD1B2]" />
                  <span>Request Mobile Makeup Service at my Melbourne location (travel fees may apply — makeup only)</span>
                </label>
              </div>

              {/* Field 5: Textarea - Tell me your date, occasion and what you need... */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Tell me your date, occasion and what you need... <span className="text-[#B829A0]">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="e.g. Wedding on 14th November in Melbourne for Bride + 2 Bridesmaids, or HydraFacial appointment for radiant skin before an upcoming event..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#0B0C10]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.3)] transition-all duration-300 resize-none"
                />
                {errors.details && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.details}
                  </p>
                )}
              </div>

              {/* Full-width animated gradient button (#B829A0 to #1FD1B2) with the label "Send Enquiry" */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-sm sm:text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_30px_rgba(31,209,178,0.4)] hover:shadow-[0_0_45px_rgba(31,209,178,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-70"
                id="send-enquiry-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    <span>Processing Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400 pt-2">
                🔒 Your personal data is kept strictly confidential • Quick confirmation via SMS & Email
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
