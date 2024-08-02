/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto' :[ "Roboto"]
      },
      colors : { 
        'translime' : ' #d4f7b619',
        'translimedark' : '#a3f4391b'
      }, 
      height : {
        '300' : '1000px'
      }
    
    },
  },
  plugins: [],
}

