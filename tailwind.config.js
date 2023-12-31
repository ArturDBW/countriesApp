/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "#2b3945",
        veryDarkBlue: "#202c37",
      },
    },
  },
  plugins: [],
};
