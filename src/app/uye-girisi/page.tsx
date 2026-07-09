'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import MizanPortal from '@/components/MizanPortal';

export default function UyeGirisiPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.replace('/');
        router.refresh();
      } else {
        setError(data.error || 'Giriş başarısız oldu.');
      }
    } catch {
      setError('Bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-deep -mt-16">
      <MizanPortal />

      {/* Geo background */}
      <div className="absolute inset-0 bg-geo-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
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
          {error && (
            <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200/80 text-[13px]">
              {error}
            </div>
          )}

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
      </div>
    </div>
  );
}
