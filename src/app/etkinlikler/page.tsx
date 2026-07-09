import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Ahdü\'l-Mîzân Meclisi etkinlikleri: İlim Meclisi, Dayanışma Günü, Mîzân Oturumu, Tefekkür Gecesi ve Matem ve Ahlâk Programı.',
};

const etkinlikler = [
  {
    title: 'İlim Meclisi',
    desc: 'Ehlibeyt tarihi, ahlâk, insan psikolojisi, modern hayat ve manevi sorumluluk üzerine okuma ve sohbet.',
    detail: 'Bu buluşmalarda amaç hazır cevaplar üretmek değildir. Amaç; doğru sorular sormak, bilgiyi derinleştirmek ve insanın kendi hayatına dair daha bilinçli bir bakış geliştirmesidir. İlim, burada üstünlük aracı değil; insanın cehaletini fark etme cesaretidir.',
    periyot: 'Aylık',
    tur: 'Yüz yüze / Çevrimiçi',
    renk: 'border-l-emerald',
  },
  {
    title: 'Mîzân Oturumu',
    desc: 'Üyelerin kendi hayatlarındaki sorumlulukları, ilişkileri ve eksikleri üzerine düşündükleri kapalı muhasebe alanı.',
    detail: 'Bu oturumlarda kişiler hakkında konuşulmaz; davranışlar, ilkeler ve insanın kendisiyle kurduğu ilişki konuşulur. Amaç; birbirini yargılamak değil, insanın kendi içindeki adaletsizlikleri fark etmesine yardımcı olmaktır.',
    periyot: 'Aylık',
    tur: 'Yüz yüze',
    renk: 'border-l-navy',
  },
  {
    title: 'Dayanışma Günü',
    desc: 'Yardım faaliyetlerinin gösterişten uzak, insan onurunu koruyan bir anlayışla yürütüldüğü çalışma.',
    detail: 'Meclis için yardım; fotoğraf paylaşmak, görünürlük sağlamak veya güç göstermek değildir. Yardım, insanın bir başka insanın yükünü hafifletme sorumluluğudur. Tüm faaliyetlerde mahremiyet, şeffaflık ve insan onurunun korunması esastır.',
    periyot: 'İki Ayda Bir',
    tur: 'Yüz yüze',
    renk: 'border-l-gold',
  },
  {
    title: 'Tefekkür Gecesi',
    desc: 'Kısa metin okumaları, dua, sessizlik, iç muhasebe ve anlamlı sohbetler etrafında şekillenen sakin buluşma.',
    detail: 'Bu buluşmaların amacı insanları coşturmak veya duygusal yoğunluk üzerinden yönlendirmek değildir. Amaç; insanın kendi iç sesini yeniden duyabileceği, hayatın gürültüsünden kısa süreliğine uzaklaşabileceği bir alan oluşturmaktır.',
    periyot: 'Mevsimlik',
    tur: 'Kapalı / Davetli',
    renk: 'border-l-emerald-mid',
  },
  {
    title: 'Matem ve Ahlâk Programı',
    desc: 'Muharrem döneminde tarih, hafıza, yas ve ahlâki direniş temalı programlar.',
    detail: 'Kerbelâ; yalnızca bir matem mevsimi değil, her yıl yeniden okunması gereken bir ahlâk dersidir. Meclis bu programı nefret üretmek için değil; adalet duygusu derinleştirmek için düzenler.',
    periyot: 'Yıllık (Muharrem)',
    tur: 'Yüz yüze / Karma',
    renk: 'border-l-emerald-deep',
  },
];

export default function EtkinliklerPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-4">Meclis Programları</p>
          <h1 className="font-display text-[32px] md:text-[46px] font-bold text-chalk leading-tight mb-5">
            Etkinlikler
          </h1>
          <p className="text-chalk/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
            Katılım; açık başvuru yerine davet usulüyle gerçekleşir.
            Etkinlikler hakkında bilgi almak için iletişime geçebilirsiniz.
          </p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.7), transparent)' }} />
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etkinlikler.map((e, i) => (
            <div
              key={i}
              className="bg-card border border-border border-l-4 hover:border-gold/30 p-7 transition-all duration-500 group"
              style={{ borderLeftColor: i % 3 === 0 ? '#1E3A28' : i % 3 === 1 ? '#B49448' : '#1B2A4A' }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-[18px] font-semibold text-emerald-dark group-hover:text-emerald transition-colors">
                  {e.title}
                </h3>
              </div>

              <p className="text-gold/70 text-[12px] tracking-wide mb-4 italic">{e.desc}</p>
              <p className="text-text-muted text-[13.5px] leading-[1.85] mb-6">{e.detail}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-[10px] tracking-wide uppercase text-text-muted border border-border px-3 py-1">
                  {e.periyot}
                </span>
                <span className="text-[10px] tracking-wide uppercase text-text-muted border border-border px-3 py-1">
                  {e.tur}
                </span>
              </div>

              <button className="text-[10px] tracking-wider uppercase text-emerald border border-emerald/30 px-5 py-2.5 hover:bg-emerald hover:text-chalk transition-all duration-300">
                Bilgi Talep Et
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-surface py-14">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-text-muted text-[14px] leading-[1.9]">
            Etkinliklere katılım &ldquo;Davetli Katılım&rdquo; esasıyla yürütülür. Belirli etkinlikler kamuya
            açık olabilir; bu durum her etkinlik için ayrıca belirtilir. Genel bilgi talepleriniz için
            iletişim formunu kullanabilirsiniz.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </div>
      </section>
    </>
  );
}
