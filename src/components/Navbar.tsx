'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/ilkelerimiz', label: 'İlkelerimiz' },
  { href: '/ogreti', label: 'Öğreti' },
  { href: '/semboller', label: 'Semboller' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/uyelik', label: 'Üyelik' },
  { href: '/tuzuk', label: 'Tüzük' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(7,9,7,0.82)'
          : 'rgba(7,9,7,0.35)',
        backdropFilter: 'blur(14px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.3)',
        borderBottom: scrolled
          ? '1px solid rgba(201,166,70,0.20)'
          : '1px solid rgba(201,166,70,0.08)',
        boxShadow: scrolled
          ? '0 4px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(201,166,70,0.12)'
          : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Logo size={36} variant="default" />
          <div className="hidden lg:block">
            <div className="font-seal text-[13px] tracking-[0.22em] uppercase font-semibold leading-tight text-gold">
              Ahd-i Mizan
            </div>
            <div className="font-sans text-[8px] tracking-[0.28em] uppercase leading-tight text-text-muted mt-0.5">
              Manevî Kardeşlik
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans relative text-[10.5px] tracking-wide uppercase font-medium transition-colors duration-300 whitespace-nowrap pb-0.5 ${
                isActive(link.href)
                  ? 'text-gold'
                  : 'text-text-secondary hover:text-gold'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right — Üye Girişi + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase font-medium text-charcoal bg-gold px-5 py-2.5 shrink-0 relative overflow-hidden group hover:bg-gold-light"
            style={{ transition: 'background-color 350ms cubic-bezier(0.4,0,0.2,1)' }}
          >
            Davet
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-gold/70 hover:text-gold transition-colors p-1"
            aria-label="Menü"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M3 14H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, type: 'tween' }}
            className="xl:hidden border-t border-gold/10"
            style={{ background: 'rgba(7,9,7,0.97)', backdropFilter: 'blur(14px)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25, type: 'tween' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[11px] tracking-wider uppercase font-medium transition-colors ${
                      isActive(link.href) ? 'text-gold' : 'text-text-secondary hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-gold/10">
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase font-medium text-charcoal bg-gold px-4 py-2.5 hover:bg-gold-light transition-colors"
                >
                  Davet
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
