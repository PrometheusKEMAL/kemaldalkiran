'use client';

import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
    };

    document.addEventListener('click', handleFirstClick, { once: true });
    return () => document.removeEventListener('click', handleFirstClick);
  }, [hasInteracted, volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp3" loop preload="auto" />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/70 backdrop-blur-xl border border-white/[0.06] pl-4 pr-3 py-2.5">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="text-white/40 hover:text-white/80 transition-colors duration-500"
          aria-label={isPlaying ? 'Durdur' : 'Çal'}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4l15 8-15 8V4z" />
            </svg>
          )}
        </button>

        {/* Equalizer */}
        <div className="flex items-end gap-[2px] h-3 w-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[2px] bg-white/30 rounded-full transition-all"
              style={{
                height: isPlaying && !isMuted
                  ? `${4 + (i % 3) * 4}px`
                  : '2px',
                animation: isPlaying && !isMuted
                  ? `eq ${0.5 + (i % 3) * 0.2}s ease-in-out ${i * 0.1}s infinite alternate`
                  : 'none',
              }}
            />
          ))}
        </div>

        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolume}
          className="volume-slider w-16 h-[2px] appearance-none bg-white/10 rounded-full cursor-pointer accent-white/40"
          aria-label="Ses seviyesi"
        />

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className="text-white/30 hover:text-white/60 transition-colors duration-500"
          aria-label={isMuted ? 'Sesi aç' : 'Sessize al'}
        >
          {isMuted || volume === 0 ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            </svg>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes eq {
          0% { height: 3px; }
          100% { height: 12px; }
        }
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: background 0.3s;
        }
        .volume-slider::-webkit-slider-thumb:hover {
          background: rgba(255,255,255,0.8);
        }
        .volume-slider::-moz-range-thumb {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
