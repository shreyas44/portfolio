module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: ["Open Sans", "sans-serif"],
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      borderWidth: ["hover"],
      borderStyle: ["hover"],
      borderColor: ["hover"],
    },
  },
  plugins: [],
}
