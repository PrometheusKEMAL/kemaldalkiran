import HomeAhd from '@/components/HomeAhd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahd-i Mizan | Ehlibeyt Sevgisi, Ahlak ve Manevî Kardeşlik',
  description: 'Ahd-i Mizan; kul bilinci, insan sevgisi, edep, hizmet ve mahrem eğitim ilkeleriyle şekillenen seçkin bir manevî kardeşlik yapısıdır. Bu yol, görünmek isteyenlerin değil; olgunlaşmak isteyenlerin yoludur.',
};

export default function HomePage() {
  return <HomeAhd />;
}
