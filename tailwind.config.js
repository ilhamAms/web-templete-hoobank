/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimwhite: "rgba(255, 255 ,255, 0.7)",
        dimblue: "rgba(9, 151, 124, 0.1)"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1280px",
      xs: "1700px",

    },
  },
  plugins: [],
}