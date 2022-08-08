/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Nanum Gothic", "sans-serif"],
      bold: ["Jua", "sans-serif"],
      special: ["Yeon Sung", "sans-serif"],
    },
    colors: {
      main: "#319590",
      support: "#667EEA",
    },
    extend: {},
  },
  plugins: [],
};
