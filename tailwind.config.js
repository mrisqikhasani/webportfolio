/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'sm': "480px",
      },
    },
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}

