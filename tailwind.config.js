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
      },
      textColor: {
        'header': '#002100',
        'text': '#3E4A3D',
        'caption': '#F4FBF3',
        'light-header': '#F4FBF3',
        'light-text': '#E5E4E2',
        'alert': '#D70040',
      },
      width: {
        '272': '68rem',
        'form-card': '34rem',
        'hero-image': '250rem',
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
