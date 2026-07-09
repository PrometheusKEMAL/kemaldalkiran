import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const contentDir = path.join(process.cwd(), 'content');

// Reject payloads that are unreasonably large (basic DoS guard).
const MAX_TITLE = 200;
const MAX_EXCERPT = 500;
const MAX_CATEGORY = 60;
const MAX_COVER = 500;
const MAX_CONTENT = 100_000;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Escape a value so it is safe inside a double-quoted YAML string and
// cannot break out to inject additional frontmatter keys.
function yamlString(value: string): string {
  const cleaned = String(value)
    .replace(/[\r\n]+/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
  return `"${cleaned}"`;
}

// Resolve a slug to a path that is guaranteed to live inside contentDir.
function resolveSlugPath(slug: unknown): string | null {
  if (typeof slug !== 'string' || !SLUG_RE.test(slug) || slug.length > 200) {
    return null;
  }
  const filePath = path.join(contentDir, `${slug}.md`);
  const normalized = path.normalize(filePath);
  if (normalized !== filePath || !normalized.startsWith(contentDir + path.sep)) {
    return null;
  }
  return normalized;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, date, excerpt, category, coverImage, content } = body ?? {};

    if (typeof title !== 'string' || typeof content !== 'string' || !title.trim() || !content.trim()) {
      return NextResponse.json({ error: 'Başlık ve içerik zorunludur.' }, { status: 400 });
    }

    if (
      title.length > MAX_TITLE ||
      content.length > MAX_CONTENT ||
      (typeof excerpt === 'string' && excerpt.length > MAX_EXCERPT) ||
      (typeof category === 'string' && category.length > MAX_CATEGORY) ||
      (typeof coverImage === 'string' && coverImage.length > MAX_COVER)
    ) {
      return NextResponse.json({ error: 'Girdi boyutu sınırı aşıldı.' }, { status: 413 });
    }

    // Only allow http(s) or root-relative cover image URLs (no javascript: etc.)
    if (typeof coverImage === 'string' && coverImage.trim()) {
      const cover = coverImage.trim();
      if (!/^(https?:\/\/|\/)[^\s"']+$/i.test(cover)) {
        return NextResponse.json({ error: 'Geçersiz kapak görseli adresi.' }, { status: 400 });
      }
    }

    // Validate date format if provided
    const safeDate =
      typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
        ? date
        : new Date().toISOString().split('T')[0];

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/ü/g, 'u')
      .replace(/ö/g, 'o')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ı/g, 'i')
      .replace(/İ/g, 'i')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .trim();

    const filePath = resolveSlugPath(slug);
    if (!filePath) {
      return NextResponse.json({ error: 'Başlıktan geçerli bir adres üretilemedi.' }, { status: 400 });
    }

    // Build frontmatter with escaped values (prevents YAML injection).
    const frontmatter = [
      '---',
      `title: ${yamlString(title)}`,
      `date: ${yamlString(safeDate)}`,
      `excerpt: ${yamlString(typeof excerpt === 'string' ? excerpt : '')}`,
      `category: ${yamlString(typeof category === 'string' && category ? category : 'Genel')}`,
      typeof coverImage === 'string' && coverImage.trim() ? `coverImage: ${yamlString(coverImage.trim())}` : null,
      '---',
    ]
      .filter(Boolean)
      .join('\n');

    const fileContent = `${frontmatter}\n\n${content}\n`;

    // Ensure content directory exists
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Bu başlıkla bir yazı zaten mevcut.' }, { status: 409 });
    }

    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    return NextResponse.json({ error: 'Yazı kaydedilemedi.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(contentDir)) {
      return NextResponse.json({ articles: [] });
    }

    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
    const articles = files.map((f) => ({
      slug: f.replace(/\.md$/, ''),
      filename: f,
    }));

    return NextResponse.json({ articles });
  } catch (error) {
    return NextResponse.json({ articles: [] });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const filePath = resolveSlugPath(body?.slug);

    if (!filePath) {
      return NextResponse.json({ error: 'Geçersiz adres.' }, { status: 400 });
    }

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Yazı bulunamadı.' }, { status: 404 });
    }

    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Yazı silinemedi.' }, { status: 500 });
  }
}
