/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        henny: ['Henny Penny', 'system-ui'],
        Quicksand: ['Quicksand', 'system-ui'],
        Rubik: ['Rubik Bubbles', 'system-ui'],
        Nunito: ['Nunito', 'system-ui'],
      },
    },
  },
  plugins: [],
}

