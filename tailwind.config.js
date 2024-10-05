/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.jsx',
    './src/**/*.json',
    './templates/**/*.html',
    './includes/templates/**/*.php',
    './parts/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

