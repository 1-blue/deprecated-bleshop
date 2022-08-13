/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Nanum Gothic", "sans-serif"],
      bolder: ["Jua", "sans-serif"],
      special: ["Yeon Sung", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#319590",
        support: "#667EEA",
      },
    },
  },
  plugins: [],
};
