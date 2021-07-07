module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightGray: '#999999',
      },
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        arrow: "url('assets/arrowRight.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
