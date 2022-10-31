/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '825px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary:'#d902ee',
        secondary:'#320d3e',
        secondary2:'#f162ff',
        secondary3:'#ffd79d',
      },
      fontFamily: {
        primary: ['Oswald', 'sans-serif'],
        secondary: ['Roboto',' sans-serif'],
      }
     
    },
  },
  plugins: [],
}
