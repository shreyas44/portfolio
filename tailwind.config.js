module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        content: "fit-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
