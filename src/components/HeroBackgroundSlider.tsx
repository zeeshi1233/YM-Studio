import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/** Category-matched hero slides (makeup, hair, skin, henna, brow, academy) */
export const HERO_BG_SLIDES = [
  {
    src: '/images/services/svc-bridal-makeup.jpg',
    label: 'Bridal Beauty',
    category: 'Makeup',
    focus: 'object-[50%_18%]',
  },
  {
    src: '/images/services/svc-soft-glam.jpg',
    label: 'Soft Glam',
    category: 'Makeup',
    focus: 'object-[50%_20%]',
  },
  {
    src: '/images/services/svc-party-makeup.jpg',
    label: 'Party Glam',
    category: 'Makeup',
    focus: 'object-[center_22%]',
  },
  {
    src: '/images/services/svc-statement-look.jpg',
    label: 'Statement Looks',
    category: 'Makeup',
    focus: 'object-[center_18%]',
  },
  {
    src: '/images/services/svc-hair-updo.png',
    label: 'Hair Styling',
    category: 'Hair',
    focus: 'object-center',
  },
  {
    src: '/images/services/svc-hair-curls.png',
    label: 'Hollywood Curls',
    category: 'Hair',
    focus: 'object-center',
  },
  {
    src: '/images/skin-treatment-sharp.png',
    label: 'Skin Treatments',
    category: 'Skin',
    focus: 'object-center',
  },
  {
    src: '/images/services/svc-bridal-henna.png',
    label: 'Bridal Henna',
    category: 'Henna',
    focus: 'object-center',
  },
  {
    src: '/images/brow-lamination.png',
    label: 'Lash & Brow',
    category: 'Lash & Brow',
    focus: 'object-center',
  },
  {
    src: '/images/services/svc-edu-bridal.png',
    label: 'Beauty Academy',
    category: 'Education',
    focus: 'object-center',
  },
] as const;

const INTERVAL_MS = 4500;

export function useHeroSlideIndex(intervalMs = INTERVAL_MS) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_BG_SLIDES.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    const next = HERO_BG_SLIDES[(index + 1) % HERO_BG_SLIDES.length];
    const img = new Image();
    img.src = next.src;
  }, [index]);

  return { index, setIndex, slide: HERO_BG_SLIDES[index] };
}

interface HeroBackgroundSliderProps {
  index: number;
  onSelect?: (index: number) => void;
  variant?: 'full' | 'card';
  className?: string;
  showMeta?: boolean;
}

export const HeroBackgroundSlider: React.FC<HeroBackgroundSliderProps> = ({
  index,
  onSelect,
  variant = 'full',
  className = '',
  showMeta = true,
}) => {
  const slide = HERO_BG_SLIDES[index] ?? HERO_BG_SLIDES[0];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={variant === 'full'}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={variant === 'card' ? `${slide.category} — ${slide.label}` : ''}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 h-full w-full object-cover ${slide.focus}`}
          draggable={false}
        />
      </AnimatePresence>

      {variant === 'full' ? (
        <>
          <div className="absolute inset-0 bg-[#0B0C10]/72" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10]/90 via-[#0B0C10]/55 to-[#0B0C10]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-[#0B0C10]/40" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C10]/85 via-transparent to-black/15" />
      )}

      {showMeta && variant === 'card' && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            {slide.category}
          </p>
          <p className="mb-3 text-sm font-semibold text-white">{slide.label}</p>
          <div className="flex gap-1.5">
            {HERO_BG_SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show ${s.label}`}
                onClick={() => onSelect?.(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-[#1FD1B2]' : 'w-1.5 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
