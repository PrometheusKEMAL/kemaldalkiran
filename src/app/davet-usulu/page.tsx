import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPageHeader from '@/components/AnimatedPageHeader';
import StaggerContainer from '@/components/StaggerContainer';

export const metadata: Metadata = {
  title: 'Davet Usulü',
  description: 'Ahdü\'l-Mîzân Meclisi\'ne katılım davet usulüyle gerçekleşir. Sorumluluk, üstünlük değil; emanet anlamına gelir.',
};

const kademeler = [
  {
    title: 'Misafir',
    desc: 'Meclisle tanışan kişi.',
    detail: 'Meclisin kamusal sohbetlerine veya belirli faaliyetlerine katılabilir. Bu aşamada kişiden bağlılık, karar veya katkı beklenmez.',
    num: '01',
  },
  {
    title: 'Müşahit',
    desc: 'Meclisin temel ahlâk çerçevesini tanıyan ve daha yakından gözlemleyen kişi.',
    detail: 'Bu dönem, kişinin meclisi; meclisin de kişiyi tanıdığı karşılıklı bir süreçtir. Mîzân İlkeleri\'ni tanıma aşamasındadır. Hâlâ herhangi bir yükümlülük yoktur.',
    num: '02',
  },
  {
    title: 'Emanet Üyesi',
    desc: 'Meclisin ilkelerini kabul eden, iç eğitim sürecine katılan ve ortak istişare sonucunda uygun görülen kişi.',
    detail: 'Bu üyelik bir üstünlük, rütbe veya manevi ayrıcalık değildir. Emanet Üyesi olmak, daha fazla sorumluluk taşımayı kabul etmektir.',
    num: '03',
  },
  {
    title: 'Görevli',
    desc: 'Belirli sürelerle eğitim, dayanışma, mali şeffaflık veya etik denetim alanlarında sorumluluk alan üye.',
    detail: 'Görev, yetki değil; hizmettir. Her görev denetlenebilir ve geçicidir. Görevli olmak, hiçbir zaman manevi üstünlük anlamına gelmez.',
    num: '04',
  },
];

const guarantees = [
  'Zorunlu üyelik veya zorunlu bağış yoktur.',
  'Aile ve sosyal çevreden koparma amaçlanmaz, teşvik edilmez.',
  'Psikolojik baskı, tehdit veya manipülasyon kesinlikle reddedilir.',
  'Ayrılmak isteyen kişi herhangi bir baskıyla karşılaşmaz.',
  'Hiçbir görev veya konum, manevi üstünlük anlamına gelmez.',
  'Mehdi adına özel temsil yetkisi iddiasında bulunamaz hiçbir üye.',
];

export default function DavetUsuluPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-30" />
        <AnimatedPageHeader
          label="Katılım ve Üyelik"
          title="Davet, Üstünlük Değil Sorumluluktur"
        />
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-16">
        <AnimatedSection blur>
          <div className="gold-line mb-10" />
          <p className="text-text-secondary text-[16px] leading-[1.95]">
            Ahdü&apos;l-Mîzân Meclisi herkese açık üyelik sistemiyle çalışan bir yapı değildir. Ancak bu durum, meclisin kendisini insanlardan üstün gördüğü anlamına gelmez.
            <br /><br />
            Davet usulü; bir ayrıcalık dağıtma biçimi değil, ortak bir sorumluluğu taşıyabilecek kişilerle dikkatli ve yavaş bir bağ kurma yöntemidir. Meclise katılım; sosyal statü, maddi imkân, soy, ün veya koşulsuz bağlılık üzerinden değil; <strong className="text-emerald-dark font-semibold">emanet bilinci, kul hakkına hassasiyet ve öğrenmeye açıklık</strong> üzerinden değerlendirilir.
          </p>
        </AnimatedSection>
      </section>

      {/* Kademeler */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.1}>
          {kademeler.map((k) => (
            <div
              key={k.num}
              className="bg-card border border-border hover:border-gold/40 p-7 transition-all duration-400 group"
            >
              <div className="text-[10px] tracking-widest uppercase text-gold/40 mb-5">{k.num}</div>
              <h3 className="font-display text-[18px] font-semibold text-emerald-dark mb-1 group-hover:text-emerald transition-colors">
                {k.title}
              </h3>
              <p className="text-gold/60 text-[12px] italic mb-4">{k.desc}</p>
              <p className="text-text-muted text-[13px] leading-[1.85]">{k.detail}</p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Ethics Guarantee Box */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pb-20">
        <AnimatedSection blur scale>
          <div className="border border-gold/30 bg-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/50" />
              <p className="text-[10px] tracking-widest uppercase text-gold/70">Etik Güvence</p>
              <div className="w-8 h-px bg-gold/50" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                    <path d="M3 8L6.5 11.5L13 5" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-text-secondary text-[14px] leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
