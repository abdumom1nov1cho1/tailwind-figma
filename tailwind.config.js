/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},

    screens:{
      xl:"1700px",
      lg:"1200px",
      md:"1060px",
      xs:"980px",
      sm:"768px",
    }
  },
  plugins: [],
}
