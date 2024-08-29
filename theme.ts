import { createTheme } from '@mui/material/styles';

// Create a theme with custom typography and font settings
const theme = createTheme({
  palette: {
    primary: {
      main: '#07663b',  // Tailwind primary color
    },
    secondary: {
      main: '#FFCD05',  // Tailwind secondary yellow
    },
    background: {
      default: '#F9F9F9',  // Tailwind primary background color
    },
    text: {
      primary: '#2E2E2E',  // Tailwind dark neutral
      secondary: '#4F4F4F',  // Tailwind medium dark neutral
    },
    success: {
      main: '#4CAF74',  // Tailwind success color
    },
    error: {
      main: '#FF5252',  // Tailwind error color
    },
    warning: {
      main: '#FFCD05',  // Tailwind warning color
    },
    info: {
      main: '#7DBBFA',  // Tailwind info color
    },
  },
  typography: {
    fontFamily: [
      'Open Sans', 'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontSize: '2.5rem',  // You can adjust these values as needed
      fontWeight: 900,
      color: '#2E2E2E',  // Tailwind dark neutral
    },
    h2: {
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontSize: '2rem',
      fontWeight: 900,
      color: '#2E2E2E',  // Tailwind dark neutral
    },
    h3: {
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 900,
      color: '#2E2E2E',  // Tailwind dark neutral
    },
    h4: {
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 900,
      color: '#F4F4F4',  // Tailwind light neutral
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      color: '#4F4F4F',  // Tailwind medium dark neutral
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      color: '#4F4F4F',  // Tailwind medium dark neutral
    },
    button: {
      fontFamily: 'Open Sans, sans-serif',
    },
    // Additional typography styles
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',  // Tailwind default border radius
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',  // Tailwind card shadow
          '&:hover': {
            backgroundColor: '#4CAF74',  // Tailwind success color for hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',  // Tailwind card shadow
          borderRadius: '8px',  // Tailwind default border radius
        },
      },
    },
    // Customize other MUI components as needed
  },
});

export default theme;
