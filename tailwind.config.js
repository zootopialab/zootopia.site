const colors = require('./src/styles/colors.js')

module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/layout/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        width: {
          sm: '384px',
          md: '448px',
          lg: '512px',
          xl: '576px',
          '2xl': '672px',
          '3xl': '768px',
          '4xl': '896px',
        },
        colors,
        fontFamily: {
          spoqa: ['pretendard', 'sans-serif'],
        },
        animation: {
          fade: 'fadeOut 5s ease-in-out',
        },
        keyframes: (theme) => ({
          fadeOut: {
            '0%': { opacity: 100 },
            '100%': { opacity: 0 },
          },
        }),
      },
    },
    plugins: [require('@tailwindcss/forms')],
  }
  