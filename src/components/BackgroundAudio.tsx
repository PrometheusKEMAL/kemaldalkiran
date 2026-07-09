'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Optional: Lower volume slightly for background music
    // audio.volume = 0.5;

    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.warn("Autoplay blocked by browser. User interaction needed.", err);
      });
    };

    // First attempt to play
    tryPlay();
    
    // Fallback: start on first interaction if autoplay is blocked
    const handleInteraction = () => {
      if (!hasStarted) {
        tryPlay();
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      setHasStarted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/bg-music.mp4" preload="auto" />
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center p-3 sm:p-4 bg-surface/80 backdrop-blur border border-gold/30 hover:border-gold shadow-card hover:shadow-gold-glow text-gold rounded-full transition-all duration-350 transform hover:-translate-y-1 active:scale-95 group"
        aria-label={isPlaying ? "Müziği Durdur" : "Müziği Başlat"}
        title={isPlaying ? "Müziği Durdur" : "Müziği Başlat"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
        )}
        
        {/* Decorative floating music note */}
        {isPlaying && (
          <Music className="w-3 h-3 absolute -top-1 -right-1 animate-bounce text-gold opacity-80" />
        )}
      </button>
    </>
  );
}
