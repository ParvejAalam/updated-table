/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/+not-found.tsx", "./App.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        costumYellow:"#ebe134",
        costumeGreen:"#39fc03"
      }
    },
  },
  plugins: [],
}