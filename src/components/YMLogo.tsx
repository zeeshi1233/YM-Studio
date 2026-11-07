import React from 'react';

interface YMLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const YMLogo: React.FC<YMLogoProps> = ({
  size = 'md',
  className = '',
  onClick,
}) => {
  const dimensions = {
    sm: { icon: 52 },
    md: { icon: 74 },
    lg: { icon: 128 },
    xl: { icon: 168 },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      id={`ym-logo-${size}`}
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <div className="absolute -inset-2 bg-[#D4AF37]/20 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        <img
          src="/logo.png"
          width={dimensions.icon}
          height={dimensions.icon}
          alt="YM Studios"
          className="relative z-10 object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)] group-hover:scale-[1.03] transition-transform duration-500"
          style={{ width: dimensions.icon, height: 'auto' }}
        />
      </div>
    </div>
  );
};
