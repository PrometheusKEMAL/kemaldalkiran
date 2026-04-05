import Link from 'next/link';
import SocialIcons from './SocialIcons';

const footerLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/yazilar', label: 'Yazılar' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="h-px w-full bg-white/[0.04]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* Top Row - Logo & Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <Link href="/" className="text-[11px] tracking-cinematic uppercase text-white/40 hover:text-white/70 transition-colors">
            Kemal Dalkıran
          </Link>
          <SocialIcons size={15} />
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-cinematic uppercase text-white/15 hover:text-white/40 transition-colors duration-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="h-px w-full bg-white/[0.04] mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[10px] tracking-cinematic uppercase text-white/10">
            &copy; {new Date().getFullYear()} Kemal Dalkıran. Tüm hakları saklıdır.
          </span>
          <span className="text-[10px] tracking-cinematic uppercase text-white/8">
            Film &middot; Yazı &middot; Düşünce
          </span>
        </div>
      </div>
    </footer>
  );
}
