/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-2': 'bounce 1.5s infinite ',
        'bounce-3': 'bounce 2s infinite',
        'bounce-4': 'bounce 0.5s infinite'
      }
    },
  },
  plugins: [],
}