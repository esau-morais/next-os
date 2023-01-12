const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      dark: '#01070E',
      darker: '#05070D',
      light: '#EDF0F6',
      lighter: '#FAFAFE',
      darkGray: '#3D4048',
      gray: '#C7C8CC',
      green: '#86FD9A',
      lilac:'#86FD9A',
      red: '#FD8686'
    },
    fontSize: {
      base: '1rem',
      'h1-mb': '4rem',
      'h1': '6rem'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-space_grotesk)', ...fontFamily.sans]
      }
    }
  },
  plugins: [],
}
