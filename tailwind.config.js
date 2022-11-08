/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      height: ["responsive", "hover", "focus"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },

      colors: {
        primary: "#DB38B9",
        secondary: "#50CFFB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
