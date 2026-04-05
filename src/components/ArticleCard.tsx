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
    <Link href={`/yazilar/${slug}`} className="group block">
      <article className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10 py-10 border-b border-white/[0.06]">
        {/* Image */}
        {coverImage && (
          <div className="relative aspect-cinema overflow-hidden bg-surface">
            <img
              src={coverImage}
              alt={title}
              className="img-cinematic w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            {category && (
              <span className="text-[10px] tracking-cinematic uppercase text-white/40">
                {category}
              </span>
            )}
            <span className="text-[10px] tracking-cinematic uppercase text-white/20">
              {formattedDate}
            </span>
          </div>

          <h2 className="font-display text-[22px] md:text-[28px] leading-[1.2] text-white mb-3 group-hover:text-white/70 transition-colors duration-500">
            {title}
          </h2>

          <p className="text-white/40 leading-relaxed text-[14px] font-light line-clamp-2 mb-4">
            {excerpt}
          </p>

          <span className="text-[10px] tracking-cinematic uppercase text-white/20 group-hover:text-white/50 transition-colors duration-500">
            {readTime && <>{readTime} &middot; </>}Devamını oku &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
