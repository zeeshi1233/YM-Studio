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

      </div>

      {/* Typography Section */}
      <div className="flex flex-col  justify-center">
        <div className="flex items-center justify-center  gap-1.5">
          <img src="/logo.png" width={50} height={50} alt="" />
        </div>
        {!showSubtitle && (
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
