/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-white": "#fdfdfd",
        "primary": "#004aad",
        "secondary": "#261e77",
        "tertiary": "#8052fe"
      }
    },
  },
  plugins: [],
}