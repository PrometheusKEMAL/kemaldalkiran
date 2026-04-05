import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export async function POST(req: NextRequest) {
  try {
    const { title, date, excerpt, category, coverImage, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Başlık ve içerik zorunludur.' }, { status: 400 });
    }

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
      .trim();

    // Build frontmatter
    const frontmatter = [
      '---',
      `title: "${title}"`,
      `date: "${date || new Date().toISOString().split('T')[0]}"`,
      `excerpt: "${excerpt || ''}"`,
      `category: "${category || 'Genel'}"`,
      coverImage ? `coverImage: "${coverImage}"` : null,
      '---',
    ]
      .filter(Boolean)
      .join('\n');

    const fileContent = `${frontmatter}\n\n${content}\n`;

    // Ensure content directory exists
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    const filePath = path.join(contentDir, `${slug}.md`);

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
    const { slug } = await req.json();
    const filePath = path.join(contentDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Yazı bulunamadı.' }, { status: 404 });
    }

    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Yazı silinemedi.' }, { status: 500 });
  }
}
