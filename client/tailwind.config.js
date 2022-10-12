/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  fontFamily: {},
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
