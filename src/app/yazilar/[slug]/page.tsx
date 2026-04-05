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
  if (!article) return { title: 'Yazı Bulunamadı' };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const formattedDate = new Date(article!.date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Cinematic Cover */}
      {article.coverImage && (
        <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden -mt-14">
          <img
            src={article.coverImage}
            alt={article.title}
            className="img-cinematic w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          {/* Letterbox */}
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />
        </div>
      )}

      <article className="max-w-[680px] mx-auto px-6 pt-16 pb-28">
        {/* Back */}
        <Link
          href="/yazilar"
          className="inline-block text-[10px] tracking-cinematic uppercase text-white/20 hover:text-white/50 transition-colors duration-500 mb-14"
        >
          &larr; Yazılar
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            {article.category && (
              <span className="text-[10px] tracking-cinematic uppercase text-white/40">
                {article.category}
              </span>
            )}
            <span className="text-[10px] tracking-cinematic uppercase text-white/20">
              {formattedDate}
            </span>
            {article.readTime && (
              <>
                <span className="text-white/15 text-[10px]">&middot;</span>
                <span className="text-[10px] tracking-cinematic uppercase text-white/20">
                  {article.readTime}
                </span>
              </>
            )}
          </div>

          <h1 className="font-display text-[32px] md:text-[44px] leading-[1.1] text-white font-medium">
            {article.title}
          </h1>
        </header>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.htmlContent || '' }}
        />

        {/* Footer */}
        <div className="h-px bg-white/[0.06] mt-20 mb-10" />
        <Link
          href="/yazilar"
          className="text-[10px] tracking-cinematic uppercase text-white/20 hover:text-white/50 transition-colors duration-500"
        >
          &larr; Tüm Yazılar
        </Link>
      </article>
    </>
  );
}
