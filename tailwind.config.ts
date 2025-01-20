import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'accent': ['Montserrat Alternates', 'sans-serif'],
        'default': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#07663b',  // Main/Logo Color
          light: '#4CAF74',    // Lighter Shade for success or highlights
          dark: '#044929',     // Darker Shade for headers, primary text
        },
        neutral: {
          light: '#F4F4F4',    // Light Neutral for backgrounds, light text
          medium: '#D3D3D3',   // Medium Neutral for body text, borders
          dark: '#2E2E2E',     // Dark Neutral for primary text, dark backgrounds
        },
        secondary: {
          yellow: '#FFCD05',   // Orange for 
          blue: '#7DBBFA',     // Blue for 
        },
        background: {
          primary: '#F9F9F9',  // Primary Background Color for main sections
          secondary: '#E0E0E0',// Secondary Background Color for cards, secondary sections
        },
        alert: {
          success: '#4CAF74',  // Success Messages - Green (primary light)
          error: '#FF5252',    // Error Messages - Red
          warning: '#FFCD05',  // Warning Messages - Orange (secondary orange)
          info: '#7DBBFA',     // Information Messages - Blue (secondary blue)
        },
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
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
