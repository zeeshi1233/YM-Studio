import React from 'react';
import { GraduationCap, CheckCircle2, Award, Sparkles, BookOpen, Users, Clock, ArrowRight } from 'lucide-react';

interface AcademyProps {
  onOpenTrainingEnquiry: () => void;
}

export const Academy: React.FC<AcademyProps> = ({ onOpenTrainingEnquiry }) => {
  return (
    <section id="academy-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B829A0]/10 via-[#1FD1B2]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Container with subtle gradient border as specified */}
        <div
          id="academy-container"
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-b from-[#131419]/90 to-[#0B0C10]/95 backdrop-blur-2xl border border-transparent shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          style={{
            borderImage: 'linear-gradient(135deg, #B829A0 0%, #1FD1B2 100%) 1',
          }}
        >
          {/* Subtle floral emblem watermark in background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tl from-[#1FD1B2]/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            {/* Header: "Learn with YM Studios" */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131419] border border-[#B829A0]/40 text-xs font-bold uppercase tracking-widest text-[#F472B6] mb-6">
              <GraduationCap className="w-4 h-4 text-[#1FD1B2]" />
              <span>Learn with YM Studios</span>
            </div>

            {/* Title: "Build your beauty career with confidence." */}
            <h2
              id="academy-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Build your beauty career{' '}
              <span className="text-gradient-ym inline-block">
                with confidence.
              </span>
            </h2>

            {/* Content from prompt */}
            <p
              id="academy-content"
              className="text-base sm:text-xl text-[#94A3B8] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Explore practical beauty education and job-ready training designed to help you step into the industry with greater confidence.
            </p>

            {/* Academy Features / Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-12">
              <div className="p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#1FD1B2]/50 hover:shadow-[0_0_25px_rgba(31,209,178,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#1FD1B2]/15 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] mb-3 shadow-[0_0_15px_rgba(31,209,178,0.2)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">Bridal & Event Mastery</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Real client workflows, waterproof color theory, high-definition skin blending, and jewelry styling.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#B829A0]/50 hover:shadow-[0_0_25px_rgba(184,41,160,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#B829A0]/15 border border-[#B829A0]/30 flex items-center justify-center text-[#F472B6] mb-3 shadow-[0_0_15px_rgba(184,41,160,0.2)]">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">1-on-1 Intensive Mentorship</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Tailored direct guidance designed to address your exact skill gaps and accelerate your freelance career.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#1FD1B2]/50 hover:shadow-[0_0_25px_rgba(31,209,178,0.15)] transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-[#1FD1B2]/15 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] mb-3 shadow-[0_0_15px_rgba(31,209,178,0.2)]">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">Kit Strategy & Certification</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Professional product curation, client booking pricing frameworks, and verified Certificate of Completion.
                </p>
              </div>
            </div>

            {/* CTA Button: Secondary dark button with neon teal outline and hover fill */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenTrainingEnquiry}
                id="academy-training-enquiry-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-[#1FD1B2] bg-black/60 backdrop-blur-xl border-2 border-[#1FD1B2] hover:bg-[#1FD1B2] hover:text-[#0B0C10] shadow-[0_0_25px_rgba(31,209,178,0.3)] hover:shadow-[0_0_40px_rgba(31,209,178,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Training Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#94A3B8]">
                Intimate cohorts & one-on-one sessions booking now across Melbourne
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
