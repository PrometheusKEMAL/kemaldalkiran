import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'İlkelerimiz',
  description: 'Ahd-i Mizan\'ın on temel ilkesi: ahlak, insan onuru, gizlilik, Ehlibeyt sevgisi, Mehdi bilinci, sır, liderlik, hakikat, kul hakkı ve sükût üzerine.',
};

const principles = [
  { t: 'Ahlak her öğretiden üstündür.', d: 'Bilgi bir süstür; ahlak ise özdür. Süsü olmayan bir insan eksik kalır, ama özü olmayan bir insan tehlikelidir. Biz önce özü ararız.' },
  { t: 'İnsan onuru dokunulmazdır.', d: 'Hiçbir inanç, hiçbir dava, hiçbir gerekçe bir insanı aşağılamaya izin vermez. Bir insanı incitmek, hakikate yürüdüğünü sananın ilk düşüşüdür.' },
  { t: 'Gizlilik, kötülüğü saklamak için değil; emaneti korumak içindir.', d: 'Sükûtumuz bir sırrın ağırlığındandır, bir suçun utancından değil. Neyi sakladığımız değil, niçin sakladığımız önemlidir.' },
  { t: 'Ehlibeyt sevgisi, insanı incitmemekle başlar.', d: 'Dilinle sevip elinle kırıyorsan, sevgin henüz kalbine inmemiştir. Sevginin ilk işareti, incitmekten korkmaktır.' },
  { t: 'Mehdi beklentisi, ahlakî hazırlık bilincidir.', d: 'Beklemek, tarih hesaplamak değildir. Beklemek; o gün geldiğinde yüzümüzün kızarmayacağı bir ahlakı bugünden kuşanmaktır.' },
  { t: 'Sır, üstünlük değil sorumluluktur.', d: 'Bir sırra ortak olmak, kimseden üstün olmak değil; daha ağır bir yük taşımaya razı olmaktır. Sır taşıyan, önce kendine karşı dürüst olmalıdır.' },
  { t: 'Liderlik hizmettir.', d: 'Bizde önde olan, en çok emek verendir; en çok emredilen değil. Hizmet edemeyen, yönetemez. Otorite bir makam değil, bir emanettir.' },
  { t: 'Hiçbir kişi hakikatin yerine geçemez.', d: 'İnsanlar yol gösterebilir ama yolun kendisi olamaz. Kişiye tapan, hakikati kaybeder. Biz kişiyi değil, ölçüyü büyütürüz.' },
  { t: 'Kul hakkı, bütün derecelerin üzerindedir.', d: 'En yüksek manevî derece bile, bir kul hakkının altında ezilir. Hesabı en zor olan borç, insanların birbirine olan borcudur.' },
  { t: 'Bu yol gösterişin değil, sükûtun yoludur.', d: 'Görünmek isteyen çok, olgunlaşmak isteyen azdır. Biz azın yolundayız. Sükût, boşluk değil; dolu olanın tevazuudur.' },
];

export default function IlkelerimizPage() {
  return (
    <>
      <PageHero
        label="İlkelerimiz"
        title="Üzerine"
        titleItalic="Ahdimiz Olan On İlke"
        subtitle="Bunlar bir liste değil, bir yeminin maddeleridir. Her ilke, günlük hayatta sınanan bir sözdür."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-5">
          {principles.map((p, i) => (
            <AnimatedSection key={i} delay={(i % 3) * 0.06} direction="up">
              <div className="card-premium p-8 md:p-9 flex gap-6">
                <span className="font-seal text-gold/45 text-[1.4rem] leading-none shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display text-[1.4rem] md:text-[1.7rem] font-semibold text-chalk leading-snug mb-3">
                    {p.t}
                  </h2>
                  <p className="text-text-secondary text-[15.5px] leading-[1.9]">{p.d}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection className="pt-14 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.3rem] md:text-[1.6rem] leading-relaxed">
              İlkelerimiz duvara asılan sözler değil; her sabah yeniden verdiğimiz ahitlerdir.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
