import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export const metadata: Metadata = {
  title: {
    default: 'Kemal Dalkıran',
    template: '%s — Kemal Dalkıran',
  },
  description: 'Kemal Dalkıran — Kişisel yazılar ve düşünceler.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <div className="film-grain" aria-hidden="true" />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
