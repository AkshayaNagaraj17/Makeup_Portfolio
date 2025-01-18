/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all the paths where Tailwind will look for classes
  ],
  theme: {
    extend: {
      colors:{
        customBrown:"#68331D"
      }
    },
  },
  plugins: [],
}

