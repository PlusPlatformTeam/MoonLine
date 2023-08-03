/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'custom-blue': '#073F63',
        'custom-green':'#024F44',
        'custom-yellow':'#98980F',
      },

    },
  },
  variants: {},
  plugins: [],
};
