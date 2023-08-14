/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutrals: {
          900: "#7492AC",
        },
        primary: {
          1: "#EC6839",
        },
        secondary: {
          2: "#112E47",
        },
      },
    },
  },
  plugins: [],
};
