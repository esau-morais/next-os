const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      'h6': '1.333rem',
      'h5': '1.777rem',
      'h4': '2.369rem',
      'h3': '3.157rem',
      'h2': '4.209rem',
      'h1': '5.610rem',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans]
      },
      dropShadow: {
        'default': '0px 5px 10px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
}
