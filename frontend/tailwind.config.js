/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all the paths where Tailwind will look for classes
  ],
  theme: {
    extend: {
      fontFamily:{
        lexend: ['Lexend Giga', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        cursive:['Dancing Script','serif'],
        welcome:['Architects Daughter','serif'],
        avr:['Average Sans','serif']
      },
      colors:{
        customBrown:"#68331D",
        customBeige:"#FEF2EC"
      }
    },
  },
  plugins: [],
}

