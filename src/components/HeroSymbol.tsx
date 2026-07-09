'use client';

import { motion } from 'framer-motion';

interface HeroSymbolProps {
  size?: number;
  className?: string;
}

/**
 * Large ceremonial seal — eight-pointed star (two squares),
 * concentric rings, mizan beam + nur ray. Softly glowing.
 */
export default function HeroSymbol({ size = 220, className = '' }: HeroSymbolProps) {
  const gold = '#C9A646';
  const goldSoft = 'rgba(201,166,70,0.5)';

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(201,166,70,0.18) 0%, transparent 62%)',
        }}
      />

      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Slowly rotating outer ring group */}
        <motion.g
          style={{ transformOrigin: '100px 100px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="100" cy="100" r="92" stroke={goldSoft} strokeWidth="0.5" opacity="0.4" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="80" stroke={goldSoft} strokeWidth="0.5" opacity="0.5" />
        </motion.g>

        {/* Counter-rotating eight-pointed star (two squares) */}
        <motion.g
          style={{ transformOrigin: '100px 100px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        >
          <rect x="46" y="46" width="108" height="108" stroke={gold} strokeWidth="1" opacity="0.75" />
          <rect x="46" y="46" width="108" height="108" transform="rotate(45 100 100)" stroke={gold} strokeWidth="1" opacity="0.75" />
        </motion.g>

        {/* Inner ring */}
        <circle cx="100" cy="100" r="48" stroke={goldSoft} strokeWidth="0.7" opacity="0.6" />

        {/* Kapı / eşik arch */}
        <path d="M 80 130 L 80 108 A 20 20 0 0 1 120 108 L 120 130" stroke={gold} strokeWidth="1" fill="none" opacity="0.5" />

        {/* Nur ray + diamond */}
        <line x1="100" y1="92" x2="100" y2="56" stroke={gold} strokeWidth="1.3" strokeLinecap="round" />
        <polygon points="100,44 104,56 100,68 96,56" fill={gold} opacity="0.95" />

        {/* Mizan beam */}
        <line x1="72" y1="92" x2="128" y2="92" stroke={gold} strokeWidth="1.3" strokeLinecap="round" opacity="0.95" />
        <line x1="78" y1="92" x2="75" y2="106" stroke={goldSoft} strokeWidth="0.9" />
        <line x1="78" y1="92" x2="81" y2="106" stroke={goldSoft} strokeWidth="0.9" />
        <path d="M 71 106 Q 78 111 85 106" stroke={gold} strokeWidth="1" fill="none" opacity="0.85" />
        <line x1="122" y1="92" x2="119" y2="106" stroke={goldSoft} strokeWidth="0.9" />
        <line x1="122" y1="92" x2="125" y2="106" stroke={goldSoft} strokeWidth="0.9" />
        <path d="M 115 106 Q 122 111 129 106" stroke={gold} strokeWidth="1" fill="none" opacity="0.85" />

        {/* Pivot */}
        <circle cx="100" cy="92" r="2.2" fill={gold} />
      </motion.svg>
    </div>
  );
}
