'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

interface PageHeroProps {
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
}

export default function PageHero({ label, title, titleItalic, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 0%, #101810 0%, #0A0D0A 60%, #070907 100%)' }} />
      <div className="absolute inset-0 bg-geo-star opacity-[0.05] pointer-events-none" style={{ backgroundSize: '130px 130px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <AnimatedSection blur>
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-6">{label}</p>
        </AnimatedSection>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-chalk font-semibold leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
        >
          {title}
          {titleItalic && (
            <>
              {' '}
              <span className="italic font-light text-chalk/70">{titleItalic}</span>
            </>
          )}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gold-line-center mb-8 origin-center"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-text-secondary leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
