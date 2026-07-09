import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Meclis Hakkında',
  description: 'Ahdü\'l-Mîzân Meclisi; Ehlibeyt sevgisini ilim, adalet, emanet, merhamet ve sorumluluk ahlâkına dönüştürmeyi amaçlayan davetli bir hizmet halkasıdır.',
};

const pillars = [
  {
    num: '01',
    title: 'İlim',
    text: 'Bilgi; kibrin değil, hizmetin aracıdır. Öğrenmek, bilineni başkasına öğretmek için bir sorumluluktur. İlim, insanı büyütmeli — küçültmemeli.',
  },
  {
    num: '02',
    title: 'Ahlâk',
    text: 'Her eylemin ölçüsü, kul hakkına saygı ve nefis muhasebesidir. Ahlâk; görünür olduğunda değil, görünmez olduğunda da korunduğunda gerçektir.',
  },
  {
    num: '03',
    title: 'Dayanışma',
    text: 'İnsan onurunu zedelemeden yardım etmek. Yardımı araçsallaştırmamak. Birinin zor anını haber yapmamak. Sessizce, ama gerçekten yanında olmak.',
  },
  {
    num: '04',
    title: 'Muhasebe',
    text: 'Dışarıya dönük eleştiriden önce içe dönük hesaplaşma. Başkasının hatasını büyütmeden önce kendi hatasını küçültmemeyi öğrenmek.',
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

export default function MeclisHakkindaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-emerald-deep py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-25" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(180,148,72,0.06) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-5 mb-10">
            <Logo size={52} variant="light" className="opacity-80" />
            <div className="w-px h-14 bg-gold/25" />
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold/65 mb-1">Meclis Hakkında</div>
              <div className="text-[9px] tracking-wider uppercase text-chalk/30">Ahdü&apos;l-Mîzân Meclisi</div>
            </div>
          </div>

          <h1 className="font-display font-bold text-chalk leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            Bir İsimden Önce,<br />
            <span className="italic font-light text-chalk/65">Bir Emanet</span>
          </h1>

          <div className="h-px w-24 mb-8" style={{ background: 'linear-gradient(90deg, #B49448, transparent)' }} />

          <p className="text-chalk/55 text-[16px] md:text-[18px] leading-[1.9] max-w-xl font-sans">
            Bu meclis, insanları kendisine bağlamak için değil; Ehlibeyt sevgisini
            adalet, merhamet, emanet ve insan onuru üzerinden yaşamaya çalışan
            bir davetli hizmet halkası olmak için vardır.
          </p>
        </div>
      </section>

      {/* ── KURULUŞ GEREKÇESİ ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-4 sticky top-24">Varoluş Sebebi</div>
          </div>
          <div className="space-y-6 text-text-secondary text-[16.5px] leading-[1.95]">
            <p>
              Dünyanın dört bir yanında Ehlibeyt muhabbeti yaşanıyor. Camiler, dergahlar, cemevleri, dijital
              platformlar — bu sevginin farklı biçimlerle ifade edildiği sayısız mecra var. Bu gerçeklik
              değerlidir ve korunması gerekir.
            </p>
            <p>
              Ama aynı zamanda şunu da görüyoruz: Ehlibeyt adı, zaman zaman grupsal çıkarların, siyasi
              iktidar iddialarının ve insanları bağımlı kılan yapıların gölgesinde kullanılıyor. Büyük isimler
              küçük amaçlara hizmet edecek biçimde araçsallaştırılıyor.
            </p>
            <p>
              Ahdü&apos;l-Mîzân Meclisi bu tehlikenin farkındadır. Ve bu nedenle varoluşunun ilk koşulunu
              şöyle koymuştur: <strong className="text-emerald-dark">Bu meclis, kimseyi kendine bağlamamalıdır.</strong>
            </p>

            <blockquote className="border-l-2 border-gold pl-6 py-2 my-8 font-display italic text-[18px] text-emerald-dark/75 leading-relaxed">
              &ldquo;Adalet, kendinden başlayan; merhamet, kendinden taşan bir sorumluluktur.&rdquo;
            </blockquote>

            <p>
              Meclisin hedefi; insanlara hazır bir yol haritası sunmak değil, kendi yollarını bulmalarına
              zemin hazırlamaktır. İlim, muhasebe, dayanışma ve dürüstlük — bunlar bir grubun mülkü değildir.
              Bunlar insanlığın ortak mirasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 SÜTUN ──────────────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Meclisin Özü</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] font-semibold text-emerald-dark">
              Dört Temel Sütun
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((v) => (
              <div key={v.num} className="bg-card border border-border p-7 hover:border-gold/35 transition-all duration-500 group">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold/55 mb-5 font-medium">{v.num}</div>
                <h3 className="font-display text-[1.2rem] font-semibold text-emerald-dark mb-3 group-hover:text-emerald transition-colors">
                  {v.title}
                </h3>
                <p className="text-text-muted text-[13.5px] leading-[1.85]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KERBELÂ'DAN ÇIKARILANLAR ──────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 sticky top-24">Kerbelâ Dersi</p>
          </div>
          <div className="space-y-6 text-text-secondary text-[16.5px] leading-[1.95]">
            <p>
              Meclisin ahlâki çerçevesi, büyük ölçüde Kerbelâ vakasının derin okunmasından beslenir.
              H. 61&apos;de yaşanan bu olay; yalnızca tarihsel bir trajedi değil, evrensel bir ahlâk
              manifestosudur.
            </p>
            <p>
              İmam Hüseyin; güçlü bir orduya karşı 72 kişiyle durdu. Üç gün susuz bırakıldı. Ailesi
              esir edildi. Ama biat etmedi — çünkü biat etmek, zulme meşruiyet tanımak olurdu.
            </p>
            <p>
              Kerbelâ&apos;dan çıkarılan üç evrensel ders:
            </p>
            <ul className="space-y-4 pl-0">
              <li className="flex items-start gap-4">
                <span className="text-gold/60 font-display text-[1.1rem] mt-0.5">—</span>
                <span><strong className="text-emerald-dark font-semibold">Güce değil, hakka bağlı ol.</strong> Hüseyin&apos;in karşısındakiler hata yapmadılar çünkü güçsüzdüler; hata yaptılar çünkü güce teslim oldular.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold/60 font-display text-[1.1rem] mt-0.5">—</span>
                <span><strong className="text-emerald-dark font-semibold">Dönmek mümkündür.</strong> Hürre, Hüseyin&apos;e karşı yönlendirilmiş ordunun komutanıydı. Savaş başlamadan geri döndü. Vicdan, en karanlık anda bile işler.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold/60 font-display text-[1.1rem] mt-0.5">—</span>
                <span><strong className="text-emerald-dark font-semibold">Yas bilinçsiz kalırsa yalnızca acıdır.</strong> Kerbelâ&apos;yı anmak, onu yaşatmak değildir. Yaşatmak; o değerleri kendi hayatına taşımaktır.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ETİK TAAHHÜTLER ──────────────────────────────────────── */}
      <section className="bg-emerald-deep py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geo-dark opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Değişmez Taahhütler</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] font-bold text-chalk">
              Etik Güvenceler
            </h2>
            <p className="text-chalk/40 text-[14px] mt-4 max-w-xl mx-auto leading-relaxed">
              Bu taahhütler, meclisin hiçbir koşulda ihlal etmemeyi kabul ettiği ilkelerdir.
              Bunlar pazarlık konusu değildir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-gold/15 px-6 py-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="8" cy="8" r="7" stroke="#B49448" strokeWidth="1" />
                  <path d="M5 8l2 2 4-4" stroke="#B49448" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-chalk/65 text-[14px] leading-[1.8]">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SON CTA ──────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <div className="gold-line mx-auto mb-8" />
        <p className="font-display italic text-text-secondary text-[17px] md:text-[19px] leading-[1.85] mb-10">
          &ldquo;Bu meclise adım atmak; kendi ahlâkını sorgulamayı kabul etmektir.
          Başkalarını değil — önce kendini.&rdquo;
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/mizan-ilkeleri" className="btn-emerald">Mîzân İlkeleri</Link>
          <Link href="/davet-usulu" className="btn-outline">Davet Usulü</Link>
        </div>
      </section>
    </>
  );
}
