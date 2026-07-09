interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'light' | 'gold';
}

export default function Logo({ size = 40, className = '', variant = 'default' }: LogoProps) {
  // Dark-theme brand: gold is the primary mark, chalk for light contexts
  const primary = variant === 'light' ? '#E8E2D3' : '#C9A646';
  const accent = variant === 'light' ? 'rgba(232,226,211,0.5)' : 'rgba(201,166,70,0.55)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Eight-pointed seal — two overlapping squares (halka / mühür) */}
      <rect
        x="24" y="24" width="52" height="52"
        stroke={primary} strokeWidth="1.2" opacity="0.85"
      />
      <rect
        x="24" y="24" width="52" height="52"
        transform="rotate(45 50 50)"
        stroke={primary} strokeWidth="1.2" opacity="0.85"
      />

      {/* Inner ring — kardeşlik halkası */}
      <circle cx="50" cy="50" r="24" stroke={accent} strokeWidth="0.6" opacity="0.6" />

      {/* Kapı / eşik — arched threshold at base */}
      <path
        d="M 40 66 L 40 54 A 10 10 0 0 1 60 54 L 60 66"
        stroke={primary} strokeWidth="1" fill="none" opacity="0.55"
      />

      {/* Nur — ascending light ray with diamond tip */}
      <line x1="50" y1="46" x2="50" y2="26" stroke={primary} strokeWidth="1.1" strokeLinecap="round" />
      <polygon points="50,20 52.5,26 50,32 47.5,26" fill={primary} opacity="0.9" />

      {/* Mizan — balance beam */}
      <line x1="36" y1="46" x2="64" y2="46" stroke={primary} strokeWidth="1.1" strokeLinecap="round" opacity="0.9" />
      {/* Left pan */}
      <line x1="39" y1="46" x2="37" y2="54" stroke={accent} strokeWidth="0.7" />
      <line x1="39" y1="46" x2="41" y2="54" stroke={accent} strokeWidth="0.7" />
      <path d="M 35 54 Q 39 57 43 54" stroke={primary} strokeWidth="0.9" fill="none" opacity="0.8" />
      {/* Right pan */}
      <line x1="61" y1="46" x2="59" y2="54" stroke={accent} strokeWidth="0.7" />
      <line x1="61" y1="46" x2="63" y2="54" stroke={accent} strokeWidth="0.7" />
      <path d="M 57 54 Q 61 57 65 54" stroke={primary} strokeWidth="0.9" fill="none" opacity="0.8" />

      {/* Center pivot — sükût noktası */}
      <circle cx="50" cy="46" r="1.6" fill={primary} />
    </svg>
  );
}
