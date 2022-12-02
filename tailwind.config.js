/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bike: "bike 8s linear infinite",
        could1: "could1 20s infinite ",
        could2: "could2 60s infinite ",
        could3: "could3 120s infinite ",
        could4: "could4 120s infinite ",
        moon: "moon 120s infinite ",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        bike: {
          "0%": {
            transform: "translate(-0vw, -4vh)",
            scale: "1",
          },
          "100%": {
            transform: "translate(110vw, -35vh)",
            scale: "0.9",
          },
        },
        could1: {
          "0%": {
            transform: "translate(-18vw, 40px)",
          },
          "50%": {
            transform: "translate(80vw, 150px)",
          },

          "100%": {
            transform: "translate(102vw, 50px)",
          },
        },
        could2: {
          "0%": {
            transform: "translate(-4vw, -8vh)",
          },
          "50%": {
            transform: "translate(3vw, 5vh)",
          },
          "75%": {
            transform: "translate(2vw, 4vh)",
          },
          "100%": {
            transform: "translate(-4vw, -8vh)",
          },
        },
        could3: {
          "0%": {
            transform: "translate(-4vw,8vh)",
          },
          "50%": {
            transform: "translate(87vw,-8vh)",
          },
          "100%": {
            transform: "translate(102vw, 4vh)",
          },
        },
        could4: {
          "0%": {
            transform: "translate(-4vw,8vh)",
          },
          "50%": {
            transform: "translate(87vw,-8vh)",
          },
          "100%": {
            transform: "translate(102vw, 4vh)",
          },
        },
        moon: {
          "0%": {
            transform: "translate(45vw,12vh)",
          },
          "50%": {
            transform: "translate(47vw,5vh)",
          },
          "100%": {
            transform: "translate(45vw, 12vh)",
          },
        },
      },
    },
  },
  plugins: [],
};
