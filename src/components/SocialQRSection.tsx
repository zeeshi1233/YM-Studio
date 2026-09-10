import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

const SOCIALS = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@YM.STUDIOZ',
    href: 'https://instagram.com/ym.studioz',
    qr: '/images/qr/instagram-qr.jpg',
    accent: '#F472B6',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@ym.studioz',
    href: 'https://www.tiktok.com/@ym.studioz',
    qr: '/images/qr/tiktok-qr.jpg',
    accent: '#1FD1B2',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'YMStudioS',
    href: 'https://www.facebook.com/YMStudioS',
    qr: '/images/qr/facebook-qr.jpg',
    accent: '#D4AF37',
  },
];

export const SocialQRSection: React.FC = () => {
  return (
    <section id="social-qr-section" className="relative py-16 md:py-20 bg-[#0B0C10] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Scan & <span className="text-gradient-ym">Follow</span>
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Point your camera at a QR code to open Instagram, TikTok or Facebook — or tap a card to visit the profile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-[#1FD1B2]/40 transition-all text-center block group"
            >
              <div className="mx-auto mb-4 w-40 h-40 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-white p-2 border border-white/20">
                <img
                  src={social.qr}
                  alt={`${social.name} QR code for ${social.handle}`}
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm font-bold text-white group-hover:text-[#1FD1B2] transition-colors flex items-center justify-center gap-2">
                {social.id === 'facebook' ? <Facebook className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
                {social.name}
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </p>
              <p className="text-xs mt-1" style={{ color: social.accent }}>
                {social.handle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
