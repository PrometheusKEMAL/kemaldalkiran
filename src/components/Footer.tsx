import Link from 'next/link';
import Logo from './Logo';

const footerLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/meclis-hakkinda', label: 'Meclis Hakkında' },
  { href: '/mizan-ilkeleri', label: 'Mizan İlkeleri' },
  { href: '/tedris-defterleri', label: 'Tedris Defterleri' },
  { href: '/kutuphane', label: 'Kütüphane' },
  { href: '/etkinlikler', label: 'Etkinlikler' },
  { href: '/davet-usulu', label: 'Davet Usulü' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0D0A 0%, #070907 100%)' }}
    >
      {/* Top shimmer border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,166,70,0.5) 40%, rgba(201,166,70,0.5) 60%, transparent 100%)' }} />

      {/* Subtle geo overlay */}
      <div className="absolute inset-0 bg-geo-dark opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Center — Logo + Brand */}
        <div className="flex flex-col items-center text-center mb-12">
          <Logo size={60} variant="default" className="mb-6" />
          <div className="font-seal text-[15px] tracking-[0.3em] uppercase text-gold font-semibold mb-3">
            AHD-İ MİZAN
          </div>
          <div className="w-12 h-px my-3" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,166,70,0.5), transparent)' }} />
          <p className="font-display italic text-[15px] text-text-secondary/80 max-w-md leading-relaxed">
            Ehlibeyt sevgisiyle ahlakı kuşanmak, insanı incitmeden hakikate yürümek.
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans group relative text-[10px] tracking-[0.18em] uppercase text-text-muted hover:text-gold transition-colors duration-300"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold/50 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Ethics line */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="font-sans text-[10.5px] tracking-wide leading-relaxed text-text-muted">
            Ahd-i Mizan; şiddeti, nefreti, istismarı ve baskıyı reddeder. Hiçbir kişi mutlak otorite değildir.
            Üyelik gönüllülük esasına dayanır; manevî hizmet para karşılığı satılmaz.
          </p>
        </div>

        {/* Bottom */}
        <div className="h-px w-full mb-8" style={{ background: 'rgba(201,166,70,0.08)' }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <span className="font-sans text-[9.5px] tracking-[0.18em] uppercase text-text-muted">
            &copy; {new Date().getFullYear()} Ahd-i Mizan
          </span>
          <span className="font-display italic text-[13px] text-gold/50">
            Bu yol, görünmek isteyenlerin değil; olgunlaşmak isteyenlerin yoludur.
          </span>
        </div>
      </div>
    </footer>
  );
}
