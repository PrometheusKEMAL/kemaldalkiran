'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/yazilar', label: 'Yazılar' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-[11px] tracking-cinematic uppercase text-white/80 hover:text-white transition-colors">
          <Logo size={30} />
          Kemal Dalkıran
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-cinematic uppercase transition-colors duration-500 ${
                link.href === '/'
                  ? pathname === '/' ? 'text-white' : 'text-white/30 hover:text-white/60'
                  : pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-white'
                    : 'text-white/30 hover:text-white/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/40 hover:text-white transition-colors"
          aria-label="Menü"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {mobileOpen ? (
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1" />
            ) : (
              <>
                <path d="M2 5H16" stroke="currentColor" strokeWidth="1" />
                <path d="M2 13H16" stroke="currentColor" strokeWidth="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className="h-px w-full bg-white/[0.06]" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[11px] tracking-cinematic uppercase transition-colors ${
                  pathname === link.href ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="h-px w-full bg-white/[0.06]" />
        </div>
      )}
    </header>
  );
}
