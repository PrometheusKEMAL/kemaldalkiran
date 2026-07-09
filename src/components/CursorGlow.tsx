'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] mix-blend-screen"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.5 : 0,
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, rgba(201,166,70,0.10) 0%, rgba(15,107,79,0.05) 40%, transparent 70%)',
          transition: 'opacity 0.5s ease',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9991]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.6 : 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'rgba(201,166,70,0.75)',
          boxShadow: '0 0 20px rgba(201,166,70,0.5), 0 0 40px rgba(201,166,70,0.2)',
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
