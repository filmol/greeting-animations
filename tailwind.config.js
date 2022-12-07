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
        pinging: `pinging 1s infinite`,
        bike: `bike 10s linear infinite`,
        mobileBiker: 'mobileBiker 9s linear infinite',
        slowerBike: `bike 35s linear infinite`,
        bikeScale: 'bikeScale 20s infinite',
        cloud1: 'cloud1 10s infinite ',
        cloud2: 'cloud2 15s infinite ',
        cloud3: 'cloud3 30s infinite ',
        cloud4: 'cloud4 15s infinite ',
        moon: 'moon 110s infinite ',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        pinging: {
          "0%": {
            opacity: 100,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
        bike: {
          '0%': {
            transform: 'translate(0vw, 0vh)',
          },
          '100%': {
            transform: 'translate(150vw, -18vw)',
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
        mobileBiker: {
          '0%': {
            transform: 'translate(-15vw, 0vh)',
          },
          '100%': {
            transform: 'translate(100vw, -5vh)',
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
            transform: 'translate(10vw,0vh)',
          },
          '75%': {
            transform: 'translate(-18vw,-4vh)',
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
