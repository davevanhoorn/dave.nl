const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '.dark', ':global(.dark)'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mulish)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-sa-long-beach)'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
