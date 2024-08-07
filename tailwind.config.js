/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      amiri: ["Amiri", "sans-serif"],
      greatVibes: ["Great Vibes", "sans-serif"]
    }
  },
  plugins: [],
}