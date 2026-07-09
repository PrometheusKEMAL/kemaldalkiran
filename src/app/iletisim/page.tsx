import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import DavetForm from '@/components/DavetForm';

export const metadata: Metadata = {
  title: 'Davet',
  description: 'Davet bir kapıdır; kapı herkese açılmaz. Ahd-i Mizan\'a niyet beyanınızı iletebilirsiniz. Kabul; yalnızca ahlakî uygunluk, güvenilirlik, niyet ve davet süreciyle mümkündür.',
};

const principles = [
  'Bu bir başvuru değil, bir niyet beyanıdır.',
  'Hiçbir beyan; küçümseme, dışlama veya baskı diliyle karşılanmaz.',
  'Mahremiyet ve kişisel verilerin korunması esastır.',
  'Kabul; ahlakî uygunluk, güvenilirlik ve davet süreciyle mümkündür.',
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        label="İletişim · Davet"
        title="Davet Bir Kapıdır;"
        titleItalic="Kapı Herkese Açılmaz"
        subtitle="Aşağıdaki beyan bir başvuru değil, bir niyet ifadesidir. Sükûtla okunur, sabırla değerlendirilir."
      />

      <section className="bg-surface-2 py-20 md:py-28 border-t border-gold/8">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Principles */}
          <AnimatedSection className="mb-16">
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0 text-gold">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-text-secondary text-[14px] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1}>
            <DavetForm />
          </AnimatedSection>

          {/* Closing */}
          <AnimatedSection className="mt-20 text-center">
            <div className="gold-line-center mb-8" />
            <p className="font-display italic text-gold-light/80 text-[1.25rem] md:text-[1.5rem] leading-relaxed">
              Arayan için daima bir eşik vardır; ama eşikten geçmek, sabrın ve ahlakın işidir.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
