'use client';

import { useState, useEffect } from 'react';

interface User {
  email: string;
  name: string;
  createdAt: string;
}

export default function KullanicilarPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({ email: '', name: '', password: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const loadUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error('Kullanıcılar yüklenirken hata:', error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(`Kullanıcı oluşturuldu: ${data.user.email}`);
        setForm({ email: '', name: '', password: '' });
        loadUsers();
      } else {
        setStatus('error');
        setMessage(data.error || 'Bir hata oluştu.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası.');
    }
  };

  const handleDelete = async (email: string) => {
    if (!confirm(`${email} kullanıcısını silmek istediğinize emin misiniz?`)) return;

    try {
      const res = await fetch('/api/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        loadUsers();
      } else {
        const data = await res.json();
        alert(data.error || 'Silme işlemi başarısız oldu.');
      }
    } catch {
      alert('Bağlantı hatası.');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-28">
      <div className="mb-12">
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-4">
          Yönetim Paneli
        </p>
        <h1 className="font-display text-[32px] md:text-[48px] leading-[0.9] text-white font-bold tracking-tight">
          Üye Yönetimi
        </h1>
      </div>

      {status === 'success' && (
        <div className="mb-8 border border-emerald-500/30 bg-emerald-500/[0.05] p-5">
          <p className="text-emerald-200/80 text-sm">{message}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="mb-8 border border-red-500/20 bg-red-500/[0.03] p-5">
          <p className="text-red-400/70 text-sm">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 mb-16 border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <div>
          <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">İsim</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            placeholder="Üye ismi"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">E-posta</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            placeholder="ornek@mail.com"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Şifre</label>
          <input
            type="text"
            required
            minLength={6}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            placeholder="En az 6 karakter"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="text-[11px] tracking-widest uppercase font-medium text-charcoal bg-gold px-6 py-3.5 hover:bg-gold-light disabled:opacity-50 transition-colors duration-300"
        >
          {status === 'loading' ? 'Kaydediliyor…' : 'Üye Oluştur'}
        </button>
      </form>

      <div className="border border-white/10 bg-white/[0.02]">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="font-display text-[18px] text-white">Mevcut Üyeler</h2>
        </div>
        <div className="divide-y divide-white/10">
          {users.length === 0 && (
            <div className="px-6 py-8 text-chalk/40 text-sm text-center">
              Henüz üye oluşturulmamış.
            </div>
          )}
          {users.map((user) => (
            <div key={user.email} className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-chalk text-[14px] font-medium">{user.name}</p>
                <p className="text-chalk/40 text-[12px]">{user.email}</p>
              </div>
              <button
                onClick={() => handleDelete(user.email)}
                className="text-[10px] tracking-wider uppercase text-red-300/70 hover:text-red-300 border border-red-500/20 px-3 py-1.5 hover:bg-red-500/10 transition-colors"
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
