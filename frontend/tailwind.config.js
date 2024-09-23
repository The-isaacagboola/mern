/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
        inter: ["Inter", "system-ui"],
      },
      colors: {
        deep: "#030426f2",
        light: "#272953",
        lightest: "#ddddddc4",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
