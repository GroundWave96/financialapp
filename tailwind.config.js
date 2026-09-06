/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#FF3B5C', // A cor principal
        dark: '#1E1E2D',  // O fundo escuro do aplicativo
      }
    },
  },
  plugins: [],
}