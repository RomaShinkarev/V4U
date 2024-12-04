/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#909090',
        accent: '#2A2A2A',
        light: '#F7F7FF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        donpoligrafbum: ['Donpoligrafbum', 'sans-serif'],
      },
      maxWidth: {
        '1920': '1920px',
      },
    },
  },
  plugins: [],
};