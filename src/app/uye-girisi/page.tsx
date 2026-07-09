'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function UyeGirisiPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="min-h-screen bg-emerald-deep flex flex-col items-center justify-center px-6 py-24 -mt-16">
      {/* Geo background */}
      <div className="absolute inset-0 bg-geo-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <Logo size={56} variant="light" className="mb-6 opacity-85" />
          <div className="w-px h-6 mb-6" style={{ background: 'linear-gradient(to bottom, transparent, rgba(180,148,72,0.6))' }} />
          <h1 className="font-display text-[22px] font-semibold text-chalk text-center mb-3">
            Emanet Alanı
          </h1>
          <p className="text-chalk/40 text-[13px] leading-relaxed text-center max-w-xs">
            Bu alan, meclisin davet edilmiş üyeleri için hazırlanmıştır.
            Erişim yalnızca kişisel yetkilendirme ile sağlanır.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.35), transparent)' }} />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">
              E-posta
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="e-posta adresiniz"
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">
              Şifre
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-[11px] tracking-widest uppercase font-medium text-chalk bg-emerald border border-transparent hover:bg-emerald-mid disabled:opacity-50 px-6 py-3.5 transition-colors duration-300 mt-2"
          >
            {loading ? 'Doğrulanıyor…' : 'Giriş Yap'}
          </button>
        </form>

        {/* Footer note */}
        <div className="mt-10" style={{ height: '1px', background: 'rgba(247,245,240,0.06)' }} />
        <p className="mt-8 text-chalk/25 text-[11.5px] leading-relaxed text-center">
          Bu alan kişisel verilerin, iç toplantı notlarının ve üyelik sorumluluklarının
          güvenli biçimde korunması amacıyla sınırlı erişime sahiptir.
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[10px] tracking-wider uppercase text-chalk/25 hover:text-chalk/50 transition-colors"
          >
            &larr; Ana Sayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
