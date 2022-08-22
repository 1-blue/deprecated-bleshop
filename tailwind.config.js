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
        "my-ping": {
          "0%": { transform: "scale(1, 1)", opacity: 0.5 },
          "100%": { transform: "scale(1.2, 1.2)", opacity: 0.01 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s linear",
        "my-ping": "my-ping 1s linear infinite",
      },
    },
    fontFamily: {
      main: ["Nanum Gothic", "sans-serif"],
      bolder: ["Jua", "sans-serif"],
      special: ["Yeon Sung", "sans-serif"],
    },
    screens: {
      xs: "400px",
      xsm: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
