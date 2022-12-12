/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Montserrat", "Calibri", "sans-serif"],
    },
    extend: {
      animation: {
        pinging: `pinging 1s infinite`,
        plane: `plane 48s infinite`,
        mobilePlane: `mobilePlane 40s infinite`,
        bike: `bike 10s linear infinite`,
        bike1: `bike1 10s linear infinite`,
        mobileBiker: "mobileBiker 9s linear infinite",
        slowerBike: `bike 35s linear infinite`,
        slowerBike1: `bike1 35s linear infinite`,
        bikeScale: "bikeScale 20s infinite",
        cloud1: "cloud1 30s infinite ",
        cloud2: "cloud2 30s infinite ",
        cloud3: "cloud3 45s infinite ",
        cloud4: "cloud4 32s infinite ",
        cloud5: "cloud5 32s infinite ",
        moon: "moon 40s infinite ",
        "spin-slow": "spin 5s linear infinite",
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
        plane: {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "100%": {
            transform: "translate(-120vw, 0vw)",
          },
        },
        mobilePlane: {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "100%": {
            transform: "translate(-180vw, 0vw)",
          },
        },
        bike: {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "100%": {
            transform: "translate(150vw, -18vw)",
          },
        },
        bike1: {
          "0%": {
            transform: "translate(-10vw, 5vh)",
          },
          "100%": {
            transform: "translate(150vw, -20vw)",
          },
        },
        bikeScale: {
          "0%": {
            scale: "1.0",
          },
          "100%": {
            scale: "0.1",
          },
        },
        mobileBiker: {
          "0%": {
            transform: "translate(-15vw, 0vh)",
          },
          "100%": {
            transform: "translate(100vw, -5vh)",
          },
        },
        cloud1: {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "50%": {
            transform: "translate(-2vw, 0vh)",
          },

          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        cloud2: {
          "0%": {
            transform: "translate(0vw, -2vh)",
          },
          "50%": {
            transform: "translate(3vw, -3vh)",
          },
          "100%": {
            transform: "translate(0vw, -2vh)",
          },
        },
        cloud3: {
          "0%": {
            transform: "translate(0vw,0vh)",
          },
          "25%": {
            transform: "translate(3vw,0vh)",
          },
          "75%": {
            transform: "translate(-3vw,-1vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        cloud4: {
          "0%": {
            transform: "translate(0vw,0vh)",
          },
          "50%": {
            transform: "translate(-10vw,2vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        cloud5: {
          "0%": {
            transform: "translate(0vw,0vh)",
          },
          "50%": {
            transform: "translate(-2vw,0vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        moon: {
          "0%": {
            transform: "translate(0vw,0vh)",
          },
          "50%": {
            transform: "translate(2vw,0vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
      },
    },
  },
  plugins: [],
};
