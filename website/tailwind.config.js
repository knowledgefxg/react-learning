/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // React 官网风格配色
        background: '#23272f', // React Dark Background
        sidebar: '#191b21',    // Slightly darker for sidebar
        card: '#343a46',       // Card background
        'card-hover': '#3e4554', // Lighter on hover
        primary: '#61dafb',    // React Blue
        secondary: '#149eca',  // Darker Blue
        text: '#f6f7f9',       // Main text
        'text-muted': '#99a1b3', // Muted text
      },
      fontFamily: {
        sans: [
          '"Inter"', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'Oxygen', 
          'Ubuntu', 
          'Cantarell', 
          '"Fira Sans"', 
          '"Droid Sans"', 
          '"Helvetica Neue"', 
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
}
