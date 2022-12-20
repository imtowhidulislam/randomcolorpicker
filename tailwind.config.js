const { calculateNewValue } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        "random-clr": "repeat(auto-fit, minmax(5rem , 1fr))"
      },
      height: {
        "btn-height" : 'calc(100vh - 60px)'
      }
    },
  },
  plugins: [],
}
