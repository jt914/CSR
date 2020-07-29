module.exports = {
  purge: [],
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
    },
    extend: {
      colors: {},
      maxWidth: {
        '7xl': '84rem;',
      },
      borderRadius: {
        xl: '1em',
      },
    },
  },
  variants: {
    filter: ['hover'],
  },
  plugins: [require('tailwindcss-filters')],
}
