import { getAllArticles } from '@/lib/articles';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kütüphane',
  description: 'Mîzân Kütüphanesi — Ahlâk, Ehlibeyt ve Tarih, Adalet, İnsan ve Nefs, Modern Hayat ve Tefekkür Notları üzerine metinler.',
};

const categories = [
  { label: 'Tümü', value: '' },
  { label: 'Ahlâk', value: 'Ahlâk' },
  { label: 'Ehlibeyt ve Tarih', value: 'Ehlibeyt ve Tarih' },
  { label: 'Adalet', value: 'Adalet' },
  { label: 'İnsan ve Nefs', value: 'İnsan ve Nefs' },
  { label: 'Modern Hayat', value: 'Modern Hayat' },
  { label: 'Tefekkür Notları', value: 'Tefekkür Notları' },
];

export default function KutuphanePage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-4">Metinler ve Düşünceler</p>
          <h1 className="font-display text-[32px] md:text-[46px] font-bold text-chalk leading-tight mb-5">
            Mîzân Kütüphanesi
          </h1>
          <p className="text-chalk/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
            Burada yer alan yazılar, insanlara kesin hükümler vermek için değil;
            insanın kendi hayatıyla daha dürüst bir ilişki kurmasına katkı sunmak için hazırlanır.
          </p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.7), transparent)' }} />
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-border bg-chalk sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={cat.value ? `/kutuphane?kategori=${encodeURIComponent(cat.value)}` : '/kutuphane'}
              className="text-[10px] tracking-wider uppercase text-text-muted border border-border px-3 py-2 whitespace-nowrap hover:border-gold/40 hover:text-emerald transition-all duration-300 shrink-0"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 pb-24">
        {articles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const formattedDate = new Date(article.date).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric',
              });
              return (
                <Link key={article.slug} href={`/kutuphane/${article.slug}`} className="group block">
                  <article className="border border-border hover:border-gold/40 bg-card transition-all duration-500 hover:shadow-sm overflow-hidden h-full flex flex-col">
                    {/* Cover */}
                    {article.coverImage ? (
                      <div className="aspect-[16/9] overflow-hidden bg-surface">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-surface flex items-center justify-center">
                        <div className="w-12 h-px" style={{ background: 'rgba(180,148,72,0.2)' }} />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {article.category && (
                          <span className="text-[9px] tracking-wider uppercase text-gold/70 border border-gold/25 px-2 py-0.5">
                            {article.category}
                          </span>
                        )}
                        <span className="text-[9px] text-text-muted">{article.readTime}</span>
                      </div>

                      <h2 className="font-display text-[17px] font-semibold text-emerald-dark leading-tight mb-2 group-hover:text-emerald transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      <p className="text-text-muted text-[13px] leading-relaxed line-clamp-3 mb-5 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-[10px] text-text-muted">{formattedDate}</span>
                        <span className="text-[10px] tracking-wider uppercase text-gold/60 group-hover:text-gold transition-colors">
                          Devamını Oku &rarr;
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="gold-line mx-auto mb-8" />
            <p className="text-text-muted text-[15px]">Yakında yeni metinler eklenecektir.</p>
          </div>
        )}
      </section>
    </>
  );
}
