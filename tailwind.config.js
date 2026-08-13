/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#242426',
        input: '#242426',
        ring: '#F46C38',
        background: '#151312',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#F46C38',
          hover: '#E05B28',
          active: '#CC4F1F',
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#C5FF41',
          hover: '#B5EE30',
          active: '#A2D824',
          foreground: '#000000',
        },
        semantic: {
          success: '#C5FF41',
          warning: '#F59E0B',
          error: '#FF2600',
          info: '#0000EE',
        },
        surface: {
          1: '#151312',
          2: '#1A1A1A',
          3: '#242426',
          hover: '#2A2A2E',
        },
        figma: {
          orange: '#F46C38',
          lime: '#C5FF41',
          blue: '#0000EE',
          bg: '#151312',
          surface: '#1A1A1A',
          border: '#242426',
          white: '#FFFFFF',
          muted: '#998F8F',
          subtle: '#767676',
          red: '#FF2600',
        },
        studio: {
          bg: '#151312',
          surface: '#1A1A1A',
          elevated: '#242426',
          border: '#242426',
          muted: '#998F8F',
          subtle: '#767676',
          accent: '#F46C38',
          'accent-glow': '#C5FF41',
        },
      },
      boxShadow: {
        'glow-coral': '0 0 35px rgba(244, 108, 56, 0.25)',
        'glow-lime': '0 0 35px rgba(197, 255, 65, 0.25)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
