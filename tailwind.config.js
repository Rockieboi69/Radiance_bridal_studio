/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft ivory / warm white base
        ivory: {
          DEFAULT: '#FBF8F3',
          50: '#FEFDFB',
          100: '#FBF8F3',
          200: '#F5EFE6',
          300: '#EFE7D9',
        },
        // Champagne gold accents
        champagne: {
          DEFAULT: '#C9A86A',
          light: '#E4D2A8',
          dark: '#8A6A2D',
          deep: '#6E521F',
        },
        // Subtle blush pink highlights
        blush: {
          DEFAULT: '#E8C9C4',
          light: '#F5E6E2',
          soft: '#F3DAD4',
        },
        charcoal: {
          DEFAULT: '#120F0A',
          light: '#261F18',
          soft: '#382F26',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
        wide2: '0.3em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(140, 107, 47, 0.18)',
        'soft-lg': '0 30px 80px -25px rgba(140, 107, 47, 0.25)',
        glass: '0 8px 40px rgba(43, 38, 34, 0.08)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #C9A86A, transparent)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(6deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
