'use client';

import { useState, useEffect } from 'react';

interface User {
  email: string;
  name: string;
  createdAt: string;
  realName?: string;
  nickname?: string;
  age?: number;
  gender?: 'erkek' | 'kadın' | 'belirtmek-istemiyor';
  joinDate?: string;
  isReferred?: boolean;
  referredBy?: string;
}

export default function KullanicilarPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    realName: '',
    nickname: '',
    age: '',
    gender: '',
    joinDate: '',
    isReferred: false,
    referredBy: '',
  });
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
        setForm({
          email: '',
          name: '',
          password: '',
          realName: '',
          nickname: '',
          age: '',
          gender: '',
          joinDate: '',
          isReferred: false,
          referredBy: '',
        });
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Meclis İçi İsim / Takma Ad <span className="text-gold">*</span></label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
              placeholder="Üyenin meclis içi ismi"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">E-posta <span className="text-gold">*</span></label>
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
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Gerçek İsim</label>
            <input
              type="text"
              value={form.realName}
              onChange={(e) => setForm({ ...form, realName: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
              placeholder="Ad soyad"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Takma Ad</label>
            <input
              type="text"
              value={form.nickname}
              onChange={(e) => setForm({ ...form, nickname: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
              placeholder="Sahne / mahrem takma ad"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Yaş</label>
            <input
              type="number"
              min={0}
              max={120}
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
              placeholder="Örn: 32"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Cinsiyet</label>
            <select
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: 'none' }}
            >
              <option value="" className="bg-surface text-chalk/80">Seçiniz</option>
              <option value="erkek" className="bg-surface text-chalk/80">Erkek</option>
              <option value="kadın" className="bg-surface text-chalk/80">Kadın</option>
              <option value="belirtmek-istemiyor" className="bg-surface text-chalk/80">Belirtmek İstemiyor</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Katılım Tarihi</label>
            <input
              type="date"
              value={form.joinDate}
              onChange={(e) => setForm({ ...form, joinDate: e.target.value })}
              className="w-full bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3.5 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] tracking-widest uppercase text-chalk/40 mb-2.5">Şifre <span className="text-gold">*</span></label>
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

        <div className="flex items-start gap-4 border border-white/10 bg-white/[0.02] p-5">
          <input
            id="isReferred"
            type="checkbox"
            checked={form.isReferred}
            onChange={(e) => setForm({ ...form, isReferred: e.target.checked })}
            className="mt-1 w-4 h-4 accent-gold cursor-pointer"
          />
          <div className="flex-1">
            <label htmlFor="isReferred" className="block text-[12px] tracking-wider uppercase text-chalk/70 cursor-pointer">
              Referansla Katıldı
            </label>
            <p className="text-chalk/30 text-[12px] mt-1">Üye, meclisin içinden birinin tavsiyesiyle katıldıysa işaretleyin.</p>
            {form.isReferred && (
              <input
                type="text"
                value={form.referredBy}
                onChange={(e) => setForm({ ...form, referredBy: e.target.value })}
                className="mt-3 w-full md:w-1/2 bg-transparent border border-chalk/10 focus:border-gold/40 px-5 py-3 text-chalk/80 text-[14px] placeholder:text-chalk/20 focus:outline-none transition-colors"
                placeholder="Referans eden kişi"
              />
            )}
          </div>
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
            <div key={user.email} className="px-6 py-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-chalk text-[15px] font-medium">{user.name}</p>
                  {user.nickname && (
                    <span className="text-chalk/35 text-[11px] border border-white/10 px-2 py-0.5">“{user.nickname}”</span>
                  )}
                  {user.isReferred && (
                    <span className="text-gold/70 text-[10px] border border-gold/20 px-2 py-0.5">Referanslı</span>
                  )}
                </div>
                <p className="text-chalk/40 text-[12px] mt-1">{user.email}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-chalk/30">
                  {user.realName && <span>Gerçek isim: {user.realName}</span>}
                  {user.age !== undefined && <span>Yaş: {user.age}</span>}
                  {user.gender && <span>Cinsiyet: {user.gender === 'belirtmek-istemiyor' ? 'Belirtmek istemiyor' : user.gender === 'erkek' ? 'Erkek' : 'Kadın'}</span>}
                  {user.joinDate && <span>Katılım: {user.joinDate}</span>}
                  {user.referredBy && <span>Referans: {user.referredBy}</span>}
                </div>
              </div>
              <button
                onClick={() => handleDelete(user.email)}
                className="self-start text-[10px] tracking-wider uppercase text-red-300/70 hover:text-red-300 border border-red-500/20 px-3 py-1.5 hover:bg-red-500/10 transition-colors"
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
