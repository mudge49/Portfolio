/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'caribbean-current': '#006d77ff',
        'tiffany-blue': '#83c5beff',
        'alice-blue': '#edf6f9ff',
        'pale-dogwood': '#ffddd2ff',
        'atomic-tangerine': '#e29578ff'
      }
    },
  },
  plugins: [],
}