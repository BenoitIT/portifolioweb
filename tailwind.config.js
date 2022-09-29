/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    screens:{
    'sm': '376px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
