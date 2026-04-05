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
        bg: '#000000',
        surface: '#0a0a0a',
        card: '#111111',
        border: 'rgba(255,255,255,0.08)',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255,255,255,0.55)',
        'text-muted': 'rgba(255,255,255,0.3)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        cinematic: '0.25em',
        wide2: '0.12em',
      },
      aspectRatio: {
        'cinema': '2.39 / 1',
        'film': '16 / 9',
      },
    },
  },
  plugins: [],
};
