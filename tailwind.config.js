const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
