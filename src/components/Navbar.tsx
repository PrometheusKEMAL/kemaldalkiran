'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

interface SessionUser {
  email: string;
  name: string;
}

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/meclis-hakkinda', label: 'Meclis Hakkında' },
  { href: '/mizan-ilkeleri', label: 'Mizan İlkeleri' },
  { href: '/tedris-defterleri', label: 'Tedris Defterleri' },
  { href: '/kutuphane', label: 'Kütüphane' },
  { href: '/etkinlikler', label: 'Etkinlikler' },
  { href: '/davet-usulu', label: 'Davet Usulü' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('/api/auth/session', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data.isLoggedIn && data.user) {
          setUser(data.user);
        }
      })
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    setUser(null);
    router.replace('/uye-girisi');
    router.refresh();
  };


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

        {/* Right — Auth + Mobile toggle */}
        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase font-medium text-charcoal bg-gold px-5 py-2.5 shrink-0 hover:bg-gold-light transition-colors duration-300"
            >
              Çıkış Yap
            </button>
          ) : (
            <Link
              href="/uye-girisi"
              className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase font-medium text-charcoal bg-gold px-5 py-2.5 shrink-0 hover:bg-gold-light transition-colors duration-300"
            >
              Üye Girişi
            </Link>
          )}

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
                {user ? (
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase font-medium text-charcoal bg-gold px-4 py-2.5 hover:bg-gold-light transition-colors"
                  >
                    Çıkış Yap
                  </button>
                ) : (
                  <Link
                    href="/uye-girisi"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase font-medium text-charcoal bg-gold px-4 py-2.5 hover:bg-gold-light transition-colors"
                  >
                    Üye Girişi
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
