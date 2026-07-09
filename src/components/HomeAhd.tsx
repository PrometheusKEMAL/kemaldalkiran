'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import HeroSymbol from '@/components/HeroSymbol';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import TextReveal from '@/components/TextReveal';
import StaggerContainer from '@/components/StaggerContainer';

const pillars = [
  {
    no: '01',
    title: 'Tevhid Bilinci',
    text: 'Her şeyin bir olan Hakk\'a bağlı olduğunu bilmek; kalbi tek bir merkeze, tek bir ölçüye teslim etmek. Tevhid, insanı kula değil; kulluğa çağırır.',
  },
  {
    no: '02',
    title: 'Ehlibeyt Sevgisi',
    text: 'Ehlibeyt sevgisi bir slogan değil, bir ahlak çizgisidir. Onları sevmek; onların yürüdüğü adalet, sabır ve edep yolunda yürümeye çalışmaktır.',
  },
  {
    no: '03',
    title: 'Ahlakî Olgunluk',
    text: 'Bilgi çoğaltmak kolaydır; nefsi küçültmek zordur. Olgunluk, öğrendikçe susmayı, güçlendikçe yumuşamayı, yükseldikçe eğilmeyi bilmektir.',
  },
  {
    no: '04',
    title: 'Hizmet ve Hazırlık',
    text: 'Zamanın sahibini beklemek, boş oturmak değildir. Beklemek; o gün geldiğinde utanmayacağımız bir ahlakı, bugünden inşa etmeye çalışmaktır.',
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomeAhd() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden -mt-16 pt-16">
        {/* Plain black background */}
        <div className="absolute inset-0 bg-black" />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 45%, transparent 0%, rgba(0,0,0,0.55) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center py-24">
          {/* Symbol */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <HeroSymbol size={200} />
          </motion.div>

          {/* Brand */}
          <motion.div
            custom={0.3}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <TextReveal
              as="h1"
              splitBy="chars"
              stagger={0.04}
              delay={0.3}
              duration={0.7}
              className="font-seal text-gold font-semibold leading-none"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', letterSpacing: '0.06em' }}
            >
              AHD-İ MİZAN
            </TextReveal>
          </motion.div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-40 mb-8 origin-center"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A646, transparent)' }}
          />

          {/* Subtitle */}
          <motion.p
            custom={0.9}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="font-display italic text-chalk/80 leading-relaxed max-w-2xl mb-8"
            style={{ fontSize: 'clamp(1.2rem, 2.6vw, 1.7rem)' }}
          >
            Ehlibeyt sevgisiyle ahlakı kuşanmak, insanı incitmeden hakikate yürümek.
          </motion.p>

          {/* Description */}
          <motion.p
            custom={1.05}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-text-secondary text-[15.5px] md:text-[16.5px] leading-[1.9] max-w-2xl mb-11"
          >
            Ahd-i Mizan; kul bilinci, insan sevgisi, edep, hizmet ve mahrem eğitim ilkeleriyle
            şekillenen seçkin bir manevî kardeşlik yapısıdır. Bu yol, görünmek isteyenlerin değil;
            olgunlaşmak isteyenlerin yoludur.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <MagneticButton strength={0.25}>
              <Link href="/meclis-hakkinda" className="btn-emerald">Yolu Tanı</Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Link href="/davet-usulu" className="btn-outline">Üyelik Esasları</Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent origin-top"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          DÖRT SÜTUN
      ═══════════════════════════════════════════ */}
      <section className="relative bg-surface-2 py-24 md:py-32 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="text-center mb-16" blur>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-4">Dört Temel Sütun</p>
            <h2 className="font-display text-chalk font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Üzerine Durduğumuz Zemin
            </h2>
            <div className="gold-line-center mt-6" />
          </AnimatedSection>

          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.12}
          >
            {pillars.map((p) => (
              <TiltCard key={p.no} className="h-full">
                <div className="card-premium h-full p-8 flex flex-col">
                  <div className="font-seal text-gold/50 text-sm tracking-widest mb-5">{p.no}</div>
                  <h3 className="font-display text-[1.5rem] font-semibold text-chalk mb-4">{p.title}</h3>
                  <p className="text-text-secondary text-[14.5px] leading-[1.85]">{p.text}</p>
                </div>
              </TiltCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KISA MANİFESTO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-40" style={{ background: 'linear-gradient(160deg, #070907 0%, #0A0D0A 50%, #070907 100%)' }}>
        <div className="absolute inset-0 bg-geo-dark opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(15,107,79,0.10), transparent)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          </AnimatedSection>
          <AnimatedSection delay={0.1} blur scale>
            <h2 className="font-display italic text-chalk font-medium mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
              &ldquo;Ahlak yoksa sır da yoktur.&rdquo;
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.25} blur>
            <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.95] max-w-2xl mx-auto">
              Bizim için gizlilik üstünlük değil emanettir. Öğreti, insanı büyütmek için değil;
              nefsini küçültmek içindir.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mt-8" />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇKİN ÜYELİK VURGUSU
      ═══════════════════════════════════════════ */}
      <section className="bg-surface-2 py-24 md:py-32 border-t border-gold/8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left" blur scale>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-5">Seçkin Üyelik</p>
            <h2 className="font-display text-chalk font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Herkese Açık<br /><span className="italic font-light text-chalk/70">Bir Topluluk Değildir</span>
            </h2>
            <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #C9A646, transparent)' }} />
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} blur>
            <div className="space-y-6 text-text-secondary text-[16px] md:text-[17px] leading-[1.95]">
              <p>
                Ahd-i Mizan; herkese açık bir topluluk değildir. Üyelik; ahlak, sadakat, sır bilinci,
                edep ve insan sevgisiyle ölçülür. Burada dereceler bir makam değil, bir sorumluluk
                ağırlığıdır.
              </p>
              <p className="font-display italic text-[19px] text-gold-light/85 border-l-2 border-gold pl-6">
                &ldquo;Bu yol, görünmek isteyenlerin değil; olgunlaşmak isteyenlerin yoludur.&rdquo;
              </p>
              <MagneticButton strength={0.2}>
                <Link href="/davet-usulu" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors">
                  Üyelik Esaslarını Oku
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KAPANIŞ ÇAĞRISI
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, #101810 0%, #070907 70%)' }}>
        <div className="absolute inset-0 bg-geo-star opacity-[0.05] pointer-events-none" style={{ backgroundSize: '140px 140px' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection blur scale>
            <p className="font-display italic text-chalk/80 leading-relaxed mb-10" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)' }}>
              Kapı herkese açılmaz. Ama arayan için daima bir eşik vardır.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <MagneticButton strength={0.25}>
              <Link href="/iletisim" className="btn-emerald">Davet Kapısına Yönel</Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
