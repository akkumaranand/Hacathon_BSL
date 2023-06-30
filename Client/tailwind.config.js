/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        richblack: {
          2:"#12B7B6",
          5: "rgba(33, 31, 31, 0.733)",
          25: "#DBDDEA",
          100: "rgba(33, 31, 31, 0.733)",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#F3F3F3",
        },
        blue: {
          100: "#47A5C5",
          200: "#545454",
        },
        pink: {
          200: "#EF476F",
        },
        
        yellow: {
          50: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
};


