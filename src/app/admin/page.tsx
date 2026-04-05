'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    category: 'Düşünceler',
    coverImage: '',
    content: '',
  });
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('saving');

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(`Yazı başarıyla kaydedildi! → /yazilar/${data.slug}`);
        setForm({
          title: '',
          date: new Date().toISOString().split('T')[0],
          excerpt: '',
          category: 'Düşünceler',
          coverImage: '',
          content: '',
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Bir hata oluştu.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası.');
    }
  };

  const update = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
    setStatus('idle');
  };

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-28">
      <div className="mb-12">
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-4">
          Yönetim Paneli
        </p>
        <h1 className="font-display text-[32px] md:text-[48px] leading-[0.9] text-white font-bold tracking-tight">
          Yeni Yazı Ekle
        </h1>
      </div>

      {/* Status Message */}
      {status === 'success' && (
        <div className="mb-8 border border-white/10 bg-white/[0.02] p-5">
          <p className="text-white/60 text-sm">{message}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="mb-8 border border-red-500/20 bg-red-500/[0.03] p-5">
          <p className="text-red-400/70 text-sm">{message}</p>
        </div>
      )}

      {/* Toggle Preview */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setPreview(false)}
          className={`text-[10px] tracking-cinematic uppercase px-4 py-2 border transition-all duration-500 ${
            !preview
              ? 'text-white border-white/20'
              : 'text-white/25 border-white/[0.06] hover:text-white/40'
          }`}
        >
          Düzenle
        </button>
        <button
          onClick={() => setPreview(true)}
          className={`text-[10px] tracking-cinematic uppercase px-4 py-2 border transition-all duration-500 ${
            preview
              ? 'text-white border-white/20'
              : 'text-white/25 border-white/[0.06] hover:text-white/40'
          }`}
        >
          Önizleme
        </button>
      </div>

      {preview ? (
        /* Preview Mode */
        <div className="border border-white/[0.06] p-8 md:p-12">
          {form.coverImage && (
            <div className="relative aspect-cinema overflow-hidden mb-10">
              <img
                src={form.coverImage}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
              />
              <div className="absolute top-0 left-0 right-0 h-[8%] bg-black" />
              <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black" />
            </div>
          )}
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-3">
            {form.category} · {form.date}
          </p>
          <h2 className="font-display text-[28px] md:text-[40px] text-white font-bold leading-tight mb-6">
            {form.title || 'Başlık'}
          </h2>
          <p className="text-white/40 text-[15px] font-light leading-[1.8] mb-8">
            {form.excerpt}
          </p>
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="text-white/50 text-[16px] leading-[1.9] font-light whitespace-pre-wrap">
            {form.content || 'İçerik burada görünecek...'}
          </div>
        </div>
      ) : (
        /* Edit Mode */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
              Başlık *
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/80 text-[18px] font-display placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors"
              placeholder="Yazınızın başlığı"
            />
          </div>

          {/* Date & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                Tarih
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light focus:border-white/20 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                Kategori
              </label>
              <select
                value={form.category}
                onChange={(e) => update('category', e.target.value)}
                className="w-full bg-black border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light focus:border-white/20 focus:outline-none transition-colors"
              >
                <option value="Düşünceler">Düşünceler</option>
                <option value="Felsefe">Felsefe</option>
                <option value="Edebiyat">Edebiyat</option>
                <option value="Müzik">Müzik</option>
                <option value="Sanat">Sanat</option>
                <option value="Yaşam">Yaşam</option>
                <option value="Teknoloji">Teknoloji</option>
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
              Özet
            </label>
            <input
              type="text"
              value={form.excerpt}
              onChange={(e) => update('excerpt', e.target.value)}
              className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors"
              placeholder="Yazının kısa özeti"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
              Kapak Görseli (URL)
            </label>
            <input
              type="url"
              value={form.coverImage}
              onChange={(e) => update('coverImage', e.target.value)}
              className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
              İçerik (Markdown) *
            </label>
            <textarea
              required
              rows={18}
              value={form.content}
              onChange={(e) => update('content', e.target.value)}
              className="w-full bg-transparent border border-white/[0.08] px-5 py-4 text-white/70 text-[15px] font-mono leading-relaxed placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors resize-none"
              placeholder={"Yazınızı buraya Markdown formatında yazın...\n\n## Alt Başlık\n\nParagraf metni burada.\n\n> Alıntı metni\n\n- Liste öğesi 1\n- Liste öğesi 2"}
            />
            <p className="text-[10px] text-white/15 mt-2 tracking-wide">
              Markdown desteklenir: ## başlık, **kalın**, *italik*, &gt; alıntı, - liste
            </p>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={status === 'saving'}
              className="text-[10px] tracking-cinematic uppercase text-white/60 border border-white/15 px-10 py-3.5 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-700 disabled:opacity-30"
            >
              {status === 'saving' ? 'Kaydediliyor...' : 'Yayınla'}
            </button>
            <span className="text-[10px] text-white/15 tracking-wide">
              Yazı content klasörüne kaydedilir
            </span>
          </div>
        </form>
      )}
    </section>
  );
}
