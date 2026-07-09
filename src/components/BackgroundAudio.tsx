'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Müzik ses ayarı değiştiğinde audio elementine uygula
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay blocked block:", err);
        });
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/bg-music.mp4" preload="auto" />
      
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-300 ${isExpanded ? 'bg-surface/90 backdrop-blur-md p-3 rounded-2xl border border-gold/30 shadow-gold' : ''}`}>
        
        {/* Genişletilmiş Ses Kontrol Paneli */}
        {isExpanded && (
          <div className="flex items-center gap-3 animate-fade-in pr-2 border-r border-gold/20">
             <button 
                onClick={toggleMute}
                className="text-gold/80 hover:text-gold transition-colors"
                title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
             >
                {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
             </button>
             
             <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume} 
                onChange={handleVolumeChange}
                className="w-24 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold"
                title="Ses Seviyesi"
             />
          </div>
        )}

        {/* Ana Oynat/Durdur ve Genişletme Butonu */}
        <button
          onClick={() => {
             // Sadece play/pause yapma, aynı zamanda paneli aç/kapat
             if (!isExpanded) setIsExpanded(true);
             togglePlay();
          }}
          className="relative flex items-center justify-center p-3 sm:p-4 bg-surface/90 backdrop-blur border border-gold/40 hover:border-gold shadow-card hover:shadow-gold-glow text-gold rounded-full transition-all duration-350 transform hover:scale-105 active:scale-95 group"
          title={isPlaying ? "Müziği Durdur" : "Müziği Başlat"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />
          )}
          
          {isPlaying && !isExpanded && (
            <Music className="w-3 h-3 absolute -top-1 -right-1 animate-bounce text-gold opacity-80" />
          )}
        </button>

        {/* Eğer panel açıksa kapatma butonu işlevi gören küçük çarpı yerine müzik ikonu kullanılabilir, veya tıklandığında paneli kapatır */}
        {isExpanded && (
           <button 
              onClick={() => setIsExpanded(false)}
              className="text-xs text-gold/60 hover:text-gold/90 transition-colors absolute -top-2 -right-2 bg-surface rounded-full p-1 border border-gold/20"
              title="Kapat"
           >
              ✕
           </button>
        )}
      </div>
    </>
  );
}
