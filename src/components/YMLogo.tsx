import React from 'react';

interface YMLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const YMLogo: React.FC<YMLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const dimensions = {
    sm: { icon: 34, text: 'text-base', sub: 'text-[9px]', studio: 'text-xs tracking-[0.25em]' },
    md: { icon: 44, text: 'text-xl', sub: 'text-[10px]', studio: 'text-sm tracking-[0.3em]' },
    lg: { icon: 64, text: 'text-2xl', sub: 'text-xs', studio: 'text-lg tracking-[0.35em]' },
    xl: { icon: 90, text: 'text-4xl', sub: 'text-sm', studio: 'text-2xl tracking-[0.4em]' },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      id={`ym-logo-${size}`}
    >
      {/* Authentic Vector Monogram based on official YM Studios artwork */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#B829A0]/30 to-[#1FD1B2]/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_2px_12px_rgba(31,209,178,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="ymMagentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#B829A0" />
              <stop offset="100%" stopColor="#7E1D7B" />
            </linearGradient>

            <linearGradient id="ymTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5EEAD4" />
              <stop offset="50%" stopColor="#1FD1B2" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#1FD1B2" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background Badge Frame */}
          <rect width="120" height="120" rx="24" fill="#111319" fillOpacity="0.8" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

          {/* Decorative Floral background swirls */}
          <path
            d="M15 15 C 25 5, 45 15, 30 35 C 20 45, 10 30, 15 15 Z"
            fill="none"
            stroke="rgba(184, 41, 160, 0.25)"
            strokeWidth="1.2"
          />
          <path
            d="M105 105 C 95 115, 75 105, 90 85 C 100 75, 110 90, 105 105 Z"
            fill="none"
            stroke="rgba(31, 209, 178, 0.25)"
            strokeWidth="1.2"
          />

          {/* Outer 'M' Structure (Electric Teal #1FD1B2 with architectural serifs) */}
          <g filter="url(#glowFilter)">
            {/* Left Pillar */}
            <path
              d="M 24 95 L 24 38 L 36 38 L 36 82 L 48 82 L 48 95 Z"
              fill="url(#ymTealGrad)"
            />
            {/* Right Pillar */}
            <path
              d="M 96 95 L 96 38 L 84 38 L 84 82 L 72 82 L 72 95 Z"
              fill="url(#ymTealGrad)"
            />
            {/* M Bottom Wings */}
            <polygon points="20,95 24,90 28,95" fill="#1FD1B2" />
            <polygon points="92,95 96,90 100,95" fill="#1FD1B2" />
            {/* Inner Filigree lace dots */}
            <circle cx="30" cy="50" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="30" cy="62" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="30" cy="74" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="90" cy="50" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="90" cy="62" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="90" cy="74" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
          </g>

          {/* Interlocking 'Y' with Bride Silhouette (Vibrant Magenta #B829A0) */}
          <g>
            {/* Left Upper Arm */}
            <path
              d="M 30 25 L 46 25 L 60 55 L 50 62 Z"
              fill="url(#ymMagentaGrad)"
            />
            {/* Right Upper Arm */}
            <path
              d="M 90 25 L 74 25 L 60 55 L 70 62 Z"
              fill="url(#ymMagentaGrad)"
            />
            {/* Center Vertical Stem */}
            <path
              d="M 53 58 L 67 58 L 67 92 L 53 92 Z"
              fill="url(#ymMagentaGrad)"
            />
            {/* Bride Crown / Maang Tikka Jewelry Dot */}
            <circle cx="60" cy="24" r="3" fill="#F472B6" />
            <circle cx="60" cy="24" r="1.5" fill="#FFFFFF" />
            <circle cx="60" cy="30" r="1" fill="#FFD700" />
            <circle cx="60" cy="34" r="1" fill="#FFD700" />
            
            {/* Bride Profile Silhouette in Central Medallion */}
            <path
              d="M 60 38 C 55 42, 53 48, 55 54 C 56 58, 59 62, 60 68 C 62 62, 65 58, 66 54 C 67 48, 65 42, 60 38 Z"
              fill="#FFFFFF"
              fillOpacity="0.95"
            />
            {/* Lips & Eye Details */}
            <circle cx="58" cy="48" r="1" fill="#B829A0" />
            <path d="M 57 54 Q 60 56 63 54" stroke="#B829A0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </g>

          {/* Sparkles / Starlight Accents */}
          <polygon points="60,10 62,15 67,17 62,19 60,24 58,19 53,17 58,15" fill="#1FD1B2" opacity="0.9" />
          <polygon points="102,30 103,33 106,34 103,35 102,38 101,35 98,34 101,33" fill="#B829A0" opacity="0.8" />
        </svg>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-extrabold text-[#B829A0] tracking-wider text-xl leading-none group-hover:text-[#F472B6] transition-colors">
            YM
          </span>
          <span className="font-display font-black text-white tracking-[0.2em] text-xl leading-none">
            STUDIOS
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#1FD1B2] font-semibold">
              Makeup
            </span>
            <span className="text-[8px] text-gray-500">•</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-300 font-medium">
              Skin
            </span>
            <span className="text-[8px] text-gray-500">•</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#B829A0] font-semibold">
              Artistry
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
