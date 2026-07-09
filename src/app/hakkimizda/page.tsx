import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Ahd-i Mizan; tarikat, mezhep, siyasi yapı veya ticari oluşum değil; ahlak, edep, Ehlibeyt sevgisi, insan sevgisi, kul bilinci ve hizmet amacı taşıyan kapalı bir manevî kardeşlik yapısıdır.',
};

const sections = [
  {
    title: 'Kuruluş Gayemiz',
    body: [
      'Ahd-i Mizan; insanı bir topluluğa bağlamak için değil, insanı kendi vicdanına bağlamak için vardır. Gayemiz; Ehlibeyt sevgisini duygusal bir aidiyetten çıkarıp, gündelik hayatı düzenleyen bir ahlak ölçüsüne dönüştürmektir.',
      'Bizim ölçümüz gösteriş değil, sükûttur. Amacımız kalabalık olmak değil; az da olsak, sözünde duran, kul hakkına titreyen ve insanı incitmekten korkan bir topluluk olabilmektir.',
    ],
  },
  {
    title: 'Neden Kapalı Bir Yapı?',
    body: [
      'Kapalılığımız üstünlük iddiası değildir. Bir bilgi ne kadar kolay yayılırsa, o kadar kolay yüzeyselleşir. Biz, öğretinin ağırlığını korumak; onu meraka değil, ehline emanet etmek isteriz.',
      'Kapalılık; kötülüğü saklamak için değil, edebi ve mahremiyeti korumak içindir. Bir insanın olgunlaşması zaman ister; bu zemin, o zamanı sabırla tanıyan bir alandır.',
    ],
  },
  {
    title: 'Ehlibeyt Sevgisini Nasıl Anlıyoruz?',
    body: [
      'Ehlibeyt sevgisi bizim için bir çatışma dili değil, bir edep dilidir. Onları sevmek; onların uğrunda durduğu adaleti, sabrı, merhameti ve insan onurunu kendi hayatımızda yaşatmaya çalışmaktır.',
      'Sevgimiz, kimseyi aşağılamaz. Bir insanı incitin de Ehlibeyt\'i sevin — bu bizim anladığımız sevgi değildir. Gerçek sevgi, insanı incitmemekle başlar.',
    ],
  },
  {
    title: 'Mehdi Bilinci Ne Demektir?',
    body: [
      'Bizim için Mehdi beklentisi; bir korku, bir güç ya da bir manipülasyon aracı değildir. Mehdi bilinci, ahlakî bir hazırlık bilincidir.',
      'Zuhurun zamanını hesaplamakla değil; zuhur geldiğinde taşıyabileceğimiz ahlakı bugünden inşa etmekle ilgileniriz. Beklemek, tembellik değil; olgunlaşmaktır.',
    ],
  },
  {
    title: 'Ahlakın Üstünlüğü',
    body: [
      'Ahd-i Mizan\'da hiçbir bilgi, hiçbir derece, hiçbir görev ahlakın önüne geçemez. Bir insan ne kadar bilirse bilsin, kul hakkına dikkat etmiyorsa, bizim ölçümüzde geride kalmıştır.',
      'Ahlak her öğretiden üstündür. Çünkü öğreti bir araçtır; ahlak ise gayenin kendisidir.',
    ],
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        label="Biz Kimiz?"
        title="Bir Yapıdan Önce,"
        titleItalic="Bir Ahlak"
        subtitle="Ahd-i Mizan; tarikat, mezhep, siyasi hareket veya ticari oluşum değildir. O; ahlak, edep ve hizmet üzerine kurulu kapalı bir manevî kardeşliktir."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {/* Intro */}
          <AnimatedSection className="mb-20 text-center">
            <p className="font-display italic text-chalk/80 text-[1.3rem] md:text-[1.6rem] leading-[1.7]">
              &ldquo;Biz, hakikatin sahibi değil; emanetçisiyiz.&rdquo;
            </p>
          </AnimatedSection>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <article>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-seal text-gold/50 text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="font-display text-[1.7rem] md:text-[2.1rem] font-semibold text-chalk">{s.title}</h2>
                  </div>
                  <div className="pl-0 md:pl-10 space-y-4">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-text-secondary text-[16px] md:text-[16.5px] leading-[1.95]">{p}</p>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Closing */}
          <AnimatedSection className="mt-24 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.2rem] md:text-[1.5rem] leading-relaxed">
              Bu yapı; gizli veya korkutucu bir oluşum değil, emaneti korumak için sükûtu seçmiş bir kardeşliktir.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
