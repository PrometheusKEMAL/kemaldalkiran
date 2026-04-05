import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'Kemal Dalkıran hakkında.',
};

export default function HakkimdaPage() {
  return (
    <>
      {/* Cinematic Portrait Header */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden -mt-14">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.8)' }}
        >
          <source src="/hakkimda-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">
            Hakkımda
          </p>
          <h1 className="font-display leading-[0.85] text-white mb-5">
            <span className="block text-[48px] md:text-[80px] lg:text-[96px] font-bold tracking-tight">
              KEMAL
            </span>
            <span className="block text-[44px] md:text-[72px] lg:text-[88px] italic font-light tracking-wide text-white/70">
              Dalkıran
            </span>
          </h1>
          <div className="w-12 h-px bg-white/30 mb-5" />
          <p className="text-white/35 text-[13px] md:text-[14px] font-light tracking-wide max-w-xs">
            Felsefe, edebiyat ve müziğin kesişim noktası
          </p>
        </div>
      </div>

      <section className="max-w-[680px] mx-auto px-6 pt-16 pb-28">
        <div className="space-y-7 text-white/50 text-[16.5px] leading-[1.9] font-light">
          <p>
            Dijital dünyanın mimarisi ile düşünce dünyasının derinlikleri arasında köprü kurmayı amaçlayan bir üreticiyim. Profesyonel hayatıma bir web tasarımcısı olarak devam ederken, zihnimin ve ruhumun yankılarını felsefe, edebiyat ve müzik aracılığıyla somutlaştırıyorum.
          </p>

          <p>
            Bu platformu, kendi tasarladığım bir dijital tuval olarak; kelimelerimi, seslerimi ve sanata dair bakış açımı paylaşmak üzere hayata geçirdim. Yazılarımda sıklıkla varoluşun karmaşık doğasına, yabancılaşmaya ve insan doğasına odaklanıyorum.
          </p>

          <blockquote className="border-l border-white/10 pl-8 my-14 italic text-white/40 text-xl font-display">
            &ldquo;Amor Fati — Kaderini sev.&rdquo;
            <span className="block text-[13px] text-white/20 mt-3 not-italic tracking-wide">Friedrich Nietzsche</span>
          </blockquote>

          <p>
            Özellikle Nietzsche&apos;nin Amor Fati felsefesi, kaleme aldığım bu sözcüklerin ve hayata karşı duruşumun temel yapıtaşlarından birini oluşturuyor. Benim için yazmak, yalnızca bir şeyler anlatmak değil; okuyucuyu kendi içsel yolculuğuna davet etmektir.
          </p>

          <p>
            Sanatın farklı disiplinlerinden beslenen bir yapım var. Bir yandan edebiyatın ve şiirin o yoğun, vurucu dünyasında gezinirken, diğer yandan müziğin ve sesin dönüştürücü gücünden ilham alıyorum. Mikrofonun başına geçtiğimde hissettiğim tutku, yazarken satır aralarında kaybolma hissiyle aynı kaynaktan besleniyor.
          </p>

          <p>
            Kelimelerin tıkandığı yerde müziğin ve melodilerin devreye girdiğine inanıyorum.
          </p>

          <div className="h-px w-full bg-white/[0.06] my-14" />

          <p className="text-white/30 text-[14px]">
            Burada yer alan tüm içerikler; müziğe, felsefeye ve sanata duyduğum derin ilginin birer yansımasıdır. Düşüncelerime ve bu dijital yolculuğa ortak olduğunuz için teşekkür ederim.
          </p>
        </div>
      </section>
    </>
  );
}
