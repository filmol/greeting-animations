/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        could1: "could1 100s infinite ",
        could2: "could2 60s infinite ",
        could3: "could3 120s infinite ",
      },
      keyframes: {
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
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
};
