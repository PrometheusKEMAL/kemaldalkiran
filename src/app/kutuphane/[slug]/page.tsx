import { getAllSlugs, getArticleBySlug } from '@/lib/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Metin Bulunamadı' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function KutuphaneMakaleePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return notFound();

  const formattedDate = new Date(article.date).toLocaleDateString('tr-TR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      {/* Cover image hero */}
      {article.coverImage && (
        <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden -mt-16 bg-emerald-dark">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12 max-w-3xl mx-auto">
            {article.category && (
              <span className="text-[9px] tracking-widest uppercase text-gold/70 border border-gold/30 px-2 py-1 mb-4 inline-block">
                {article.category}
              </span>
            )}
            <h1 className="font-display text-[26px] md:text-[40px] font-bold text-chalk leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      )}

      <article className="max-w-[720px] mx-auto px-6 pt-14 pb-28">
        {/* Back */}
        <Link
          href="/kutuphane"
          className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase text-text-muted hover:text-emerald transition-colors mb-12"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Kütüphane
        </Link>

        {/* Header (when no cover image) */}
        {!article.coverImage && (
          <header className="mb-12">
            {article.category && (
              <span className="text-[9px] tracking-widest uppercase text-gold/70 border border-gold/30 px-2 py-1 mb-5 inline-block">
                {article.category}
              </span>
            )}
            <h1 className="font-display text-[28px] md:text-[40px] font-bold text-emerald-dark leading-tight mb-4">
              {article.title}
            </h1>
          </header>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[11px] text-text-muted">{formattedDate}</span>
          {article.readTime && (
            <>
              <span className="text-text-muted">·</span>
              <span className="text-[11px] text-text-muted">{article.readTime}</span>
            </>
          )}
        </div>

        {/* Gold divider */}
        <div className="mb-12" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(180,148,72,0.5), transparent)' }} />

        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.htmlContent || '' }}
        />

        {/* Footer */}
        <div className="mt-20 mb-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.35), transparent)' }} />
        <Link
          href="/kutuphane"
          className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase text-text-muted hover:text-emerald transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Kütüphaneye Dön
        </Link>
      </article>
    </>
  );
}
