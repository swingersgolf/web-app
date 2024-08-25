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
        // primary: {
        //   DEFAULT: '#07663b',  // Main/Logo Color
        //   light: '#4CAF74',    // Lighter Shade for success or highlights
        //   dark: '#044929',     // Darker Shade for headers, primary text
        // },
        // neutral: {
        //   light: '#F4F4F4',    // Light Neutral for backgrounds, light text
        //   medium: '#8A8A8A',   // Medium Neutral for body text, borders
        //   dark: '#2E2E2E',     // Dark Neutral for primary text, dark backgrounds
        // },
        // secondary: {
        //   orange: '#FFA726',   // Orange for warnings, caution
        //   blue: '#0288D1',     // Blue for informational messages, links
        // },
        // background: {
        //   primary: '#F9F9F9',  // Primary Background Color for main sections
        //   secondary: '#E0E0E0',// Secondary Background Color for cards, secondary sections
        // },
        // alert: {
        //   success: '#4CAF74',  // Success Messages - Green (primary light)
        //   error: '#FF5252',    // Error Messages - Red
        //   warning: '#FFA726',  // Warning Messages - Orange (secondary orange)
        //   info: '#0288D1',     // Information Messages - Blue (secondary blue)
        // },
        'light-green': '#4CAF74',
        'dark-green': '#07663b',
        'light': '#F4FBF3',
        'dark': '#002100',
        'primary': '#f6f9fc',
        'caption': '#3E4A3D',
        'alert': '#924218',
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
