import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles, Users, ArrowRight } from 'lucide-react';

interface AcademyProps {
  onOpenTrainingEnquiry: () => void;
}

const MODULES = [
  {
    icon: Sparkles,
    title: 'Bridal & Event Mastery',
    desc: 'Real client workflows, waterproof color theory, high-definition skin blending, and jewelry styling.',
    accent: 'teal' as const,
  },
  {
    icon: Users,
    title: '1-on-1 Intensive Mentorship',
    desc: 'Tailored direct guidance designed to address your exact skill gaps and accelerate your freelance career.',
    accent: 'magenta' as const,
  },
  {
    icon: Award,
    title: 'Kit Strategy & Certification',
    desc: 'Professional product curation, client booking pricing frameworks, and verified Certificate of Completion.',
    accent: 'teal' as const,
  },
];

export const Academy: React.FC<AcademyProps> = ({ onOpenTrainingEnquiry }) => {
  return (
    <section id="academy-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden floral-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B829A0]/10 via-[#1FD1B2]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          id="academy-container"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-b from-[#131419]/90 to-[#0B0C10]/95 backdrop-blur-2xl border border-[#D4AF37]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tl from-[#1FD1B2]/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131419] border border-[#B829A0]/40 text-xs font-bold uppercase tracking-widest text-[#F472B6] mb-6">
              <GraduationCap className="w-4 h-4 text-[#1FD1B2]" />
              <span>Learn with YM Studios</span>
            </div>

            <h2
              id="academy-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Build your beauty career{' '}
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#F472B6] font-normal tracking-normal">
                with confidence
              </span>
            </h2>

            <p
              id="academy-content"
              className="text-base sm:text-xl text-[#94A3B8] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Practical makeup & beauty education and job-ready training designed to help you step into the Melbourne industry with greater confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-12">
              {MODULES.map((mod, index) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/[0.08] transition-all duration-300 ${
                    mod.accent === 'teal'
                      ? 'hover:border-[#1FD1B2]/50 hover:shadow-[0_0_25px_rgba(31,209,178,0.15)]'
                      : 'hover:border-[#B829A0]/50 hover:shadow-[0_0_25px_rgba(184,41,160,0.15)]'
                  } ${index === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${
                      mod.accent === 'teal'
                        ? 'bg-[#1FD1B2]/15 border-[#1FD1B2]/30 text-[#1FD1B2]'
                        : 'bg-[#B829A0]/15 border-[#B829A0]/30 text-[#F472B6]'
                    }`}
                  >
                    <mod.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{mod.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>

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
        </motion.div>
      </div>
    </section>
  );
};
