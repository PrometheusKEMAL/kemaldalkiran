'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const verses = [
  'Kapı, hakikat yolunda olgunlaşmak isteyenlere açıktır.',
  'Her gören giremez; her giren göremez.',
  'Davet, emanettir.',
];

export default function MizanPortal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-emerald-deep">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 flex flex-col items-center text-center">
        {/* Portal / Sealed Door */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-14">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-132px) translateX(-50%)`,
                }}
              />
            ))}
          </motion.div>

          {/* Sacred geometry star */}
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-gold/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          >
            <polygon
              points="100,10 125,75 195,75 140,115 160,180 100,140 40,180 60,115 5,75 75,75"
              fill="currentColor"
            />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </motion.svg>

          {/* Door halves */}
          <div className="absolute inset-[18%] rounded-full overflow-hidden border border-gold/30 shadow-[0_0_40px_rgba(201,166,70,0.12)]">
            <motion.div
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#0a1f15] to-[#0d2418] border-r border-gold/20"
              animate={{ x: ['0%', '-8%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#0a1f15] to-[#0d2418] border-l border-gold/20"
              animate={{ x: ['0%', '8%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Inner light glimpse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-full h-full bg-gold/10 blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Central seal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-display text-gold/80 text-[11px] tracking-[0.2em] uppercase text-center leading-tight">
                  Mîzân
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <motion.h2
          key={`head-${index}`}
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
          transition={{ duration: 0.8 }}
          className="font-display text-[22px] md:text-[30px] text-chalk/90 leading-relaxed max-w-xl"
        >
          {verses[index]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-chalk/35 text-[11px] tracking-[0.25em] uppercase"
        >
          Davet ile Girenler İçin
        </motion.p>
      </div>
    </div>
  );
}
