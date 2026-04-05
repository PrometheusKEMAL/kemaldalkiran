import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yazılar',
  description: 'Kemal Dalkıran\'ın tüm yazıları.',
};

export default function YazilarPage() {
  const articles = getAllArticles();

  return (
    <div>
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden -mt-14">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.8)' }}
        >
          <source src="/yazilar-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">
            Arşiv
          </p>
          <h1 className="font-display text-[48px] md:text-[80px] lg:text-[96px] leading-[0.85] text-white font-bold tracking-tight mb-5">
            YAZILAR
          </h1>
          <div className="w-12 h-px bg-white/30 mb-5" />
          <p className="text-white/35 text-[13px] md:text-[14px] font-light tracking-wide max-w-xs">
            Düşünceler, gözlemler ve içsel yolculuklar
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-28">
        <div className="border-t border-white/[0.06]">
          {articles.length > 0 ? (
            <div>
              {articles.map((article) => (
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
          ) : (
            <div className="py-32 text-center">
              <p className="text-white/25 text-sm tracking-wide">
                Henüz yazı yok. Yakında burada yeni yazılar olacak.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
