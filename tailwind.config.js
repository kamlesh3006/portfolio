/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#121212',
        textPrimary: '#F5F5F5',
        accent: '#A367B1',
        moonGlow: '#F5F3CE',
        glassSurface: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['"Bebas Neue"', 'sans-serif'],
        serif: ['Lora', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}