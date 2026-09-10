import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import { CERTIFICATE_DISCLAIMER } from '../data/catalog';

interface AcademyProps {
  onOpenTrainingEnquiry: () => void;
}

const COURSES = [
  {
    name: 'Personal Makeup & Grooming',
    subtitle: 'Practical personal makeup training',
    price: 'From $50',
    note: 'Online from $50 · Face-to-Face from $75',
    slug: 'personal-makeup-grooming',
    cert: false,
  },
  {
    name: 'Makeup for Beginners',
    subtitle: 'Practical professional makeup training',
    price: 'From $80',
    note: 'Online from $80 · Face-to-Face from $100',
    slug: 'makeup-for-beginners',
    cert: true,
  },
  {
    name: 'Bridal & Party Makeup Masterclass',
    subtitle: '3-day bridal & event training',
    price: '$250',
    note: '3-Day Masterclass',
    slug: 'bridal-party-makeup-masterclass',
    cert: true,
  },
];

export const Academy: React.FC<AcademyProps> = ({ onOpenTrainingEnquiry }) => {
  return (
    <section id="academy-section" className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden floral-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B829A0]/10 via-[#1FD1B2]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          id="academy-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-10 md:p-14 overflow-hidden bg-gradient-to-b from-[#131419]/90 to-[#0B0C10]/95 border border-[#D4AF37]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131419] border border-[#B829A0]/40 text-xs font-bold uppercase tracking-widest text-[#F472B6] mb-5">
              <GraduationCap className="w-4 h-4 text-[#1FD1B2]" />
              YM Studios Beauty Education
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Learn Makeup.{' '}
              <span className="font-script text-4xl sm:text-5xl text-[#F472B6] font-normal tracking-normal">
                Build Confidence.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Practical, hands-on makeup training for beginners, beauty enthusiasts and aspiring artists — online or face-to-face in a supportive learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {COURSES.map((course) => (
              <Link
                key={course.slug}
                to={`/category/beauty-education/${course.slug}`}
                className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-[#1FD1B2]/45 transition-all text-left block h-full"
              >
                <h3 className="text-base font-bold text-white mb-1">{course.name}</h3>
                <p className="text-xs text-[#1FD1B2] mb-3">{course.subtitle}</p>
                <p className="text-2xl font-extrabold text-[#1FD1B2]">{course.price}</p>
                <p className="text-[11px] text-slate-400 mt-1 mb-3">{course.note}</p>
                {course.cert && (
                  <p className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-[#F472B6] mb-3">
                    <CheckCircle2 className="w-3 h-3" /> Certificate of Completion included
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37]">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">{CERTIFICATE_DISCLAIMER}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/category/beauty-education"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0C10] bg-[#1FD1B2] hover:shadow-[0_0_25px_rgba(31,209,178,0.4)] transition-all text-center"
            >
              Explore Courses
            </Link>
            <button
              type="button"
              onClick={onOpenTrainingEnquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1FD1B2] border-2 border-[#1FD1B2] hover:bg-[#1FD1B2]/10 transition-all cursor-pointer"
            >
              Book Your Class / Enquire
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
