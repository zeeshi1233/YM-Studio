import React from 'react';
import { MapPin, Instagram, Facebook, Phone, ArrowUp, ExternalLink } from 'lucide-react';
import { YMLogo } from './YMLogo';

export const Footer: React.FC = () => {
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
              Melbourne bridal makeup artist, HydraFacial & clinical facials, lash tint, brow lamination, precision waxing, hair styling, and beauty academy training. Mobile makeup services available across Victoria.
            </p>

            <a
              href="https://wa.me/61469320044"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#1FD1B2] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp +61 469 320 044
            </a>

            {/* SECTION 5: VISUAL Melbourne-based badge */}
            <div
              id="footer-location-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#1FD1B2]/40 text-xs font-semibold text-[#1FD1B2] shadow-[0_0_20px_rgba(31,209,178,0.15)]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1FD1B2]" />
              <span>Melbourne Based | Mobile Makeup Services Available Across Victoria</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="/category/makeup" className="hover:text-[#1FD1B2] transition-colors">
                  Makeup Artistry & Bridal Glam
                </a>
              </li>
              <li>
                <a href="/category/lash-brow-waxing" className="hover:text-[#F472B6] transition-colors">
                  Lash, Brow & Precision Waxing
                </a>
              </li>
              <li>
                <a href="/category/skin" className="hover:text-[#1FD1B2] transition-colors">
                  Skin Treatments & Facials
                </a>
              </li>
              <li>
                <a href="/category/henna" className="hover:text-[#D4AF37] transition-colors">
                  Henna & Mehndi Artistry
                </a>
              </li>
              <li>
                <a href="/category/hair" className="hover:text-[#1FD1B2] transition-colors">
                  Hair Styling, Cuts & Updos
                </a>
              </li>
              <li>
                <a href="/category/beauty-education" className="hover:text-[#B829A0] transition-colors">
                  Beauty Education / Academy
                </a>
              </li>
              <li>
                <a href="/#social-qr-section" className="hover:text-[#1FD1B2] transition-colors">
                  Social QR Codes
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
                href="https://www.tiktok.com/@ym.studioz"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-[#1FD1B2]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1FD1B2]/20 flex items-center justify-center text-[#1FD1B2]">
                    <span className="text-[10px] font-black">TT</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-[#1FD1B2] transition-colors">
                      @ym.studioz
                    </span>
                    <span className="text-[10px] text-slate-400 block">TikTok</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#1FD1B2] transition-colors" />
              </a>

              <a
                href="https://www.facebook.com/YMStudioS"
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
    </footer>
  );
};
