/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E31837',
        'secondary': '#1A1A1A',
        'dark': '#000000',
        'light': '#ffffff',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'primary': ['Oswald', 'sans-serif'],
        'secondary': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
