// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Modernist",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      stone: colors.stone,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      // green: colors.green,
      green: colors.emerald,
      blue: colors.blue,
      sky: colors.sky,
      lime: colors.lime,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
      // purple: colors.purple,
      purple: colors.violet,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
