const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "toast-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "toast-in-left": "toast-in-left 0.25s",
      },
      transitionProperty: {
        toast: "transform, opacity, box-shadow",
      },
      transitionDuration: {
        toast: "0.25s",
      },
    },
  },
  plugins: [
    heroui({
      prefix: "gp",
    }),
  ],
};
