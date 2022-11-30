/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        could1: "could1 80s infinite ",
        could2: "could2 8s infinite ",
        could3: "could3 80s infinite ",
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
            transform: "translate(120vw,-8vh)",
          },
          "100%": {
            transform: "translate(125vw, 1vh)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
