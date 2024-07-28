/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alternative': ['Montserrat Alternates', 'sans-serif'],
        'primary': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'light-green': '#5CB85C',
        'dark-green': '#479047',
        'light': '#F4FBF3',
      },
      backgroundColor: {
        'primary': '#F4FBF3',
        'secondary': '',
        'caption': '#3E4A3D',
      },
      textColor: {
        'header': '#002100',
        'text': '#3E4A3D',
        'navbar': '#F4FBF3',
        'caption': '#F4FBF3',
        'light-header': '#F4FBF3',
        'light-text': '#D2D2BF',
      },
      width: {
        '272': '68rem',
        'hero-image': '250rem',
      },
    },
  },
  plugins: [],
}
