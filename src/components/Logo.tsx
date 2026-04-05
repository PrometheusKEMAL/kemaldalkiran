interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer thin square frame */}
      <rect
        x="4"
        y="4"
        width="112"
        height="112"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Inner frame with slight offset - premium double border */}
      <rect
        x="10"
        y="10"
        width="100"
        height="100"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      {/* Stylized K lettermark - elegant, geometric */}
      {/* Vertical stem */}
      <line
        x1="40"
        y1="32"
        x2="40"
        y2="88"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Upper diagonal arm */}
      <line
        x1="42"
        y1="60"
        x2="76"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Lower diagonal leg */}
      <line
        x1="42"
        y1="60"
        x2="78"
        y2="88"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Small decorative dot - the writer's mark */}
      <circle
        cx="82"
        cy="88"
        r="2"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
