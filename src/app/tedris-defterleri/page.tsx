import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tedris Defterleri',
  description: 'Nefs muhasebesi, adalet, emanet, Kerbelâ ahlakı ve intizar üzerine beş tedris defteri. Kamuya açık entelektüel çerçeve.',
};

const defterleri = [
  {
    num: 'I',
    title: 'Nefs ve Muhasebe',
    subtitle: 'İnsanın en zor yüzleşmesi kendi içindeki gölgeyle yaptığı yüzleşmedir.',
    text: 'Bu defterde şu sorular üzerinde düşünülür: "Ben hangi durumda adaleti kendi çıkarıma göre eğiyorum?" "Öfkelendiğimde dilimi neden kaybediyorum?" "İnanç, bilgi veya ahlâk üzerinden üstünlük kuruyor muyum?" "Özür dilemekte neden zorlanıyorum?"',
    color: 'from-emerald-deep to-emerald-dark',
  },
  {
    num: 'II',
    title: 'Adalet ve Kul Hakkı',
    subtitle: 'Adaletin en görünür hâli çoğunlukla mahkemelerde değil, insan ilişkilerinde ortaya çıkar.',
    text: 'Bir mesajı cevapsız bırakmak, bir insanı dinlemeden yargılamak, başkasının emeğini görünmez kılmak, verilen sözü unutmak, borcu sürekli ertelemek; bazen büyük haksızlıklardan daha kalıcı yaralar bırakabilir.',
    color: 'from-navy to-emerald-dark',
  },
  {
    num: 'III',
    title: 'Emanet ve Sır',
    subtitle: 'Sır; kişinin sahip olduğu bir güç değil, bir başkasının sana duyduğu güvenin ağırlığıdır.',
    text: 'Meclis’te kişisel bilgiler, ailevi sorunlar, ekonomik zorluklar ve psikolojik hassasiyetler titizlikle korunur. Ancak gizlilik, suçu, şiddeti, istismarı veya ciddi riskleri örtmek için kullanılamaz. Bir insanın güvenliği, bir yapının itibarı için feda edilemez.',
    color: 'from-emerald-dark to-navy',
  },
  {
    num: 'IV',
    title: 'Kerbelâ ve Ahlâki Direniş',
    subtitle: 'Kerbelâ, insanlığın her çağda karşılaştığı ahlâki sınavların hafızasıdır.',
    text: 'Hz. Hüseyin’in duruşu; hakikati savunurken dahi insanlığını kaybetmemenin, güce teslim olmamanın ve haksızlığı normalleştirmemenin simgesidir. Meclis, Kerbelâ bilincini nefret üretmenin değil; adalet duygusu derinleştirmenin imkânı olarak görür.',
    color: 'from-emerald-mid to-emerald-dark',
  },
  {
    num: 'V',
    title: 'İntizar ve Hizmet',
    subtitle: 'Bekleyiş; eylemsizlik değil, en yoğun hazırlık hâlidir.',
    text: 'Daha adil olmak. Daha merhametli olmak. Daha az incitmek. Daha çok öğrenmek. Daha doğru paylaşmak. Daha temiz bir emekle yaşamak. Mehdi’ye hizmet; onun adına konuşmak değil, onun adalet anlayışına layık bir insan olmaya çalışmaktır.',
    color: 'from-navy to-emerald-deep',
  },
];

export default function TedrisDefterleriPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gold/70 mb-4">Eğitim ve Tefekkür</p>
          <h1 className="font-display text-[32px] md:text-[46px] font-bold text-chalk leading-tight mb-5">
            Tedris Defterleri
          </h1>
          <p className="text-chalk/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
            Kamuya açık entelektüel çerçeve. Bu defterleri okumak için üyelik gerekmez;
            anlamak için niyet yeterlidir.
          </p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,148,72,0.7), transparent)' }} />
        </div>
      </section>

      {/* Defterleri */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="space-y-6">
          {defterleri.map((d, i) => (
            <div
              key={i}
              className="group border border-border hover:border-gold/40 bg-card transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left — Roman numeral */}
                <div className={`bg-gradient-to-br ${d.color} flex items-center justify-center px-8 py-8 md:py-0 md:w-24 shrink-0`}>
                  <span className="font-display text-[28px] font-bold text-chalk/60">{d.num}</span>
                </div>

                {/* Right — Content */}
                <div className="p-7 md:p-8 flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="font-display text-[20px] md:text-[22px] font-semibold text-emerald-dark mb-1 group-hover:text-emerald transition-colors">
                        {d.title}
                      </h2>
                      <p className="text-gold/70 text-[12px] tracking-wide mb-4 italic">{d.subtitle}</p>
                      <p className="text-text-muted text-[14px] leading-[1.85]">{d.text}</p>
                    </div>
                    <div className="md:pl-8 shrink-0">
                      <button className="text-[10px] tracking-wider uppercase text-text-muted hover:text-emerald border border-border hover:border-gold/40 px-5 py-2.5 transition-all duration-300 whitespace-nowrap">
                        Detayı Oku
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-surface py-14">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-text-muted text-[14px] leading-[1.9]">
            Tedris Defterleri, Meclisi&apos;n ilke ve düşünce çerçevesini kamuyla paylaştığı açık entelektüel kaynaklardır.
            Daha derinlikli okuma ve tartışma için <Link href="/iletisim" className="text-emerald hover:text-emerald-mid underline underline-offset-4 decoration-gold/40 transition-colors">iletişime geçebilirsiniz</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
