/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Blue-ext": "hsl(223, 87%, 63%)",
        "Pale-Blue": "hsl(223, 100%, 88%)",
        "Light-Red": "hsl(354, 100%, 66%)",
        "Gray-ext": "hsl(0, 0%, 59%)",
        "Very-Dark-Blue": "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        "Libre-Franklin": ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
