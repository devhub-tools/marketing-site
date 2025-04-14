import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: {
        50: "#9addff",
        100: "#9addff",
        200: "#61caff",
        300: "#3098e3",
        400: "#1d6dbc",
        500: "rgb(20, 74, 150)",
        600: "rgb(18, 52, 106)",
        700: "#102951",
        800: "#0d1e38",
        900: "#08111f",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "rgb(75, 85, 99)",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        gray: {
          50: "#f6f7f9",
          100: "#ebeef3",
          200: "#d3dae4",
          300: "#adbacc",
          400: "#8195af",
          500: "#617996",
          600: "#4c607d",
          700: "#3f4e65",
          800: "#374355",
          900: "#2b3340",
          950: "#212630",
        },
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
