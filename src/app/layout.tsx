import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: {
    default: 'Ahd-i Mizan | Ehlibeyt Sevgisi, Ahlak ve Manevî Kardeşlik',
    template: '%s — Ahd-i Mizan',
  },
  description: 'Ahd-i Mizan; Ehlibeyt sevgisi, ahlak, insan sevgisi, kul bilinci, hizmet ve mahrem eğitim ilkeleriyle şekillenen seçkin bir manevî kardeşlik yapısıdır.',
  keywords: ['Ahd-i Mizan', 'Ehlibeyt sevgisi', 'ahlak', 'edep', 'kul bilinci', 'insan sevgisi', 'hizmet', 'mahrem eğitim', 'manevi kardeşlik', 'İmam Mehdi', 'mizan'],
  openGraph: {
    title: 'Ahd-i Mizan | Ehlibeyt Sevgisi, Ahlak ve Manevî Kardeşlik',
    description: 'Ehlibeyt sevgisiyle ahlakı kuşanmak, insanı incitmeden hakikate yürümek, kul bilinciyle yaşamak ve zamanın sahibine hizmet edecek olgunluğa erişmek.',
    locale: 'tr_TR',
    type: 'website',
  },
};

import BackgroundAudio from '@/components/BackgroundAudio';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col bg-bg">
        <ScrollProgress />
        <BackgroundAudio />
        <div className="paper-texture" aria-hidden="true" />
        <Navbar />
        <main className="flex-1 pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
