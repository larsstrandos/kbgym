module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        'dark-grey': "#181a1b",
        'ligth-grey': "#1b1f23",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
