'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.01,
    filter: 'blur(8px)',
    pointerEvents: 'none',
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const sweepVariants: Variants = {
  initial: { scaleX: 0, opacity: 0 },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2,
    },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        {/* Gold sweep line at top of page */}
        <motion.div
          variants={sweepVariants}
          className="absolute top-0 left-0 right-0 h-px origin-left z-50 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, #C9A646, transparent)',
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
