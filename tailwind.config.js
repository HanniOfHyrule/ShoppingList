const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      purple: "#71536B",
      rose: "#EAD0BF",
      black: "#171717",
      white: "#fafafa",
      lime: "#CAC977",
      red: "#9A3B3F",
      orange: "#F2AA6B",
    },
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
    fontFamily: {
      Luis: [
        "Trebuchet MS",
        "Lucida Sans Unicode",
        "Lucida Grande",
        "Lucida Sans",
        "Arial, sans-serif",
      ],
    },
    // colors: { primary: "orange", secondary: "red-200" },
  },
  plugins: [tailwindcss, autoprefixer],
};
