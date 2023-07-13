
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'semi-transparent-blue': 'rgba(0, 136, 255, 0.33)',
      },
      backgroundImage: {
        'gradient-top-to-bottom': 'linear-gradient(to bottom, #022140, #01101F)',
      },
        
      
    },
  },
  variants: {},
  plugins: [],
}
