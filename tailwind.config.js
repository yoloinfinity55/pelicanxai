/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./themes/custom/templates/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
