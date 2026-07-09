'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useEffect, useState, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  splitBy?: 'lines' | 'words' | 'chars';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function TextReveal({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.6,
  stagger = 0.04,
  once = true,
  splitBy = 'words',
  as: Component = 'div',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const text = typeof children === 'string' ? children : '';
  if (!text) {
    return <Component className={className}>{children}</Component>;
  }

  let items: string[] = [];
  if (splitBy === 'chars') {
    items = text.split('');
  } else if (splitBy === 'words') {
    items = text.split(/(\s+)/).filter(Boolean);
  } else {
    items = text.split('\n').filter(Boolean);
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : stagger,
        delayChildren: reducedMotion ? 0 : delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 24,
      filter: reducedMotion ? 'blur(0px)' : 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: reducedMotion ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component ref={ref} className={className} style={style}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="inline"
      >
        {items.map((item, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: 'pre' }}
          >
            {item}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
