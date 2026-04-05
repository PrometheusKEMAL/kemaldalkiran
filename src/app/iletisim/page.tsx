'use client';

import { useState } from 'react';
import SocialIcons from '@/components/SocialIcons';

export default function IletisimPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Cinematic Header */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden -mt-14">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.8)' }}
        >
          <source src="/iletisim-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">
            İletişim
          </p>
          <h1 className="font-display text-[48px] md:text-[80px] lg:text-[96px] leading-[0.85] text-white font-bold tracking-tight mb-5">
            BANA ULAŞIN
          </h1>
          <div className="w-12 h-px bg-white/30 mb-5" />
          <p className="text-white/35 text-[13px] md:text-[14px] font-light tracking-wide max-w-xs">
            Bir düşünce paylaşmak ya da sadece merhaba demek için
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-28">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24">
          {/* Left - Info & Socials */}
          <div>
            <p className="text-white/45 text-[16px] leading-[1.9] font-light mb-10">
              Yazılarım hakkında düşüncelerinizi paylaşmak, iş birliği yapmak veya sadece merhaba demek isterseniz — formu doldurabilir ya da sosyal medya hesaplarımdan bana ulaşabilirsiniz.
            </p>

            <div className="mb-10">
              <p className="text-[10px] tracking-cinematic uppercase text-white/25 mb-5">
                Sosyal Medya
              </p>
              <SocialIcons size={18} />
            </div>

            <div>
              <p className="text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                E-Posta
              </p>
              <a
                href="mailto:info@kemaldalkiran.com"
                className="text-white/40 hover:text-white/70 transition-colors text-[15px] font-light"
              >
                info@kemaldalkiran.com
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 border border-white/[0.06] text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/30 mb-6">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white/50 font-display text-xl mb-2">Mesajınız alındı</p>
                <p className="text-white/25 text-sm font-light">En kısa sürede dönüş yapacağım.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                    İsim
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors"
                    placeholder="Adınız"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-cinematic uppercase text-white/25 mb-3">
                    Mesaj
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border border-white/[0.08] px-5 py-3.5 text-white/70 text-[15px] font-light placeholder:text-white/15 focus:border-white/20 focus:outline-none transition-colors resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="text-[10px] tracking-cinematic uppercase text-white/50 border border-white/10 px-8 py-3.5 hover:text-white hover:border-white/30 transition-all duration-700"
                >
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
