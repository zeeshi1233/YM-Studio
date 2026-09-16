import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * Smooth scroll-then-overlap hero
 *
 * No position toggling (relative ↔ fixed) — that was causing the jolt.
 * Hero stays in a sticky h-screen stage; scroll progress pans its full
 * content via GPU transform, then the overlay slides up over the last frame.
 *
 * Track height = heroHeight + 100vh
 *   • 0 → pinOffset px of scroll: translateY 0 → -(heroH − vh)  [preview]
 *   • next 100vh: hold last frame while overlay (z-20, -mt-[100vh]) covers
 */

interface OverlappingScrollHeroProps {
  hero: React.ReactNode;
  children: React.ReactNode;
  overlayClassName?: string;
}

export const OverlappingScrollHero: React.FC<OverlappingScrollHeroProps> = ({
  hero,
  children,
  overlayClassName = 'bg-[#0B0C10]',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const [viewportH, setViewportH] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      setHeroHeight(el.scrollHeight || el.offsetHeight);
      setViewportH(window.innerHeight);
    };

    measure();
    // Remeasure after fonts/images settle
    const t = window.setTimeout(measure, 100);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const pinOffset = Math.max(0, heroHeight - viewportH);
  const trackPx = heroHeight > 0 ? heroHeight + viewportH : 0;
  const previewShare = trackPx > 0 ? pinOffset / trackPx : 0;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Direct 1:1 mapping — no spring lag / stuck feel
  const heroY = useTransform(scrollYProgress, (p) => {
    if (pinOffset <= 0 || previewShare <= 0) return 0;
    const t = Math.min(Math.max(p / previewShare, 0), 1);
    return -pinOffset * t;
  });

  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        className="relative z-0 w-full"
        style={{ height: trackPx > 0 ? trackPx : '200vh' }}
      >
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div
            ref={contentRef}
            style={{ y: heroY, willChange: 'transform' }}
            className="w-full"
          >
            {hero}
          </motion.div>
        </div>
      </div>

      <div className={`relative z-20 -mt-[100vh] w-full ${overlayClassName}`}>
        {children}
      </div>
    </div>
  );
};
