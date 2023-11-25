/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F19679",
        buddy: "#51A995",
      },
      borderColor: {
        primary: "#F19679",
        buddy: "#51A995",
      },
    },
  },
  plugins: [],
};
