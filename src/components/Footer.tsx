import React, { useState } from 'react';
import { MapPin, Instagram, Facebook, Mail, Phone, Heart, QrCode, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { YMLogo } from './YMLogo';

export const Footer: React.FC = () => {
  const [showQrModal, setShowQrModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#07080B] text-slate-300 border-t border-white/[0.08] overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1FD1B2]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B829A0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Mission Statement (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <YMLogo size="lg" />

            {/* SECTION 5: TEXT */}
            <p
              id="footer-tagline"
              className="font-serif-luxury italic text-base sm:text-lg text-slate-200 mt-3 font-medium"
            >
              "Healthy skin is always in. Let's achieve your best skin together."
            </p>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md">
              Melbourne-based premier studio with nearly 12 years of artistry in bespoke bridal makeup, advanced clinical skin rejuvenation, event glam, and vocational beauty academy education.
            </p>

            {/* SECTION 5: VISUAL Melbourne-based badge */}
            <div
              id="footer-location-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#1FD1B2]/40 text-xs font-semibold text-[#1FD1B2] shadow-[0_0_20px_rgba(31,209,178,0.15)]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1FD1B2]" />
              <span>Melbourne Based | Mobile Services Available Across Victoria</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services-section" className="hover:text-[#1FD1B2] transition-colors">
                  Makeup Artistry & Bridal Glam
                </a>
              </li>
              <li>
                <a href="#skin-treatments-section" className="hover:text-[#1FD1B2] transition-colors">
                  HydraFacial & Microdermabrasion
                </a>
              </li>
              <li>
                <a href="#skin-treatments-section" className="hover:text-[#1FD1B2] transition-colors">
                  Chemical Peels & LED Therapy
                </a>
              </li>
              <li>
                <a href="#hair-styling-section" className="hover:text-[#1FD1B2] transition-colors">
                  Hair Styling, Cuts & Updos
                </a>
              </li>
              <li>
                <a href="#academy-section" className="hover:text-[#B829A0] transition-colors">
                  Academy & Training Programs
                </a>
              </li>
              <li>
                <a href="#showcase-3d-section" className="hover:text-[#1FD1B2] transition-colors">
                  Interactive 3D Product Formulas
                </a>
              </li>
              <li>
                <a href="#quote-calculator-section" className="hover:text-[#1FD1B2] transition-colors">
                  Facial & Glam Package Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connect & Follow
            </h4>
            <p className="text-xs text-slate-400">
              Direct message to enquire, book consultations, or scan our studio QR code on Instagram.
            </p>

            {/* Socials Links styled with purple-to-teal hover transitions */}
            <div className="space-y-2.5">
              <a
                href="https://instagram.com/ym.studioz"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-[#1FD1B2]/50 hover:bg-gradient-to-r hover:from-[#B829A0]/10 hover:to-[#1FD1B2]/10 transition-all duration-300"
                id="footer-insta-studioz"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#B829A0]/20 flex items-center justify-center text-[#F472B6] group-hover:text-[#1FD1B2] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-[#1FD1B2] transition-colors">
                      @YM.STUDIOZ
                    </span>
                    <span className="text-[10px] text-slate-400 block">Official Studio Handle</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#1FD1B2] transition-colors" />
              </a>

              <a
                href="https://instagram.com/ymstudios.melb"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-[#B829A0]/50 hover:bg-gradient-to-r hover:from-[#1FD1B2]/10 hover:to-[#B829A0]/10 transition-all duration-300"
                id="footer-insta-melb"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1FD1B2]/20 flex items-center justify-center text-[#1FD1B2] group-hover:text-[#F472B6] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-[#B829A0] transition-colors">
                      @YMSTUDIOS.MELB
                    </span>
                    <span className="text-[10px] text-slate-400 block">Melbourne Portfolio</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#B829A0] transition-colors" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-[#1FD1B2]/50 hover:bg-gradient-to-r hover:from-[#B829A0]/10 hover:to-[#1FD1B2]/10 transition-all duration-300"
                id="footer-facebook-link"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:text-[#1FD1B2] transition-colors">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-[#1FD1B2] transition-colors">
                      Facebook / YM Studios Melbourne
                    </span>
                    <span className="text-[10px] text-slate-400 block">Client Reviews & Events</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#1FD1B2] transition-colors" />
              </a>
            </div>

            {/* <button
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-2 text-xs text-[#1FD1B2] hover:underline cursor-pointer pt-1"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Scan Studio Instagram QR Badge</span>
            </button> */}
          </div>
        </div>

        {/* Bottom Bar: SECTION 5 COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div id="footer-copyright">
            © 2026 YM Studios. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Melbourne, Victoria, Australia</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#1FD1B2] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* QR Code Modal for @YM.STUDIOZ based on user's flyer */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#131419] border border-[#1FD1B2]/40 rounded-3xl p-6 max-w-sm w-full text-center relative shadow-[0_0_50px_rgba(31,209,178,0.3)]">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 text-sm font-bold"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] p-0.5 mx-auto mb-4">
              <div className="w-full h-full bg-[#131419] rounded-2xl flex items-center justify-center">
                <Instagram className="w-6 h-6 text-[#1FD1B2]" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Scan & Follow on Instagram</h3>
            <p className="text-xs text-slate-400 mb-4">Point your camera to view latest bridal & skin transformations</p>

            <div className="p-4 bg-white rounded-2xl inline-block mb-4 shadow-lg">
              {/* Styled QR placeholder graphic */}
              <div className="w-48 h-48 bg-slate-950 flex flex-col items-center justify-center p-2 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B829A0]/20 to-[#1FD1B2]/20" />
                <Instagram className="w-12 h-12 text-[#1FD1B2] mb-2" />
                <span className="font-mono text-xs font-bold text-white tracking-widest">
                  @YM.STUDIOZ
                </span>
                <span className="text-[9px] text-slate-400 mt-1">Melbourne Beauty Studio</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/ym.studioz"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2]"
              >
                Open @YM.STUDIOZ Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
