'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Sesi 0.5 (yarıya) ayarlayalım isterseniz, arka plan için daha uygun olabilir.
    // audio.volume = 0.5;

    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        // Otomatik oynatma tarayıcı tarafından engellendi.
        // Kullanıcı sayfayla etkileşime geçene kadar bekle.
        console.warn("Autoplay blocked by browser. User interaction needed.", err);
      });
    };

    // İlk yüklemede oynatmayı dene
    tryPlay();
    
    // Çoğu modern tarayıcı doğrudan sesli autoplay'i engeller.
    // Bu yüzden kullanıcının ilk tıklaması, kaydırması vs. gibi etkileşimlerde müziği başlatıyoruz.
    const handleInteraction = () => {
      if (!isPlaying && audio.paused) {
        tryPlay();
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop src="/bg-music.mp4" preload="auto" />
  );
}
