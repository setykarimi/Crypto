/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      container: {
        center: true,
        screens: {
          lg: '1440px',
          md: '1440px',
          sm:'100%'
        }
      },
      colors:{
        gray:{
          300: '#99A3A9'
        },
        blue:{
          primary: '#2150F5'
        },
        red:{
          primary: '#F53A21'
        }
      },
      fontSize:{
        14: '14px',

      }
    },
  },
  plugins: [],
}