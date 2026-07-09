import Link from 'next/link';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  category?: string;
  coverImage?: string;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
  coverImage,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/kutuphane/${slug}`} className="group block">
      <article className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 py-8 border-b border-border hover:border-gold/30 transition-colors duration-400">
        {/* Image */}
        {coverImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-surface">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
        )}
        {!coverImage && (
          <div className="relative aspect-[16/9] bg-surface flex items-center justify-center">
            <div className="w-10 h-px" style={{ background: 'rgba(180,148,72,0.25)' }} />
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            {category && (
              <span className="text-[9px] tracking-wider uppercase text-gold/70 border border-gold/25 px-2 py-0.5">
                {category}
              </span>
            )}
            <span className="text-[11px] text-text-muted">{formattedDate}</span>
          </div>

          <h2 className="font-display text-[20px] md:text-[24px] leading-tight text-emerald-dark mb-2 group-hover:text-emerald transition-colors duration-400">
            {title}
          </h2>

          <p className="text-text-muted leading-relaxed text-[13.5px] line-clamp-2 mb-4">
            {excerpt}
          </p>

          <span className="text-[10px] tracking-wider uppercase text-gold/60 group-hover:text-gold transition-colors duration-400">
            {readTime && <>{readTime} &middot; </>}Devamını Oku &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
