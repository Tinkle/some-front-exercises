/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '3xl': '2560px',
    },
    backgroundImage: {
      'index-bg': "url('/assets/bg.jpg')",
    },
  },
  plugins: [],
}
