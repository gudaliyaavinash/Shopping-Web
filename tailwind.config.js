/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '_350_' : '350px',
        '_427_' : '427px',
        '_1100_' : '1100px',
        '_553_' : '553px',
        '_377_' : '377px',
      }
    }
  },
  plugins: []
}