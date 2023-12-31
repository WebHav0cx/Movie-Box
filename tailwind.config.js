/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans"],
        sans: ["Poppins", "sans"],
      },
      minWidth: {
        350: "350px",
      },
    },
  },
  plugins: [],
};
