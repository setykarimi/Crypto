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
          300: '#99A3A9',
          400: "#4C5254",
          400: '#737B7F',
          800: "#2E3133"
        },
        blue:{
          primary: '#2150F5',
          100: "#DAE9F0",
          400: "#B5C5FC",
          500: "#466DF7",
          700: "#1C43CC",
          800: "#1635A3",
          
        },
        red:{
          primary: '#F53A21'
        },
        yellow: {
          primary: "#FFF110"
        },
        orange: {
          primary: "#E5AE1F"
        },
        green: {
          primary: "#18CE2A"
        }
       
      },
      fontSize:{
        14: '14px',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1100px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1300px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        
      },
      zIndex: {
        "1": 1
      }
    },
  },
  plugins: [],
}