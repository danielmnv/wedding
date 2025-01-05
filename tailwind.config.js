/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '690px',
        lg: '728px',
        xl: '984px',
        '2xl': '1080px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        // https://mx.pinterest.com/pin/564216659586568993/
        wedding: {
          primary: '#e7d7c9',
          'primary-content': '#13110f',
          secondary: '#cdc6c3',
          'secondary-content': '#0f0e0e',
          accent: '#a38f85',
          'accent-content': '#0a0706',
          neutral: '#ede9e3',
          'neutral-content': '#141312',
          'base-100': '#f5f5f5',
          'base-200': '#d5d5d5',
          'base-300': '#b6b6b6',
          'base-content': '#151515',
          error: '#ff6a6f',
          'error-content': '#160404',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
