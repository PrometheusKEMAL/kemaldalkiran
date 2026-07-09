'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const KERBELA_FALLBACK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Imam_Hussein_Shrine.jpg/1920px-Imam_Hussein_Shrine.jpg';

const pillars = [
  {
    arabic: 'عَدْل',
    title: 'Adalet',
    text: 'Önce kendi nefsine karşı dürüst olmak; sonra insanlara karşı ölçülü olmak. Adalet, yalnızca mahkeme salonlarında değil; her söz verilen anda, her borcun vade gecesinde, her kul hakkının görmezden gelindiği anın tam ortasında yaşanır ya da ölür.',
    href: '/mizan-ilkeleri',
  },
  {
    arabic: 'أَمَانَة',
    title: 'Emanet',
    text: 'Bilgi bir emanettir; kibrin aracı değil. Güven bir emanettir; çıkarın kalkanı değil. İnsan onuru bir emanettir; hiçbir gerekçeyle çiğnenemez. Emanet; teslim alındığı saflıkla, hiçbir şey eksiltilmeden geri verilmek zorundadır.',
    href: '/mizan-ilkeleri',
  },
  {
    arabic: 'اِنْتِظَار',
    title: 'İntizar',
    text: 'Mehdi\'yi beklemek, zamanı tüketmek değildir. Bekleyiş; daha temiz, daha adil, daha merhametli bir insan olmaya aktif olarak hazırlanmaktır. Bekleyiş, ahlâkın en yüksek biçimidir: henüz gelmeyeni, içinde yaşamak.',
    href: '/mizan-ilkeleri',
  },
];

const latestCategories = [
  { label: 'Ahlâk', href: '/kutuphane?kategori=ahlak' },
  { label: 'Ehlibeyt ve Tarih', href: '/kutuphane?kategori=ehlibeyt' },
  { label: 'Adalet', href: '/kutuphane?kategori=adalet' },
  { label: 'İnsan ve Nefs', href: '/kutuphane?kategori=insan-ve-nefs' },
  { label: 'Modern Hayat', href: '/kutuphane?kategori=modern-hayat' },
  { label: 'Tefekkür Notları', href: '/kutuphane?kategori=tefekkur' },
];

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  category?: string;
  coverImage?: string;
}

