/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl: "1536px",
    },
    extend: {
      colors: {
        "gray-rgba": "rgba(255, 255, 255, 0.25)",
        "primary-rgba": "rgba(239, 108, 1, 0.7)",
        "d-gray-rgba": "rgba(255, 255, 255, 0.8)",
        "black-rgba": "rgba(0, 0, 0, 0.5)",
        primary: "#ef6c01",
        secondary: "#c9cdd1",
        grayColor: "#6b7688",
        btn: "#ca5b00",
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66666%",
      },
    },
    fontFamily: {
      logo: ["Anton"],
    },
  },
  plugins: [],
};
