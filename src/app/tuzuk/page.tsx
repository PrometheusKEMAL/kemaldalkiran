import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Tüzük',
  description: 'Ahd-i Mizan sadeleştirilmiş tüzüğü: amaç, temel ilkeler, üyelik, gizlilik, ahlak yasası, hizmet anlayışı, yönetim, ayrılma hakkı, maddi şeffaflık ve son hükümler.',
};

const articles = [
  { t: 'Amaç', d: 'Ahd-i Mizan; Ehlibeyt sevgisini ahlakî bir yaşam biçimine dönüştürmeyi, insanı incitmeden hakikate yürümeyi, kul bilinciyle yaşamayı ve zamanın sahibine hizmet edecek bir olgunluk inşa etmeyi amaçlar. Bu yapı; tarikat, mezhep, siyasi hareket veya ticari oluşum değildir.' },
  { t: 'Temel İlkeler', d: 'Yapının bütün işleyişi; ahlakın üstünlüğü, insan onurunun dokunulmazlığı, kul hakkının önceliği ve gönüllülük esası üzerine kuruludur. Hiçbir kural, bu temel ilkelerin önüne geçemez.' },
  { t: 'Üyelik', d: 'Üyelik herkese açık değildir ve bir ayrıcalık değil sorumluluktur. Adaylar; ahlakî olgunluk, güvenilirlik, sır bilinci ve hizmet niyetiyle değerlendirilir. Kimse zorla, telkinle veya baskıyla üye yapılamaz.' },
  { t: 'Gizlilik ve Mahremiyet', d: 'Gizlilik; kötülüğü saklamak için değil, emaneti ve edebi korumak içindir. Hiçbir mahremiyet ilkesi, bir suçu örtmek veya bir haksızlığı gizlemek için kullanılamaz.' },
  { t: 'Ahlak Yasası', d: 'Yapı içindeki her ilişki edep, dürüstlük ve merhamet üzerine kuruludur. İnsanı aşağılamak, kul hakkı yemek, sır istismar etmek ve gücü tahakküme dönüştürmek kesin olarak reddedilir.' },
  { t: 'Hizmet Anlayışı', d: 'Hizmet, görünmek için değil; borcu ödemek için yapılır. Yapı içinde önde olmak, en çok emek vermek anlamına gelir. Hizmet karşılığında maddi menfaat veya manevî üstünlük talep edilemez.' },
  { t: 'Yönetim İlkesi', d: 'Yönetim bir makam değil, bir emanettir. Hiçbir kişi mutlak otorite değildir; hiç kimse hakikatin yerine geçemez. Kararlar; istişare, edep ve sorumluluk bilinciyle alınır.' },
  { t: 'Ayrılma Hakkı', d: 'Bu yola girmek gönüllülük esasına dayanır; ayrılmak da bir haktır. Ayrılan kişi düşman ilan edilemez, kınanamaz, ifşa edilemez veya herhangi bir baskıya maruz bırakılamaz.' },
  { t: 'Maddi Şeffaflık', d: 'Manevî dereceler ve hizmetler hiçbir koşulda para karşılığı verilmez. Yapı, maddi menfaat aracı olarak kullanılamaz. Her türlü maddi işleyişte şeffaflık ve dürüstlük esastır.' },
  { t: 'Son Hükümler', d: 'Bu tüzük, kamuya açık sadeleştirilmiş bir çerçevedir. İç işleyişe dair mahrem detaylar, bu metnin kapsamı dışındadır. Tüzüğün ruhu; her zaman ahlak, edep ve insan sevgisi lehine yorumlanır.' },
];

export default function TuzukPage() {
  return (
    <>
      <PageHero
        label="Tüzük"
        title="Sadeleştirilmiş"
        titleItalic="Çerçeve"
        subtitle="Kamuya açık bu metin; yapının ruhunu ve etik sınırlarını şeffaflıkla gösterir."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="space-y-10">
            {articles.map((a, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 0.05}>
                <article className="border-b border-gold/10 pb-10 last:border-0">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-seal text-gold/45 text-sm">Madde {i + 1}</span>
                  </div>
                  <h2 className="font-display text-[1.6rem] md:text-[1.9rem] font-semibold text-chalk mb-4">{a.t}</h2>
                  <p className="text-text-secondary text-[16px] leading-[1.95]">{a.d}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.25rem] md:text-[1.5rem] leading-relaxed">
              Bu tüzüğün ruhu; daima ahlak, edep ve insan sevgisi lehine yorumlanır.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
