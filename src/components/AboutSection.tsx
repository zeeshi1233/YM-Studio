import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Award,
  GraduationCap,
  Heart,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Quote,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking?: () => void;
  onOpenConsultation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onOpenConsultation,
}) => {
  const qualifications = [
    {
      title: 'Graduate Diploma in Dermal Science',
      detail: 'Advanced dermal protocols, clinical skin analysis & treatment design',
    },
    {
      title: 'Diploma of Beauty Therapy',
      detail: 'Comprehensive skin biology, clinical therapy & client care',
    },

    {
      title: 'Qualifications in Makeup Artistry',
      detail: 'High-definition bridal, photographic, editorial & special event glam',
    },
    {
      title: 'Certificate IV in Training & Assessment (TAE40116)',
      detail: 'Accredited vocational education, curriculum delivery & professional mentoring',
    },
  ];

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about-section"
      className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden rounded-t-[2.5rem] shadow-[0_-24px_60px_rgba(0,0,0,0.65)] border-t border-[#D4AF37]/25"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#B829A0]/12 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-[420px] h-[420px] bg-[#1FD1B2]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-[#D4AF37]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-xl text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Meet the Founder
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
          >
            Yamna Mohsin{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#F472B6] font-normal inline-block ml-1">
              Founder
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#1FD1B2] flex items-center justify-center gap-2 flex-wrap"
          >
            <span>Beauty</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Skin</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Artistry</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Education</span>
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Founder Portrait & Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Portrait Frame */}
            <div className="relative group mx-auto max-w-[440px] lg:max-w-none">
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-[#D4AF37]/40 via-[#B829A0]/30 to-[#1FD1B2]/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/35 bg-[#131419] shadow-[0_25px_60px_rgba(0,0,0,0.8)] aspect-[3/4]">
                <img
                  src="/founder.jpeg"
                  alt="Yamna Mohsin | Founder of YM Studios"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#1FD1B2]" />
                    YM Studios Founder
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/[0.1] shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">Yamna Mohsin</h4>
                      <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                        Founder & Principal Artist
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1FD1B2] bg-[#1FD1B2]/15 border border-[#1FD1B2]/30">
                        12+ Yrs Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Qualifications Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
                <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Professional Qualifications
                </h4>
              </div>

              <div className="space-y-3.5">
                {qualifications.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1FD1B2] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-100">{q.title}</p>
                      <p className="text-[11px] text-[#94A3B8] leading-snug mt-0.5">{q.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-[#D4AF37]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Committed to continuous learning & evolving industry standards.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Story, Philosophy & Vision (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Opening Statement */}
            <div className="relative pl-5 border-l-2 border-[#D4AF37]">
              <Quote className="w-8 h-8 text-[#D4AF37] absolute -top-8 -left-3 pointer-events-none" />
              <p className="text-lg sm:text-xl font-medium text-white leading-relaxed italic">
                &ldquo;With over 12 years of experience in the beauty industry, I am passionate about bringing together the art of beauty, the science of skin and the confidence that comes from feeling your best.&rdquo;
              </p>
            </div>

            {/* Professional Journey Paragraph */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                My professional journey spans Australia&apos;s beauty industry, including professional laser clinics, luxury cosmetics, skincare and makeup artistry. Throughout my career, I have had the opportunity to work with leading beauty brands and industry professionals, gaining valuable experience in advanced skin treatments, client consultations, personalised beauty services, luxury makeup and customer care.
              </p>
              <p>
                My professional qualifications include a Diploma of Beauty Therapy, qualifications in Makeup Artistry, Certificate IV in Training and Assessment (TAE40116), and a Graduate Diploma in Dermal Science. My commitment to continuous learning and professional development reflects my belief that the beauty industry is constantly evolving.
              </p>
            </div>

            {/* Artistry & Skin Health Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-[#B829A0]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#B829A0]/15 border border-[#B829A0]/30 flex items-center justify-center text-[#F472B6] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Makeup Artistry</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  As a makeup artist, I enjoy creating looks that celebrate individuality, enhance natural features and make every client feel confident, whether for a wedding, special occasion, professional event or simply a moment of self-expression.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-[#1FD1B2]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#1FD1B2]/15 border border-[#1FD1B2]/30 flex items-center justify-center text-[#1FD1B2] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Skin Health</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  My passion for skin health has also shaped my professional journey. I believe beautiful skin begins with understanding individual skin needs, choosing appropriate treatments and creating personalised approaches that support skin health and confidence.
                </p>
              </div>
            </div>

            {/* Education Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Beyond my work with clients, I have always enjoyed sharing my knowledge, demonstrating techniques and supporting fellow beauty professionals. This passion has inspired my vision to bring beauty education into the YM Studios experience, creating opportunities for others to learn, develop their skills and grow with confidence.
            </p>

            {/* My Vision Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/35 bg-gradient-to-b from-[#161822]/90 to-[#0B0C10]/95 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  My Vision
                </div>

                <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                  YM Studios was created with a vision to bring beauty, skin and artistry together under one brand — where professionalism meets creativity, and every individual is valued.
                </p>

                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08]">
                  <p className="text-sm sm:text-base text-[#1FD1B2] font-medium italic">
                    &ldquo;My philosophy is simple: beauty is not about changing who you are; it is about enhancing what makes you uniquely you.&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I aim to create an experience built on personalised care, professional standards, continuous learning and genuine connections. Whether through skin treatments, makeup artistry or beauty education, my goal is to help people feel confident, empowered and beautiful in their own way.
                </p>
              </div>
            </div>

            {/* Welcome & Call-to-Action Bar */}
            <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-1">
                  Welcome to YM Studios
                </p>
                <p className="text-sm font-serif-luxury italic text-slate-200">
                  Where beauty meets confidence, artistry meets expertise, and every journey is personal.
                </p>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.15] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-[#0B0C10] uppercase tracking-wider bg-[#1FD1B2] hover:bg-[#25e2c2] shadow-[0_4px_20px_rgba(31,209,178,0.3)] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
