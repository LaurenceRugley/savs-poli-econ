/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        'gold-light': 'rgb(var(--gold-light) / <alpha-value>)',
        limestone: 'rgb(var(--limestone) / <alpha-value>)',
        'limestone-dark': 'rgb(var(--limestone-dark) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15' }],
        'display-sm': ['1.625rem', { lineHeight: '1.2' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8' }],
        body: ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        prose: '40rem',
      },
    },
  },
  plugins: [],
};
