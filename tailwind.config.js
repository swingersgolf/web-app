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
        'dark': '#002100',
        'primary': '#f6f9fc',
        'caption': '#3E4A3D',
        'alert': '#D70040',
      },
      textColor: {
        'header': '#002100',
        'text': '#3E4A3D',
        'caption': '#F4FBF3',
        'light-header': '#F4FBF3',
        'light-text': '#E5E4E2',
      },
      width: {
        'page-mobile': '20rem',
        'page-md': '46rem',
        'page-lg': '68rem',
        'form-card-lg': '34rem',
        'form-card-md': '28rem',
        'form-card-mobile': '20rem',
        'hero-image': '250rem',
        'page-2xl': '1440px',
        'page-lg': '880px',
        'page-md': '80vw',
        'page-default': '90vw',
      },
      height: {

      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
    },
  },
  plugins: [],
}
