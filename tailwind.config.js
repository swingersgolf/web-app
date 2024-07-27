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
      backgroundColor: {
        'primary': '#f6f9fc',
        'secondary': '',
        'caption': '#3E4A3D',
      },
      textColor: {
        'header': '#002100',
        'text': '#3E4A3D',
        'navbar': '#F4FBF3',
        'caption': '#F4FBF3',
      },
      width: {
        '272': '68rem',
        'hero-image': '250rem',
      },
    },
  },
  plugins: [],
}
