'use client';

import { motion } from 'framer-motion';

interface AnimatedPageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function AnimatedPageHeader({ label, title, description }: AnimatedPageHeaderProps) {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[10px] tracking-widest uppercase text-gold/70 mb-4"
      >
        {label}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[32px] md:text-[46px] font-bold text-chalk leading-tight mb-5"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-chalk/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-16 h-px mx-auto mt-8 origin-center"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.7), transparent)' }}
      />
    </div>
  );
}
