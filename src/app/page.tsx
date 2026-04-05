import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Logo from '@/components/Logo';

export default function HomePage() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden -mt-14">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
          >
            <source src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Letterbox Bars */}
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 md:px-10">
          <Logo size={56} className="text-white/70 mb-8" />

          <h1 className="font-display leading-[0.9] text-white mb-5">
            <span className="block text-[52px] md:text-[90px] lg:text-[120px] font-bold tracking-tight">
              KEMAL
            </span>
            <span className="block text-[48px] md:text-[84px] lg:text-[112px] italic font-light tracking-wide text-white/80">
              Dalkıran
            </span>
          </h1>

          <div className="w-16 h-px bg-white/30 mb-6" />

          <p className="text-white/50 text-[13px] md:text-[15px] font-light max-w-sm leading-relaxed tracking-wide mb-10">
            Düşünceler, deneyimler ve gözlemler.<br />
            Her yazı bir film karesi gibi — bir anı yakalar.
          </p>

          <Link
            href="/yazilar"
            className="inline-block text-[10px] tracking-cinematic uppercase text-white/60 border border-white/20 px-8 py-3 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-700"
          >
            Yazıları Keşfet
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      {latestArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-28">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] tracking-cinematic uppercase text-white/25">
              Son Yazılar
            </h2>
            <Link
              href="/yazilar"
              className="text-[10px] tracking-cinematic uppercase text-white/20 hover:text-white/50 transition-colors duration-500"
            >
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="border-t border-white/[0.06]">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                coverImage={article.coverImage}
              />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {latestArticles.length === 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-32 text-center">
          <p className="text-white/25 text-sm tracking-wide">
            Henüz yazı yok. Yakında burada yeni yazılar olacak.
          </p>
        </section>
      )}
    </>
  );
}
