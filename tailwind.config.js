module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '600':'600px',
        '450':'450px'
      },
      boxShadow: {
        'messageShadow':'0px 1px 4px 1px gray'
      },
      screens: {
        'mobile': {'max' : '500px'}
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
