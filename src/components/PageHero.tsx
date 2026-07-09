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

      <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-6">{label}</p>
        <h1 className="font-display text-chalk font-semibold leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}>
          {title}
          {titleItalic && (
            <>
              {' '}
              <span className="italic font-light text-chalk/70">{titleItalic}</span>
            </>
          )}
        </h1>
        <div className="gold-line-center mb-8" />
        {subtitle && (
          <p className="font-display italic text-text-secondary leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)' }}>
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </section>
  );
}
