/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:'Proxima Nova',
    container:{
      center:true
    },
    extend: {
      colors:{
        'green':'#1DB954',

        'dark':'#121212',
        'light':'#282828',
        'lightest':'#ccc',
        'darkest':'#191414'
      }
    },
  },
  
  plugins: [],
}
