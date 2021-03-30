const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: colors.green,
        emarald: colors.emerald,
      },
      width: {
        content: "fit-content",
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
      borderWidth: ["hover"],
      borderColor: ["hover"],
      display: ["before", "after"],
    },
  },
  plugins: [require("tailwind-pseudo-elements")],
}
