import { redirect } from 'next/navigation';
import { getAllSlugs } from '@/lib/articles';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function OldArticlePage({ params }: PageProps) {
  redirect(`/kutuphane/${params.slug}`);
}
