/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bike: 'bike 12s linear infinite',
        bikeScale: 'bikeScale 10s infinite',
        cloud1: 'cloud1 20s infinite ',
        cloud2: 'cloud2 69s infinite ',
        cloud3: 'cloud3 100s infinite ',
        cloud4: 'cloud4 90s infinite ',
        moon: 'moon 110s infinite ',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        bike: {
          '0%': {
            transform: 'translate(0vw, 0vh)',
          },
          '100%': {
            transform: 'translate(100vw, -20vh)',
          },
        },
        bikeScale: {
          '0%': {
            scale: '1.0',
          },
          '100%': {
            scale: '0.1',
          },
        },
        cloud1: {
          '0%': {
            transform: 'translate(0vw, 0vh)',
          },
          '50%': {
            transform: 'translate(-2vw, 0vh)',
          },

          '100%': {
            transform: 'translate(0vw, 0vh)',
          },
        },
        cloud2: {
          '0%': {
            transform: 'translate(0vw, -4vh)',
          },
          '50%': {
            transform: 'translate(6vw, -5vh)',
          },
          '100%': {
            transform: 'translate(0vw, -4vh)',
          },
        },
        cloud3: {
          '0%': {
            transform: 'translate(0vw,0vh)',
          },
          '25%': {
            transform: 'translate(2vw,0vh)',
          },
          '75%': {
            transform: 'translate(-6vw,-2vh)',
          },
          '100%': {
            transform: 'translate(0vw, 0vh)',
          },
        },
        cloud4: {
          '0%': {
            transform: 'translate(0vw,0vh)',
          },
          '50%': {
            transform: 'translate(-10vw,2vh)',
          },
          '100%': {
            transform: 'translate(0vw, 0vh)',
          },
        },
        moon: {
          '0%': {
            transform: 'translate(2vw,0vh)',
          },
          '50%': {
            transform: 'translate(6vw,2vh)',
          },
          '100%': {
            transform: 'translate(2vw, 0vh)',
          },
        },
      },
    },
  },
  plugins: [],
}
