import React from 'react';
import { motion } from 'motion/react';

const SPARKLES = [
  { top: '12%', left: '8%', size: 6, delay: 0, color: '#1FD1B2' },
  { top: '22%', left: '88%', size: 8, delay: 0.6, color: '#F472B6' },
  { top: '68%', left: '6%', size: 5, delay: 1.2, color: '#B829A0' },
  { top: '78%', left: '92%', size: 7, delay: 0.3, color: '#1FD1B2' },
  { top: '40%', left: '4%', size: 4, delay: 1.8, color: '#F472B6' },
  { top: '55%', left: '94%', size: 5, delay: 0.9, color: '#1FD1B2' },
];

export const MakeupAtmosphere: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {SPARKLES.map((sparkle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.color,
            boxShadow: `0 0 12px ${sparkle.color}`,
          }}
          animate={{ y: [0, -16, 0], opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
          transition={{ duration: 3.6, delay: sparkle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute -left-6 top-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-[#B829A0] to-[#F472B6] opacity-40 blur-[1px] makeup-orb"
        animate={{ y: [0, -22, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-4 bottom-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-[#1FD1B2] to-[#2DD4BF] opacity-35 blur-[1px] makeup-orb"
        animate={{ y: [0, 18, 0], rotate: [0, -14, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};
