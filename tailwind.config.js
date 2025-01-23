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
      },
      backgroundImage: theme => ({
        'noise-layer': "url('./assets/noiselayer.png')"
      }),
      animation: {
        "slow-spin": 'spin 10s linear infinite'
      }
    },
  },
  plugins: [],
}

