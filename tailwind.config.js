const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "900": "#282A37",
          "800": "#353A4A",
        },
        green: {
          ...colors.green,
          "400": "#00BB94",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
