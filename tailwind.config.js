/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightBlack:'#1F252e',
        gray:'#a2a2a2',
        white:'#ffffff',
        paleGray:'#f6f6f6',
        regularBlack:'#22262a',
        lightBlue:'#4984d6',
        lightGray:'#efefeF',
      }
    },
  },
  plugins: [],
}
