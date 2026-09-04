import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, Clock, User, Phone, Mail, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConfirmed: (serviceName: string, notes: string) => void;
}

const SKIN_CONCERNS = [
  'Dullness & Uneven Texture',
  'Acne, Blemishes & Congestion',
  'Deep Dehydration & Flakiness',
  'Fine Lines & Loss of Firmness',
  'Hyperpigmentation & Sun Spots',
  'Pre-Bridal Wedding Glow Prep',
  'Sensitive / Reactive Skin Barrier',
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onBookConfirmed,
}) => {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['Pre-Bridal Wedding Glow Prep']);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleConcern = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter((c) => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#1FD1B2', '#B829A0', '#FFFFFF'],
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      onBookConfirmed(
        'Free 10-Min Skin Consultation',
        `Primary Concerns: ${selectedConcerns.join(', ')}`
      );
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="glass-card bg-[#0B0C10]/95 border border-white/[0.1] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-[0_0_80px_rgba(31,209,178,0.25)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#1FD1B2]/20 border border-[#1FD1B2] text-[#1FD1B2] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(31,209,178,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Consultation Reserved!</h3>
            <p className="text-sm text-slate-300 mb-4">
              Thank you, {name}! Your complimentary 10-minute diagnostic session is logged. We will contact you at {phone} shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_20px_rgba(31,209,178,0.35)] cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FD1B2]/10 border border-[#1FD1B2]/30 text-xs font-semibold text-[#1FD1B2] mb-3 shadow-[0_0_15px_rgba(31,209,178,0.15)]">
              <Sparkles className="w-3.5 h-3.5" />
              Complimentary Studio Benefit
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Free 10-Min Skin Consultation
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Included with any facial appointment or available standalone. Let our therapist analyze your skin barrier and craft a tailored care plan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Skin Concerns */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  What are your main skin concerns?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SKIN_CONCERNS.map((concern) => {
                    const isSelected = selectedConcerns.includes(concern);
                    return (
                      <button
                        type="button"
                        key={concern}
                        onClick={() => toggleConcern(concern)}
                        className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1FD1B2]/20 border-[#1FD1B2] text-[#1FD1B2] font-semibold shadow-[0_0_15px_rgba(31,209,178,0.25)]'
                            : 'bg-black/50 border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2]'
                        }`}
                      >
                        {concern}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.25)] transition-all"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone (Mobile)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0400 000 000"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.25)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@mail.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1FD1B2] focus:shadow-[0_0_20px_rgba(31,209,178,0.25)] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_25px_rgba(31,209,178,0.35)] hover:shadow-[0_0_35px_rgba(31,209,178,0.55)] transition-all cursor-pointer mt-4"
              >
                Claim Free Skin Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
