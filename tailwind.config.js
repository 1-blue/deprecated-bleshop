/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#319590",
        support: "#667EEA",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0.01 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s linear",
      },
    },
    fontFamily: {
      main: ["Nanum Gothic", "sans-serif"],
      bolder: ["Jua", "sans-serif"],
      special: ["Yeon Sung", "sans-serif"],
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
