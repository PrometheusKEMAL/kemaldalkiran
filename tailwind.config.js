/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D0A',
        'bg-deep': '#070907',
        surface: '#101810',
        'surface-2': '#0D120D',
        card: '#0F150F',
        'card-hover': '#131B13',
        border: 'rgba(201,166,70,0.14)',
        'border-strong': 'rgba(201,166,70,0.28)',
        emerald: {
          deep: '#0A4A37',
          dark: '#0C5741',
          DEFAULT: '#0F6B4F',
          mid: '#158A66',
          light: '#1FA97E',
          muted: 'rgba(15,107,79,0.12)',
        },
        gold: {
          deep: '#A6832F',
          DEFAULT: '#C9A646',
          light: '#D9BC6A',
          muted: 'rgba(201,166,70,0.22)',
          pale: 'rgba(201,166,70,0.10)',
        },
        chalk: '#E8E2D3',
        charcoal: '#070907',
        'text-primary': '#E8E2D3',
        'text-secondary': '#A9A89F',
        'text-muted': 'rgba(169,168,159,0.55)',
        'text-inverse': '#070907',
      },
      fontFamily: {
        seal: ['"Cinzel"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        prose: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.25em',
      },
      backgroundImage: {
        'geo-dark': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23C9A646' stroke-width='0.4' opacity='0.5'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3Cpath d='M30 15L45 30L30 45L15 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'geo-star': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A646' stroke-width='0.5' opacity='0.5'%3E%3Cpath d='M40 8 L52 28 L72 40 L52 52 L40 72 L28 52 L8 40 L28 28 Z'/%3E%3Crect x='22' y='22' width='36' height='36' transform='rotate(45 40 40)'/%3E%3Crect x='22' y='22' width='36' height='36'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 2px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,166,70,0.15)',
        'gold': '0 0 0 1px rgba(201,166,70,0.28), 0 4px 32px rgba(201,166,70,0.1)',
        'gold-glow': '0 0 40px rgba(201,166,70,0.18)',
        'emerald-glow': '0 0 60px rgba(15,107,79,0.25)',
        'navbar': '0 4px 32px rgba(0,0,0,0.5)',
        'hero': '0 24px 80px rgba(0,0,0,0.7)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.9s ease forwards',
        'light-pulse': 'lightPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'glow': 'glow 5s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lightPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(201,166,70,0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(201,166,70,0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
