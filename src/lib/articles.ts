import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  readTime?: string;
  coverImage?: string;
  content?: string;
  htmlContent?: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.md'));

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} dk okuma`;

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || content.slice(0, 160).replace(/[#*_\n]/g, '').trim() + '...',
      category: data.category || 'Genel',
      readTime,
      coverImage: data.coverImage,
      content,
    };
  });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} dk okuma`;

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    excerpt: data.excerpt || content.slice(0, 160).replace(/[#*_\n]/g, '').trim() + '...',
    category: data.category || 'Genel',
    readTime,
    coverImage: data.coverImage,
    content,
    htmlContent,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  coverImage?: string;
}

const categoryImages: Record<string, string> = {
  'Düşünceler': 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
  'Teknoloji': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'Yaşam': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'Genel': 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800&q=80',
};

export function getAllCategories(): Category[] {
  const articles = getAllArticles();
  const categoryMap = new Map<string, number>();

  articles.forEach((article) => {
    const cat = article.category || 'Genel';
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i'),
    count,
    coverImage: categoryImages[name] || categoryImages['Genel'],
  }));
}

export function getArticlesByCategory(categoryName: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category?.toLowerCase() === categoryName.toLowerCase()
  );
}
