import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Manifesto',
  description: 'Ahd-i Mizan Manifestosu: Biz, hakikatin sahibi değil emanetçisiyiz. İnsanlardan üstün değil, insanlara karşı sorumluyuz.',
};

const verses = [
  'Biz, hakikatin sahibi değil; emanetçisiyiz.',
  'Biz, insanlardan üstün değil; insanlara karşı sorumluyuz.',
  'Biz, zuhurun zamanını değil; zuhur geldiğinde taşıyacağımız ahlakı düşünürüz.',
];

const paragraphs = [
  'Bir gün, bir isim ya da bir kalabalık olmak için toplanmadık. Biz, içimizdeki ölçüyü kaybetmemek için bir araya geldik. Çünkü biliyoruz ki insan, en çok kendi nefsinin karanlığında yolunu şaşırır.',
  'Ehlibeyt sevgisini bir bayrak gibi taşımıyoruz; bir terazi gibi taşıyoruz. O sevgi bize kimseyi aşağılamayı değil, herkesin önünde eğilmeyi öğretti. Sevdiğimizi söylerken bir insanı incitiyorsak, sevgimiz henüz sözde kalmıştır.',
  'Bizim gücümüz görünürlükte değil, sükûttadır. Sükûtumuz korkudan değil, edeptendir. Sakladığımız şey bir sır değil; o sırrın hakkını verebilecek bir kalp olana dek beklettiğimiz bir emanettir.',
  'Kul hakkını, bütün derecelerin üzerinde tutarız. Çünkü hiçbir manevî makam, incittiğimiz bir insanın ahını hafifletmez. En ağır borç, insanın insana olan borcudur.',
  'Zamanın sahibini beklerken, zamanı boş geçirmeyiz. Beklemek bizim için tembellik değil; her gün biraz daha adil, biraz daha merhametli, biraz daha dürüst olmaya çalışmaktır. O gün geldiğinde utanmayacağımız bir yüz hazırlamaktır.',
  'Ve biliriz ki bu yol, ışıklı olduğu kadar zorludur. Ama karanlıktan korkmayız; çünkü taşıdığımız nur, dışarıda değil içimizdedir. Yeter ki onu kibirle söndürmeyelim.',
];

export default function ManifestoPage() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 90% at 50% 10%, #101810 0%, #0A0D0A 55%, #070907 100%)' }} />
        <div className="absolute inset-0 bg-geo-star opacity-[0.05] pointer-events-none" style={{ backgroundSize: '150px 150px' }} />

        <AnimatedSection className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-8">Ahd-i Mizan Manifestosu</p>
          <div className="space-y-6">
            {verses.map((v, i) => (
              <p key={i} className="font-display italic text-chalk font-medium leading-[1.4]" style={{ fontSize: 'clamp(1.5rem, 3.6vw, 2.6rem)' }}>
                {v}
              </p>
            ))}
          </div>
          <div className="gold-line-center mt-12" />
        </AnimatedSection>
      </section>

      {/* Body */}
      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <div className="space-y-8">
            {paragraphs.map((p, i) => (
              <AnimatedSection key={i} delay={(i % 2) * 0.05}>
                <p className="text-text-secondary text-[17px] md:text-[18px] leading-[2] first-letter:text-gold first-letter:font-display first-letter:text-[2.6rem] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
                  {p}
                </p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 text-center">
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mb-8" />
            <p className="font-display italic text-gold-light text-[1.5rem] md:text-[2rem] leading-relaxed">
              Nurumuz içimizdedir; yeter ki onu kibirle söndürmeyelim.
            </p>
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mt-8" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
