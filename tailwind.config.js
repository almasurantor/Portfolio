/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1f77d6",
        background: "#010c18",
        cardbg: "#061840",
        white: "#FFFFFF",
        hovercolor: "#c2c2c2",
        navbg: "#061840",
        overlaybg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
}