const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FBD784",
          '600': "#FFA343",
          '500': "#FFC178",
          '400': "#FFD1A0",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
