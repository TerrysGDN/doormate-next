/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#363557',
        'brand-gold': '#efb627',
      },
      fontFamily: {
        sans: ["'Franklin Gothic Demi'", "'Libre Franklin'", 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}
