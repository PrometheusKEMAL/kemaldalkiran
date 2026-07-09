'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fields: { name: string; label: string; type: 'text' | 'email' | 'number' | 'textarea'; placeholder?: string }[] = [
  { name: 'ad', label: 'Ad Soyad', type: 'text' },
  { name: 'yas', label: 'Yaş', type: 'number' },
  { name: 'sehir', label: 'Şehir', type: 'text' },
  { name: 'email', label: 'E-posta', type: 'email' },
  { name: 'tanim', label: 'Kendinizi nasıl tanımlarsınız?', type: 'textarea' },
  { name: 'ehlibeyt', label: 'Ehlibeyt sevgisi sizin için ne ifade ediyor?', type: 'textarea' },
  { name: 'ahlak', label: 'Ahlaklı yaşam sizin için ne demektir?', type: 'textarea' },
  { name: 'neden', label: 'Bu yapıya neden yaklaşmak istiyorsunuz?', type: 'textarea' },
  { name: 'sir', label: 'Sır ve mahremiyet konusunda kendinizi nasıl değerlendirirsiniz?', type: 'textarea' },
  { name: 'gecmis', label: 'Daha önce herhangi bir manevî topluluk içinde bulundunuz mu?', type: 'textarea' },
  { name: 'not', label: 'Eklemek istediğiniz not', type: 'textarea' },
];

export default function DavetForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium p-10 md:p-14 text-center"
          >
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-7">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-display text-[2rem] font-semibold text-chalk mb-4">Niyetiniz Alındı</h2>
            <p className="text-text-secondary text-[16px] leading-[1.9] mb-6">
              Beyanınız sükûtla değerlendirilecektir. Kabul; yalnızca ahlakî uygunluk, güvenilirlik,
              niyet ve davet süreciyle mümkündür. Sabır, bu yolun ilk edebidir.
            </p>
            <div className="gold-line-center" />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-7"
          >
            {fields.map((f) => (
              <div key={f.name} className="flex flex-col gap-2">
                <label htmlFor={f.name} className="font-sans text-[10.5px] tracking-[0.15em] uppercase text-text-secondary">
                  {f.label}
                </label>
                {f.type === 'textarea' ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    rows={3}
                    className="bg-bg-deep border border-gold/15 focus:border-gold/50 text-chalk text-[15px] leading-relaxed px-4 py-3 outline-none transition-colors duration-300 resize-none font-prose"
                  />
                ) : (
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    className="bg-bg-deep border border-gold/15 focus:border-gold/50 text-chalk text-[15px] px-4 py-3 outline-none transition-colors duration-300 font-prose"
                  />
                )}
              </div>
            ))}

            {/* Warning */}
            <div className="border-l-2 border-gold/50 pl-5 py-1" style={{ background: 'linear-gradient(90deg, rgba(201,166,70,0.05), transparent)' }}>
              <p className="text-text-muted text-[13.5px] leading-relaxed italic">
                Bu form üyelik garantisi vermez. Ahd-i Mizan&apos;a kabul; yalnızca ahlakî uygunluk,
                güvenilirlik, niyet ve davet süreciyle mümkündür.
              </p>
            </div>

            <button type="submit" className="btn-emerald w-full justify-center">
              Niyet Beyanını Gönder
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
