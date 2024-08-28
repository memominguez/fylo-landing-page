/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "vd-blue": "#040939",
        "desat-blue": "#585989",
        "br-blue": "#3065f8",
        "mod-cyan": "#3c9f8f",
        "lt-gr-blue": "#f6f6fe",
        "lt-gray": "#bfbfbf",
      },
    },
  },
  plugins: [],
};
