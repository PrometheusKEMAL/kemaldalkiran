'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, SkipForward, SkipBack } from 'lucide-react';

// Dilediğiniz zaman buraya yeni müzik dosyalarının isimlerini ekleyebilirsiniz.
// (Şarkıları projedeki 'public' klasörüne atmanız yeterlidir.)
const PLAYLIST = [
  "/edip.mp4",
];

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
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

  // Playlist'te şarkı değiştiğinde veya müzik bittiğinde sıradaki başlasın
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Yeni şarkıyı yükle ve oynat
      audioRef.current.play().catch(e => console.warn("Otomatik oynatma engellendi:", e));
    }
  }, [currentTrackIndex, isPlaying]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
  };

  // Bir şarkı bittiğinde otomatik diğerine geç (son şarkıysa başa döner)
  const handleTrackEnded = () => {
    handleNextTrack();
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay blocked:", err);
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
      {/* Döngü (loop) yerine onEnded event'i ile kendi çalar listemizi yöneteceğiz */}
      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentTrackIndex]} 
        onEnded={handleTrackEnded}
        preload="auto" 
      />
      
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 sm:gap-3 transition-all duration-300 ${isExpanded ? 'bg-surface/90 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-gold/30 shadow-[0_0_20px_rgba(201,166,70,0.15)]' : ''}`}>
        
        {/* Genişletilmiş Çalma İşlevleri Paneli */}
        {isExpanded && (
          <div className="flex items-center gap-1 sm:gap-3 animate-fade-in pr-2 border-r border-gold/20">
             
             {/* İleri / Geri Butonları */}
             <div className="flex items-center text-gold/80 px-1 sm:px-2">
                <button 
                   onClick={handlePrevTrack} 
                   className="hover:text-gold transition-colors p-1 transform hover:scale-110 active:scale-95" 
                   title="Önceki Şarkı"
                >
                   <SkipBack size={20} />
                </button>
                <button 
                   onClick={handleNextTrack} 
                   className="hover:text-gold transition-colors p-1 transform hover:scale-110 active:scale-95" 
                   title="Sonraki Şarkı"
                >
                   <SkipForward size={20} />
                </button>
             </div>

             {/* Ses Kontrolü */}
             <div className="flex items-center gap-2 border-l border-gold/10 pl-2 sm:pl-3">
                 <button 
                    onClick={toggleMute}
                    className="text-gold/80 hover:text-gold transition-colors transform hover:scale-110 active:scale-95"
                    title={isMuted || volume === 0 ? "Sesi Aç" : "Sesi Kapat"}
                 >
                    {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                 </button>
                 
                 {/* Mobil ekranda ses barı çok yer kaplamaması için mobilde gizleyip tablette/masaüstünde gösteriyoruz */}
                 <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={isMuted ? 0 : volume} 
                    onChange={handleVolumeChange}
                    className="w-16 sm:w-20 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold hidden md:block"
                    title="Ses Seviyesi"
                 />
             </div>
          </div>
        )}

        {/* Ana Oynat/Durdur ve Genişletme Butonu */}
        <button
          onClick={() => {
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

        {isExpanded && (
           <button 
              onClick={() => setIsExpanded(false)}
              className="text-white hover:text-red-400 bg-red-500/20 hover:bg-red-500/40 transition-colors absolute -top-2 -right-2 rounded-full p-1 border border-red-500/30 w-5 h-5 flex items-center justify-center shadow-lg"
              title="Paneli Gizle"
              style={{ fontSize: "10px" }}
           >
              ✕
           </button>
        )}
      </div>
    </>
  );
}
