/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },

      colors: {
        veryLightGray: "hsla(225, 7.40%, 89.40%, 0.39)",
        lighterGray: "hsla(0, 0.00%, 50.60%, 0.36)",
        darkPurple: "hsl(275, 52%, 37%)",
        lightPurple: "hsl(280, 30%, 87%)",
      },
    },
  },
  plugins: [],
};