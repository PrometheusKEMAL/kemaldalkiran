import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mîzân İlkeleri',
  description: 'Ahdü\'l-Mîzân Meclisi\'nin temel ilkeleri: tevhit, adalet, kul hakkı, merhamet, emanet, ilim, şeffaflık ve hür irade.',
};

const principles = [
  {
    key: 'Tevhit',
    text: 'İnsan, bilgi sahibi olabilir; tecrübe kazanabilir; sorumluluk üstlenebilir. Ancak hiçbir insan, hata yapmayacak kadar yüce değildir. Tevhit bilinci; mutlaklığın yalnızca Allah’a ait olduğunu hatırlatarak her görevliyi sorgulanabilir kılar.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#B49448" strokeWidth="1.2" opacity="0.7" />
        <circle cx="16" cy="16" r="5" stroke="#B49448" strokeWidth="1" />
        <circle cx="16" cy="16" r="1.5" fill="#B49448" />
      </svg>
    ),
  },
  {
    key: 'Adalet',
    text: 'Adalet, insanın kendi lehine olan yanlışlara da itiraz edebilmesidir. Meclis, üyelerinden başkalarına karşı sert olmalarını değil; kendilerine karşı dürüst olmalarını bekler.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="16" y1="6" x2="16" y2="26" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="13" x2="24" y2="13" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M9 13 Q9 19 12 19 Q15 19 15 13" stroke="#B49448" strokeWidth="1" fill="none" />
        <path d="M17 13 Q17 19 20 19 Q23 19 23 13" stroke="#B49448" strokeWidth="1" fill="none" />
        <line x1="13" y1="26" x2="19" y2="26" stroke="#B49448" strokeWidth="1" strokeLinecap="round" />
        <circle cx="16" cy="13" r="1.2" fill="#B49448" />
      </svg>
    ),
  },
  {
    key: 'Kul Hakkı',
    text: 'Kul hakkı yalnızca para, borç veya mülk üzerinden değerlendirilmez. Bir insanın emeğini küçümsemek, birinin itibarını zedelemek, zayıf anını kullanmak, onu duygusal olarak manipüle etmek de kul hakkıdır.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6 C10 6 6 10 6 14 C6 20 16 26 16 26 C16 26 26 20 26 14 C26 10 22 6 16 6Z" stroke="#B49448" strokeWidth="1.2" fill="none" />
        <circle cx="16" cy="14" r="3" stroke="#B49448" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    key: 'Merhamet',
    text: 'Merhamet, zayıflık değildir. İnsan, ancak güçü varken incitmemeyi seçtiğinde merhametin anlamına yaklaşır. Merhamet, insanın kendisini başkasından üstün görmesini engeller.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 24 L6 14 C4 12 4 8 8 7 C11 6 14 9 16 11 C18 9 21 6 24 7 C28 8 28 12 26 14 Z" stroke="#B49448" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    key: 'Emanet',
    text: 'Emaneti taşıyan kişi, onu kendi güçünü artırmak için kullanamaz. Emanet, kişiye verilmiş bir ayrıcalık değil; kişiye yüklenmiş bir sorumluluktur.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="14" width="16" height="12" rx="1" stroke="#B49448" strokeWidth="1.2" />
        <path d="M12 14 C12 10 20 10 20 14" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="20" r="2" fill="#B49448" opacity="0.7" />
      </svg>
    ),
  },
  {
    key: 'İlim',
    text: 'Bilgi üstünlük kurmak için değil, cehaleti azaltmak için taşınır. Bilgi, kibrin değil; hizmetin aracıdır. İlim, insanı büyütmeli — küçültmemeli.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 22 L8 10 C8 9 9 8 10 8 L22 8 C23 8 24 9 24 10 L24 22" stroke="#B49448" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M6 22 L26 22" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="12" y1="13" x2="20" y2="13" stroke="#B49448" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="16" x2="20" y2="16" stroke="#B49448" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'Şeffaflık',
    text: 'Mali kaynaklar ve görevler denetlenebilir olmalıdır. Gizlilik, korunmayı hak eden bilginin saklılığıdır; gücün örtüsu değil. Bir yapının ahlâkı, hesap vermekten kaçıp kaçmadığıyla anlaşılır.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#B49448" strokeWidth="1.2" opacity="0.5" />
        <path d="M6 16 C9 10 13 8 16 8 C19 8 23 10 26 16 C23 22 19 24 16 24 C13 24 9 22 6 16Z" stroke="#B49448" strokeWidth="1.2" fill="none" />
        <circle cx="16" cy="16" r="3" fill="#B49448" opacity="0.7" />
      </svg>
    ),
  },
  {
    key: 'Hür İrade',
    text: 'Meclise katılım gönüllülük esasına dayanır. Ayrılmak isteyen kişi açıklama yapmak zorunda bırakılmaz. Bir yapının ahlâkı, içeri girenlere değil; ayrılmak isteyenlere nasıl davrandığıyla da anlaşılır.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 16 L15 21 L22 11" stroke="#B49448" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="11" stroke="#B49448" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
];

export default function MizanIlkeleriPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-4">Temel Değerler</p>
          <h1 className="font-display text-[32px] md:text-[46px] font-bold text-chalk leading-tight mb-5">
            Mîzân İlkeleri
          </h1>
          <p className="text-chalk/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
            Bu meclisin varlık sebebini ve eylem ölçüsünü belirleyen sekiz temel ilke.
          </p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.7), transparent)' }} />
        </div>
      </section>

      {/* Principles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <div
              key={p.key}
              className="bg-card border border-border hover:border-gold/40 p-7 transition-all duration-500 group"
            >
              <div className="mb-5 text-[10px] tracking-widest uppercase text-gold/40">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="mb-5">{p.icon}</div>
              <h3 className="font-display text-[18px] font-semibold text-emerald-dark mb-3 group-hover:text-emerald transition-colors">
                {p.key}
              </h3>
              <p className="text-text-muted text-[13.5px] leading-[1.85]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-surface py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div className="gold-line mx-auto mb-10" />
          <blockquote className="font-display italic text-[22px] md:text-[28px] text-emerald-dark leading-relaxed">
            &ldquo;Zulme karşı dururken, zulmün yöntemlerini kullanma.&rdquo;
          </blockquote>
          <div className="gold-line mx-auto mt-10" />
        </div>
      </section>
    </>
  );
}