export default function HomeClient({ articles }: { articles: Article[] }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.62, 0.88]);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — Kerbela sinematik kapak
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-16"
        style={{ background: '#0F2318' }}
      >
        {/* Kerbela hero video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.65) brightness(0.45)' }}
          >
            <source src="/kerbela-hero.webm" type="video/webm" />
            <img src={KERBELA_FALLBACK} alt="Kerbelâ" className="w-full h-full object-cover" />
          </video>
        </div>

        {/* Multi-layer gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background:
              'linear-gradient(to bottom, rgba(15,35,24,0.3) 0%, rgba(15,35,24,0.5) 40%, rgba(15,35,24,0.92) 80%, #0F2318 100%)',
          }}
        />

        {/* Gold geometric pattern */}
        <div className="absolute inset-0 bg-geo-dark opacity-20 pointer-events-none" />

        {/* Subtle gold radial glow */}
        <div
          className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(180,148,72,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Logo + Brand mark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex items-center gap-4 mb-10"
            >
              <Logo size={44} variant="light" className="opacity-80" />
              <div className="w-px h-10 bg-gold/30" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium">
                  Ahdü&apos;l-Mîzân
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-chalk/40">
                  Davetli Hizmet Halkası
                </div>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="font-display font-bold text-chalk leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)', letterSpacing: '-0.02em', fontWeight: 600 }}
            >
              AHDÜ&apos;L-MÎZÂN <br />
              <span className="italic font-light text-chalk/70">Meclisi</span>
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px w-32 mb-8 origin-center"
              style={{ background: 'linear-gradient(90deg, transparent, #B49448, transparent)' }}
            />

            {/* Main slogan */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display font-light italic text-[1.3rem] md:text-[1.55rem] text-chalk/60 leading-[1.75] max-w-xl mb-10 mx-auto"
            >
              Ehlibeyt sevgisini yalnızca geçmişe duyulan bir bağlılık değil;
              insanın diliyle, emeğiyle, adaletiyle ve emanet bilinciyle görünür kılmak.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/meclis-hakkinda"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-chalk border border-gold/50 px-7 py-3.5 hover:bg-gold/10 hover:border-gold transition-all duration-400"
              >
                Meclisi Tanı
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/kutuphane"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-chalk/60 hover:text-chalk transition-colors duration-300"
              >
                Kütüphaneyi Keşfet
              </Link>
            </motion.div>
          </div>

          {/* Bottom caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-gold/30" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-chalk/25">
              Kerbelâ — İmam Hüseyin Türbesi
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-10"
        >
          <div className="text-[9px] tracking-[0.25em] uppercase text-chalk/20 rotate-90 mb-3">Kaydır</div>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          KERBELÂ ANLAM ÇERÇEVESI
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-emerald-deep py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedSection className="text-center mb-14">
            <div className="gold-line mx-auto mb-6" />
            <p className="font-display italic text-[1.15rem] md:text-[1.4rem] text-chalk/70 leading-[1.85] max-w-2xl mx-auto">
              &ldquo;Kerbelâ; bir matem değil, bir ahlâk dersidir. Yas, bilinçsiz kalırsa yalnızca acıdır.
              Bilinçli kalırsa; adalet, merhamet ve direniş olur.&rdquo;
            </p>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid md:grid-cols-3 gap-px border border-gold/15">
              {[
                { label: 'H. 61', desc: 'Kerbelâ vakasının tarihi' },
                { label: '72 Şehid', desc: 'Onur için hayatını veren' },
                { label: 'Hürre\'nin Dönüşü', desc: 'Vicdan, kılıçtan güçlüdür' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 text-center border-r last:border-r-0 border-gold/10"
                >
                  <div className="font-display text-[2rem] font-bold text-gold mb-2">{item.label}</div>
                  <div className="text-[12px] tracking-wider uppercase text-chalk/35">{item.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MECLIS MISYON
      ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

          {/* Left — meta */}
          <AnimatedSection direction="left">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-5">Meclisin Özü</p>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-semibold text-emerald-dark leading-tight mb-6">
              Bir İsimden Önce,<br />
              <span className="italic font-light">Bir Emanet</span>
            </h2>
            <div className="h-px w-16 mb-8" style={{ background: 'linear-gradient(90deg, #B49448, transparent)' }} />
            <Link href="/meclis-hakkinda" className="text-[10px] tracking-wider uppercase text-emerald border-b border-emerald/30 pb-0.5 hover:border-emerald transition-colors">
              Meclis Hakkında →
            </Link>
          </AnimatedSection>

          {/* Right — text */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-5 text-text-secondary text-[16px] md:text-[17px] leading-[1.95]">
              <p>
                Ahdü&apos;l-Mîzân Meclisi; insanları kendisine bağlamak için kurulmuş bir yapı değildir.
                Burada hiçbir kişi kutsallaştırılmaz, hiçbir görev manevi üstünlük sayılmaz ve hiç kimse
                başka bir insan üzerinde mutlak otorite kuramaz.
              </p>
              <p>
                Bu meclisin amacı; daha çok görünmek değil, daha doğru yaşamak; daha yüksek sesle
                konuşmak değil, daha ağır bir emanet taşıyabilmektir.
              </p>
              <p className="font-display italic text-[18px] text-emerald-dark/75 border-l-2 border-gold pl-6">
                &ldquo;Zulme karşı dururken, zulmün yöntemlerini kullanma.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 TEMEL SÜTUN
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Temel Değerler</p>
            <h2 className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-emerald-dark">
              Mîzân&apos;ın Üç Sütunu
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.12} direction="up">
                <Link href={p.href} className="group block h-full">
                  <div className="card-premium p-8 md:p-10 h-full">
                    {/* Arabic letter watermark */}
                    <div
                      className="absolute top-4 right-5 font-display text-[5rem] leading-none text-emerald-dark/[0.04] select-none pointer-events-none"
                    >
                      {p.arabic}
                    </div>
                    <div className="relative z-10">
                      <div className="text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                        0{i + 1}
                      </div>
                      <h3 className="font-display text-[1.4rem] font-semibold text-emerald-dark mb-4 group-hover:text-emerald transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-text-muted text-[14.5px] leading-[1.85] mb-6">{p.text}</p>
                      <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-gold/50 group-hover:text-gold transition-colors">
                        <span>Daha Fazlası</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ALINTI BANDI
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: 'linear-gradient(160deg, #0A1C10 0%, #0F2318 50%, #0A1C10 100%)' }}>
        <div className="absolute inset-0 bg-geo-dark opacity-10 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,148,72,0.06), transparent)' }} />
        <AnimatedSection className="max-w-3xl mx-auto px-6 md:px-10 text-center relative z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          <blockquote className="font-display italic text-chalk/75 leading-[1.7] mb-8"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>
            Bizim için sevgi, insanı kendinden üstün görmeye değil;
            kendini daha fazla sorgulamaya çağırır.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.4))' }} />
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-chalk/20">Ahdü&apos;l-Mîzan Meclisi</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, rgba(180,148,72,0.4), transparent)' }} />
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mt-8" />
        </AnimatedSection>
      </section>

      {/* ══════════════════════════════════════════════════════════
          KÜTÜPHANE BÖLÜMÜ
      ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Mîzân Kütüphanesi</p>
              <h2 className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-emerald-dark">
                Seçilmiş Metinler
              </h2>
            </div>
            <Link
              href="/kutuphane"
              className="text-[10.5px] tracking-wider uppercase text-text-muted hover:text-emerald transition-colors"
            >
              Tüm Yazılar &rarr;
            </Link>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10 mt-6">
            {latestCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="text-[10px] tracking-wide uppercase text-text-muted border border-border px-3 py-1.5 hover:border-gold/50 hover:text-emerald-dark transition-all duration-300"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="gold-line-full mb-12" />
        </AnimatedSection>

        {articles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article, i) => {
              const formattedDate = new Date(article.date).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric',
              });
              return (
                <AnimatedSection key={article.slug} delay={i * 0.1} direction="up">
                  <Link href={`/kutuphane/${article.slug}`} className="group block h-full">
                    <article className="card-premium h-full flex flex-col">
                      {article.coverImage ? (
                        <div className="aspect-[16/9] overflow-hidden bg-surface">
                          <img
                            src={article.coverImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/9] bg-emerald-dark/5 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-geo-dark opacity-20" />
                          <div className="relative z-10 w-10 h-px" style={{ background: 'rgba(180,148,72,0.5)' }} />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          {article.category && (
                            <span className="text-[9px] tracking-[0.2em] uppercase text-gold/70 border border-gold/25 px-2 py-0.5">
                              {article.category}
                            </span>
                          )}
                          <span className="text-[10px] text-text-muted">{article.readTime}</span>
                        </div>
                        <h3 className="font-display text-[1.05rem] font-semibold text-emerald-dark leading-snug mb-2 group-hover:text-emerald transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-text-muted text-[13px] leading-relaxed line-clamp-3 mb-5 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                          <span className="text-[10px] text-text-muted">{formattedDate}</span>
                          <span className="text-[10px] tracking-wider uppercase text-gold/50 group-hover:text-gold transition-colors">
                            Oku &rarr;
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        ) : (
          <AnimatedSection>
            <div className="py-24 text-center border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-geo-dark opacity-10" />
              <div className="relative z-10">
                <div className="gold-line mx-auto mb-6" />
                <p className="font-display italic text-text-muted text-[15px]">
                  Yakında seçilmiş metinler bu alanda yer alacaktır.
                </p>
              </div>
            </div>
          </AnimatedSection>
        )}

        <div className="mt-10 text-center md:hidden">
          <Link href="/kutuphane" className="btn-outline">Tüm Yazılar</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DAVET BANDI
      ══════════════════════════════════════════════════════════ */}
      <AnimatedSection>
        <section className="border-t border-border bg-surface py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-2">Katılım</p>
              <h3 className="font-display text-[1.5rem] md:text-[1.8rem] font-semibold text-emerald-dark">
                Davet Usulü Nedir?
              </h3>
              <p className="text-text-muted text-[14px] leading-relaxed mt-3 max-w-md">
                Meclise katılım açık başvuru ile değil; ilkeler çerçevesinde davet usulüyle gerçekleşir.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/davet-usulu" className="btn-emerald">Davet Usulünü Öğren</Link>
              <Link href="/iletisim" className="btn-outline">İletişime Geç</Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
