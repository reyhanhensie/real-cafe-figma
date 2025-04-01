/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.jsx", // Add this for React components
    ],
    theme: {
      extend: {
        colors: {
          'espresso': '#4B2B1F',
          'latte': '#F9F5F0',
          'cappuccino': '#D2B48C',
          'caramel': '#E3963E',
          'mocha': '#3E2723',
        },
        fontFamily: {
          'coffee': ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Optional for form styling
    ],
  }