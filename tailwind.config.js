/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // enables dark mode with <html class="dark">
  theme: {
    extend: {
      colors: {
        primary: "#5044E5",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
