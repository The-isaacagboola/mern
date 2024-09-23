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
        deep: "#0c0f6e",
        light: "#272953",
        lighest: "#babefd",
      },
    },
  },
  plugins: [],
};
