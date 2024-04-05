/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg1': "url('./Assets/Image/background1.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}