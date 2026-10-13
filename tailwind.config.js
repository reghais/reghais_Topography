/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        academic: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#e1cdb5',
          300: '#c7a380',
          400: '#aa7a53',
          500: '#8c593b',
          600: '#73432d',
          700: '#5a3123',
          800: '#43231a',
          900: '#2d1611',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
