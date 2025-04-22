/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",
        secondary: "#F0F0F0",
        success: "#90BE6D",
        danger: "#F94144",
        background: "#FFFFFF"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem'
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-success',
    'text-success',
    'bg-danger',
    'text-danger',
    {
      pattern: /bg-(primary|success|danger)\/\d+/,
    },
  ]
}