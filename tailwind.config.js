/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'borel': ["Borel", "serif"],
        'work-sans': ['"Work Sans"', "serif"]
      }
    },
  },
  plugins: [],
}

