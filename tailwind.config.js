/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./assets/bg.gif')",
        'bg': "url('./assets/club_logo.jpg')",
      },
      screens: {
        'xs': '350px',
      }
    },
  },
  plugins: [],
}
