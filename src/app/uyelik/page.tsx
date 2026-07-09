import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Üyelik',
  description: 'Ahd-i Mizan\'a üyelik herkese açık değildir. Adaylar; ahlakî olgunluk, sır saklama becerisi, güvenilirlik, kul hakkı hassasiyeti ve hizmet bilinciyle değerlendirilir.',
};

const stages = [
  { t: 'Kimler Davet Edilebilir?', d: 'Davet; makam, servet veya nüfuz ile değil, ahlak ile alınır. İncitmekten korkan, sözünde duran, kul hakkına titreyen ve sükûtu bilen kişiler davete yakındır. Aranan; kusursuzluk değil, samimiyettir.' },
  { t: 'Adaylık Süreci', d: 'Adaylık bir sınav değil, bir tanışmadır. Acele edilmez. Aday ne kadar hızlı ilerlediğiyle değil, ne kadar tutarlı olduğuyla tanınır. Hiç kimse zorla ya da telkinle bu sürece sokulmaz.' },
  { t: 'Edep Halkası', d: 'İlk eşik, edep halkasıdır. Burada bilgi değil, tavır konuşur. Söz disiplini, dinleme edebi ve nefse karşı dürüstlük bu halkada tanınır. Edep tamamlanmadan derinliğe geçilmez.' },
  { t: 'Mizan Halkası', d: 'Edebini kuşanan için mizan halkası açılır. Burada insan, kendi ölçüsüyle yüzleşir. Adalet, sorumluluk ve kul hakkı bilinci burada bir yaşam biçimine dönüşür.' },
  { t: 'Sır ve Mahremiyet', d: 'Halkaların derinleştiği yerde sır başlar. Sır, üstünlük değil; taşınması gereken bir yüktür. Mahremiyet, kimseyi dışlamak için değil; emaneti hafifçe taşıyabilmek içindir.' },
  { t: 'Ayrılma Hakkı', d: 'Bu yola girmek gönüllülükse, ayrılmak da bir haktır. Ayrılan kişi düşman ilan edilmez, kınanmaz, ifşa edilmez. Kapı çıkmak isteyene de saygıyla açılır.' },
];

const guarantees = [
  'Kimse zorla üye yapılamaz.',
  'Kimse ayrıldığı için düşman ilan edilemez.',
  'Üyelik maddi menfaat aracı değildir.',
  'Manevî dereceler para karşılığı verilmez.',
  'Hiçbir üye ailesinden, toplumdan veya kişisel hayatından koparılmaz.',
];

export default function UyelikPage() {
  return (
    <>
      <PageHero
        label="Üyelik"
        title="Bir Ayrıcalık Değil,"
        titleItalic="Bir Sorumluluktur"
        subtitle="Ahd-i Mizan'a üyelik; ahlakî olgunluk, güvenilirlik, kul hakkı hassasiyeti ve hizmet bilinciyle ölçülür."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-text-secondary text-[16.5px] leading-[1.95]">
              Buraya katılmak bir statü kazanmak değildir. Aksine, taşınacak yükü büyütmektir.
              Aday, ne bildiğiyle değil; nasıl davrandığıyla tanınır.
            </p>
          </AnimatedSection>

          {/* Stages */}
          <div className="space-y-6">
            {stages.map((s, i) => (
              <AnimatedSection key={i} delay={(i % 2) * 0.08}>
                <div className="card-premium p-8 md:p-9">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-seal text-gold/45 text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="font-display text-[1.45rem] md:text-[1.75rem] font-semibold text-chalk">{s.t}</h2>
                  </div>
                  <p className="text-text-secondary text-[15.5px] leading-[1.9] md:pl-10">{s.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Security guarantees */}
          <AnimatedSection className="mt-16">
            <div className="border border-gold/25 bg-gold/[0.03] p-8 md:p-11">
              <div className="flex items-center gap-3 mb-7">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold shrink-0">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M8.5 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold">Güvenlik İlkelerimiz</h3>
              </div>
              <ul className="space-y-4">
                {guarantees.map((g, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-[15.5px] leading-[1.75]">
                    <span className="text-gold/60 shrink-0">—</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-16 text-center">
            <p className="font-display italic text-gold-light/80 text-[1.25rem] md:text-[1.5rem] leading-relaxed mb-9">
              Kabul; niyetle başlar, ahlakla sürer, sükûtla korunur.
            </p>
            <Link href="/iletisim" className="btn-emerald">Niyet Beyanında Bulun</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
