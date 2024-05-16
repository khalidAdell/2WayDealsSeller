/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "840px",
        xs: "480px",
      },
      colors: {
        primary: "#Fd4b03",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
