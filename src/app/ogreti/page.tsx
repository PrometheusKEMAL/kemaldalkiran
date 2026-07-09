import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Öğreti',
  description: 'Ahd-i Mizan öğretisi bilgi yığmak değil, taşıma edebidir: edep ve söz disiplini, nefs muhasebesi, sükût terbiyesi, sembol dili, Ehlibeyt çizgisinde ahlak, hizmet bilinci ve Mehdi\'ye hazırlık ahlakı.',
};

const modules = [
  { t: 'Edep ve Söz Disiplini', d: 'Öğrenmenin ilk kapısı ağzımızı tutmaktır. Söz, söylendiği kadar değil; tutulduğu kadar da değer taşır. Edep, bilginin taşınabileceği tek kaptır.' },
  { t: 'Nefs Muhasebesi', d: 'Başkasını ölçmeden önce kendini tartmak. Her akşam, o günü yeniden gözden geçirmek. Nefs muhasebesi, insanı yargıçtan sanığa çeviren o sessiz yüzleşmedir.' },
  { t: 'Sükût Terbiyesi', d: 'Susmak, söyleyecek şeyi olmamak değildir. Susmak, söyleyebileceği halde emaneti korumayı seçmektir. Sükût, konuşmaktan daha zor bir olgunluktur.' },
  { t: 'Sembol Dili', d: 'Bazı hakikatler doğrudan söylendiğinde incelir. Sembol; kalbi hazır olana açılan, hazır olmayanı ise incitmeden bekleten bir dildir. Sembolü çözmek değil, hak etmek esastır.' },
  { t: 'Ehlibeyt Çizgisinde Ahlak', d: 'Ehlibeyt\'in hayatı bizim için bir slogan değil, bir müfredattır. Onların sabrı, adaleti ve merhameti; ezberlenecek değil, yaşanacak bir ahlaktır.' },
  { t: 'Hizmet Bilinci', d: 'Öğrenen, öğrendiğini taşımakla yükümlüdür. Hizmet; görünür olmak için değil, borcu ödemek için yapılır. En yücemiz, en çok hizmet edenimizdir.' },
  { t: 'Mehdi\'ye Hazırlık Ahlakı', d: 'Bütün öğretinin vardığı yer burasıdır: O gün geldiğinde utanmayacağımız bir insan olabilmek. Hazırlık; beklemek değil, bugünden o ahlakı yaşamaktır.' },
];

export default function OgretiPage() {
  return (
    <>
      <PageHero
        label="Öğreti"
        title="Bilgi Değil,"
        titleItalic="Taşıma Edebi"
        subtitle="Bizde öğreti, biriktirmek için değil; nefsi hafifletmek ve emaneti doğru taşımak içindir."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <AnimatedSection key={i} delay={(i % 2) * 0.08} direction="up">
                <div className="card-premium h-full p-8 md:p-9">
                  <div className="font-seal text-gold/45 text-sm mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h2 className="font-display text-[1.5rem] font-semibold text-chalk mb-3">{m.t}</h2>
                  <p className="text-text-secondary text-[15px] leading-[1.9]">{m.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Closed curriculum note */}
          <AnimatedSection className="mt-16">
            <div className="border-l-2 border-gold pl-8 py-2" style={{ background: 'linear-gradient(90deg, rgba(201,166,70,0.05), transparent)' }}>
              <p className="text-text-secondary text-[16px] leading-[1.95] italic font-display text-[1.15rem]">
                &ldquo;Bazı metinler ve sembolik açıklamalar yalnızca iç halkalara açıktır. Bu kapalılık
                üstünlük hissi üretmek için değil; bilginin yüzeyselleşmesini önlemek ve manevî
                sorumluluğu korumak içindir.&rdquo;
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.3rem] md:text-[1.6rem] leading-relaxed">
              Öğreti; insanı taşıyabileceği kadar açılır. Kalanı, sabrın ve edebin emanetindedir.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
