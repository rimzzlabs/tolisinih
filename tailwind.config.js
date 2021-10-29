module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class' or false to turn off dark mode
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        forbg: {
          500: '#F4F4F4',
        },
        primary: {
          500: '#16ABF8',
        },
        fontColor: {
          900: '#111111',
          800: '#C4C4C4',
        },
        indicator: {
          red: '#ED4C5C',
          yellow: '#FFCE31',
          green: '#00A790',
          blue: '#428bc1',
          purple: '#8942c1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
