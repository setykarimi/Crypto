/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // screens: {
        //   xl:'1440px',
        //   lg: '1440px',
        //   md: '100%',
        //   sm:'100%'
        // }
      }
    },
  },
  plugins: [],
}