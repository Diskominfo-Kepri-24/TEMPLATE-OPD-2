/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#16A75C",
        "second-color": "#19B068",
        "primary-button": "#16A75C",
        "primary-text": "#ffffff",
        "second-button": "#DCFCE7",
        "second-text": "#4ABA73",
        "third-text": "#DCFCE7",
        "all-first": "#1F2937",
        "all-second": "#4B5563",
        "all-third": "#8D939D ",
      },
    },
  },
  plugins: [require("daisyui")],
};
