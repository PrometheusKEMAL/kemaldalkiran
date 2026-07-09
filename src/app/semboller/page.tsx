import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Semboller',
  description: 'Ahd-i Mizan\'ın sembol dili: Mizan (adalet), Nur (hakikat), Kapı (eşik), Sükût (edep) ve Halka (kardeşlik).',
};

const symbols = [
  {
    name: 'Mizan',
    sub: 'Adalet · Ölçü · Kul Hakkı',
    icon: (
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <line x1="30" y1="16" x2="30" y2="46" />
        <line x1="14" y1="22" x2="46" y2="22" />
        <path d="M11 22 L8 33 Q14 37 20 33 Z" />
        <path d="M49 22 L52 33 Q46 37 40 33 Z" />
        <line x1="24" y1="46" x2="36" y2="46" />
      </g>
    ),
    d: 'Mizan, her şeyin bir ölçüsü olduğunu hatırlatır. Adalet yalnızca mahkemelerde değil; verilen her sözde, ödenmeyen her borçta, görmezden gelinen her kul hakkında sınanır. Mizan, insanı önce kendi nefsini tartmaya çağırır.',
  },
  {
    name: 'Nur',
    sub: 'Hakikat · Kalp Aydınlığı · İç Berraklık',
    icon: (
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <circle cx="30" cy="30" r="9" />
        <line x1="30" y1="8" x2="30" y2="14" />
        <line x1="30" y1="46" x2="30" y2="52" />
        <line x1="8" y1="30" x2="14" y2="30" />
        <line x1="46" y1="30" x2="52" y2="30" />
        <line x1="15" y1="15" x2="19" y2="19" />
        <line x1="41" y1="41" x2="45" y2="45" />
        <line x1="45" y1="15" x2="41" y2="19" />
        <line x1="19" y1="41" x2="15" y2="45" />
      </g>
    ),
    d: 'Nur, dışarıdan gelen bir ışık değil; kalbin kendi berraklığıdır. Hakikat, gözü kamaştıran bir parlaklıkla değil; içeriyi aydınlatan sakin bir ışıkla bilinir. Nuru taşıyan kişi, onu kibirle söndürmemekle yükümlüdür.',
  },
  {
    name: 'Kapı',
    sub: 'Eşik · Davet · Olgunluk',
    icon: (
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 50 L18 22 A12 12 0 0 1 42 22 L42 50" />
        <line x1="14" y1="50" x2="46" y2="50" />
        <circle cx="36" cy="34" r="1.4" fill="currentColor" />
      </g>
    ),
    d: 'Kapı, hem bir davet hem bir eşiktir. Herkese açılmaz; ama arayan için daima vardır. Bir kapıdan geçmek, bir mekâna girmek değil; bir olgunluğa adım atmaktır. Eşikte beklemek de yolun bir parçasıdır.',
  },
  {
    name: 'Sükût',
    sub: 'Sır · Edep · İç Disiplin',
    icon: (
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <circle cx="30" cy="30" r="20" />
        <path d="M22 32 Q30 38 38 32" />
        <circle cx="23" cy="25" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="37" cy="25" r="1.4" fill="currentColor" stroke="none" />
      </g>
    ),
    d: 'Sükût, söyleyecek şeyi olmamak değil; söyleyebileceği halde emaneti korumayı seçmektir. Bizim gizliliğimiz bir sırrın ağırlığındandır, bir suçun utancından değil. Sükût, olgunlaşan insanın en sade dilidir.',
  },
  {
    name: 'Halka',
    sub: 'Kardeşlik · Emanet · Bağlılık',
    icon: (
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <circle cx="30" cy="30" r="20" />
        <circle cx="30" cy="30" r="13" opacity="0.6" />
        <circle cx="30" cy="10" r="2" fill="currentColor" stroke="none" />
        <circle cx="47" cy="40" r="2" fill="currentColor" stroke="none" />
        <circle cx="13" cy="40" r="2" fill="currentColor" stroke="none" />
      </g>
    ),
    d: 'Halka, kimsenin diğerinden üstün olmadığı bir dairedir. Herkes eşit uzaklıkta, herkes aynı merkeze bağlıdır. Kardeşlik burada bir duygu değil, bir emanettir; birinin düşüşü, halkanın tümünün sorumluluğudur.',
  },
];

export default function SembollerPage() {
  return (
    <>
      <PageHero
        label="Semboller"
        title="Sözün Bittiği Yerde"
        titleItalic="Konuşan Dil"
        subtitle="Sembollerimiz süs değildir. Her biri, doğrudan söylendiğinde incelecek bir hakikati sabırla taşır."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-6">
          {symbols.map((s, i) => (
            <AnimatedSection key={s.name} delay={(i % 2) * 0.08}>
              <div className="card-premium p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center text-gold" style={{ background: 'radial-gradient(circle, rgba(201,166,70,0.06), transparent)' }}>
                    <svg width="60" height="60" viewBox="0 0 60 60">{s.icon}</svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-display text-[1.9rem] font-semibold text-chalk mb-1">{s.name}</h2>
                  <p className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-gold/70 mb-4">{s.sub}</p>
                  <p className="text-text-secondary text-[15.5px] leading-[1.9]">{s.d}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection className="pt-14 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.3rem] md:text-[1.6rem] leading-relaxed">
              Sembolü çözmek değil, hak etmek esastır.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
